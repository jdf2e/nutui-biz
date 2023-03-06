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
      label: "内购专享",
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

  return (
    <div className="demo">
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
    </div>
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
      mainTitle: translated.mainTitle,
      subTitle: translated.subTitle,
      label: "618",
    };
  }, []);
  const receivedBtn = React.useCallback((item: number) => {
    console.log(item);
  }, []);
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
              type="small"
              couponMainStyle={couponMainSmallStyle}
              couponStyle={couponSmallStyle}
              coupon={couponObj}
              buttonProps={buttonProps}
              itemData={item}
              btnText="立即领取"
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

| 字段            | 说明                                           | 类型                 | 默认值     |
| --------------- | ---------------------------------------------- | -------------------- | ---------- |
| type            | 优惠券的类型 可选值是 `large` `small`          | String               | `large`    |
| couponStyle     | 每张优惠券的样式                               | CSSProperties        | -          |
| couponMainStyle | 优惠券主体的样式                               | CSSProperties        | -          |
| pricePosition   | 价格和标签的前后位置 `front` `back`            | String               | `back`     |
| coupon          | 渲染优惠券内容                                 | ICouponType          | -          |
| btnText         | 按钮文案                                       | Stringe              | `立即领取` |
| isReceived      | 是否领取优惠券                                 | Boolean              | `false`    |
| className       | 自定义类名                                     | String               | -          |
| buttonProps     | 按钮 props，来自于 nutui-react 中 Button 组件  | Partial<ButtonProps> | -          |
| itemData        | 父组件传递过来的数据，作为函数参数返回给父组件 | any                  | -          |

### ICouponType

| 字段      | 说明                   | 类型           | 默认值 |
| --------- | ---------------------- | -------------- | ------ |
| price     | 优惠券的价格           | String\/Number | -      |
| currency  | 货币符号               | String         | -      |
| mainTitle | 主标题                 | String         | -      |
| subTitle  | 副标题                 | String         | -      |
| timeRange | 优惠券使用时间范围     | String         | -      |
| label     | 优惠券左上角的标签内容 | String         | -      |

### Events

| 字段    | 说明                                                           | 回调参数 |
| ------- | -------------------------------------------------------------- | -------- |
| onClick | 点击事件，参数为父组件传递过来的数据，作为函数参数返回给父组件 | itemData |
