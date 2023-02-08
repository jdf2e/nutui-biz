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
import { OrderRemark } from './orderremark';
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
```

:::

### With Tag

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
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
        recommendTags={translated.tagArr}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};
```

:::

### Custom Copywriting

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
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
        recommendTags={translated.tagArr}
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
```

### Event Demonstration

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
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
        recommendTags={translated.tagArr}
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
```

:::
