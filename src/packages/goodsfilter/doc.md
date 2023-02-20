#  GoodsFilter 商品筛选

### 介绍

适用于搜索结果页中，对商品进行筛选。依赖组件：Popup、Icon

### 安装

``` javascript
import { createApp } from 'vue';
import { GoodsFilter } from '@nutui/nutui-biz';
import { Popup, Icon } from '@nutui/nutui';

const app = createApp();
app.use(GoodsFilter);
app.use(Popup);
app.use(Icon);
```

## 代码演示

### 基础用法
```html
<nut-cell title="点击进行商品筛选" desc="" @click="base = true"></nut-cell>
<nutbiz-goodsfilter
    v-model:visible="base"
    :priceRanges="priceRanges"
    :goodsAttrs="goodsAttrs"
    :filterAttrs="filterAttrs"
    @selectedGoodsAttrs = 'selectedAttrs'
    @selectedPrice = 'selectedPrice'
    @showAllAttrsHandle = 'showAllAttrsHandle'
    @updateAddress = 'updateAddressOne'
>
</nutbiz-goodsfilter>
```
```javascript
// GoodsFilter.js 文件点击右上角‘下载数据结构’下载
import Data from "./GoodsFilter.js";

 setup() {
    const base = ref(false);
    const data = reactive({
      priceRanges:Data.priceRanges,
      filterAttrs:Data.filterAttrs,
      goodsAttrs:Data.goodsAttrs
    })

    onMounted(() => {
        // 模拟数据请求
      setTimeout(()=>{
        Object.assign(data,Data)
      },500)
    });

    // 选中属性
    const selectedAttrs = (attrs,value) => {
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

   return {
      base,
      ...toRefs(data),
      selectedAttrs,
      selectedPrice,
      showAllAttrsHandle,
      updateAddress
    };
  }
```

### 更新地址
```html
<nut-cell title="点击进行商品筛选" desc="" @click="base = true"></nut-cell>
<nutbiz-goodsfilter
    v-model:visible="base"
    :selectedAddress='selectedAddressInfo'
    :showSecondPopup='showSecondPopup'
    :priceRanges="priceRanges"
    :goodsAttrs="goodsAttrs"
    :filterAttrs="filterAttrs"
    :notInFold='[1,2]'
    @selectedGoodsAttrs = 'selectedAttrs'
    @selectedPrice = 'selectedPrice'
    @showAllAttrsHandle = 'showAllAttrsHandle'
    @updateAddress = 'updateAddress'
> 
    <!-- 地址选择 -->
    <template #second-level>
        <div class="nutbiz-goodsfilter-title" >
            <nut-icon name="close" size="12px" class="nutbiz-goodsfilter__second-icon" @click="secondBack"></nut-icon>
            <div style="text-align:center">配送至</div>
        </div>
        <div class="nutbiz-goodsfilter-content" >
            <div class="nutbiz-goodsfilter-addresslist">
            <div class="nutbiz-goodsfilter-addresslist-item" v-for="d in addressList" :key="d.id" @click="selectedAddress(d)">d.detail</div>
            </div>
        </div>
    </template>
</nutbiz-goodsfilter>
```
```javascript
// GoodsFilter.js 文件点击右上角‘下载数据结构’下载
import Data from "./GoodsFilter.js";

 setup() {
    const base = ref(false);
    const data = reactive({
      priceRanges:Data.priceRanges,
      filterAttrs:Data.filterAttrs,
      goodsAttrs:Data.goodsAttrs,
      beforeSelected:()=>{},
      addressList:[]
    })

    const selectedAddressInfo = ref('')
    const showSecondPopup = ref(false)

    onMounted(() => {
        // 模拟数据请求
      setTimeout(()=>{
        Object.assign(data,Data)
      },500)
    });

    // 选中属性
    const selectedAttrs = (attrs,value) => {
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

    const secondBack = ()=>{
      showSecondPopup.value = false
    }

    const selectedAddress = (d)=>{
      selectedAddressInfo.value = d.detail
      showSecondPopup.value = false
    }

   return {
      base,
      selectedAddress,
      showSecondPopup,
      ...toRefs(data),
      selectedAttrs,
      selectedPrice,
      showAllAttrsHandle,
      updateAddress,
      secondBack,
      selectedAddressInfo
    };
  }
```

### 设置默认值
```html
<nut-cell title="点击进行商品筛选" desc="" @click="base = true"></nut-cell>
<nutbiz-goodsfilter
    v-model="selectedValue"
    v-model:visible="base"
    :selectedAddress='selectedAddressInfo'
    :showSecondPopup='showSecondPopup'
    :priceRanges="priceRanges"
    :goodsAttrs="goodsAttrs"
    :filterAttrs="filterAttrs"
    :notInFold='[1,2]'
    :beforeSelected='beforeSelected'
    @selectedGoodsAttrs = 'selectedAttrs'
    @selectedPrice = 'selectedPrice'
    @showAllAttrsHandle = 'showAllAttrsHandle'
    @updateAddress = 'updateAddress'
>
    <!-- 地址选择 -->
    <template #second-level>
    <div class="nutbiz-goodsfilter-title" >
        <nut-icon name="close" size="12px" class="nutbiz-goodsfilter__second-icon" @click="secondBack"></nut-icon>
        <div style="text-align:center">配送至</div>
    </div>
    <div class="nutbiz-goodsfilter__second-content" >
        <div class="nutbiz-goodsfilter-addresslist">
        <div class="nutbiz-goodsfilter-addresslist-item" v-for="d in addressList" :key="d.id" @click="selectedAddressOne(d)">d.detail</div>
        </div>
    </div>
    </template>
</nutbiz-goodsfilter>
```
```javascript
// GoodsFilter.js 文件点击右上角‘下载数据结构’下载
import Data from "./GoodsFilter.js";

 setup() {
    const base = ref(false);
    const data = reactive({
      selectedValue:{},
      priceRanges:Data.priceRanges,
      filterAttrs:Data.filterAttrs,
      goodsAttrs:Data.goodsAttrs,
      beforeSelected:()=>{},
      addressList:[]
    })

    const selectedAddressInfo = ref('')
    const showSecondPopup = ref(false)

    onMounted(() => {
        // 模拟数据请求
      setTimeout(()=>{
        Object.assign(data,Data)
      },500)
    });

    // 选中属性
    const selectedAttrs = (attrs,value) => {
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

    const secondBack = ()=>{
      showSecondPopup.value = false
    }

    const selectedAddress = (d)=>{
      selectedAddressInfo.value = d.detail
      showSecondPopup.value = false
    }

   return {
      base,
      selectedAddress,
      showSecondPopup,
      ...toRefs(data),
      selectedAttrs,
      selectedPrice,
      showAllAttrsHandle,
      updateAddress,
      secondBack,
      selectedAddressInfo
    };
  }
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue         | 用于设置选中值               | Object | -                |
| v-model:visible        | 是否展开                         | Boolean | false               |
| show-second-popup         | 设置二级弹层是否展示 | Boolean | false               |
| price-ranges | 价格区间模块，推荐价格列表     | Array |-  |
| filter-attrs    | 配置‘配送地址’下面的筛选项   | Array |       -       |
| goods-attrs    | 配置商品属性筛选项       | Array |          -    |
| address-title    | 配置‘配送地址’文案      | String |        -      |
| selected-address    | 选中地址        | String |           -   |
| price-range-title    | 配置‘价格区间’文案      | String |     -         |
| confirm-text    | 配置‘确定’文案       | String |        -      |
| reset-text    | 配置‘重置’文案       | String |      -        |
| not-in-fold    | 商品属性是否全部折叠    | - | 'none' |
| before-selected   | 在选中属性前进行的操作，调用 done() 函数进行选中 | Function | (done)=>{done()} |
| show-attrs-rows    | 每类商品属性，最多可展示的行数，超出内容显示 overAttrsText 设置的文案 | Number |  4|
| over-attrs-text    | 每类商品属性，最多可展示的行数，超出内容显示‘全部’ | Function | (attrs)=> `全部${attrs.title}` |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| selectedGoodsAttrs  | 点击商品属性筛选时触发 | event: Event |
| confirm  | 点击确定时触发 | event: Event |
| cancle  | 点击重置时触发 | event: Event |
| reset  | 点击重置时触发 | event: Event |
| selectedAttrs  | 点击地址下方的筛选时触发 | event: Event |
| updateAddress  | 点击修改地址时触发 | event: Event |
| selectedPrice  | 点击推荐价格时触发 | event: Event |
| showAllAttrsHandle  | 点击全部属性时触发 | event: Event |


### Slots

| 事件名 | 说明           | 
|--------|----------------|
| second-level  | 用于展示二级 Popup 弹层中的内容 | 