#  GoodsFilter

### Intro

It is suitable for filtering products on the search result page.

### Install

``` javascript
import { GoodsFilter } from '@nutui/nutui-biz';
```

## Code Demo

### Basic Usage
:::demo
```tsx
import React, { useState,useEffect } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';

const App = () => {
  const [state, setState] = useState({
    priceRanges: [],
    goodsAttrs: [],
    filterAttrs: []
  })
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    fetch('https://storage.360buyimg.com/nutui/3x/data.json')
      .then((response) => response.json())
      .then((res) => {
        setState(res)
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
  },[])
  return (
    <>
      <Cell onClick={() => { setVisible(true) }}>Show GoodsFilter Popup</Cell>
      <GoodsFilter
        visible={visible}
        priceRanges={state.priceRanges}
        goodsAttrs={state.goodsAttrs}
        filterAttrs={state.filterAttrs}
        onClose={() => { setVisible(false) }}
      ></GoodsFilter>
    </>
  );
};
export default App;
```
:::

### Custom Icon
:::demo
```tsx
import React, { useState,useEffect } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';

const App = () => {
  const [state, setState] = useState({
    priceRanges: [],
    goodsAttrs: [],
    filterAttrs: []
  })
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    fetch('https://storage.360buyimg.com/nutui/3x/data.json')
      .then((response) => response.json())
      .then((res) => {
        setState(res)
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
  },[])
  return (
    <>
      <Cell onClick={() => { setVisible(true) }}>Show GoodsFilter Popup</Cell>
      <GoodsFilter
        visible={visible}
        priceRanges={state.priceRanges}
        goodsAttrs={state.goodsAttrs}
        filterAttrs={state.filterAttrs}
        icon="heart"
        onClose={() => { setVisible(false) }}
      ></GoodsFilter>
    </>
  );
};
export default App;
```
:::

### MaxLine
:::demo
```tsx
import React, { useState,useEffect } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';

const App = () => {
  const [state, setState] = useState({
    priceRanges: [],
    goodsAttrs: [],
    filterAttrs: []
  })
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    fetch('https://storage.360buyimg.com/nutui/3x/data.json')
      .then((response) => response.json())
      .then((res) => {
        setState(res)
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
  },[])
  return (
    <>
      <Cell onClick={() => { setVisible(true) }}>Show GoodsFilter Popup</Cell>
      <GoodsFilter
        visible={visible}
        priceRanges={state.priceRanges}
        goodsAttrs={state.goodsAttrs}
        filterAttrs={state.filterAttrs}
        maxLine={3}
        onClose={() => { setVisible(false) }}
      ></GoodsFilter>
    </>
  );
};
export default App;
```
:::

### Click Event
:::demo
```tsx
import React, { useState,useEffect } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';

const App = () => {
  const [state, setState] = useState({
    priceRanges: [],
    goodsAttrs: [],
    filterAttrs: []
  })
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    fetch('https://storage.360buyimg.com/nutui/3x/data.json')
      .then((response) => response.json())
      .then((res) => {
        setState(res)
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
  },[])
  return (
    <>
      <Cell onClick={() => { setVisible(true) }}>Show GoodsFilter Popup</Cell>
      <GoodsFilter
        visible={visible}
        priceRanges={state.priceRanges}
        goodsAttrs={state.goodsAttrs}
        filterAttrs={state.filterAttrs}
        onClose={() => { setVisible(false) }}
        onReset={() => { console.log('onReset')}}
        onConfirm={(res) => { console.log('onConfirm', res) }}
        onClickAddress={() => {
          console.log('onClickAddress')
        }}
        onSelectedAttrs={(attr: any, selected: boolean, selectedAttrs: any) => {
          console.log('onSelectedAttrs', attr)
          console.log('selected', selected)
          console.log('selectedAttrs', selectedAttrs)
        }}
        onSelectedPrice={(range: any) => {
          console.log('onSelectedPrice', range)
        }}
      ></GoodsFilter>
    </>
  );
};
export default App;
```
:::

## API

### Props

| Attribute         |     Description                  | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| visible        | Expand or not                         | boolean | `false`               |
| confirmText    | Display confirm text       | string |        `确定`      |
| resetText    | Display reset text       | string |      `重置`        |
| priceRangeTitle    | Display price ranges text      | string |     `价格区间`         |
| addressTitle    | Display address text      | string |        `配送地址`      |
| selectedAddress    | Display selected address text        | string |           -   |
| resetDisable | Disable the reset button | boolean | `false` |
| priceRanges | price ranges list     | Array |-  |
| filterAttrs    | filter attrs   | Array |       -       |
| goodsAttrs    | goods attrs       | Array |          -    |
| specStyle  | item style | CSSProperties | - |
| selectedSpecShow | Show selected attrs or not | boolean | `true` |
| maxLine    | Display lines in default | number | 2 |
| icon | icon | string | 'arrow-up' |
| bottom | Operations in the bottom | ReactNode | - |

### Events

| Name | Description           | Attrs     |
|--------|----------------|--------------|
| onClose | close the popup | - |
| onReset  | click the reset button | - |
| onConfirm  | click the confirm button | `res` |
| onClickAddress | click to change address | - |
| onSelectedAttrs  | click filters | `attr: any, selected: boolean, selectedAttrs: Array<any>` |
| onSelectedPrice  | click price ranges | `range: any` |
| onBeforeSelected   | before click goods attrs | `done: Function, selectedValue: any` |
| onSelectedGoodsAttr | click goods attrs | `attrs: any, value: any` |
