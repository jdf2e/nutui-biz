# QuickEnter shortcut entry

### introduce

The shortcut entry, also known as the King Kong area, is an important position in the head of a page and the core functional area of the page. It is expressed in the form of grid area icons arranged in multiple rows.

### Install

```javascript
import { QuickEnter } from "@nutui/nutui-biz";
```

## Code Demo

### Basic usage

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { data } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={data} />;
};
export default App;
```

:::

### Carousel display

When the length of the links array exceeds the maximum display number on one screen, the default carousel display

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { data } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={data} indicatorVisible={true} />;
};
export default App;
```

:::

### single line

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { data } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={data} rows={1} indicatorVisible={true} />;
};
export default App;
```

:::

### Swipe display

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { data } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter slideMode={"slide"} data={data} rows={2} />;
};
export default App;
```

:::

## API

### Props

| Parameter            | Description                                                 | Type             | Default              |
| -------------------- | ----------------------------------------------------------- | ---------------- | -------------------- |
| columns              | number of rows to display                                   | number \| string | `5`                  |
| rows                 | number of display rows                                      | number \| string | `2`                  |
| data                 | display data                                                | QuickEnterData[] | `[]`                 |
| slideMode            | Multi-screen display effect, optional values: swiper, slide | string           | `swiper`             |
| iconSize             | icon size, the unit is 'px'                                 | Array            | `[40,40]`            |
| indicatorVisible     | Whether the indicator is displayed                          | boolean          | `false`              |
| indicatorBgColor     | indicator background color                                  | string           | `rgba(0, 0, 0, 0.2)` |
| indicatorActiveColor | indicator active color                                      | string           | `#fa2c19`            |

### QuickEnterData

| parameter   | description                                  | type      |
| ----------- | -------------------------------------------- | --------- |
| displayName | Shortcut entry description                   | string    |
| imageUrl    | shortcut entry icon (image link or html tag) | ReactNode |

### Events

| Event Name  | Description                             | Callback Parameters |
| ----------- | --------------------------------------- | ------------------- |
| onClickItem | Triggered when the icon area is clicked | item                |
