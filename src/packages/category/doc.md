#  Category 商品分类

### 介绍

用于展示商品分类的组件。

### 安装

```javascript
import { Category } from '@nutui/nutui-biz';
```

## 代码演示

### 经典用法

:::demo

```ts

import  React from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {

  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        console.log(res,res.categoryInfo.category)
        setCategory(res.categoryInfo.category)
      })
      .catch((err) => console.log("Oh, error", err));
  };

  const onClassifyClick = (index:number)=>{
    console.log('一级分类',index)
  }

  const onPanelThirdClick = (sku:any)=>{
    console.log('三级分类跳转', sku)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Category category={category} onClick={onClassifyClick} onPanelThirdClick={onPanelThirdClick}></Category>
  );
};
export default App;

```
:::

### 隐藏图片

通过设置 `showSkuImg` 属性将不展示图片

:::demo

```ts

import  React from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {

  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        console.log(res,res.categoryInfo.category)
        setCategory(res.categoryInfo.category)
      })
      .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Category category={category} showSkuImg={false}></Category>
  );
};
export default App;

```
:::

### 横向快捷导航

通过设置`showSecondLevelQuickNav`，在顶部会展示横向二级分类导航，便于快速定位到二级分类。

:::demo

```ts

import  React from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {

  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        console.log(res,res.categoryInfo.category)
        setCategory(res.categoryInfo.category)
      })
      .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
     <Category category={category} showSecondLevelQuickNav={true} ></Category>
  );
};
export default App;

```
:::

## API


### Props

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| category   | 分类商品信息                                 | Category[]  | `[]`          |
| showSecondLevelQuickNav   | 是否展示二级分类快捷导航            | Boolean  | `false`          |
| isLeftAutoSlide   | 左侧导航，即一级分类，选中值是否居中展示     | Boolean  | `true`          |
| showSkuImg | 三级分类图片是否展示 | Boolean | `true`        |
| isLazy | 三级分类图片是否懒加载 | Boolean | `true`        |
| loadingImg | 设置加载中提示图片 | String | -       |
| errorImg | 设置错误提示图片 | String | -        |


### Event
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onChange | 左侧一级导航点击触发 |  category |
| onPanelNavClick | 右侧二级分类快捷导航点击触发 | 序列值 |
| onPanelThirdClick | 右侧三级分类点击触发 | CategoryPaneItem |


### Category 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| catId   | 一级分类 id                                 | string \| number  |
| catName   | 一级分类名称            | string  | 
| children   | 二级分类内容    | CategoryPane  | 


### CategoryPane 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| catId   | 二级分类 id                                 | string \| number  |
| catName   | 二级分类名称            | string  | 
| children   | 三级分类内容    | CategoryPaneItem  | 

### CategoryPaneItem 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| catId   | 三级分类 id                                 | string \| number  |
| catName   | 三级分类名称            | string  | 
| backImg   | 三级分类展示图片    | string  | 