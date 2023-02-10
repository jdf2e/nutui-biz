#  ReceiveInvoiceList 收票人列表

### 介绍

常见于展示联系人列表信息等。

### 安装

```javascript
import { Cell,CellGroup, Tag } from '@nutui/nutui-react';
import { ReceiveInvoiceList } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { Cell,CellGroup, Tag } from '@nutui/nutui-react';
import { ReceiveInvoiceList } from '@nutui/nutui-biz';

const App = () => {
  
  const state = {
    modelValue: 1,
    list: [
      {
        id: 1,
        name: '张三',
        tel: '15088888888',
        addres: '北京市大兴京东大厦1号楼',
        isDefault: true,
      },
      {
        id: 2,
        name: '李四',
        tel: '15088888888',
        addres: '北京市大兴京东大厦2号楼',
        isDefault: false,
        extends: [
          { label: '扩展1', value: '扩展信息展示' },
          { label: '扩展2', value: '扩展信息展示' }
        ]
      }
    ]
  };

  const event = {
    onEdit: (item: ReceiveInvoiceItem) => { console.log('onEdit', item) },
    onSelected: (item: ReceiveInvoiceItem) => { console.log('onSelected', item) }
  }

  return (
     <ReceiveInvoiceList list={state.list} modelValue={state.modelValue} onSelected={event.onSelected} onEdit={event.onEdit} />
  );
};
export default App;
```

:::

## API

### Props


| 字段       | 说明                | 类型                      | 默认值 |
|------------|---------------------|---------------------------|--------|
| list       | 联系人列表          | Array<ReceiveInvoiceItem> | []     |
| modelValue | 当前选中联系人的 id | Number \| String           | -      |

### ReceiveInvoiceItem 数据结构

| 键名    | 说明           | 类型                         |
|---------|----------------|------------------------------|
| id      | 联系人的 id    | Number \| String              |
| name    | 联系人姓名     | String                       |
| tel     | 联系人手机号   | String                       |
| addres  | 联系人地址信息 | String                       |
| extends | 扩展自定义数组 | Array<ReceiveInvoiceItemExt> |
### ReceiveInvoiceItemExt 数据结构

| 键名  | 说明           | 类型   |
|-------|----------------|--------|
| label | 自定义字段名称 | String |
| value | 自定义值       | String |


## Events
| 字段       | 说明       | 回调参数                |
|------------|------------|-------------------------|
| onEdit     | 点击事件   | item\:ReceiveInvoiceItem |
| onSelected | 选中卡片项 | item\:ReceiveInvoiceItem |
