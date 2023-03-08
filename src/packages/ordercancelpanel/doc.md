# OrderCancelPanel 订单取消面板

### 介绍

订单取消面板组件，可用来选择取消订单的原因。

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
  const cancelReason = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
  ];

  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUp();
    },
    []
  );

  //基本使用
  const [showPanel, setShowPanel] = useState(false);
  //关闭弹窗触发的事件
  const clickClosePopUp = React.useCallback(() => {
    setShowPanel(false);
  }, [showPanel]);
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
          cancelReason={cancelReason}
          buttonProps={buttonProps}
          onClose={clickClosePopUp}
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
import { OrderCancelPanel, IreasonsObject } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  const cancelReason = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
  ];

  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUpSec();
    },
    []
  );
  //基本使用
  const [showCancelPanel, setShowCancelPanel] = useState(false);
  const clickClosePopUpSec = React.useCallback(() => {
    setShowCancelPanel(false);
  }, [showCancelPanel]);

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
          cancelReason={cancelReason}
          warmTips={warmTips}
          tipsTitle="温馨提示"
          submitText="确认"
          buttonProps={buttonProps}
          onClose={clickClosePopUpSec}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

### 带有其它原因选项的优惠组件

- 当数据 `cancelReason` 中 `key` 是 `other` 的时候，选择其它选项可以出现文本框。

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
  const otherReasonList = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
    {
      key: "other",
      value: "其它",
    },
  ];

  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUpThree();
    },
    []
  );
  //基本使用
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  const clickClosePopUpThree = React.useCallback(() => {
    setShowOtherCancelPanel(false);
  }, [showOtherCancelPanel]);

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
          title="带有其它原因选项的组件"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          submitText="确认"
          cancelReason={otherReasonList}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClose={clickClosePopUpThree}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

### 可取消已经选中的原因

- 设置 `canCancelReason` 为 `true`，可以取消已选择的原因。

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const cancelReason = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
  ];

  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUpCancel();
    },
    []
  );
  //基本使用
  const [showCancelCancelPanel, setShowCancelCancelPanel] = useState(false);
  const clickClosePopUpCancel = React.useCallback(() => {
    setShowCancelCancelPanel(false);
  }, [showCancelCancelPanel]);

  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  return (
    <>
      <div className="demo">
        <Cell title="基本用法" onClick={() => setShowCancelCancelPanel(true)} />
        <OrderCancelPanel
          showCancelPanel={showCancelCancelPanel}
          popupTitle="退款原因"
          canCancelReason={true}
          cancelReason={cancelReason}
          buttonProps={buttonProps}
          onClose={clickClosePopUpCancel}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;
```

:::

### checkbox 选择框和原因文案的前后位置

- 1、showBtntips 为 true 的时候，显示 `提交后，将本单商品放回购物车中` 区域；
- 2、 `checkboxType` 设置 checkbox 选择框和原因文案的前后位置；

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const cancelReason = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
  ];
  const [showcheckboxCancelPanel, setShowcheckboxCancelPanel] = useState(false);
  const clickClosePopUpCheckbox = React.useCallback(() => {
    setShowcheckboxCancelPanel(false);
  }, [showCheckboxCancelPanel]);
  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUpCheckbox();
    },
    []
  );
  //基本使用
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
          title="基本用法"
          onClick={() => setShowcheckboxCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showcheckboxCancelPanel}
          checkboxType="front"
          showBtntips={true}
          popupTitle="退款原因"
          cancelReason={cancelReason}
          buttonProps={buttonProps}
          onClose={clickClosePopUpCheckbox}
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

| 字段                 | 说明                                | 类型                  | 默认值     |
| -------------------- | ----------------------------------- | --------------------- | ---------- |
| showCancelPanel      | 是否显示或取消订单弹窗              | boolean               | `false`    |
| warmTips             | 温馨提示内容,无则不展示提示内容     | Array<string>         | -          |
| cancelReason         | 取消原因                            | Array<IreasonsObject> | -          |
| canCancelReason      | 再次点击是否可以取消已选中的原因    | boolean               | `false`    |
| popupTitle           | 弹窗的主标题                        | ReactNode             | -          |
| reasonTitle          | 取消原因的标题                      | ReactNode             | -          |
| submitText           | 弹窗按钮文案                        | string                | `提交`     |
| tipsTitle            | 温馨提示的标题                      | ReactNode             | `温馨提示` |
| buttonProps          | 按钮组件的 props                    | ButtonProps           | -          |
| textAreaProps        | 其它原因对应的 TextArea 组件 props  | TextAreaProps         | -          |
| popupProsp           | Popup 组件的 props                  | PopupProps            | -          |
| checkboxType         | checkbox 选择框和原因文案的前后位置 | `back`\|`front`       | `back`     |
| safeAreaCancelBottom | 按钮区域是否渲染 iphone 安全区域    | boolean               | `false`    |
| showBtntips          | 是否在按钮区域显示提示区域          | boolean               | `false`    |

### IreasonsObject

| 字段  | 说明                            | 类型   | 默认值 |
| ----- | ------------------------------- | ------ | ------ |
| key   | 取消原因的 key 字段每项的值不同 | string | -      |
| value | 取消原因的文案内容              | string | -      |

### Events

| 字段        | 说明             | 回调参数                                                            |
| ----------- | ---------------- | ------------------------------------------------------------------- |
| onClose     | 关闭弹框时触发   | -                                                                   |
| onSubmitBtn | 点击提交按钮触发 | `item:IreasonsObject`,`textAreaValue:string`,`switchStatus:boolean` |
