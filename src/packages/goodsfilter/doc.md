#  GoodsFilter 商品筛选

### 介绍

适用于搜索结果页中，对商品进行筛选。

### 安装

``` javascript
import { GoodsFilter } from '@nutui/nutui-biz';
```

## 代码演示

### 基础用法
```js
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';
import Data from "./GoodsFilter.js";

const App = () => {
  const [base, setBase] = useState(false)
  const [data, setDate] = useState({
    priceRanges: Data.priceRanges,
    filterAttrs: Data.filterAttrs,
    goodsAttrs: Data.goodsAttrs
  })
  // 选中属性
  const selectedAttrs = (attrs, value) => {
    console.log('选中商品属性', attrs, value)
  }

  // 价格选择
  const selectedPrice = (prices)=>{
    console.log('价格选择')
  }

  // 查看全部品牌
  const showAllAttrsHandle = (attrs)=>{
    console.log(attrs)
  }

  // 选择地址
  const updateAddress = ()=>{
    showSecondPopup.value = true
  }
  return <>
    <Cell title="点击进行商品筛选" desc="" onClick="() => { setBase(true) }"></Cell>
    <GoodsFilter
      visible={base}
      priceRanges={priceRanges}
      goodsAttrs={goodsAttrs}
      filterAttrs={filterAttrs}
      onSelectedGoodsAttrs={selectedAttrs}
      onSelectedPrice={selectedPrice}
      onShowAllAttrsHandle={showAllAttrsHandle}
      onUpdateAddress={updateAddressOne}
    >
    </GoodsFilter>
  </>
}
```

### 设置默认值
```js
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { GoodsFilter } from '@nutui/nutui-biz';
import Data from "./GoodsFilter.js";

const App = () => {
  const [base, setBase] = useState(false)
  const [data, setDate] = useState({
    selectedValue: {},
    priceRanges: Data.priceRanges,
    filterAttrs: Data.filterAttrs,
    goodsAttrs: Data.goodsAttrs,
    beforeSelected: (done) => { done() },
    addressList: []
  })
  // 选中属性
  const selectedAttrs = (attrs, value) => {
    console.log('选中商品属性', attrs, value)
  }

  // 价格选择
  const selectedPrice = (prices)=>{
    console.log('价格选择')
  }

  // 查看全部品牌
  const showAllAttrsHandle = (attrs)=>{
    console.log(attrs)
  }

  // 选择地址
  const updateAddress = ()=>{
    showSecondPopup.value = true
  }
  return <>
    <Cell title="点击进行商品筛选" desc="" onClick="() => { setBase(true) }"></Cell>
    <GoodsFilter
      modelValue={selectedValue}
      visible={base}
      priceRanges={priceRanges}
      goodsAttrs={goodsAttrs}
      filterAttrs={filterAttrs}
      notInFold={[1,2]}
      beforeSelected={beforeSelected}
      onSelectedGoodsAttrs={selectedAttrs}
      onSelectedPrice={selectedPrice}
      onShowAllAttrsHandle={showAllAttrsHandle}
      onUpdateAddress={updateAddressOne}
    >
    </GoodsFilter>
  </>
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue         | 用于设置选中值               | Object | -                |
| visible        | 是否展开                         | boolean | false               |
| priceRanges | 价格区间模块，推荐价格列表     | Array |-  |
| filterAttrs    | 配置‘配送地址’下面的筛选项   | Array |       -       |
| goodsAttrs    | 配置商品属性筛选项       | Array |          -    |
| addressTitle    | 配置‘配送地址’文案      | string |        -      |
| selectedAddress    | 选中地址        | string |           -   |
| priceRangeTitle    | 配置‘价格区间’文案      | string |     -         |
| confirmText    | 配置‘确定’文案       | string |        -      |
| resetText    | 配置‘重置’文案       | string |      -        |
| not-in-fold    | 商品属性是否全部折叠    | - | 'none' |
| showAttrsRows    | 每类商品属性，最多可展示的行数，超出内容显示 overAttrsText 设置的文案 | Number |  4|
| over-attrs-text    | 每类商品属性，最多可展示的行数，超出内容显示‘全部’ | Function | (attrs)=> `全部${attrs.title}` |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onSelectedGoodsAttrs  | 点击商品属性筛选时触发 | event: Event |
| onConfirm  | 点击确定时触发 | event: Event |
| onCancle  | 点击重置时触发 | event: Event |
| onReset  | 点击重置时触发 | event: Event |
| onSelectedAttrs  | 点击地址下方的筛选时触发 | event: Event |
| onSelectedPrice  | 点击推荐价格时触发 | event: Event |
| onbeforeSelected   | 在选中属性前进行的操作，调用 done() 函数进行选中 | done: Function |