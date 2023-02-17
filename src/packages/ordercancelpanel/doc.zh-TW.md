# OrderCancelPanel 訂單取消面板

### 介紹

訂單取消面板

### 安裝

```javascript
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";
```

## 代碼演示

### 基本用法

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限時特價、預約資格等購買優惠可能一並取消",
    "2. 如遇訂單拆分，京券將換成同價值京豆返還",
    "3. 支付券不予返還；支付優惠一並取消",
    "4. 訂單一旦取消，無法恢復",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品無貨",
    },
    {
      key: "resons2",
      value: "發貨時間問題",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品選錯/多選",
    },
    {
      key: "resons5",
      value: "地址信息填寫錯誤",
    },
    {
      key: "resons6",
      value: "商品降價",
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

### 帶有溫馨提示的組件

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限時特價、預約資格等購買優惠可能一並取消",
    "2. 如遇訂單拆分，京券將換成同價值京豆返還",
    "3. 支付券不予返還；支付優惠一並取消",
    "4. 訂單一旦取消，無法恢復",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品無貨",
    },
    {
      key: "resons2",
      value: "發貨時間問題",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品選錯/多選",
    },
    {
      key: "resons5",
      value: "地址信息填寫錯誤",
    },
    {
      key: "resons6",
      value: "商品降價",
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
          title="帶有溫馨提示的組件"
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          reasonTitle={<div>請選擇取消訂單原因</div>}
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

### 帶有事件的優惠組件

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. 限時特價、預約資格等購買優惠可能一並取消",
    "2. 如遇訂單拆分，京券將換成同價值京豆返還",
    "3. 支付券不予返還；支付優惠一並取消",
    "4. 訂單一旦取消，無法恢復",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品無貨",
    },
    {
      key: "resons2",
      value: "發貨時間問題",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品選錯/多選",
    },
    {
      key: "resons5",
      value: "地址信息填寫錯誤",
    },
    {
      key: "resons6",
      value: "商品降價",
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
          title="帶有其他原因選項的組件"
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

| 字段                | 說明                                              | 類型                              | 默認值  |
| ------------------- | ------------------------------------------------- | --------------------------------- | ------- |
| showCancelPanel     | 是否顯示取消訂單彈窗                              | Boolean                           | `false` |
| warmTips            | 溫馨提示內容                                      | Array<string>                     | --      |
| cancelResons        | 取消原因                                          | Array<IResonsObject>              | --      |
| isAddOtherReason    | 取消原因中是否增加其他選項                        | Boolean                           | `false` |
| canCancelReason     | 再次點擊是否可以取消已選中的原因                  | Boolean                           | `false` |
| popupTitle          | 彈窗的主標題                                      | React.ReactNode                   | --      |
| reasonTitle         | 取消原因的標題                                    | React.ReactNode                   | --      |
| popupTitilePosition | 彈窗的主標題對齊位置                              | `left`,`right`,`center`,`justify` | `left`  |
| maxlength           | 限製最長輸入字符                                  | String、Number                    | `100`   |
| limitshow           | textarea 是否展示輸入字符。須配合 max-length 使用 | Boolean                           | `false` |
| btnsText            | 彈窗按鈕文案                                      | string                            | `提交`  |
| isShowCloseBtn      | 是否顯示彈窗右上角關閉按鈕                        | Boolean                           | `true`  |

### IResonsObject

| 字段  | 說明                            | 類型   | 默認值 |
| ----- | ------------------------------- | ------ | ------ |
| key   | 取消原因的 key 字段每項的值不同 | string | --     |
| value | 取消原因的文案內容              | string | --     |

## Events

| 字段             | 說明                                                                                | 回調參數 |
| ---------------- | ----------------------------------------------------------------------------------- | -------- |
| onClose          | 點擊彈框時觸發                                                                      | --       |
| onClickCloseIcon | 點擊關閉圖標時觸發                                                                  | --       |
| onClickOverlay   | 點擊遮罩觸發                                                                        | --       |
| onSubmitBtn      | 點擊提交按鈕觸發，參數是選中的原因 key：currActivedKey，以及文本内容：textAreaValue | --       |
