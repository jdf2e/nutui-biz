import React, { useState, CSSProperties } from "react";
import { Coupon } from "./coupon";
import { useTranslate } from "../../sites/assets/locale";
import { ButtonProps } from "@nutui/nutui-react";
interface T {
  basic: string;
  mulText: string;
  btnText: string;
  receivedBtnText: string;
  mainTitle: string;
  subTitle: string;
  label: string;
  mulDesc: string;
}

const CouponDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      mulText: "小卡片类型的优惠组件",
      btnText: "立即领取",
      receivedBtnText: "已领取",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      mulDesc: "多行优惠券，在组件外层包裹元素上设置样式",
    },
    "en-US": {
      basic: "Basic Usage",
      mulText: "Coupon components of small card type",
      btnText: "Get it now",
      receivedBtnText: "Received",
      mainTitle: "Main title content",
      subTitle: "Used to render subtitle text",
      label: "Exclusive for internal purchase",
      mulDesc:
        "Multiline coupon, set the style on the outer package element of the component",
    },
  });

  //组件共有变量
  //按钮props
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      size: "small",
      plain: true,
      className: "cancel-btn",
    };
  }, []);

  //已经使用的icon标记
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  //渲染组件文案内容
  const baseCouponObj = React.useMemo(() => {
    return {
      price: "9.1234123123789123712893",
      currency: "¥",
      mainTitle: translated.mainTitle,
      subTitle: translated.subTitle,
      label: translated.label,
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);

  //基本用法
  const couponBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    };
  }, []);
  const couponMainBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "69%",
      color: "#fff",
    };
  }, []);
  //按钮文案
  const [btnText, setBtnText] = useState(translated.btnText);
  //是否点击了立即领取按钮
  const [receivedStatus, setReceivedStatus] = useState(false);

  const basedOnClick = React.useCallback(() => {
    setBtnText(translated.receivedBtnText);
    setReceivedStatus(true);
  }, [btnText, receivedStatus]);

  //多行展示小卡片优惠券组件
  const couponSmallStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "127px",
      height: "auto",
      backgroundImage: `url(https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon.6df5b4ed.png)`,
      marginRight: `10px`,
      marginBottom: `10px`,
    };
  }, []);
  const couponMainSmallStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "80%",
      color: "red",
    };
  }, []);

  const couponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: translated.mainTitle,
      subTitle: translated.subTitle,
      label: "618",
    };
  }, []);
  const receivedBtn = React.useCallback((item: number) => {
    console.log(item);
  }, []);
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Coupon
          pricePosition="back"
          couponStyle={couponBaseStyle}
          couponMainStyle={couponMainBaseStyle}
          coupon={baseCouponObj}
          btnText={btnText}
          isReceived={receivedStatus}
          usedIcon={usedIcon}
          buttonProps={buttonProps}
          onBtnClick={basedOnClick}
        ></Coupon>
        <h2>{translated.mulText}</h2>
        <div style={{ width: "100%", overflow: "scroll" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "700px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <Coupon
                  key={item}
                  type="small"
                  couponMainStyle={couponMainSmallStyle}
                  couponStyle={couponSmallStyle}
                  coupon={couponObj}
                  buttonProps={buttonProps}
                  itemData={item}
                  btnText={translated.btnText}
                  onBtnClick={receivedBtn}
                ></Coupon>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDemo;
