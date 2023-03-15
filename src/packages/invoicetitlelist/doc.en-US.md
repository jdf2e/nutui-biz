#  InvoiceTitleList 发票抬头列表

### Intro

Display the list of invoice headers, including VAT special invoices and electronic general invoices.

### Install

```javascript
import { InvoiceTitleList } from '@nutui/nutui-biz';
```

## Demo

### Special Invoice

:::demo

```ts
import  React from 'react';
import { Toast } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'special',
        status: '通过',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
      onEdit={(data: Idata) => {
        Toast.text('触发编辑事件')
        console.log('data', data)
      }}
      onDelete={(data: Idata) => {
        Toast.text('触发删除事件')
        console.log('data', data)
      }}
    />
  );
};
export default App;
```

:::

### Special Invoice-Invoice Status

:::demo

```ts
import  React from 'react';
import { Toast } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'special',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
      onEdit={(data: Idata) => {
        Toast.text('触发编辑事件')
        console.log('data', data)
      }}
      onDelete={(data: Idata) => {
        Toast.text('触发删除事件')
        console.log('data', data)
      }}
    />
  );
};
export default App;
```

:::


### Normal Invoice

:::demo

```ts
import  React from 'react';
import { Toast } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
      onEdit={(data: Idata) => {
        Toast.text('触发编辑事件')
        console.log('data', data)
      }}
      onDelete={(data: Idata) => {
        Toast.text('触发删除事件')
        console.log('data', data)
      }}
    />
  );
};
export default App;
```

:::


### Selected Status

:::demo

```ts
import  React from 'react';
import { Toast } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: true,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
      onEdit={(data: Idata) => {
        Toast.text('触发编辑事件')
        console.log('data', data)
      }}
      onDelete={(data: Idata) => {
        Toast.text('触发删除事件')
        console.log('data', data)
      }}
    />
  );
};
export default App;
```

:::


### Custom Bottom

:::demo

```ts
import  React from 'react';
import { Toast, Button } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
      onEdit={(data: Idata) => {
        Toast.text('触发编辑事件')
        console.log('data', data)
      }}
      onDelete={(data: Idata) => {
        Toast.text('触发删除事件')
        console.log('data', data)
      }}
      otherOperate = {<Button onClick={() => Toast.success('同步成功')}>同步到电子发票</Button>}
    />
  );
};
export default App;
```

:::


### Hide All Operates

:::demo

```ts
import  React from 'react';
import { Toast } from '@nutui/nutui-react';
import { InvoiceTitleList } from '@nutui/nutui-biz';

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

const App = () => {
  return (
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654',
        isDelete: true,
        isEdit: true
      }}
      isShowEdit = {false}
      onClick={(data: Idata) => {
        Toast.text('触发点击事件')
        console.log('data', data)
      }}
    />
  );
};
export default App;
```

:::

## API

### Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| data   | 发票信息                                 | object  | -         |
| isShowEdit     | 右上角是否展示编辑按钮，适用于电子普通发票                   | boolean  | `true`    |
| otherOperate | 扩展其他操作                         | ReactNode  | -      |

### Data 字段说明


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| isSelected   | 是否选择                                 | boolean  | `false`         |
| type     | 每一个抬头可选择的发票类型：normal（电子普票）special （增值税专用发票）                   | string  | `special`    |
| status     | 审批状态(审批中、审批通过（通过）、否决等) 只有「增值税专用发票抬头」展示                   | string  | -    |
| isShowDefault | 是否展示“默认”标识                         | boolean  | `false`      |
| title | 发票抬头                        | string  | -      |
| companyCode | 纳税人识别号（单位税号）                         | string  | -      |
| address | 注册地址                         | string  | -      |
| companyPhone | 公司电话（注册电话）                         | string  | -      |
| bankDeposit | 开户行（开户银行）                         | string  | -      |
| bankAccount | 银行账户                         | string  | -      |
| isDelete | 是否可删除                         | boolean  | true      |
| isEdit | 是否可编辑                         | boolean  | true      |


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClick | 点击时触发 |  data: Idata |
| onEdit | 编辑时触发 |  data: Idata |
| onDelete | 删除时触发 |  data: Idata |



### Idata 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| isSelected   | 是否是选中状态                                | boolean |
| type   | 发票类型，可选`增值税专用发票`和`电子普通发票`            | string  | 
| status   | 发票状态，仅限`增值税专用发票`            | string  | 
| isShowDefault   | 是否显示默认标识            | boolean  | 
| title   | 发票抬头名称            | string  | 
| companyCode   | 纳税人识别号            | string  | 
| address   | 注册地址            | string  | 
| companyPhone   | 公司电话            | string  | 
| bankDeposit   | 开户行            | string  | 
| bankAccount   | 银行账户            | string  | 
| isDelete   | 是否可删除            | boolean  | 
| isEdit   | 是否可编辑            | boolean  | 