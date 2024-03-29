# QuickEnter shortcut entry

### Intro

The shortcut entry, also known as the King Kong area, is an important position in the head of a page and the core functional area of the page. It is expressed in the form of grid area icons arranged in multiple rows.

### Install

```javascript
import { QuickEnter } from "@nutui/nutui-biz";
```

## Demo

### Basic usage

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} />;
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
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} indicatorVisible={true} />;
};
export default App;
```

:::

### Single line

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter data={quickEnterData} rows={1} indicatorVisible={true} />;
};
export default App;
```

:::

### Swipe display

:::demo

```ts
import React from "react";
import { QuickEnter } from "@nutui/nutui-biz";
import { quickEnterData } from "https://storage.360buyimg.com/nutui/biz/static/quick-enter-data.js";

const App = () => {
  return <QuickEnter slideMode={"slide"} data={quickEnterData} rows={2} />;
};
export default App;
```

:::

## API

### Props

| Parameter            | Description                                                 | Type                    | Default              |
| -------------------- | ----------------------------------------------------------- | ----------------------- | -------------------- |
| columns              | Number of rows to display                                   | number \| string        | `5`                  |
| rows                 | Number of display rows                                      | number \| string        | `2`                  |
| data                 | Display data                                                | QuickEnterData[]        | -                    |
| slideMode            | Multi-screen display effect, optional values: swiper, slide | string                  | `swiper`             |
| iconSize             | Icon size, the unit is 'px'                                 | Array<number \| string> | `[30,30]`            |
| indicatorVisible     | Does the indicator show                                     | boolean                 | `false`              |
| indicatorBgColor     | Indicator background color                                  | string                  | `rgba(0, 0, 0, 0.2)` |
| indicatorActiveColor | Indicator active color                                      | string                  | `#fa2c19`            |

### QuickEnterData

| Parameter   | Description                                  | Type      |
| ----------- | -------------------------------------------- | --------- |
| displayName | Shortcut entry description                   | string    |
| imageUrl    | Shortcut entry icon (image link or html tag) | ReactNode |

### Events

| Event Name  | Description                             | Callback Parameters |
| ----------- | --------------------------------------- | ------------------- |
| onClickItem | Triggered when the icon area is clicked | QuickEnterData      |
