#  GoodsFilter

### Intro

It is suitable for filtering products on the search result page.

### Install

``` javascript
import { GoodsFilter } from '@nutui/nutui-biz';
```

## Code Demo

### Basic Usage
```js
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';
import data from "./GoodsFilter.js";

const App = () => {

  const [state, setState] = useState(data)
  const [visiable1, setVisiable1] = useState(false)
  return (
    <>
      <div className='demo'>
        <h2>Basic Usage</h2>
        <Cell onClick={() => { setVisiable1(true) }}>Click to select goods</Cell>
        <GoodsFilter
          visiable={visiable1}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          maxLine={3}
          icon={'heart'}
          onClose={() => { setVisiable1(false) }}
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
      </div>
    </>
  );
};
```


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
