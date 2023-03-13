import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useState,
  useRef,
  useEffect
} from "react";
import { useConfig } from "@/packages/configprovider";
import { cn2 as nb } from "@/utils/bem";
import { InputNumber, InputNumberProps } from "@nutui/nutui-react";
import mathMethods from '@/utils/math'
import classNames from 'classnames'
import { numericProp } from '@/utils/props'
const { accurateMultiply } = mathMethods
const b = nb("ecard");
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
  placeholder: string;
  rowNum?: number
  handleMoney?: (money: number) => any;
  onChange?: (item: DataListItem, money: number) => void;
  onChangeInput?: (val: number, money: number) => void;
  onChangeStep?: (num: number, price: number, money: number) => void;
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
  handleMoney: (money: number) => money,
  placeholder: '请输入1-9999整数',
  rowNum: 2
} as EcardProps;

export const Ecard: FunctionComponent<
  Partial<EcardProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    className,
    chooseText,
    suffix,
    otherValueText,
    dataList,
    cardAmountMin,
    cardAmountMax,
    inputNumberProps,
    placeholder,
    rowNum,
    onChange,
    onChangeInput,
    handleMoney,
    onChangeStep,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(dataList[0].price || 0); //当前非自定义面值
  const [customValue, setCustomValue] = useState<numericProp>("");
  const [cardAmount, setCardAmount] = useState(cardAmountMin);
  const [money, setMoney] = useState<number>(accurateMultiply(dataList[0].price, 1))
  const listItemWidth = rowNum ? Number((96 / rowNum).toFixed(0)) : 48
  const getTotalPrice = () => {
    let total = 0
    if (!currentPrice && !customValue) total = 0
    if (currentIndex >= 0 && cardAmount && currentPrice) total = accurateMultiply(currentPrice, cardAmount)
    if (customValue && currentIndex === -1 && cardAmount) total = accurateMultiply(customValue, cardAmount)
    return handleMoney ? handleMoney(total) : total
  }
  useEffect(() => {
    setMoney(getTotalPrice())
  }, [currentIndex, currentPrice, cardAmount, customValue])

  const handleClick = (item: DataListItem, index: number) => {
    const { price } = item
    setCurrentIndex(index)
    setCurrentPrice(price)
    setCustomValue('')
    onChange && onChange(item, handleMoney?.(accurateMultiply(price, cardAmount)));
  };

  const handleInputClick = () => {
    inputRef && inputRef.current && inputRef.current.focus()
    setCurrentIndex(-1)
  };

  const handleChangeInput = (value: any) => {
    let inputValueCache = (value.replace(/[^\d]/g, ""));
    if (inputValueCache > cardAmountMax) {
      inputValueCache = cardAmountMax;
    } else if (inputValueCache < cardAmountMin) {
      inputValueCache = cardAmountMin;
    }
    setCurrentPrice(0)
    setCustomValue(inputValueCache)
    onChangeInput && onChangeInput(inputValueCache, handleMoney?.(accurateMultiply(inputValueCache, cardAmount)));
  };

  const handleChangeStep = (
    param: numericProp,
  ) => {
    setCardAmount(Number(param))
    onChangeStep && onChangeStep(+param, currentPrice || Number(customValue), handleMoney?.(accurateMultiply(param, currentPrice || Number(customValue))));
  };

  return (
    <div className={classNames([b(), className])} {...rest}>
      <div className={b("title")}>{chooseText || locale.ecard.chooseText}</div>
      <div className={b("list")}>
        <>
          {dataList.map((item, index) => {
            return (
              <div
                className={classNames([b("list__item"), currentIndex === index && "active"])}
                style={{ width: `${listItemWidth}%` }}
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
            onClick={
              handleInputClick
            }
          >
            <div>{otherValueText || locale.ecard.otherValueText}</div>
            <div className={b("list__input--con")}>
              <input
                className={b("list__input--input")}
                type="number"
                ref={inputRef}
                value={customValue}
                onChange={(e: any) => {
                  handleChangeInput(e.target.value);
                }}
                placeholder={placeholder || locale.ecard.placeholder}
              />
              <span>{suffix}</span>
            </div>
          </div>
          <div className={b("list__step")}>
            <div className={b("list__step--price")}>
              {suffix}
              {money}
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
