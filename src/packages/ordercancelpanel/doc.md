# OrderCancelPanel 订单取消面板

### 介绍

订单取消面板

### 安装

```javascript
import { OrderCancelPanel } from "@nutui/nutui-biz";
```

## 代码演示

### 基本用法

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const cancelResons = [
    {
      key: "resons1",
      value: "商品无货",
    },
    {
      key: "resons2",
      value: "发货时间问题",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品选错/多选",
    },
    {
      key: "resons5",
      value: "地址信息填写错误",
    },
    {
      key: "resons6",
      value: "商品降价",
    },
  ];
  const clickClosePopUp = () => {
    setShowPanel(false);
  };
  const submitBtn = (currActivedKey: string, textAreaValue: string) => {
    console.log(
      `currActivedKey:${currActivedKey}, textAreaValue,${textAreaValue}`
    );
    setShowPanel(false);
  };
  //基本使用
  const [showPanel, setShowPanel] = useState(false);
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  return (
    <>
      <div className="demo">
        <Cell title="基本用法" onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          showCancelPanel={showPanel}
          popupTitle="退款原因"
          cancelResons={cancelResons}
          buttonProps={buttonProps}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

### 带有温馨提示的组件

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品无货",
    },
    {
      key: "resons2",
      value: "发货时间问题",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品选错/多选",
    },
    {
      key: "resons5",
      value: "地址信息填写错误",
    },
    {
      key: "resons6",
      value: "商品降价",
    },
  ];
  const clickClosePopUp = () => {
    setShowCancelPanel(false);
  };
  const submitBtn = (currActivedKey: string, textAreaValue: string) => {
    console.log(
      `currActivedKey:${currActivedKey}, textAreaValue,${textAreaValue}`
    );
    setShowCancelPanel(false);
  };
  //基本使用
  const [showCancelPanel, setShowCancelPanel] = useState(false);
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  return (
    <>
      <div className="demo">
        <Cell
          title="带有温馨提示的组件"
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showCancelPanel}
          popupTitle="退款原因"
          reasonTitle="请选择取消订单原因"
          cancelResons={cancelResons}
          warmTips={warmTips}
          tipsTitle="温馨提示"
          btnsText="确认"
          buttonProps={buttonProps}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

### 带有其他原因选项的优惠组件

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps, TextAreaProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品无货",
    },
    {
      key: "resons2",
      value: "发货时间问题",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品选错/多选",
    },
    {
      key: "resons5",
      value: "地址信息填写错误",
    },
    {
      key: "resons6",
      value: "商品降价",
    },
    {
      key: "other",
      value: "其他",
    },
  ];
  const clickClosePopUp = () => {
    setShowOtherCancelPanel(false);
  };
  const submitBtn = (currActivedKey: string, textAreaValue: string) => {
    console.log(
      `currActivedKey:${currActivedKey}, textAreaValue,${textAreaValue}`
    );
    setShowOtherCancelPanel(false);
  };
  //基本使用
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  const textareaProps: Partial<TextAreaProps> = React.useMemo(() => {
    return {
      placeholder: "请输入内容",
      rows: "3",
      limitshow: true,
      maxlength: 100,
    };
  }, []);
  const popupTitleMemo = React.useMemo(() => {
    return <div>退款原因</div>;
  }, []);
  return (
    <>
      <div className="demo">
        <Cell
          title="带有其他原因选项的组件"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          canCancelReason={true}
          tipsTitle="温馨提示"
          btnsText="确认"
          warmTips={warmTips}
          cancelResons={cancelResons}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

## API

### Props

| 字段            | 说明                               | 类型                 | 默认值  |
| --------------- | ---------------------------------- | -------------------- | ------- |
| showCancelPanel | 是否显示或取消订单弹窗             | Boolean              | `false` |
| warmTips        | 温馨提示内容,无则不展示提示内容    | Array<string>        | --      |
| cancelResons    | 取消原因                           | Array<IResonsObject> | --      |
| canCancelReason | 再次点击是否可以取消已选中的原因   | Boolean              | `false` |
| popupTitle      | 弹窗的主标题                       | ReactNode/string     | --      |
| reasonTitle     | 取消原因的标题                     | ReactNode/string     | --      |
| btnsText        | 弹窗按钮文案                       | string               | `提交`  |
| tipsTitle       | 温馨提示的标题                     | string               | --      |
| buttonProps     | 按钮组件的 props                   | ButtonProps          | --      |
| textAreaProps   | 其他原因对应的 TextArea 组件 props | TextAreaProps        | --      |

### IResonsObject

| 字段  | 说明                            | 类型   | 默认值 |
| ----- | ------------------------------- | ------ | ------ |
| key   | 取消原因的 key 字段每项的值不同 | string | --     |
| value | 取消原因的文案内容              | string | --     |

### Events

| 字段             | 说明                                                                                | 回调参数 |
| ---------------- | ----------------------------------------------------------------------------------- | -------- |
| onClose          | 点击弹框时触发                                                                      | --       |
| onClickCloseIcon | 点击关闭图标时触发                                                                  | --       |
| onClickOverlay   | 点击遮罩触发                                                                        | --       |
| onSubmitBtn      | 点击提交按钮触发，参数是选中的原因 key：currActivedKey，以及文本内容：textAreaValue | --       |
