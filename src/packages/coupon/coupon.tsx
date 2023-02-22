import React, {
  FunctionComponent,
  useEffect,
  ReactNode,
  CSSProperties,
} from "react";
import { IComponent } from "@/utils/typings";
import { Button, ButtonProps } from "@nutui/nutui-react";
import bem from "@/utils/bem";

export type ButtonPropsType = ButtonProps;
export interface ICouponType {
  price: number | string; //优惠券价格或者折扣价
  currency: string; //货币符号
  mainTitle: string; //主标题
  subTitle: string; //副标题
  timeRange?: string; //优惠券使用时间范围
  label: string; //优惠券左上角的标签内容
}

export type CouponType = "large" | "small";
export type IPricePosition = "front" | "back";

export interface CouponProps extends IComponent {
  type: CouponType; //优惠券的类型尺寸
  couponStyle: CSSProperties; //优惠券的样式
  couponMainStyle: CSSProperties; //优惠券主体的样式
  pricePosition: IPricePosition; //价格和标签的前后位置
  coupon: ICouponType; //渲染优惠券文案内容
  btnText: string; //按钮文案
  isReceived: boolean; //是否领取
  receivedBtnText: string; //领取后的按钮文案
  className: string;
  buttonProps: Partial<ButtonProps>; //按钮props
  usedIcon: ReactNode;
  onBtnClick: (item: any) => void;
  itemData: any; //父组件传递过来的数据，用户函数参数返回
}

const defaultProps = {
  type: "large",
  pricePosition: "back",
  isReceived: false,
} as CouponProps;

export const Coupon: FunctionComponent<
  Partial<CouponProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = React.memo((props) => {
  const {
    type,
    couponStyle,
    couponMainStyle,
    pricePosition,
    coupon,
    btnText,
    isReceived,
    receivedBtnText,
    className,
    usedIcon,
    itemData,
    buttonProps,
    onBtnClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("biz-coupon");
  const disabdb = bem("biz-dis-coupon");
  const renderPrice = () => {
    return pricePosition === "front" ? (
      <div className={b("main-price")}>
        <div className={b("main-price--number")}>
          {Number(coupon?.price).toFixed(2).toString().substring(0, 5)}
        </div>
        <div className={b("main-price--currency")}>{coupon?.currency}</div>
      </div>
    ) : (
      <div className={b("main-price")}>
        <div className={b("main-price--currency")}>{coupon?.currency}</div>
        <div className={b("main-price--number")}>
          {Number(coupon?.price).toFixed(2).toString().substring(0, 5)}
        </div>
      </div>
    );
  };
  const handleClick = () => {
    onBtnClick && onBtnClick(itemData);
  };
  return (
    <div
      className={`${b()} ${isReceived ? disabdb() : ""} ${className} `}
      {...rest}
    >
      <div
        className={b("box", { small: type === "small" })}
        style={{
          ...couponStyle,
        }}
      >
        <div className={b("main")} style={{ ...couponMainStyle }}>
          {renderPrice()}
          <div className={b("main-content")}>
            <p className={b("main-content--maintitle")}>{coupon?.mainTitle}</p>
            <p className={b("main-content--subtitle")}>{coupon?.subTitle}</p>
            {coupon?.timeRange && (
              <p className={b("main-content--timerange")}>
                {coupon?.timeRange}
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
        {coupon?.label && <div className={b("label")}>{coupon?.label}</div>}
      </div>
    </div>
  );
});

Coupon.defaultProps = defaultProps;
Coupon.displayName = "NutCoupon";
