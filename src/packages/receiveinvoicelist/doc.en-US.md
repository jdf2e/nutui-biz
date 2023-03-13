#  ReceiveInvoiceList

### Intro

Commonly used to display contact list information, etc.

### Install

```javascript
import { ReceiveInvoiceList } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

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
### Use Swipe Delete

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


| Attribute    | Description                           | Type                      | Default |
|--------------|---------------------------------------|---------------------------|---------|
| defaultValue | Id of chosen contact                  | number \| string          | -       |
| list         | Data List                             | Array<ReceiveInvoiceItem> | []      |
| enableDelete | Whether to enable the delete function | boolean                   | `false` |

### ReceiveInvoiceItem Data Structure

| key       | Description               | Type                         |
|-----------|---------------------------|------------------------------|
| id        | ID                        | number \| string             |
| name      | Name                      | string                       |
| tel       | Phone                     | string                       |
| addres    | Addres                    | string                       |
| isDefault | Is it the default address | boolean                      |
| extends   | Extend custom array       | Array<ReceiveInvoiceItemExt> |
### ReceiveInvoiceItemExt Data Structure

| key   | Description        | Type   |
|-------|--------------------|--------|
| label | Custom field name  | string |
| value | Custom field value | string |


### Events
| Attribute  | Description    | Arguments                              |
|------------|----------------|----------------------------------------|
| onEdit     | Edit Event     | item\:ReceiveInvoiceItem,index\:number |
| onSelected | Selected Event | item\:ReceiveInvoiceItem,index\:number |
| onDelete   | Delete Event   | item\:ReceiveInvoiceItem,index\:number |
