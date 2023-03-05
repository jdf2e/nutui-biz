# Ecard 電子卡

### 介紹

虛擬電子卡選擇

### 安裝

``` javascript
import { Ecard } from '@nutui/nutui-biz';
```

## 代碼示例

### 基礎用法

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

| 參數          | 說明                             | 類型   | 默認值           |
|---------------|----------------------------------|--------|------------------|
| chooseText    | 選擇面值文案   | string |   `請選擇電子卡面值`   |
| suffix        | 符號標示       | string | `¥`            |
| otherValueText| 其他面值文案   | string |    `其它面值`   |
| dataList      | 電子卡面值列表  | Array |  `DataList[]`  |
| cardAmountMin | 其它面值最小值  | number | `1` |
| cardAmountMax | 其他面值最大值  | number | `9999`            |
| modelValue         | 購買電子卡所需價錢 | number | `0`            |
| placeholder   | 其他面值默認提示語 | string | `請輸入1-9999整數`|

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onChange  | 選中電子卡事件 | 點擊的數據 |
| onInputChange  | 更改 `input` 框觸發事件 |輸入的數據 |
| onChangeStep  | 更改數量時觸發 | 當前數量，當前選中的卡面值 |

### DataList 數據結構

| 鍵名 | 說明           | 類型     |
|--------|----------------|--------------|
| price  | 每張電子卡價格 | string |
