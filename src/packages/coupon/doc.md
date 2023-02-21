# Coupon 优惠券

### 介绍

用于优惠券展示

### 安装

```javascript
import { Coupon } from "@nutui/nutui-biz";
```

## 代码演示

### 基本用法

:::demo

```ts
import React, { useState } from "react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  //已经使用的icon
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  //渲染优惠券文案内容
  const baseCouponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  //背景图
  const baseCouponBgImg =
    "https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png";

  const [btnText, setBtnText] = useState("立即领取");
  const [receivedStatus, setReceivedStatus] = useState(false);
  const [btnType, setBtnType] = useState<ButtonType>("primary");
  const basedOnClick = React.useCallback(() => {
    setBtnText("已经领取");
    setReceivedStatus(true);
    setBtnType("default");
  }, [btnText, receivedStatus, btnType]);
  return (
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
  );
};
export default App;
```

:::

### 带有事件的优惠组件

:::demo

```ts
import React, { useState } from "react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  //已经使用的icon
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  //渲染优惠券文案内容
  const baseCouponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  const baseCouponBgImgEvent =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-1.68c324f9.png";
  const [btnTextEvent, setBtnTextEvent] = useState("立即领取");
  const [receivedStatusEvent, setReceivedStatusEvent] = useState(false);
  const basedOnClickEvent = React.useCallback(() => {
    setBtnTextEvent("已经领取");
    setReceivedStatusEvent(true);
  }, [btnTextEvent, setBtnTextEvent]);
  return (
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
  );
};
export default App;
```

:::

### 小卡片类型的优惠组件

:::demo

```ts
import React, { useState } from "react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  //已经使用的icon
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  //渲染优惠券文案内容
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
  );
};
export default App;
```

:::

## API

### Props

| 字段               | 说明                                           | 类型    | 默认值      |
| ------------------ | ---------------------------------------------- | ------- | ----------- |
| type               | 优惠券的类型 可选值是 `large` `small`          | String  | `large`     |
| couponMarginRight  | 每张优惠券的 margin 右边距                     | Number  | 0           |
| couponMarginBottom | 每张优惠券的 margin 下边距                     | Number  | 0           |
| couponWidth        | 每张优惠券的宽度 支持 `px` 和 `%`              | String  | `100%`      |
| couponHeight       | 每张优惠券的高度                               | String  | `auto`      |
| couponMainWidth    | 优惠券左侧的宽度 10px 或者 10%                 | String  | `69%`       |
| couponMainColor    | 优惠券左侧的文字颜色                           | String  | `#fff`      |
| couponBgImg        | 优惠券的背景图                                 | String  | 默认背景图  |
| pricePosition      | 价格和标签的前后位置 `front` `back`            | String  | `back`      |
| coupon             | 渲染优惠券内容                                 | Object  | -           |
| btnText            | 按钮文案                                       | Stringe | -           |
| isReceived         | 是否领取优惠券                                 | Boolean | -           |
| receivedBtnText    | 领取后的按钮文案                               | String  | `full-line` |
| className          | 自定义类名                                     | String  | -           |
| btnType            | 领取按钮类型，同 Button 组件的 ButtonType      | String  | `primary`   |
| usedIcon           | 已领取 icon                                    | Boolean | `true`      |
| itemData           | 父组件传递过来的数据，作为函数参数返回给父组件 | Object  | -           |

## Events

| 字段    | 说明                                                           | 回调参数 |
| ------- | -------------------------------------------------------------- | -------- |
| onClick | 点击事件，参数为父组件传递过来的数据，作为函数参数返回给父组件 | itemData |
