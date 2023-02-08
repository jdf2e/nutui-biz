import React, { useState, CSSProperties } from "react";
import { Coupon, ButtonType } from "./coupon";
import { useTranslate } from "../../sites/assets/locale";
interface T {
  basic: string;
  eventText: string;
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
      eventText: "带有事件的优惠组件",
      mulText: "多行优惠券",
      btnText: "立即领取",
      receivedBtnText: "已经领取",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      mulDesc: "多行优惠券，在组件外层包裹元素上设置样式",
    },
    "zh-TW": {
      basic: "基本用法",
      eventText: "带有事件的优惠组件",
      mulText: "多行优惠券",
      btnText: "立即领取",
      receivedBtnText: "已经领取",
      mainTitle: "主标题内容",
      subTitle: "用于渲染副标题文案",
      label: "内购专享",
      mulDesc: "",
    },
    "en-US": {
      basic: "基本用法",
      eventText: "带有事件的优惠组件",
      mulText: "多行优惠券",
      btnText: "立即领取",
      receivedBtnText: "已经领取",
      mainTitle: "主标题内容",
      subTitle: "用于渲染副标题文案",
      label: "内购专享",
      mulDesc: "",
    },
  });
  //组件共有变量
  //已经使用的标记
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
      price: 9,
      currency: "¥",
      mainTitle: translated.mainTitle,
      subTitle: translated.subTitle,
      label: translated.label,
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  //基础组件props
  const baseCouponBgImg =
    "https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png";

  const [btnText, setBtnText] = useState(translated.btnText);
  const [receivedStatus, setReceivedStatus] = useState(false);
  const [btnType, setBtnType] = useState<ButtonType>("primary");
  const basedOnClick = React.useCallback(() => {
    setBtnText(translated.receivedBtnText);
    setReceivedStatus(true);
    setBtnType("default");
  }, [btnText, receivedStatus, btnType]);

  //带有事件的优惠组件
  const baseCouponBgImgEvent =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-1.68c324f9.png";
  const [btnTextEvent, setBtnTextEvent] = useState("立即领取");
  const [receivedStatusEvent, setReceivedStatusEvent] = useState(false);
  const basedOnClickEvent = React.useCallback(() => {
    setBtnTextEvent("已经领取");
    setReceivedStatusEvent(true);
  }, [btnTextEvent, setBtnTextEvent]);
  //多行展示小优惠券，【优惠券组件应该只是渲染一个优惠券的样式，而不应该是包含了多个优惠券，应该在优惠券外层传入要渲染的组件数据】
  const couponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "618",
    };
  }, []);
  const couponBgImg =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon.6df5b4ed.png";
  //多行优惠券最外层dom元素样式，宽度为屏幕宽度，超出后显示移动条
  const wrapperStyle: CSSProperties = {
    width: "100%",
    overflow: "scroll",
  };
  //多行优惠券外层dom元素样式，宽度为每行优惠券的宽度
  const couponWrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "700px",
  };
  //按钮的props
  const btnsProps = {
    type: "default",
    size: "small",
    plain: true,
  };
  const receivedBtn = React.useCallback((item: any) => {
    console.log(item);
  }, []);
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Coupon
          pricePosition="back"
          coupon={baseCouponObj}
          couponBgImg={baseCouponBgImg}
          btnText={btnText}
          isReceived={receivedStatus}
          usedIcon={usedIcon}
          btnType={btnType}
          onClick={basedOnClick}
        ></Coupon>
        <h2>{translated.eventText}</h2>
        <Coupon
          className="demo-coupon"
          type="large"
          couponWidth="100%"
          couponMainWidth="69%"
          coupon={baseCouponObj}
          couponBgImg={baseCouponBgImgEvent}
          btnText={btnTextEvent}
          couponMainColor="red"
          isReceived={receivedStatusEvent}
          usedIcon={usedIcon}
          onClick={basedOnClickEvent}
        ></Coupon>
        <h2>{translated.mulText}</h2>
        <p>{translated.mulDesc}</p>
        <div style={wrapperStyle}>
          <div style={couponWrapperStyle}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <Coupon
                  key={index}
                  type="small"
                  couponWidth="127px"
                  couponMainWidth="80%"
                  couponMainColor="red"
                  couponMarginRight={10}
                  couponMarginBottom={10}
                  coupon={couponObj}
                  couponBgImg={couponBgImg}
                  itemData={item}
                  onClick={receivedBtn}
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
