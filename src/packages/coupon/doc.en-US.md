# Coupon

### Intro

For coupon display

### Install

```javascript
import { Button } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";
```

## Demo

### Basic Usage

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  const baseCouponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "Available at 100 yuan or more",
      subTitle: "Only full discount coupons can be purchased",
      label: "Exclusive for internal purchase",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
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

### Coupon components with events

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  const baseCouponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "Available at 100 yuan or more",
      subTitle: "Only full discount coupons can be purchased",
      label: "Exclusive for internal purchase",
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  const baseCouponBgImgEvent =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-1.68c324f9.png";
  const [btnTextEvent, setBtnTextEvent] = useState("Get it now");
  const [receivedStatusEvent, setReceivedStatusEvent] = useState(false);
  const basedOnClickEvent = React.useCallback(() => {
    setBtnTextEvent("Received");
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

### Coupon components of small card type

:::demo

```ts
import React from "react";
import { Button } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  const couponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "Available at 100 yuan or more",
      subTitle: "Only full discount coupons can be purchased",
      label: "618",
    };
  }, []);
  const couponBgImg =
    "https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon.6df5b4ed.png";
  const wrapperStyle: CSSProperties = {
    width: "100%",
    overflow: "scroll",
  };
  const couponWrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "700px",
  };
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

| Attribute          | Description                                                                 | Type    | Default            |
| ------------------ | --------------------------------------------------------------------------- | ------- | ------------------ |
| type               | Type of coupon Optional values are `large` `small`                          | String  | `large`            |
| couponMarginRight  | Margin right margin of each coupon                                          | Number  | 0                  |
| couponMarginBottom | Bottom margin of margin of each coupon                                      | Number  | 0                  |
| couponWidth        | Width of each coupon，support `px` or `%`                                   | String  | `100%`             |
| couponHeight       | Height of each coupon                                                       | String  | `auto`             |
| couponMainWidth    | Width of the left side of the coupon，support ` px` or `%`                  | String  | `69%`              |
| couponMainColor    | Text color on the left side of the coupon                                   | String  | `#fff`             |
| couponBgImg        | Background image of coupon                                                  | String  | Default background |
| pricePosition      | Front and back position of price and label,support`front` `back`            | String  | `back`             |
| coupon             | Render coupon content                                                       | Object  | -                  |
| btnText            | content of button                                                           | Stringe | -                  |
| isReceived         | Whether to receive coupons                                                  | Boolean | -                  |
| receivedBtnText    | Button copy after receiving                                                 | String  | `full-line`        |
| className          | Custom class name                                                           | String  | -                  |
| btnType            | Received button type，ButtonType from Button                                | String  | `primary`          |
| usedIcon           | Received icon                                                               | Boolean | `true`             |
| itemData           | The data passed by the parent component is returned to the parent component | Object  | -                  |

## Events

| Attribute | Description                                                                             | Arguments |
| --------- | --------------------------------------------------------------------------------------- | --------- |
| onClick   | Click Event，The data passed by the parent component is returned to the parent componen | itemData  |
