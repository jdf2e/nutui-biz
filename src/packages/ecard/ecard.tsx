import React, {
  ChangeEvent,
  CSSProperties,
  FunctionComponent,
  useMemo,
  useState,
} from "react";
import { useConfig } from "@/packages/configprovider";

import bem from "@/utils/bem";
import { InputNumber } from "@nutui/nutui-react";

interface IDataList {
  price: number;
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
  modelValue: number;
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
  modelValue: 0,
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
    modelValue,
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(modelValue);
  const [customValue, setCustomValue] = useState<number | string>("");
  const [cardAmount, setCardAmount] = useState(cardAmountMin);

  const totalPrice = useMemo(() => {
    if (!currentValue && !customValue) return 0
    if (currentIndex >= 0 && cardAmount && currentValue) return Number(currentValue) * Number(cardAmount)
    if (customValue && currentIndex === -1 && cardAmount) return Number(customValue) * Number(cardAmount)
    return 0
  }, [currentIndex, currentValue, cardAmount, customValue])
  
  const handleClick = (item: { price: number }, index: number) => {
    setCurrentIndex(index)
    setCurrentValue(item.price)
    setCustomValue('')
    onChange && onChange(item);
  };

  const handleInputClick = () => {
    setCurrentIndex(-1)
  };

  const handleChangeInput = (event: Event) => {
    console.log({ cardAmountMax, cardAmountMin })
    const inputEle = event.target as HTMLInputElement;
    let inputValueCache = +inputEle.value.replace(/[^\d]/g, "");
    if (inputValueCache > cardAmountMax) {
      inputValueCache = cardAmountMax;
    } else if (inputValueCache < cardAmountMin) {
      inputValueCache = cardAmountMin;
    }
    setCustomValue(inputValueCache)
    onChangeInput && onChangeInput(inputValueCache);
  };

  const handleChangeStep = (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    setCardAmount(Number(param))
    onChangeStep && onChangeStep(+param, currentValue as any);
  };

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={b("title")}>{chooseText || locale.ecard.chooseText}</div>
      <div className={b("list")}>
        <>
          {dataList.map((item, index) => {
            return (
              <div
                className={`${b("list__item")} ${currentIndex === index ? "active" : ""
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
            className={`${b("list__input")} ${currentIndex === -1 ? "active" : ""
              }`}
            onClick={() => {
              handleInputClick();
            }}
          >
            <div>{otherValueText || locale.ecard.otherValueText}</div>
            <div className={b("list__input--con")}>
              <input
                className={b("list__input--input")}
                type="number"
                value={customValue}
                onChange={(e: any) => {
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
              {totalPrice}
            </div>
            <InputNumber
              modelValue={cardAmount}
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
