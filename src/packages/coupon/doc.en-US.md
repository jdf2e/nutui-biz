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
import React, { useState, CSSProperties } from "react";
import { ButtonProps } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      size: "small",
      plain: true,
      className: "cancel-btn",
    };
  }, []);

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
      price: "9",
      currency: "¥",
      mainTitle: "Available at 100 yuan or more",
      subTitle: "Only full discount coupons can be purchased for test",
      label: (
        <div style={{ color: "red" }}>Exclusive for internal purchase</div>
      ),
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);

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

  const [btnText, setBtnText] = useState("Get it now");

  const [receivedStatus, setReceivedStatus] = useState(false);
  const basedOnClick = React.useCallback(() => {
    setBtnText("Received");
    setReceivedStatus(true);
  }, [btnText, receivedStatus]);
  const demoStyle = {
    height: "100%",
    overflow: "auto",
    padding: "17px 17px 0 17px",
  };
  return (
    <div style={demoStyle}>
      <Coupon
        pricePosition="back"
        couponStyle={couponBaseStyle}
        couponMainStyle={couponMainBaseStyle}
        couponData={baseCouponObj}
        btnText={btnText}
        isReceived={receivedStatus}
        usedIcon={usedIcon}
        buttonProps={buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </div>
  );
};
export default App;
```

:::

### Coupon components of small card type

:::demo

```ts
import React, { CSSProperties, useState } from "react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
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
      mainTitle: "Available at 100 yuan or more",
      subTitle: "Only full discount coupons can be purchased for test",
      label: "618",
    };
  }, []);
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);

  const [arrReceived, setArrReceived] = useState<Array<number>>([]);
  const receivedBtn = React.useCallback(
    (item) => {
      console.log(item);
      if (!arrReceived.includes(item.item)) {
        arrReceived.push(item.item);
      }
      setArrReceived([...arrReceived]);
    },
    [arrReceived]
  );

  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
        padding: "17px 17px 0 17px",
      }}
    >
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
              pricePosition="front"
              type="small"
              usedIcon={usedIcon}
              isReceived={arrReceived.includes(item)}
              couponMainStyle={couponMainSmallStyle}
              couponStyle={couponSmallStyle}
              couponData={{ ...couponObj, item }}
              btnText={arrReceived.includes(item) ? "Received" : "Get it now"}
              onBtnClick={receivedBtn}
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

| Attribute       | Description                                               | Type                 | Default     |
| --------------- | --------------------------------------------------------- | -------------------- | ----------- |
| type            | Type of coupon Optional values are `large` `small`        | String               | `large`     |
| couponStyle     | Style of each coupon                                      | CSSProperties        | --          |
| couponMainStyle | The style of the coupon body                              | CSSProperties        | --          |
| pricePosition   | Front and back position of price and label `front` `back` | String               | `back`      |
| couponData      | Render coupon content                                     | ICouponType          | -           |
| btnText         | content of Button                                         | Stringe              | -           |
| isReceived      | Whether to receive coupons                                | Boolean              | -           |
| receivedBtnText | content of after receiving                                | String               | `full-line` |
| buttonProps     | the props of buttton，from nutui-react                    | Partial<ButtonProps> | --          |
| usedIcon        | Received icon                                             | Boolean              | `true`      |

### ICouponType

| Attribute | Description                                          | Type           | Default |
| --------- | ---------------------------------------------------- | -------------- | ------- |
| price     | The price of the coupon                              | string \| number | -       |
| currency  | Currency symbol                                      | string         | -       |
| mainTitle | Main title                                           | string         | -       |
| subTitle  | Subtitle                                             | string         | -       |
| timeRange | Time range of coupon use                             | string         | -       |
| label     | Label content in the upper left corner of the coupon | ReactNode      | -       |

### Events

| Attribute | Description                                                                             | Arguments  |
| --------- | --------------------------------------------------------------------------------------- | ---------- |
| onClick   | Click Event，The data passed by the parent component is returned to the parent componen | couponData |
