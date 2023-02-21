#  HorizontalScrolling

### Intro

Suitable for horizontal scrolling display.

### Install
``` javascript
import { Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
```

## Code

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
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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
        maskIcon="more-x"
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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


The distance from the scrolling content to the mask side of the container is `maskWidth` by default, and can also be set via `maskDistance`

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
        maskWidth="50px"
        maskDistance="10px"
        maskContent={
        <div className="nut-biz-horizontalscrolling__mask-box buy-price">
          <div><i>$</i>199</div>
          <div>Total 3 pieces</div>
        </div>
      }
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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
        maskWidth="40px" 
        className="custom-float"
        maskContent={
          <div className="more-box">
            More
          </div>
        }
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div   
              className="nut-biz-horizontalscrolling__contain-item"
              key={index}
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

| Event  | Description     | Type    |
|---------|--------------------------------------------|---------|
| showMask        | whether to show a mask layer    | Boolean | true         |
| maskPosition    | Mask layer display position (eg: `left`, `right`)      | String | right                |
| maskShadowType  | Mask shadow form (eg `none`: none, `triangle`: triangle, `shadow`: shadow, `transparent`: translucent) | String | triangle    |
| maskWidth       | mask layer width            | String | '100px'              |
| maskDistance    | The width of the scroll content from the container        | String | 0              |
| showScrollBar   | whether to show scroll bar                     | Boolean | false             |
| maskIcon        | Custom icon `name` value    | String | 'category' |
| maskContent     | Custom mask content         | String \| React.ReactNode | "More" |

### Events

| Attribute      | Description               | Arguments   |
|--------------- | ----- | -----  |
| onClickMask    | Triggered when the mask layer is clicked | - |
| onScrollRight  | Fired when swiping to the right | - |
