import React, { FunctionComponent, useEffect, ReactNode } from "react";
import { IComponent } from "@/utils/typings";
import { Button, ButtonProps } from "@nutui/nutui-react";
import { throttle } from "@/utils/throttle";
import bem from "@/utils/bem";

export interface ICouponType {
  price: number; //优惠券价格或者折扣价
  currency: string; //货币符号
  mainTitle: string; //主标题
  subTitle: string; //副标题
  timeRange?: string; //优惠券使用时间范围
  label: string; //优惠券左上角的标签内容
}

export type CouponType = "large" | "small";
export type IPricePosition = "front" | "back";

export interface CouponProps extends IComponent {
  type: CouponType; //优惠券的尺寸
  couponMarginRight: number; //每张优惠券的margin右边距
  couponMarginBottom: number; //每张优惠券的margin下边距
  couponWidth: string; //每张优惠券的宽度 30px 或者 30%
  couponHeight: string; //每张优惠券的高度
  couponMainWidth: string; //优惠券左侧的宽度10px或者10%
  couponMainColor: string; //优惠券左侧的文字颜色
  couponBgImg: string; //优惠券的背景图
  pricePosition: IPricePosition; //价格和标签的前后位置
  coupon: ICouponType; //渲染优惠券内容
  btnText: string; //按钮文案
  isReceived: boolean; //是否领取
  receivedBtnText: string; //领取后的按钮文案
  className: string;
  buttonProps: Partial<ButtonProps>; //按钮props
  usedIcon: ReactNode;
  onClick: any;
  itemData: any; //父组件传递过来的数据，用户函数参数返回
}
const couponObj = {
  price: 12,
  currency: "¥",
  mainTitle: "主标题内容",
  subTitle: "用于渲染副标题文案",
  timeRange: "2022.03.01-2022.04.01",
  label: "内购专享",
} as ICouponType;
const defaultProps = {
  type: "large",
  couponMarginRight: 0,
  couponMarginBottom: 0,
  couponWidth: "100%",
  couponHeight: "auto",
  couponMainWidth: "69%",
  couponMainColor: "#fff",
  couponBgImg:
    "https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png",
  pricePosition: "back",
  coupon: couponObj,
  btnText: "立即领取",
  isReceived: false,
  receivedBtnText: "已经领取",
} as CouponProps;

export const Coupon: FunctionComponent<
  Partial<CouponProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = React.memo((props) => {
  const {
    type,
    couponWidth,
    couponHeight,
    couponMarginRight,
    couponMarginBottom,
    couponMainWidth,
    couponMainColor,
    couponBgImg,
    pricePosition,
    coupon,
    btnText,
    isReceived,
    receivedBtnText,
    className,
    usedIcon,
    onClick,
    itemData,
    buttonProps,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("biz-coupon");
  const disabdb = bem("biz-dis-coupon");
  useEffect(() => {}, []);
  const renderPrice = () => {
    if (pricePosition === "front") {
      return (
        <div className={b("main-price")}>
          <div className={b("main-price--number")}>
            {coupon?.price.toString().substring(0, 5)}
          </div>
          <div className={b("main-price--currency")}>{coupon?.currency}</div>
        </div>
      );
    } else {
      return (
        <div className={b("main-price")}>
          <div className={b("main-price--currency")}>{coupon?.currency}</div>
          <div className={b("main-price--number")}>
            {coupon?.price.toString().substring(0, 5)}
          </div>
        </div>
      );
    }
  };
  const handleClick = throttle(() => {
    onClick && onClick(itemData);
  }, 300);
  return (
    <div
      className={`${b()} ${isReceived ? disabdb() : ""} ${className} `}
      {...rest}
    >
      <div
        className={b("box", { small: type === "small" })}
        style={{
          width: couponWidth,
          height: couponHeight,
          backgroundImage: `url(${couponBgImg})`,
          marginRight: `${couponMarginRight}px`,
          marginBottom: `${couponMarginBottom}px`,
        }}
      >
        <div
          className={b("main")}
          style={{ width: couponMainWidth, color: couponMainColor }}
        >
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
