#  AddressList 地址列表

### Intro

Commonly used in address management pages, mainly used to display and operate address lists.

### Install

```javascript
import { AddressList } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

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

### Long Press Function


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

### Swipe Function


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


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| data   | Address array                                 | Array<IDataInfo>  | -         |
| longPress   | Long Press Function                                 | boolean  | `false`         |
| swipeEdition   | Swipe right                                 | boolean  | `false`         |
| showBottomButton   | Whether to show the bottom button                                 | boolean  | `true`         |
| dataMapOptions   | 若想自定义 key 值，可以通过 dataMapOptions 设置映射关系                                 | object  | {}         |


### Events
| Event | Description | Arguments |
|----- | ----- | -----  |
| onDelIcon | Click the delete icon |  event: Event,item |
| onEditIcon | Click the edit icon |  event: Event,item |
| onClickItem | Click on each item in the address list |  event: Event,item |
| onAdd | Click the Add Address button at the bottom |  event: Event,item |
| onLongCopy | Click the Copy Address button |  event: Event,item |
| onLongSet | Click the Set Default button |  event: Event,item |
| onLongDel | Click the Delete Address button |  event: Event,item |
| onSwipeDel | Default right swipe delete button |  event: Event,item |

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
