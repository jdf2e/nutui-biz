import React, { FunctionComponent, ReactNode, CSSProperties } from "react";
import { IComponent } from "@/utils/typings";
import { Button, ButtonProps } from "@nutui/nutui-react";
import bem from "@/utils/bem";
import { numericProp } from "@/utils/props";
import classNames from "classnames";

export type ButtonPropsType = ButtonProps;
export interface ICouponType {
  price: numericProp; //优惠券价格或者折扣价
  currency: string; //货币符号
  mainTitle?: string; //主标题
  subTitle?: string; //副标题
  timeRange?: string; //优惠券使用时间范围
  label?: ReactNode; //优惠券左上角的标签内容
  [key: string]: any;
}

export type CouponType = "large" | "small";
export type IPricePosition = "front" | "back";

export interface CouponProps extends IComponent {
  type: CouponType; //优惠券的类型尺寸
  couponStyle: CSSProperties; //优惠券的样式
  couponMainStyle: CSSProperties; //优惠券主体的样式
  pricePosition: IPricePosition; //价格和标签的前后位置
  couponData: ICouponType; //渲染优惠券文案内容
  btnText: string; //按钮文案
  isReceived: boolean; //是否领取
  buttonProps: Partial<ButtonProps>; //按钮props
  usedIcon: ReactNode;
  onBtnClick?: (item: any) => void;
}

const defaultProps = {
  type: "large",
  pricePosition: "back",
  isReceived: false,
  btnText: "立即领取",
} as CouponProps;

export const Coupon: FunctionComponent<
  Partial<CouponProps> & React.HTMLAttributes<HTMLDivElement>
> = React.memo((props) => {
  const {
    type,
    style,
    couponStyle,
    couponMainStyle,
    pricePosition,
    couponData,
    btnText,
    isReceived,
    className,
    usedIcon,
    buttonProps,
    onBtnClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const b = bem("coupon");
  //价格
  const priceNumber = (price: number | string) => {
    return <div className={b("main-price--number")}>{handlePrice(price)}</div>;
  };
  //
  const handlePrice = (price: number | string) => {
    let newPrice = "";
    const strPrice = price.toString();
    if (strPrice.toString().includes(".")) {
      if (strPrice.split(".")[1].length > 2) {
        newPrice = Number(price).toFixed(2).toString().substring(0, 5);
      } else {
        newPrice = Number(price).toString().substring(0, 5);
      }
    } else {
      newPrice = Number(price).toString().substring(0, 5);
    }
    return newPrice;
  };
  //单位
  const priceCurrency = (currency: string) => {
    return <div className={b("main-price--currency")}>{currency}</div>;
  };
  const renderPrice = () => {
    return pricePosition === "front" ? (
      <div className={b("main-price")}>
        {priceNumber(couponData?.price)}
        {priceCurrency(couponData?.currency)}
      </div>
    ) : (
      <div className={b("main-price")}>
        {priceCurrency(couponData?.currency)}
        {priceNumber(couponData?.price)}
      </div>
    );
  };
  const handleClick = () => {
    onBtnClick?.(couponData);
  };
  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
      <div
        className={b("box", { small: type === "small" })}
        style={{
          ...couponStyle,
        }}
      >
        <div className={b("main")} style={{ ...couponMainStyle }}>
          {renderPrice()}
          <div className={b("main-content")}>
            <p className={b("main-content--maintitle")}>
              {couponData?.mainTitle}
            </p>
            <p className={b("main-content--subtitle")}>
              {couponData?.subTitle}
            </p>
            {couponData?.timeRange && (
              <p className={b("main-content--timerange")}>
                {couponData?.timeRange}
              </p>
            )}
          </div>

          {isReceived && usedIcon && (
            <div className={b("main-usedicon")}>{usedIcon}</div>
          )}
        </div>
        <div className={b("btns")}>
          {type === "small" ? (
            <div className={b("btns-vertcal")} onClick={handleClick}>
              {btnText}
            </div>
          ) : (
            <Button
              {...buttonProps}
              disabled={isReceived}
              onClick={handleClick}
            >
              {btnText}
            </Button>
          )}
        </div>
        {couponData?.label && (
          <div className={b("label")}>{couponData?.label}</div>
        )}
      </div>
    </div>
  );
});

Coupon.defaultProps = defaultProps;
Coupon.displayName = "NutCoupon";
