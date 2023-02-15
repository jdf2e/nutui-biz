# OrderCancelPanel 订单取消面板

### 介绍

订单取消面板

### 安装

```javascript
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";
```

## 代码演示

### 基本用法

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
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
  return (
    <>
      <div className="demo">
        <Cell title="基本用法" onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          showCancelPanel={showPanel}
          cancelResons={cancelResons}
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
import React from "react";
import { Cell } from "@nutui/nutui-react";
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
  return (
    <>
      <div className="demo">
        <Cell
          title="带有温馨提示的组件"
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          reasonTitle={<div>请选择取消订单原因</div>}
          showCancelPanel={showCancelPanel}
          warmTips={warmTips}
          cancelResons={cancelResons}
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

### 带有事件的优惠组件

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
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
  return (
    <>
      <div className="demo">
        <Cell
          title="带有其他原因选项的组件"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          canCancelReason={true}
          maxlength={50}
          limitshow={true}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
          isAddOtherReason={true}
          showCancelPanel={showOtherCancelPanel}
          warmTips={warmTips}
          cancelResons={cancelResons}
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

| 字段                | 说明                                              | 类型                              | 默认值     |
| ------------------- | ------------------------------------------------- | --------------------------------- | ---------- |
| showCancelPanel     | 是否显示取消订单弹窗                              | Boolean                           | `false`    |
| warmTips            | 温馨提示内容                                      | Array<string>                     | --         |
| cancelResons        | 取消原因                                          | Array<IResonsObject>              | --         |
| isAddOtherReason    | 取消原因中是否增加其他选项                        | Boolean                           | `false`    |
| canCancelReason     | 再次点击是否可以取消已选中的原因                  | Boolean                           | `false`    |
| popupTitle          | 弹窗的主标题                                      | React.ReactNode                   | --         |
| reasonTitle         | 取消原因的标题                                    | React.ReactNode                   | --         |
| popupTitilePosition | 弹窗的主标题对齐位置                              | `left`,`right`,`center`,`justify` | 默认背景图 |
| maxlength           | 限制最长输入字符                                  | String、Number                    | `100`      |
| limitshow           | textarea 是否展示输入字符。须配合 max-length 使用 | Boolean                           | `false`    |
| btnsText            | 弹窗按钮文案                                      | string                            | `提交`     |
| isShowCloseBtn      | 是否显示弹窗右上角关闭按钮                        | Boolean                           | `true`     |

### IResonsObject

| 字段  | 说明                            | 类型   | 默认值 |
| ----- | ------------------------------- | ------ | ------ |
| key   | 取消原因的 key 字段每项的值不同 | string | --     |
| value | 取消原因的文案内容              | string | --     |

## Events

| 字段             | 说明                                                                                | 回调参数 |
| ---------------- | ----------------------------------------------------------------------------------- | -------- |
| onClose          | 点击弹框时触发                                                                      | --       |
| onClickCloseIcon | 点击关闭图标时触发                                                                  | --       |
| onClickOverlay   | 点击遮罩触发                                                                        | --       |
| onSubmitBtn      | 点击提交按钮触发，参数是选中的原因 key：currActivedKey，以及文本内容：textAreaValue | --       |
