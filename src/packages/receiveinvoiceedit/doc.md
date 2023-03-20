#  ReceiveInvoiceEdit 收票地址编辑

### 介绍

发票的收票人地址编辑，常见于收票人地址管理页面，主要用于进行新增或编辑修改地址的操作。

### 安装

```javascript
import { ReceiveInvoiceEdit } from '@nutui/nutui-react';
```

## 代码演示

### 基本用法

:::demo

```tsx
import  React from 'react';
import { ReceiveInvoiceEdit } from '@nutui/nutui-biz';

const App = () => {
    const addressData: any = {
    addressSelect: [],
    addressTitle: "选择所在地区",
    province: [
      { id: 1, name: "北京", title: "B" },
      { id: 2, name: "广西", title: "G" },
      { id: 3, name: "江西", title: "J" },
      { id: 4, name: "四川", title: "S" },
      { id: 5, name: "浙江", title: "Z" },
    ],
    city: [
      { id: 7, name: "朝阳区", title: "C" },
      { id: 8, name: "崇文区", title: "C" },
      { id: 9, name: "昌平区", title: "C" },
      { id: 6, name: "石景山区", title: "S" },
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 10, name: "北苑", title: "B" },
    ],
    country: [
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 9, name: "北苑", title: "B" },
      { id: 4, name: "常营乡", title: "C" },
    ],
    town: [],
  };
  const invoiceInfo = {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
  };
  const addressSetData = {
    required: ["name", "tel"],
  };
  return (
    <ReceiveInvoiceEdit
        address={addressData}
        data={addressSetData}
        invoiceInfo={invoiceInfo}
        onSave={(formData) => {
            console.log(formData);
        }}
        />
  );
};
export default App;
```
:::

### 修改地址

:::demo

```tsx
import  React from 'react';
import { ReceiveInvoiceEdit } from '@nutui/nutui-biz';

const App = () => {
  const addressData: any = {
    addressSelect: [1, 7, 3],
    addressTitle: "选择所在地区",
    province: [
    { id: 1, name: "北京", title: "B" },
    { id: 2, name: "广西", title: "G" },
    { id: 3, name: "江西", title: "J" },
    { id: 4, name: "四川", title: "S" },
    { id: 5, name: "浙江", title: "Z" },
    ],
    city: [
    { id: 7, name: "朝阳区", title: "C" },
    { id: 8, name: "崇文区", title: "C" },
    { id: 9, name: "昌平区", title: "C" },
    { id: 6, name: "石景山区", title: "S" },
    { id: 3, name: "八里庄街道", title: "B" },
    { id: 10, name: "北苑", title: "B" },
    ],
    country: [
    { id: 3, name: "八里庄街道", title: "B" },
    { id: 9, name: "北苑", title: "B" },
    { id: 4, name: "常营乡", title: "C" },
    ],
    town: [],
  };
  const invoiceInfo = {
    name: "张三",
    tel: "13141234567",
    region: "北京朝阳区八里庄街道",
    regionIds: [1, 7, 3],
    address: "xxx小区3-2-302",
  };
  const addressSetData = {
    required: ["name", "tel"],
  };

  const onChange = (data: any) => {
    console.log("onAddressChange", data);
  };

  const onClose = (data: any) => {
    console.log("onAddressClose", data);
  };

  return (
    <ReceiveInvoiceEdit
        address={addressData}
        data={addressSetData}
        invoiceInfo={invoiceInfo}
        onSave={(formData) => {
            console.log(formData);
        }}
        onAddressChange={onChange}
        onAddressClose={onClose}
        />
  );
};
export default App;
```
:::





## API

### Props


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| address   | 地址组件相关信息                                | object  | {modelValue: false, addressSelect: [], province: [], city: [], country: [], town: [], addressTitle: "选择所在地区"}       |
| data   | 编辑收票地址数据格式设置                                 | object  | {}         |
| invoiceInfo   | 发票地址值                                 | object  |{name: "", tel: "", region: "", regionIds: [], address: ""}        |

### Props address
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| addressSelect   | 设置默认选中地址 | string \| number[] | `[]` |
| addressStr   | 地址信息                                 | string  |  ` ''  `    |
| province | 省，每个省的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | `[]` |
| city | 市，每个市的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | `[]` |
| country | 县，每个县的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | `[] `|
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | `[]` |
| addressTitle  | 自定义地址选择文案 | string | `选择所在地区` |

### Props data
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| nameText  | 自定义姓名文案 | string | `姓名` |
| namePlaceholder  | 自定义姓名占位文案 | string | `请输入姓名` |
| nameErrorMsg  | 自定义收票人非空校验错误提示文案 | string | `该项为必填项，请填写完后提交` |
| telText  | 自定义手机号码文案 | string | `手机号码` |
| telPlaceholder  | 自定义手机号码占位文案 | string | `请输入手机号码` |
| telErrorMsg  | 自定义手机号码非空校验错误提示文案 | string | `该项为必填项，请填写完后提交` |
| regionText  | 自定义所在地区文案 | string | `所在地区` |
| regionPlaceholder  | 自定义所在地区占位文案 | string | `请选择所在地区` |
| regionErrorMsg  | 自定义所在地区非空校验错误提示文案 | string | `该项为必填项，请填写完后提交` |
| addressText  | 自定义详细地址文案 | string | `详细地址` |
| addressPlaceholder  | 自定义详细地址占位文案 | string | `街道、楼牌号` |
| addressErrorMsg  | 自定义详细地址非空校验错误提示文案 | string | `该项为必填项，请填写完后提交` |
| required  |需要展示错误信息的字段 | string[] | ['name','tel'] |
| bottomText         |自定义底部保存按钮文案 | string | `保存` |

### Props invoiceInfo
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| name | 收票人信息 | string | '' |
| tel | 电话号码信息 | string | '' |
| region | 所在区域信息 | string | '' |
| regionIds | 所在区域已选地址 id 信息 | string | '' |
| address | 详细地址信息 | string | '' |



### Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onChange | 输入框输入文字，返回输入文案和所在输入框的标识 tag (name,tel,region,address) |  value,tag |
| onAddressChange | 自定义选择地址时，选择地区时触发 |  {custom:当前选中地址,next:下一级地址,value:当前已选中的地址信息}` |
| onAddressClose | 地址选择弹框关闭时触发 | value |
| onSave | 点击底部保存地址按钮，返回保存的信息 | value |

