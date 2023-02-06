# Ecard 电子卡

### 介绍

虚拟电子卡选择

### 安装

``` javascript
import { Ecard } from '@nutui/nutui-biz';
```

## 代码示例

### 基础用法

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

| 参数          | 说明                             | 类型   | 默认值           |
|---------------|----------------------------------|--------|------------------|
| chooseText    | 选择面值文案   | string |   `请选择电子卡面值`   |
| suffix        | 符号标示       | string | `¥`            |
| otherValueText| 其他面值文案   | string |    `其他面值`   |
| dataList      | 电子卡面值列表  | Array |  `DataList[]`  |
| cardAmountMin | 其它面值最小值  | number | `1` |
| cardAmountMax | 其他面值最大值  | number | `9999`            |
| cardBuyMin    | 购买数量最小值  | number | `9999`            |
| cardBuyMax    | 购买数量最大值  | number | `9999`            |
| money         | 购买电子卡所需价钱 | number | `0`            |
| placeholder   | 其他面值默认提示语 | string | `请输入1-5000整数`|

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onChange  | 选中电子卡事件 | 点击的数据 |
| onInputChange  | 更改 `input` 框触发事件 |输入的数据 |
| onChangeStep  | 更改数量时触发 | 当前数量，当前选中的卡面值 |

### DataList 数据结构

| 键名 | 说明           | 类型     |
|--------|----------------|--------------|
| price  | 每张电子卡价格 | string |
