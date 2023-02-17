# Coupon 優惠券

### 介紹

用於優惠券展示

### 安裝

```javascript
import { Button } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";
```

## 代碼演示

### 基本用法

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
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
      mainTitle: "滿100元可用",
      subTitle: "僅可購買滿折券測試",
      label: "內購專享",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  //背景图
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

### 帶有事件的優惠組件

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
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
      mainTitle: "滿100元可用",
      subTitle: "僅可購買滿折券測試",
      label: "內購專享",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  const baseCouponBgImgEvent =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-1.68c324f9.png";
  const [btnTextEvent, setBtnTextEvent] = useState("立即領取");
  const [receivedStatusEvent, setReceivedStatusEvent] = useState(false);
  const basedOnClickEvent = React.useCallback(() => {
    setBtnTextEvent("已經領取");
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

### 小卡片類型的優惠組件

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
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
      mainTitle: "滿100元可用",
      subTitle: "僅可購買滿折券測試",
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

| 字段               | 說明                                             | 類型    | 默認值      |
| ------------------ | ------------------------------------------------ | ------- | ----------- |
| type               | 優惠券的類型 可選值是 `large` `small`            | String  | `large`     |
| couponMarginRight  | 每張優惠券的 margin 右邊距                       | Number  | 0           |
| couponMarginBottom | 每張優惠券的 margin 下邊距                       | Number  | 0           |
| couponWidth        | 每張優惠券的寬度 支持 `px` 和 `%`                | String  | `100%`      |
| couponHeight       | 每張優惠券的高度                                 | String  | `auto`      |
| couponMainWidth    | 優惠券左側的寬度 支持 `px` 和 `%                 | String  | `69%`       |
| couponMainColor    | 優惠券左側的文字顏色                             | String  | `#fff`      |
| couponBgImg        | 優惠券的背景圖                                   | String  | 默认背景图  |
| pricePosition      | 價格和標簽的前後位置 `front` `back`              | String  | `back`      |
| coupon             | 渲染優惠券內容                                   | Object  | -           |
| btnText            | 按鈕文案                                         | Stringe | -           |
| isReceived         | 是否領取優惠券                                   | Boolean | -           |
| receivedBtnText    | 領取後的按鈕文案                                 | String  | `full-line` |
| className          | 自定義類名                                       | String  | -           |
| btnType            | 領取按鈕類型，同 Button 组件的 ButtonType        | String  | `primary`   |
| usedIcon           | 已領取 icon                                      | Boolean | `true`      |
| itemData           | 父父組件傳遞過來的數據，作為函數參數返回給父組件 | Object  | -           |

## Events

| 字段    | 說明                                                           | 回調參數 |
| ------- | -------------------------------------------------------------- | -------- |
| onClick | 點擊事件，參數為父組件傳遞過來的數據，作為函數參數返回給父組件 | itemData |
