# Ecard 

### Intro 

Virtual an e-card to choose 

### Installation 

``` javascript
import { Ecard } from '@nutui/nutui-biz';
```

## Code demo 

### Basic usage 

:::demo

```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Ecard } from '@nutui/nutui-biz';

const App = () => {
    const [dataList]=useState([
        {
          price:10
        },
        {
          price:20
        },
        {
          price:30
        },
        {
          price:40
        },
    ]);
    const onChangeInput = (val: number) => {
        console.log(val);
    };
    const onChange = (item: DataListItem) => {
        console.log(item);
    };
    const onChangeStep = (num: number, price: number) => {
        console.log(price, num);
    };
    return (
        <Cell>
            <Ecard
                onChangeInput={onChangeInput}
                onChange={onChange}
                onChangeStep={onChangeStep}
                dataList={dataList}
          ></Ecard>
        </Cell>
    );
};
export default App;
```

:::

## API

### Props

| parameter           | instructions                              | type    | The default value            |
|---------------|----------------------------------|--------|------------------|
| chooseText    | Select value copywriter    | string |   `Please select an e-card face value `   |
| suffix        | Symbol mark        | string | `¥`            |
| otherValueText| Other denominations copywriter    | string |    `Other denominations `   |
| dataList      | An e-card value list   | Array |  `DataListItem[]`  |
| cardAmountMin | The minimum value of other value   | number | `1` |
| inputNumberProps | InputNumber component props   | `Partial<InputNumberProps> `| ` { min: 1,max: 9999}`|
| cardAmountMax | The maximum value of other denominations   | number | `9999`            ||
| placeholder   | The default prompt other denominations  | string | `Please enter the integer 1-9999 `|
| rowNum   | Each row shows card number  | number | 2|


### Events

| The event name  | instructions            | The callback parameter      |
|--------|----------------|--------------|
| onChange  | Selected card to trigger a fixed value  | Item: the current card corresponding DataListItem, {price: 100}, for example, money: the current purchase  |
| onInputChange  | Change the trigger other value  | val:Enter a custom value, money: the current purchase value  |
| onChangeStep  | Triggered when changing the quantity  | Num: current purchase quantity, price: the current value or the custom value (fixed value), money: the current purchase value |

### DataList The data structure 

| Key name  | instructions            | type      |
|--------|----------------|--------------|
| price  | Price of each an e-card  | number  |

### Depend on the lowest component library version 

| Component library  | version            | 
|--------|----------------|
| @nutui/nutui-react |`v1.3.8` | 