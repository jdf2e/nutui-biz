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
      id: 3,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    {
      id: 4,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
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
  const data = [
    {
      id: 3,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    {
      id: 4,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
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
  const data = [
    {
      id: 3,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    {
      id: 4,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
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

  const addAddress = ()=>{
    console.log('Click To Add');
  }

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
| data   | 地址数组                                 | Array<IDataInfo>  | -         |
| longPress   | 长按功能                                 | boolean  | `false`         |
| swipeEdition   | 右滑功能                                 | boolean  | `false`         |
| showBottomButton   | 是否展示底部按钮                                 | boolean  | `true`         |
| dataMapOptions   | 若想自定义 key 值，可以通过 dataMapOptions 设置映射关系                                 | object  | {}         |


### Events
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

### IDataInfo 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| id   | 地址 id                                | number \| string |
| addressName   | 地址名            | string  | 
| phone   | 联系电话            | string  | 
| defaultAddress   | 是否为默认地址            | boolean  | 
| fullAddress   | 详细地址            | string  | 


### data 数组中每一项 与 dataMapOptions 对象的参数磨平

下面是 data 数组中每一项基础数据结构。

```javascript
const dataInfo = {
  id: 2, //地址id
  addressName: "姓名", //地址姓名
  phone: "123****4567", //联系方式
  defaultAddress: false, //是否是默认
  fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试", //详细地址
};
```

组件内优先获取基础数据结构中定义的字段，若想自定义 key 值，可以通过 dataMapOptions 设置映射关系。

```javascript
const dataMapOptions = {
  id: "testid",
  addressDetail: "testaddressDetail",
  addressName: "testaddressName",
};
```
