#  GoodsFilter 商品筛选

### 介绍

适用于搜索结果页中，对商品进行筛选。

### 安装

``` javascript
import { GoodsFilter } from '@nutui/nutui-biz';
```

## 代码演示

### 基础用法
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
      <Cell onClick={() => { setVisible(true) }}>点击进行商品筛选</Cell>
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

### 自定义图标
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
      <Cell onClick={() => { setVisible(true) }}>点击进行商品筛选</Cell>
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

### 设置默认展示行数
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
      <Cell onClick={() => { setVisible(true) }}>点击进行商品筛选</Cell>
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

### 点击事件
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
      <Cell onClick={() => { setVisible(true) }}>点击进行商品筛选</Cell>
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

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| visible        | 是否展开                         | boolean | `false`               |
| confirmText    | 配置`确定`文案       | string |        `确定`      |
| resetText    | 配置`重置`文案       | string |      `重置`        |
| priceRangeTitle    | 配置`价格区间`文案      | string |     `价格区间`         |
| addressTitle    | 配置`配送地址`文案      | string |        `配送地址`      |
| selectedAddress    | 选中地址，为空时显示`您还没有选中的地址`         | string |           ''  |
| resetDisable | 重置按钮是否置灰 | boolean | `false` |
| priceRanges | 价格区间模块，推荐价格列表     | Array |-  |
| filterAttrs    | 配置`配送地址`下面的筛选项   | Array |       -       |
| goodsAttrs    | 配置商品属性筛选项       | Array |          -    |
| specStyle  | 每个规格项的样式 | CSSProperties | - |
| selectedSpecShow | 选中项是否显示 | boolean | `true` |
| maxLine    | 每类商品属性，最多可展示的行数 | number | 2 |
| icon | 展开一类规格项的图标 | string |`arrow-up`|
| bottom | 底部按钮操作栏 | ReactNode | - |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onClose | 关闭商品筛选弹窗 | - |
| onReset  | 点击重置时触发 | - |
| onConfirm  | 点击确定时触发 | res |
| onClickAddress | 点击修改地址 | - |
| onSelectedAttrs  | 点击筛选条件时触发 | attr: any, selected: boolean, selectedAttrs: Array<any> |
| onSelectedPrice  | 点击推荐价格时触发 | range: any |
| onBeforeSelected   | 在选中属性前进行的操作，调用 done() 函数进行选中 | done: Function, selectedValue: any |
| onSelectedGoodsAttr | 点击商品属性筛选时触发 | attrs: any, value: any |