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
import React, { useState, CSSProperties } from "react";
import { ButtonProps } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
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
      price: "9",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: <div style={{ color: "red" }}>内购专享</div>,,
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  //优惠券样式
  const couponBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    };
  }, []);
  //优惠券主体样式
  const couponMainBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "69%",
      color: "#fff",
    };
  }, []);
  //按钮文案
  const [btnText, setBtnText] = useState("立即领取");
  //是否点击了立即领取按钮
  const [receivedStatus, setReceivedStatus] = useState(false);
  const basedOnClick = React.useCallback(() => {
    setBtnText("已领取");
    setReceivedStatus(true);
  }, [btnText, receivedStatus]);
  const demoStyle = {
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
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

### 小卡片类型的优惠组件

:::demo

```ts
import React, { CSSProperties } from "react";
import { Coupon } from "@nutui/nutui-biz";

const App = () => {
  //优惠券样式
  const couponSmallStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "127px",
      height: "auto",
      backgroundImage: `url(https://static.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon.6df5b4ed.png)`,
      marginRight: `10px`,
      marginBottom: `10px`,
    };
  }, []);
  //优惠券主体样式
  const couponMainSmallStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "80%",
      color: "red",
    };
  }, []);
  //渲染优惠券文案
  const couponObj = React.useMemo(() => {
    return {
      price: 9,
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "618",
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
  const receivedBtn = React.useCallback((item: number) => {
    console.log(item);
  }, []);
  const [arrReceived, setArrReceived] = useState<Array<number>>([]);
  //点击小优惠券领取按钮交互
  const receivedBtn = React.useCallback(
    (item: ICouponType) => {
      console.log(item);
      if (!arrReceived.includes(item.item)) {
        arrReceived.push(item.item);
      }
      setArrReceived([...arrReceived]);
    },
    [arrReceived]
  );

  return (
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
              pricePosition="front"
              type="small"
              usedIcon={usedIcon}
              isReceived={arrReceived.includes(item)}
              couponMainStyle={couponMainSmallStyle}
              couponStyle={couponSmallStyle}
              couponData={{ ...couponObj, item }}
              btnText={arrReceived.includes(item) ? "已领取" : "立即领取"}
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

| 字段            | 说明                                          | 类型                 | 默认值     |
| --------------- | --------------------------------------------- | -------------------- | ---------- |
| type            | 优惠券的类型 可选值是 `large` `small`         | string               | `large`    |
| couponStyle     | 每张优惠券的样式                              | CSSProperties        | -          |
| couponMainStyle | 优惠券主体的样式                              | CSSProperties        | -          |
| pricePosition   | 价格和标签的前后位置 `front` `back`           | string               | `back`     |
| couponData      | 渲染优惠券内容                                | ICouponType          | -          |
| btnText         | 按钮文案                                      | string               | `立即领取` |
| isReceived      | 是否领取优惠券                                | boolean              | `false`    |
| className       | 自定义类名                                    | string               | -          |
| buttonProps     | 按钮 props，来自于 nutui-react 中 Button 组件 | Partial<ButtonProps> | -          |
| usedIcon        | 已经领取的优惠券打得标记 icon                 | ReactNode            | -          |

### ICouponType

| 字段      | 说明                   | 类型           | 默认值 |
| --------- | ---------------------- | -------------- | ------ |
| price     | 优惠券的价格           | string\/number | -      |
| currency  | 货币符号               | string         | -      |
| mainTitle | 主标题                 | string         | -      |
| subTitle  | 副标题                 | string         | -      |
| timeRange | 优惠券使用时间范围     | string         | -      |
| label     | 优惠券左上角的标签内容 | string         | -      |

### Events

| 字段    | 说明                                                           | 回调参数   |
| ------- | -------------------------------------------------------------- | ---------- |
| onClick | 点击事件，参数为父组件传递过来的数据，作为函数参数返回给父组件 | couponData |
