import React, {
  ChangeEvent,
  CSSProperties,
  FunctionComponent,
  useState,
} from "react";

import { InputNumber } from "@nutui/nutui-react-taro";
import bem from "@/utils/bem";
import { useConfig } from "@/packages/configprovider/configprovider.taro";

interface IDataList {
  price: number;
}
interface IState {
  currentIndex: number;
  currentValue: number;
  inputValue: number | string;
  stepValue: number;
  moneyValue: number | string;
}
export interface EcardProps {
  className?: string;
  style?: CSSProperties;
  chooseText: string;
  suffix: string;
  otherValueText: string;
  dataList: Array<IDataList>;
  cardAmountMin: number;
  cardAmountMax: number;
  cardBuyMin: number;
  cardBuyMax: number;
  money: number;
  placeholder: string;
  onChange?: (item: IDataList) => void;
  onChangeInput?: (val: number) => void;
  onChangeStep?: (num: number, price: number) => void;
}

const defaultProps = {
  className: "",
  chooseText: "",
  suffix: "¥",
  otherValueText: "",
  dataList: [],
  cardAmountMin: 1,
  cardAmountMax: 9999,
  cardBuyMin: 1,
  cardBuyMax: 9999,
  money: 0,
  placeholder: "",
} as EcardProps;

export const Ecard: FunctionComponent<
  Partial<EcardProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    className,
    chooseText,
    suffix,
    otherValueText,
    dataList,
    cardAmountMin,
    cardAmountMax,
    cardBuyMin,
    cardBuyMax,
    money,
    placeholder,
    onChange,
    onChangeInput,
    onChangeStep,

    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("ecard");

  const [state, setState] = useState<IState>({
    currentIndex: -2,
    currentValue: money,
    inputValue: "",
    stepValue: cardAmountMin,
    moneyValue: money,
  });

  const handleClick = (item: { price: number }, index: number) => {
    setState((stateOld) => {
      return {
        ...stateOld,
        ...{
          currentIndex: index,
          currentValue: item.price,
          stepValue: cardAmountMin,
          moneyValue: item.price * cardAmountMin,
        },
      };
    });
    onChange && onChange(item);
  };

  const handleClickInput = () => {
    setState((stateOld) => {
      return {
        ...stateOld,
        ...{
          currentIndex: -1,
          currentValue: stateOld.inputValue ? +stateOld.inputValue : 0,
          stepValue: cardAmountMin,
          moneyValue: stateOld.inputValue
            ? +stateOld.inputValue * cardAmountMin
            : "",
        },
      };
    });
  };

  const handleChangeInput = (event: Event) => {
    const inputEle = event.target as HTMLInputElement;
    let inputValueCache = +inputEle.value.replace(/[^\d]/g, "");
    if (inputValueCache > cardAmountMax) {
      inputValueCache = cardAmountMax;
    } else if (inputValueCache < cardAmountMin) {
      inputValueCache = cardAmountMin;
    }
    setState((stateOld) => {
      return {
        ...stateOld,
        ...{
          currentValue: inputValueCache,
          inputValue: inputValueCache,
          moneyValue: inputValueCache * stateOld.stepValue,
        },
      };
    });
    onChangeInput && onChangeInput(inputValueCache);
  };

  const handleChangeStep = (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    setState((stateOld) => {
      return {
        ...stateOld,
        ...{
          stepValue: +param,
          moneyValue: stateOld.currentValue * +param,
        },
      };
    });
    onChangeStep && onChangeStep(+param, state.currentValue as number);
  };

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={b("title")}>{chooseText || locale.ecard.chooseText}</div>
      <div className={b("list")}>
        <>
          {dataList.map((item, index) => {
            return (
              <div
                className={`${b("list__item")} ${
                  state.currentIndex === index ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  handleClick(item, index);
                }}
              >
                {item.price}
              </div>
            );
          })}
          <div
            className={`${b("list__input")} ${
              state.currentIndex === -1 ? "active" : ""
            }`}
            onClick={() => {
              handleClickInput();
            }}
          >
            <div>{otherValueText || locale.ecard.otherValueText}</div>
            <div className={b("list__input--con")}>
              {/* <Input
                className={b("list__input--input")}
                type="number"
                inputAlign="right"
                border={false}
                defaultValue={state.inputValue}
                onChange={handleChangeInput}
                placeholder={placeholder || locale.ecard.placeholder}
              /> */}
              <input
                className={b("list__input--input")}
                type="number"
                value={state.inputValue}
                onInput={(e: any) => {
                  handleChangeInput(e);
                }}
                placeholder={placeholder || locale.ecard.placeholder}
              />
              {suffix}
            </div>
          </div>
          <div className={b("list__step")}>
            <div className={b("list__step--price")}>
              {suffix}
              {state.moneyValue}
            </div>
            <InputNumber
              modelValue={state.stepValue}
              min={cardBuyMin}
              max={cardBuyMax}
              onChangeFuc={handleChangeStep}
            />
          </div>
        </>
      </div>
    </div>
  );
};

Ecard.defaultProps = defaultProps;
Ecard.displayName = "NutEcard";
