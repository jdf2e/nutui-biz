#  Category 

### Intro

Components used to display product categories.

### Install

```javascript
import { Category } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts

import  React,{useEffect,useState} from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {
  const [category, setCategory] = useState();
  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
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

### Hide Image

By setting the `showSkuImg` property will not show the image

:::demo

```ts

import  React,{useEffect,useState} from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {
  const [category, setCategory] = useState();
  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
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

### Quick Nav

By setting `showSecondLevelQuickNav`, the horizontal secondary category navigation will be displayed at the top, which is convenient for quickly locating to the secondary category.

:::demo

```ts

import  React,{useEffect,useState} from 'react';
import { Category } from '@nutui/nutui-biz';

const App = () => {
  const [category, setCategory] = useState();
  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
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

| Attribute         | Description                             | Type   | Default          |
|---------|--------------------------------------------|---------|-----------|
| category   | Classified product information                                 | Category[]  | `[]`          |
| showSecondLevelQuickNav   | Whether to display the secondary classification shortcut navigation           | boolean  | `false`          |
| isLeftAutoSlide   | Left navigation, that is, first-level classification, whether the selected value is displayed in the center    | boolean  | `true`          |
| showSkuImg | Left navigation, that is, first-level classification, whether the selected value is displayed in the center | boolean | `true`        |
| isLazy | Whether the three-level classification pictures are lazy loaded | boolean | `true`        |
| loadingImg | Whether the three-level classification pictures are lazy loaded | string | -       |
| errorImg | Set error prompt picture | string | -        |
| showPullUp | Whether to display Pull up to continue browsing | boolean | `false`      |
| pullUpText | Custom Pull up to continue browsing | ReactNode | `向上拉继续浏览`      |


### Events
| Event  | Description     | Arguments    |
|----- | ----- | -----  |
| onChange | triggered by clicking on the left level navigation | category |
| onPanelNavClick | Triggered by clicking on the shortcut navigation of the second-level category on the right | Sequence value |
| onPanelThirdClick | Triggered by clicking on the third-level category on the right | CategoryPaneItem |


### Category 

| Attribute  | Description     | Type    |
|---------|--------------------------------------------|---------|
| catId   | first class category id                                | string \| number  |
| catName   | Classification name            | string  | 
| children   | Secondary classification content    | CategoryPane  | 


### CategoryPane 

| Attribute  | Description     | Type    |
|---------|--------------------------------------------|---------|
| catId   | Secondary classification id                               | string \| number  |
| catName   | Secondary classification name           | string  | 
| children   | Three-level classification content    | CategoryPaneItem  | 

### CategoryPaneItem 

| Attribute  | Description     | Type    |
|---------|--------------------------------------------|---------|
| catId   | Three-level classification id             | string \| number  |
| catName   | Three-level classification name            | string  | 
| backImg   | Three-level classification display pictures   | string  | 