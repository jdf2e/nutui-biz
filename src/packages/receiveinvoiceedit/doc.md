#  ReceiveInvoiceEdit 收票地址编辑

### 介绍

收票地址编辑，常见于收票地址管理页面，主要用于进行新增或编辑修改地址的操作。

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
    isRequired: ["name", "tel"],
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

### 已有地址信息修改

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
    isRequired: ["name", "tel"],
  };

  const onChange = (data: any) => {
    console.log("onChangeAddress", data);
  };

  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };

  return (
    <ReceiveInvoiceEdit
        address={addressData}
        data={addressSetData}
        invoiceInfo={invoiceInfo}
        onSave={(formData) => {
            console.log(formData);
        }}
        onChangeAddress={onChange}
        onCloseAddress={onClose}
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
| address   | 地址组件相关信息                                | Object  | {}        |
| data   | 编辑收票地址数据格式设置                                 | Object  | {}         |
| invoiceInfo   | 发票地址值                                 | Object  |{}         |

### Props address
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| addressSelect   | 设置默认选中地址 | String\|Number[] | [] |
| addressStr   | 地址信息                                 | String  |   ''      |
| province | 省，每个省的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | [] |
| city | 市，每个市的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | [] |
| country | 县，每个县的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | [] |
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | [] |
| addressTitle  | 自定义地址选择文案 | String | '选择所在地区' |

### Props data
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| nameText  | 自定义收货人文案 | String | '收货人' |
| namePlaceholder  | 自定义收货人占位文案 | String | '请输入收货人' |
| nameErrorMsg  | 自定义收货人非空校验错误提示文案 | String | '该项为必填项，请填写完后提交' |
| telText  | 自定义手机号码文案 | String | '手机号码' |
| telPlaceholder  | 自定义手机号码占位文案 | String | '请输入手机号码' |
| telErrorMsg  | 自定义手机号码非空校验错误提示文案 | String | '该项为必填项，请填写完后提交' |
| regionText  | 自定义所在地区文案 | String | '所在地区' |
| regionPlaceholder  | 自定义所在地区占位文案 | String | '请选择所在地区' |
| regionErrorMsg  | 自定义所在地区非空校验错误提示文案 | String | '该项为必填项，请填写完后提交' |
| addressText  | 自定义详细地址文案 | String | '详细地址' |
| addressPlaceholder  | 自定义详细地址占位文案 | String | '街道、楼牌号' |
| addressErrorMsg  | 自定义详细地址非空校验错误提示文案 | String | '该项为必填项，请填写完后提交' |
| bottomText         |自定义底部保存按钮文案 | String | '保存' |

### Props addressInfo
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| name | 收货人信息 | String | '' |
| tel | 电话号码信息 | String | '' |
| region | 所在区域信息 | String | '' |
| regionIds | 所在区域已选地址id信息 | String | '' |
| address | 详细地址信息 | String | '' |



## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onChange | 输入框输入文字，返回输入文案和所在输入框的标识tag (name,tel,region,address) |  value,tag |
| onChangeAddress | 自定义选择地址时，选择地区时触发 |  {custom:当前选中地址,next:下一级地址,value:当前已选中的地址信息} |
| onCloseAddress | 地址选择弹框关闭时触发 | value |
| onSave | 点击底部保存地址按钮,返回保存的信息 |  formData |

