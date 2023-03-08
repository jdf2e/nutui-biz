# OrderRemark

### Intro

Commonly used on order submission pages and order after-sales pages to add notes

### Install

```javascript
import { OrderRemark } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from '@nutui/nutui-biz';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="Order Remarks" desc={mark ? mark : 'Please enter remarks'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
export default App;
```

:::

### With Tag

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from '@nutui/nutui-biz';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = [
    'JD Express',
    'Handle with care',
    'weekend delivery',
    'Before delivery, you need to call in advance',
    'If there is no one at home, you can call and place it at the door'
  ];
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="Order Remarks" desc={mark ? mark : 'Please enter remarks'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        maxLength={100}
        recommendTags={tagArr}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
export default App;
```

:::

### Custom Copywriting

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from '@nutui/nutui-biz';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = [
    'JD Express',
    'Handle with care',
    'weekend delivery',
    'Before delivery, you need to call in advance',
    'If there is no one at home, you can call and place it at the door'
  ];
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="Order Remarks" desc={mark ? mark : 'Please enter remarks'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        recommendTags={tagArr}
        submitText={'Submit'}
        placeholderText={'Please fill in the remarks'}
        title={'Remarks'}
        tagTitle={'Quick Selection'}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
export default App;
```

### Event Demonstration

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from '@nutui/nutui-biz';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = [
    'JD Express',
    'Handle with care',
    'weekend delivery',
    'Before delivery, you need to call in advance',
    'If there is no one at home, you can call and place it at the door'
  ];
  const onChange = (val: string) => {
    console.log('onChange', val);
  };
  const onOpen = () => {
    Toast.text('onOpen');
  };
  const onClickTag = (val: string) => {
    console.log('onClickTag', val);
    Toast.text(`onClickTag:${val}`);
  };
  const onClickOverlay = (val: string) => {
    console.log('onClickOverlay', val);
  };
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="Order Remarks" desc={mark ? mark : 'Please enter remarks'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        recommendTags={tagArr}
        onOpen={onOpen}
        onClickOverlay={onClickOverlay}
        onClickTag={onClickTag}
        onChange={onChange}
        onClose={(e) => {
          Toast.text(`onClose:${e}`);
          setShow(false);
        }}
        onSubmit={(e) => {
          Toast.text(`onSubmit:${e}`);
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
export default App;
```

:::
## API

### Props

| 字段                | 说明                 | 类型     | 默认值           |
| ------------------- | -------------------- | -------- | ---------------- |
| visible             | Whether to display pop-up window         | boolean  | `false`          |
| closeOnClickOverlay | Click whether the mask can be closed | boolean  | `true`          |
| maxLength           | Note content length limit     | number   | `50`             |
| placeholderText     | Placeholder when input box is empty   | string   | `Please enter the content of the remarks` |
| title               | Main title of pop-up window         | ReactNode   | `Order Remarks`       |
| tagTitle            | Tag content title         | ReactNode   | `Recommended Tags`       |
| remark              | Remark content             | string   | -               |
| submitText          | Submit button copy         | string   | `Confirm`           |
| recommendTags       | Tag render data     | string[] | `[]`             |

## Events

| 字段           | 说明               | 回调参数     |
| -------------- | ------------------ | ------------ |
| onClickOverlay | Triggered when clicking the pop-up mask | Current remarks |
| onClose        | Triggered when the pop-up layer is closed   | Current remarks |
| onOpen         | Trigger when the pop-up layer is opened   | - |
| onChange       | Triggered when the input content changes | Current remarks |
| onClickTag     | Triggered when the tag is clicked     | `tag:string,index:numer,innerMarkStr:string` |
| onSubmit       | Click the submit button to trigger   | Current remarks |