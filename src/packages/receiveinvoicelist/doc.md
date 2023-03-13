#  ReceiveInvoiceList 收票人列表

### 介绍

常见于展示联系人列表信息等。

### 安装

```javascript
import { ReceiveInvoiceList } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { ReceiveInvoiceList } from '@nutui/nutui-biz';

const App = () => {
  
  const state = {
    defaultValue: 1,
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
     <ReceiveInvoiceList list={state.list} defaultValue={state.defaultValue} onSelected={event.onSelected} onEdit={event.onEdit} />
  );
};
export default App;
```

:::
### 使用左滑删除

:::demo

```ts
import  React from 'react';
import { ReceiveInvoiceList } from '@nutui/nutui-biz';

const App = () => {
  
  const state = {
    defaultValue: 1,
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
    onDelete: (item: ReceiveInvoiceItem) => { console.log('onDelete', item) },
  }

  return (
     <ReceiveInvoiceList enableDelete={true} list={state.list} defaultValue={state.defaultValue} onDelete={event.onDelete} />
  );
};
export default App;
```

:::

## API

### Props


| 字段         | 说明                | 类型                      | 默认值  |
|--------------|---------------------|---------------------------|---------|
| defaultValue | 当前选中联系人的 id | number \| string          | -       |
| list         | 联系人列表          | Array<ReceiveInvoiceItem> | []      |
| enableDelete | 是否启用删除功能    | boolean                   | `false` |

### ReceiveInvoiceItem 数据结构

| 键名      | 说明           | 类型                         |
|-----------|----------------|------------------------------|
| id        | 联系人的 id    | number \| string             |
| name      | 联系人姓名     | string                       |
| tel       | 联系人手机号   | string                       |
| addres    | 联系人地址信息 | string                       |
| isDefault | 是否为默认地址 | boolean                      |
| extends   | 扩展自定义数组 | Array<ReceiveInvoiceItemExt> |
### ReceiveInvoiceItemExt 数据结构

| 键名  | 说明           | 类型   |
|-------|----------------|--------|
| label | 自定义字段名称 | string |
| value | 自定义值       | string |


### Events
| 字段       | 说明     | 回调参数                               |
|------------|----------|----------------------------------------|
| onEdit     | 编辑事件 | item\:ReceiveInvoiceItem,index\:number |
| onSelected | 选中事件 | item\:ReceiveInvoiceItem,index\:number |
| onDelete   | 删除事件 | item\:ReceiveInvoiceItem,index\:number |
