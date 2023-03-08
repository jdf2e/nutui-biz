# Ecard 电子卡

### 介绍

虚拟电子卡选择

### 安装

``` javascript
import { Ecard } from '@nutui/nutui-biz';
```

## 代码演示

### 基础用法

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
    const onChangeInput = (val: number, money: number) => {
        console.log('onChangeInput', { val, money });
    };
    const onChange = (item: DataListItem, money: number) => {
        console.log('onChange', { item, money });
    };
    const onChangeStep = (num: number, price: number, money: number) => {
        console.log('onChangeStep', { num, price, money });
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

### 自定义价格处理函数

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
    const onChangeInput = (val: number, money: number) => {
        console.log('onChangeInput', { val, money });
    };
    const onChange = (item: DataListItem, money: number) => {
        console.log('onChange', { item, money });
    };
    const onChangeStep = (num: number, price: number, money: number) => {
        console.log('onChangeStep', { num, price, money });
    };
    return (
        <Cell>
           <Ecard
            chooseText={<span>100以内打九折,超过100打八折!</span>}
            onChangeInput={onChangeInput}
            onChange={onChange}
            handleMoney={(money) => {
              if (money < 100) return money*0.9
              if (money >= 100) return money*0.8
              return 0
            }}
            onChangeStep={onChangeStep}
            dataList={dataList}
          ></Ecard>
        </Cell>
    );
};
export default App;
```

:::

### 自定义一行展示电子卡数量

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
        }, {
          price: 50,
        },
        {
          price: 60
        }
    ]);
    const onChangeInput = (val: number, money: number) => {
        console.log('onChangeInput', { val, money });
    };
    const onChange = (item: DataListItem, money: number) => {
        console.log('onChange', { item, money });
    };
    const onChangeStep = (num: number, price: number, money: number) => {
        console.log('onChangeStep', { num, price, money });
    };
    return (
        <Cell>
           <Ecard
            chooseText={<span>请选择电子卡面值</span>}
            rowNum={3}
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
| chooseText    | 选择面值文案   | ReactNode |   `请选择电子卡面值`   |
| suffix        | 符号标示       | string | `¥`            |
| otherValueText| 其它面值文案   | ReactNode |    `其它面值`   |
| dataList      | 电子卡面值列表  | `Array<DataListItem>` |  []  |
| cardAmountMin | 其它面值最小值  | number | `1` |
| cardAmountMax | 其它面值最大值  | number | `9999`            |
| inputNumberProps | inputNumber组件props  | `Partial<InputNumberProps> `| ` { min: 1,max: 9999}`|
| placeholder   | 其它面值默认提示语 | string | `请输入1-9999整数`|
| rowNum   | 每行展示卡数量 | number | 2|


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onChange  | 选中某固定面值卡触发 | item:当前卡对应的DataListItem，例如{ price:100 }; money:当前购卡总价值 |
| onInputChange  | 其它面值更改触发 | val:输入的自定义面值; money:当前购卡总价值 |
| onChangeStep  | 更改数量时触发 | num:当前购买数量; price:当前面值(固定面值或自定义面值); money:当前购卡总价值|

### DataList 数据结构

| 键名 | 说明           | 类型     |
|--------|----------------|--------------|
| price  | 每张电子卡价格 | number  |

### 依赖组件库最低版本

| 组件库 | 版本           | 
|--------|----------------|
| @nutui/nutui-react |`v1.3.8` | 