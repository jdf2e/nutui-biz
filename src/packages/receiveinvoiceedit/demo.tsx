import React, { useState } from "react";
import { ReceiveInvoiceEdit } from "./receiveinvoiceedit";
import { Radio, Cell, CellGroup } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";
interface tarnslatedOption {
  basic: string;
  changeAddress: string;
  addAddress: string;
}

const ReceiveInvoiceEditDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    "zh-CN": {
      basic: "基本用法",
      changeAddress: "修改地址",
      addAddress: "新增地址",
    },
    "zh-TW": {
      basic: "基本用法",
      changeAddress: "修改地址",
      addAddress: "新增地址",
    },
    "en-US": {
      basic: "Basic usage",
      changeAddress: "Modify address",
      addAddress: "Add Address",
    },
  });

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
  const invoiceInfo2 = {
    name: "xx",
    tel: "12345678913",
    region: "北京朝阳区八里庄街道",
    regionIds: [1, 7, 3],
    address: "xxx小区3-2-302",
  };
  const addressSetData = {
    required: ["name", "tel"],
  };

  const addressData2: any = {
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

  const onChange = (data: any) => {
    console.log("onChangeAddress", data);
  };

  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };


  return (
    <div className="demo">
      <h2>{translated.basic}</h2>
      <ReceiveInvoiceEdit
        address={addressData}
        data={addressSetData}
        invoiceInfo={invoiceInfo}
        onSave={(formData) => {
          console.log(formData);
        }}
      />
      <h2>{translated.changeAddress}</h2>
      <ReceiveInvoiceEdit
        address={addressData2}
        data={addressSetData}
        invoiceInfo={invoiceInfo2}
        onSave={(formData) => {
          console.log(formData);
        }}
        onAddressChange={onChange}
        onAddressClose={onClose}
      />
    </div>
  );
};

export default ReceiveInvoiceEditDemo;
