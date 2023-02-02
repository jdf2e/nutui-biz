import React, { FunctionComponent, useEffect, CSSProperties } from "react";
import { useConfig } from "@/packages/configprovider";
import { IComponent } from "@/utils/typings";
import bem from "@/utils/bem";
import "./coupon.scss";

interface ICouponType {
  price: number; //优惠券价格或者折扣价
  currency: string; //货币符号
  mainTitle: string; //主标题
  subTitle: string; //副标题
  timeRange: string; //优惠券使用时间范围
  label: string; //优惠券左上角的标签内容
}
export interface CouponProps extends IComponent {
  columns: number; //每行有几个
  couponWidth: string; //每张优惠券的宽度 30px 或者 30%
  couponHeight: string; //每张优惠券的高度
  couponRightWidth: string; //优惠券右侧的宽度10px或者10%
  couponBgImg: string; //优惠券的背景图
  pricePosition: "front" | "back"; //价格和标签的前后位置
  coupon: ICouponType; //渲染优惠券内容
  btnText: string; //按钮文案
  btnStryle: CSSProperties; //按钮样式
  isReceived: boolean; //是否领取
  receivedBtnText: string; //领取后的按钮文案
  receivedBtnStryle: CSSProperties; //领取后的按钮样式
  className: string;
}
const couponObj = {
  price: 9,
  currency: "$",
  mainTitle: "满100元可用",
  subTitle: "仅可购买满折券测试商品",
  timeRange: "2022.03.01-2022.04.01",
  label: "内购专享",
} as ICouponType;
const defaultProps = {
  columns: 1,
  couponWidth: "100%",
  couponHeight: "90px",
  couponRightWidth: "110px",
  couponBgImg:
    "https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png",
  pricePosition: "front",
  coupon: couponObj,
  btnText: "立即领取",
  btnStryle: {
    color: "#fff",
    backgroundColor: "red",
  },
  isReceived: false,
  receivedBtnText: "已经领取",
  receivedBtnStryle: {
    color: "red",
    backgroundColor: "#fff",
  },
} as CouponProps;

export const Coupon: FunctionComponent<
  Partial<CouponProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    columns,
    couponWidth,
    couponHeight,
    couponRightWidth,
    couponBgImg,
    pricePosition,
    coupon,
    btnText,
    btnStryle,
    isReceived,
    receivedBtnText,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("biz-coupon");
  useEffect(() => {}, []);
  return (
    <div className={`${b()} ${className}`}>
      <div
        className={b("box")}
        style={{
          height: couponHeight,
          width: couponWidth,
          backgroundImage: `url(${couponBgImg})`,
        }}
      >
        <div className={b("main")}></div>
        <div className={b("btns")} style={{ width: couponRightWidth }}></div>
      </div>
    </div>
  );
};

Coupon.defaultProps = defaultProps;
Coupon.displayName = "NutCoupon";
