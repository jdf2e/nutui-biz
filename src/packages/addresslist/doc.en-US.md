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

### Long Press Function


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

### Swipe Function


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


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| data   | Address array                                 | Array  | -         |
| longPress   | Long Press Function                                 | Boolean  | `false`         |
| swipeEdition   | Swipe right                                 | Boolean  | `false`         |
| showBottomButton   | Whether to show the bottom button                                 | Boolean  | `true`         |
| showSelect   | 是否可选择                                 | Boolean  | `false`         |


## Events
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
