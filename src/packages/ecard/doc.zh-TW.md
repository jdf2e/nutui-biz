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

| 參數          | 說明                             | 類型   | 默認值           |
|---------------|----------------------------------|--------|------------------|
| chooseText    | 選擇面值文案   | string |   `請選擇電子卡面值`   |
| suffix        | 符號標示       | string | `¥`            |
| otherValueText| 其他面值文案   | string |    `其它面值`   |
| dataList      | 電子卡面值列表  | Array |  `DataList[]`  |
| cardAmountMin | 其它面值最小值  | number | `1` |
| inputNumberProps | inputNumber组件props  | `Partial<InputNumberProps> `| ` { min: 1,max: 9999}`|
| cardAmountMax | 其它面值最大值  | number | `9999`            ||
| placeholder   | 其它面值默認提示語 | string | `請輸入1-9999整數`|
| rowNum   | 每行展示卡數量 | number | 2|


### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onChange  | 選中某固定面值卡觸發 | item:當前卡對應的DataListItem，例如{ price:100 }，money:當前購卡總價值 |
| onInputChange  | 其它面值更改觸發 | val:輸入的自定義面值,money:當前購卡總價值 |
| onChangeStep  | 更改数量时触发 | num:當前購買數量，price:當前面值(固定面值或自定義面值) ,money:當前購卡總價值|

### DataList 數據結構

| 鍵名 | 說明           | 類型     |
|--------|----------------|--------------|
| price  | 每張電子卡價格 | number  |

### 依賴組件庫最低版本

| 組件庫 | 版本           | 
|--------|----------------|
| @nutui/nutui-react |`v1.3.8` | 
