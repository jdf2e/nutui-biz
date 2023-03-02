import React, {
  ChangeEvent,
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from "react";
import { useConfig } from "@/packages/configprovider";
import { cn2 as nb } from "@/utils/bem";
import { InputNumber, InputNumberProps, Input, InputProps } from "@nutui/nutui-react";
import mathMethods from '@/utils/math'
const { accurateMultiply } = mathMethods
export interface DataListItem {
  price: number;
}

export interface EcardProps {
  className?: string;
  style?: CSSProperties;
  chooseText: ReactNode;
  suffix: string;
  otherValueText: ReactNode;
  dataList: Array<DataListItem>;
  cardAmountMin: number;
  cardAmountMax: number;
  inputNumberProps: Partial<InputNumberProps>;
  modelValue: number;
  placeholder: string;
  onChange?: (item: DataListItem) => void;
  onChangeInput?: (val: number) => void;
  onChangeStep?: (num: number, price: number) => void;
}

const defaultProps = {
  className: "",
  chooseText: "",
  suffix: "¥",
  otherValueText: "",
  dataList: [],
  inputNumberProps: {
    min: 1,
    max: 9999
  },
  cardAmountMin: 1,
  cardAmountMax: 9999,
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
    inputNumberProps,
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
  const b = nb("ecard");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(modelValue);
  const [customValue, setCustomValue] = useState<number | string>("");
  const [cardAmount, setCardAmount] = useState(cardAmountMin);

  const totalPrice = useMemo(() => {
    if (!currentValue && !customValue) return 0
    if (currentIndex >= 0 && cardAmount && currentValue) return accurateMultiply(currentValue, cardAmount)
    if (customValue && currentIndex === -1 && cardAmount) return accurateMultiply(customValue, cardAmount)
    return 0
  }, [currentIndex, currentValue, cardAmount, customValue])

  const handleClick = (item: DataListItem, index: number) => {
    setCurrentIndex(index)
    setCurrentValue(item.price)
    setCustomValue('')
    onChange && onChange(item);
  };

  const handleInputClick = () => {
    setCurrentIndex(-1)
  };

  //todo：手机上切换中英文限制处理。
  const handleChangeInput = (event: Event) => {
    console.log({ cardAmountMax, cardAmountMin })
    const inputEle = event.target as HTMLInputElement;
    let inputValueCache = +inputEle.value;
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
  ) => {
    setCardAmount(Number(param))
    onChangeStep && onChangeStep(+param, currentValue);
  };

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={b("title")}>{chooseText || locale.ecard.chooseText}</div>
      <div className={b("list")}>
        <>
          {dataList.map((item, index) => {
            return (
              <div
                className={`${b("list__item")} ${currentIndex === index && "active"
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
            className={`${b("list__input")} ${currentIndex === -1 && "active"
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
              {...inputNumberProps}
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
