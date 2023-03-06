# Ecard 

### Intro

Virtual e-card selection

### Install

``` javascript
import { Ecard } from '@nutui/nutui-biz';
```

## Demo

### Basic

:::demo

```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Ecard } from '@nutui/nutui-biz';

const App = () => {
    const [modelValue, setModelValue] = useState(10);
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
                modelValue={modelValue}
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

| Attribute          | Description             | Type   | Default           |
|---------------|----------------------------------|--------|------------------|
| chooseText    | Select value copywriter    | string |   `Please select an e-card face value `   |
| suffix        | Symbol mark        | string | `¥`            |
| otherValueText| Other denominations copywriter    | string |    `Other denominations `   |
| dataList      | An e-card value list   | Array |  `DataList[]`  |
| cardAmountMin | The minimum value of other value   | number | `1` |
| cardAmountMax | Other value maximum   | number | `9999`            |
| modelValue         | Purchase price needed for an e-card  | number | `0`            |
| placeholder   | The default prompt other denominations  | string | `Please enter the integer 1-9999 `|

### Events

| Event | Description   | Arguments     |
|--------|----------------|--------------|
| onChange  | Trigger event when Ecard is clicker | `value` |
| onInputChange  | Triggered when the value changes | `value` |
| onChangeStep  | Triggered when the steps value changes | `value，modelValue` |

### DataList The data structure 

| key | Description     | Type     |
|--------|----------------|--------------|
| price  | price | string |
