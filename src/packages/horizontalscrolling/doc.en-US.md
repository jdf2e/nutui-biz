#  HorizontalScrolling

### Intro

Suitable for horizontal scrolling display, applicable scenarios include order lists, etc.

### Install
``` javascript
import { Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell
      className="nut-cell-right-zero"
    >
      <HorizontalScrolling>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

### Mask Position

The position of the mask layer can be controlled by `maskPosition`

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell
      className="nut-cell-left-zero"
    >
      <HorizontalScrolling maskPosition="left">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

### Overlay Shadow Style

Mask layer shadow style `maskShadowType` has 4 types: shadow (shadow), triangle (shadow with triangular arrow), transparent (translucent shadow), none (none)

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell
      className="nut-cell-left-zero"
    >
      <HorizontalScrolling
        maskPosition="left"
        maskShadowType="shadow"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

### Overlay Translucent Shadow Style


The distance between the scrollable content and the mask side of the container defaults to `maskWidth` width, and can also be set via `maskDistance`

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell
      className="nut-cell-right-zero"
    >
      <HorizontalScrolling        
        maskShadowType="transparent"  
        maskWidth={50}
        maskDistance={10}
        maskContent={
        <div className="nut-biz-horizontalscrolling__mask-box buy-price">
          <div><i>$</i>199</div>
          <div>Total 3 pieces</div>
        </div>
      }
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

### Custom Mask Content

Customize the mask content through `maskContent`

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell
      className="nut-cell-left-zero"
    >
      <HorizontalScrolling 
        maskShadowType="shadow" 
        maskPosition="left" 
        maskWidth={40}
        className="custom-float"
        maskContent={
          <div className="more-box">
            More
          </div>
        }
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

### No Mask

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  return (
    <Cell>
      <HorizontalScrolling 
        showMask={false} 
        maskPosition="left"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::


### Event Demo

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';

const App = () => {

  const onChange = () => {
    console.log('change')
  };

  const onScroll = () => {
    console.log('scroll right')
  }

  return (
    <Cell>
      <HorizontalScrolling 
        maskShadowType="shadow" 
        onClickMask={onChange}
        onScrollRight={onScroll}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={item}
            >
              <img
                src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
              />
            </div>
          )
        })}
      </HorizontalScrolling>
    </Cell>
  );
};
export default App;
```
:::

## API

### Props

| Attribute  | Description     | Type    | Default     |
|---------|--------------------------------------------|---------|---------|
| showMask        | Whether to show a mask layer    | boolean | `true`         |
| maskPosition    | Mask layer display position (eg: `left`, `right`) | string | `right` |
| maskShadowType  | Mask shadow form (eg `none`: none, `triangle`: triangle, `shadow`: shadow, `transparent`: translucent) | string | `triangle`    |
| maskWidth       | Mask layer width, the default unit is `px` | string \| number | `100px`              |
| maskDistance    | The distance between the scroll content and the overlay side of the container, the default unit is `px`    | string \| number | `0`              |
| iconProps       | [Props of the Icon component](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)    | iconProps | - |
| maskContent     | Custom mask content         | ReactNode | - |

### Events

| Attribute      | Description               | Arguments   |
|--------------- | ----- | -----  |
| onClickMask    | Triggered when the mask layer is clicked | - |
| onScrollRight  | Fired when swiping to the right | - |
| onScrollChange | Get the scrolling distance when sliding  | val |
