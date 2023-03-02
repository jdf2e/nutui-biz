# OrderRemark 订单备注

### 介绍

常见于订单提交页与订单售后页面，用以添加备注信息

### 安装

```javascript
import { OrderRemark } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

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
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
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

### 带有标签

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = ['京东快递', '轻拿轻放', '周末配送', '配送前，需提前电话联系', '如家中无人，可电话后，放置于门口'];
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
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
```

:::

### 自定义文案

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = ['京东快递', '轻拿轻放', '周末配送', '配送前，需提前电话联系', '如家中无人，可电话后，放置于门口'];
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        recommendTags={tagArr}
        submitText={'提交'}
        placeholderText={'请填写备注信息'}
        title={'备注信息'}
        tagTitle={'快捷选择'}
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

### 事件演示

:::demo

```tsx
import React, { useState } from 'react';
import { OrderRemark } from './orderremark';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = ['京东快递', '轻拿轻放', '周末配送', '配送前，需提前电话联系', '如家中无人，可电话后，放置于门口'];
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
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
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
```

:::

## API

### Props

| 字段                | 说明                 | 类型     | 默认值           |
| ------------------- | -------------------- | -------- | ---------------- |
| visible             | 是否显示弹窗         | boolean  | `false`          |
| closeOnClickOverlay | 点击遮罩是否可以关闭 | boolean  | `false`          |
| maxLength           | 备注内容长度限制     | number   | `50`             |
| placeholderText     | 输入框为空时占位符   | string   | `请输入备注内容` |
| title               | 弹窗的主标题         | string   | `订单备注`       |
| tagTitle            | 标签内容标题         | string   | `推荐标签`       |
| remark              | 备注信息             | string   | --               |
| submitText          | 提交按钮文案         | string   | `提交`           |
| recommendTags       | 标签渲染数据     | string[] | `[]`             |

## Events

| 字段           | 说明               | 回调参数     |
| -------------- | ------------------ | ------------ |
| onClickOverlay | 点击弹窗遮罩时触发 | 当前备注信息 |
| onClose        | 弹出层关闭时触发   | 当前备注信息 |
| onOpen         | 弹出层打开时触发   | 当前备注信息 |
| onChange       | 输入内容改变时触发 | 当前备注信息 |
| onClickTag     | 点击标签时触发     | 当前标签信息 |
| onSubmit       | 点击提交按钮触发   | 当前备注信息 |
