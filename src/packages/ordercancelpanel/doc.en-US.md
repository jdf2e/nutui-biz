# OrderCancelPanel

### Intro

OrderCancelPanel

### Install

```javascript
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const cancelReason = [
    {
      key: "reasons1",
      value: "No goods",
    },
    {
      key: "reasons2",
      value: "Delivery time problem",
    },
    {
      key: "reasons3",
      value: "do not want goods",
    },
    {
      key: "reasons4",
      value: "Wrong goods selected",
    },
    {
      key: "reasons5",
      value: "Incorrect address information",
    },
    {
      key: "reasons6",
      value: "Commodity price reduction",
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
        <Cell title="Basic Usage" onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          showCancelPanel={showPanel}
          popupTitle={<div>Refund reason</div>}
          cancelReason={cancelReason}
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

### Components with warm tips

:::demo

```tsx
import React, { useState } from "react";
import { Cell, ButtonProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
    "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
    "3. The payment voucher will not be returned; Cancellation of payment preference",
    "4. Once the order is cancelled, it cannot be recovered",
  ];
  const cancelReason = [
    {
      key: "reasons1",
      value: "No goods",
    },
    {
      key: "reasons2",
      value: "Delivery time problem",
    },
    {
      key: "reasons3",
      value: "do not want goods",
    },
    {
      key: "reasons4",
      value: "Wrong goods selected",
    },
    {
      key: "reasons5",
      value: "Incorrect address information",
    },
    {
      key: "reasons6",
      value: "Commodity price reduction",
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
          title="Components with other reason options"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          canCancelReason={true}
          tipsTitle="Refund reason"
          submitText="confirm"
          warmTips={warmTips}
          cancelReason={cancelReason}
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

### Components with other reason options

:::demo

```tsx
import React from "react";
import { Cell, ButtonProps, TextAreaProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
    "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
    "3. The payment voucher will not be returned; Cancellation of payment preference",
    "4. Once the order is cancelled, it cannot be recovered",
  ];
  const cancelReason = [
    {
      key: "reasons1",
      value: "No goods",
    },
    {
      key: "reasons2",
      value: "Delivery time problem",
    },
    {
      key: "reasons3",
      value: "do not want goods",
    },
    {
      key: "reasons4",
      value: "Wrong goods selected",
    },
    {
      key: "reasons5",
      value: "Incorrect address information",
    },
    {
      key: "reasons6",
      value: "Commodity price reduction",
    },
    {
      key: "other",
      value: "other",
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
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  const textareaProps: Partial<TextAreaProps> = React.useMemo(() => {
    return {
      placeholder: translated.textareaPlaceholder,
      rows: "3",
      limitshow: true,
      maxlength: 100,
    };
  }, []);
  const popupTitleMemo = React.useMemo(() => {
    return <div>Refund reason</div>;
  }, []);
  return (
    <>
      <div className="demo">
        <Cell
          title="Components with other reason options"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          canCancelReason={true}
          tipsTitle="reminder"
          submitText="confirm"
          warmTips={warmTips}
          cancelReason={cancelReason}
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

| Attribute       | Description                                          | Type                  | Default  |
| --------------- | ---------------------------------------------------- | --------------------- | -------- |
| showCancelPanel | Whether to display or cancel the order pop-up window | Boolean               | `false`  |
| warmTips        | Warm prompt content, no prompt content               | Array<string>         | --       |
| cancelReason    | Reason for cancellation                              | Array<IreasonsObject> | --       |
| canCancelReason | Click again to cancel the selected reason            | Boolean               | `false`  |
| popupTitle      | Main title of pop-up window                          | ReactNode             | --       |
| reasonTitle     | Title of cancellation reason                         | ReactNode             | --       |
| submitText      | Popup Button content                                 | string                | `submit` |
| tipsTitle       | Warm prompt title                                    | string                | --       |
| buttonProps     | Props of button components                           | ButtonProps           | --       |
| textAreaProps   | props of TextAre                                     | TextAreaProps         | --       |

### IreasonsObject

| Attribute | Description                         | Type   | Default |
| --------- | ----------------------------------- | ------ | ------- |
| key       | Key of cancellation reason          | string | --      |
| value     | Copy content of cancellation reason | string | --      |

### Events

| Attribute        | Description                                      | Arguments |
| ---------------- | ------------------------------------------------ | --------- |
| onClose          | Triggered when clicking the pop-up box           | --        |
| onClickCloseIcon | Triggered when the close icon is clicked         | --        |
| onClickOverlay   | Click the mask to trigger                        | --        |
| onSubmitBtn      | Click the submit button to trigger The parameter | --        |
