#  AddressList 地址列表

### 介绍

常见于地址管理页面，主要用于进行地址列表的展示以及操作。

### 安装

```javascript
import { AddressList } from '@nutui/nutui-react';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { AddressList } from '@nutui/nutui-biz';

const App = () => {
    const data = [
        {
            testid: 3,
            testaddressName: '姓名',
            phone: '123****4567',
            defaultAddress: false,
            fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
            testid: 4,
            testaddressName: '姓名',
            phone: '123****4567',
            defaultAddress: true,
            fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        }
    ];

      const dataMapOptions = {
        id: 'testid',
        addressDetail: 'testaddressDetail',
        addressName: 'testaddressName'
    };

  const itemClick = () => {
    console.log('Click To Address');
  }

  const delClick = () => {
    console.log('Click To Delete');
  }

  const editClick = () => {
    console.log('Click To Edit');
  }

  const copyClick = ()=>{
    console.log('Click To Copy');
  }

  const setClick = ()=>{
    console.log('Click On Settings');
  }

  const addAddress = ()=>{
    console.log('Click To Add');
  }

  return (
    <AddressList
        data={data}
        showBottomButton={false}
        dataMapOptions={dataMapOptions}
        onDelIcon={delClick}
        onEditIcon={editClick}
        onItemClick={itemClick}
    />
  );
};
export default App;
```

:::

### 长按功能


:::demo

```ts
import  React from "react";
import { AddressList } from '@nutui/nutui-biz';

const App = () => {
  return (
    <AddressList
        data={data}
        longPress={true}
        showBottomButton={false}
        dataMapOptions={dataMapOptions}
        onDelIcon={delClick}
        onEditIcon={editClick}
        onItemClick={itemClick}
        onLongCopy={copyClick}
        onLongSet={setClick}
        onLongDel={delClick}
    />
  );
};
export default App;
```

:::

### 滑动功能


:::demo

```ts
import  React from "react";
import { AddressList } from '@nutui/nutui-biz';

const App = () => {
  return (
    <AddressList
        data={data}
        showBottomButton={true}
        dataMapOptions={dataMapOptions}
        swipeEdition={true}
        onDelIcon={delClick}
        onEditIcon={editClick}
        onItemClick={itemClick}
        onAdd={addAddress}
        onSwipeDel={delClick}
    />
  );
};
export default App;
```

:::



## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| data   | 地址数组                                 | Array  | -         |
| longPress   | 长按功能                                 | Boolean  | `false`         |
| swipeEdition   | 右滑功能                                 | Boolean  | `false`         |
| showBottomButton   | 是否展示底部按钮                                 | Boolean  | `true`         |
| showSelect   | 是否可选择                                 | Boolean  | `false`         |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onDelIcon | 点击删除图标 |  event: Event,item |
| onEditIcon | 点击编辑图标 |  event: Event,item |
| onClickItem | 点击地址列表每一项 |  event: Event,item |
| onAdd | 点击底部添加地址按钮 |  event: Event,item |
| onLongCopy | 点击复制地址按钮，长按功能下点击事件 |  event: Event,item |
| onLongSet | 点击设置默认按钮，长按功能下点击事件 |  event: Event,item |
| onLongDel | 点击删除地址按钮，长按功能下点击事件 |  event: Event,item |
| onSwipeDel | 默认右滑删除按钮，滑动功能下点击事件 |  event: Event,item |
