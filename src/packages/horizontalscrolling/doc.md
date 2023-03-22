#  HorizontalScrolling 横向滚动

### 介绍

适用于横向滚动展示，适用场景有订单列表等

### 安装
``` javascript
import { Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  return (
    <div className="demo">
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
    </div>
  );
};
export default App;
```
:::

### 遮罩层位置

可通过 `maskPosition` 控制遮罩层的位置

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  return (
    <div className="demo">
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
    </div>
  );
};
export default App;
```
:::

### 遮罩层阴影样式

遮罩层阴影样式 `maskShadowType` 有 4 种类型：shadow（阴影）、triangle（有三角箭头阴影）、transparent（半透明阴影）、none（无）

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  return (
    <div className="demo">
      <Cell
        className="nut-cell-left-zero"
      >
        <HorizontalScrolling
          maskPosition="left"
          maskShadowType="shadow"
          iconProps={{
            name: "more-x",
            color: "#fa2c19",
            size: "26"
          }}
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
    </div>
  );
};
export default App;
```
:::

### 遮罩层半透明阴影样式

滚动内容和容器的遮罩层侧之间的距离默认为 `maskWidth` 宽度，也可以通过 `maskDistance` 设置

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  return (
    <div className="demo">
      <Cell
        className="nut-cell-right-zero"
      >
        <HorizontalScrolling        
          maskShadowType="transparent"  
          maskWidth={50}
          maskDistance={10}
          maskContent={
          <div className="nut-biz-horizontalscrolling__mask-box buy-price">
            <div><i>￥</i>199</div>
            <div>共3件</div>
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
    </div>
  );
};
export default App;
```
:::

### 自定义遮罩内容

可以通过 `maskContent` 自定义遮罩内容

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  return (
    <div className="demo">
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
              查看更多
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
    </div>
  );
};
export default App;
```
:::

### 无遮罩

:::demo
```tsx
import  React from 'react';
import { Cell } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

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


### 事件演示

:::demo
```tsx
import  React from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { HorizontalScrolling } from '@nutui/nutui-biz';
import "@nutui/nutui-biz/dist/styles/demo.css";

const App = () => {

  const onChange = () => {
    console.log('change')
  };

  const onScroll = () => {
    console.log('scroll right')
  }

  return (
    <div className="demo">
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
    </div>
  );
};
export default App;
```
:::

## API

### Props

| 参数            | 说明                                 | 类型     | 默认值           |
|----------------|--------------------------------------|---------|-----------------|
| showMask       | 是否需要遮罩层                         | boolean | `true`     |
| maskPosition   | 遮罩层展示位置（可选值：`left`、`right`）| string   | `right`   |
| maskShadowType | 遮罩阴影形式（可选值 `none`: 无、`triangle`: 有三角的、`shadow`: 阴影、`transparent`: 半透明） | string | `triangle`               |
| maskWidth      | 遮罩层宽度，默认单位为 `px`             | string \| number | `100px`     |
| maskDistance   | 滚动内容和容器的遮罩层侧之间的距离，默认单位为 `px`   | string \| number | `0`        |
| iconProps       | [Icon 组件的 props](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)    | iconProps | - |
| maskContent    | 自定义遮罩内容                         | ReactNode | `''` |

### Events

| 事件名          | 说明             | 回调参数  |
|----------------|-----------------|------------|
| onClickMask    | 点击遮罩层时触发   | - |
| onScrollRight  | 滑动到右边时会触发 | - |
| onScrollChange | 滑动时获取滚动距离  | val |

