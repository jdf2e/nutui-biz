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
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
    "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
    "3. The payment voucher will not be returned; Cancellation of payment preference",
    "4. Once the order is cancelled, it cannot be recovered",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "No goods",
    },
    {
      key: "resons2",
      value: "Delivery time problem",
    },
    {
      key: "resons3",
      value: "do not want goods",
    },
    {
      key: "resons4",
      value: "Wrong goods selected",
    },
    {
      key: "resons5",
      value: "Incorrect address information",
    },
    {
      key: "resons6",
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
  return (
    <>
      <div className="demo">
        <Cell title="Basic Usage" onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          popupTitle={<div>Refund reason</div>}
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

### Components with warm tips

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const App = () => {
  const warmTips = [
    "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
    "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
    "3. The payment voucher will not be returned; Cancellation of payment preference",
    "4. Once the order is cancelled, it cannot be recovered",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "No goods",
    },
    {
      key: "resons2",
      value: "Delivery time problem",
    },
    {
      key: "resons3",
      value: "do not want goods",
    },
    {
      key: "resons4",
      value: "Wrong goods selected",
    },
    {
      key: "resons5",
      value: "Incorrect address information",
    },
    {
      key: "resons6",
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
  return (
    <>
      <div className="demo">
        <Cell
          title="Components with warm tips"
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>Refund reason</div>}
          reasonTitle={
            <div>Please select the reason for canceling the order</div>
          }
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

### Components with other reason options

:::demo

```tsx
import React from "react";
import { Cell } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

const warmTips = [
    "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
    "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
    "3. The payment voucher will not be returned; Cancellation of payment preference",
    "4. Once the order is cancelled, it cannot be recovered",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "No goods",
    },
    {
      key: "resons2",
      value: "Delivery time problem",
    },
    {
      key: "resons3",
      value: "do not want goods",
    },
    {
      key: "resons4",
      value: "Wrong goods selected",
    },
    {
      key: "resons5",
      value: "Incorrect address information",
    },
    {
      key: "resons6",
      value: "Commodity price reduction",
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
  return (
    <>
      <div className="demo">
        <Cell
          title="Components with other reason options"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>Refund reason</div>}
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

| Attribute           | Description                                              | Type                              | Default |
| ------------------- | -------------------------------------------------------- | --------------------------------- | ------- |
| showCancelPanel     | Whether to display the cancel order dialog               | Boolean                           | `false` |
| warmTips            | Warm prompt content                                      | Array<string>                     | --      |
| cancelResons        | Reason for cancellation                                  | Array<IResonsObject>              | --      |
| isAddOtherReason    | Whether to add other options in the cancellation reason  | Boolean                           | `false` |
| canCancelReason     | Click again to cancel the selected reason                | Boolean                           | `false` |
| popupTitle          | Main title of dialog                                     | React.ReactNode                   | --      |
| reasonTitle         | Title of cancellation reason                             | React.ReactNode                   | --      |
| popupTitilePosition | Align the main title of the dialog                       | `left`,`right`,`center`,`justify` | `left`  |
| maxlength           | Limit maximum input number                               | String、Number                    | `100`   |
| limitshow           | textarea Show input number，Must be used with max-length | Boolean                           | `false` |
| btnsText            | text of dialog button                                    | string                            | `提交`  |
| isShowCloseBtn      | Whether to display the close button of the dialog        | Boolean                           | `true`  |

### IResonsObject

| Attribute | Description                        | Type   | Default |
| --------- | ---------------------------------- | ------ | ------- |
| key       | Key field of cancellation reason   | string | --      |
| value     | the content of cancellation reason | string | --      |

## Events

| Attribute        | Description                                                                                        | Arguments |
| ---------------- | -------------------------------------------------------------------------------------------------- | --------- |
| onClose          | Triggered when clicking the dialog                                                                 | --        |
| onClickCloseIcon | Triggered when the close icon is clicked                                                           | --        |
| onClickOverlay   | Click the mask to trigger                                                                          | --        |
| onSubmitBtn      | Click the submit button to trigger，arguments is the selected reason,currActivedKey，textAreaValue | --        |
