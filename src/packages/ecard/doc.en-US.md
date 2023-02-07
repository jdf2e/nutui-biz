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
    const [money, setMoney] = useState(10);
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
    const onChange = (item: IDataList) => {
        console.log(item);
    };
    const onChangeStep = (num: number, price: number) => {
        console.log(price, num);
    };
    return (
        <Cell>
            <Ecard
                money={money}
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
| chooseText    | 選擇面值文案   | string |   `請選擇電子卡面值`   |
| suffix        | 符號標示       | string | `¥`            |
| otherValueText| 其他面值文案   | string |    `其他面值`   |
| dataList      | 電子卡面值列表  | Array |  `DataList[]`  |
| cardAmountMin | 其它面值最小值  | number | `1` |
| cardAmountMax | 其他面值最大值  | number | `9999`            |
| cardBuyMin    | 購買數量最小值  | number | `9999`            |
| cardBuyMax    | 購買數量最大值  | number | `9999`            |
| money         | 購買電子卡所需價錢 | number | `0`            |
| placeholder   | 其他面值默認提示語 | string | `請輸入1-5000整數`|

### Events

| Event | Description   | Arguments     |
|--------|----------------|--------------|
| onChange  | Trigger event when Ecard is clicker | `value` |
| onInputChange  | Triggered when the value changes | `value` |
| onChangeStep  | Triggered when the steps value changes | `value，modelValue` |

### DataList 數據結構

| key | Description     | Type     |
|--------|----------------|--------------|
| price  | price | string |
