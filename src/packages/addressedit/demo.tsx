import React, { useState } from "react";
import {
  AddressEdit,
  AddressData,
  AddressInfo,
  AddressResult,
} from "./addressedit";
import { Radio, Cell, CellGroup, Input } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";

const { RadioGroup } = Radio;

interface T {
  basic: string;
  selected: string;
  hasInfo: string;
  notInfo: string;
  custom1: string;
  custom2: string;
}

const AddressEditDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      selected: "已选地址",
      hasInfo: "修改地址",
      notInfo: "新增地址",
      custom1: "隐藏保存按钮",
      custom2: "自定义输入框",
    },
    "en-US": {
      basic: "Basic usage",
      selected: "Selected address",
      hasInfo: "Modify address",
      notInfo: "Add Address",
      custom1: "Hide Save Button",
      custom2: "Customize Input",
    },
  });

  const addressData: Partial<AddressResult> = {
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
    type: "custom",
  };
  const addressInfo: AddressInfo = {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
    default: false,
  };
  const addressInfo2: AddressInfo = {
    name: "张三",
    tel: "13141234567",
    region: "北京朝阳区八里庄街道",
    regionIds: [1, 7, 3],
    address: "xxx小区3-2-302",
    default: true,
  };
  const addressSetData: Partial<AddressData> = {
    isRequired: ["name", "tel", "region", "address"],
    isDefualtAddress: true,
  };

  const addressSetData2: Partial<AddressData> = {
    nameText: "收件人",
    namePlaceholder: "请输入收件人姓名",
    isRequired: ["name", "tel"],
    isDefualtAddress: false,
    errorShowType: "errorMsg",
  };

  const addressData2: Partial<AddressResult> = {
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
    type: "elevator",
    height: "270px",
  };

  const onChange = (data: any) => {
    console.log("onChangeAddress", data);
  };

  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };

  const [radioVal, setRadioVal] = useState("1");
  const handleChange = (v: any) => {
    setRadioVal(v);
  };



  return (
    <div className="demo" style={{ paddingBottom: "100px" }}>
      <>
        <CellGroup>
          <Cell>
            <RadioGroup
              value={radioVal}
              onChange={handleChange}
              style={{ flexFlow: "wrap" }}
            >
              <Radio value="1">{translated.notInfo}</Radio>
              <Radio value="2">{translated.hasInfo}</Radio>
              <Radio value="3">{translated.custom1}</Radio>
              <Radio value="4">{translated.custom2}</Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        {/* <>{renderTpl(radioVal)}</> */}
        {radioVal === "1" && (
          <>
            <h2>{translated.basic}</h2>
            <AddressEdit
              address={addressData}
              data={addressSetData}
              addressInfo={addressInfo}
              onSave={(formData) => {
                console.log(formData);
              }}
            />
          </>
        )}
        {radioVal === "2" && (
          <>
            <h2>{translated.selected}</h2>
            <AddressEdit
              address={addressData2}
              data={addressSetData}
              addressInfo={addressInfo2}
              onSave={(formData) => {
                console.log(formData);
              }}
              onChangeAddress={onChange}
              onCloseAddress={onClose}
            />
          </>
        )}
        {radioVal === "3" && (
          <>
            <h2>{translated.custom1}</h2>
            <AddressEdit
              address={addressData2}
              data={addressSetData2}
              addressInfo={addressInfo2}
              showSave={false}
              onSwitch={(state, data) => {
                console.log("switch", state, data);
              }}
              onChange={(value, tag) => {
                console.log(tag, value);
              }}
              onCloseAddress={onClose}
            />
          </>
        )}
        {radioVal === "4" && (
          <>
            <h2>{translated.custom2}</h2>
            <AddressEdit
              address={addressData}
              data={addressSetData2}
              addressInfo={addressInfo}
              onChange={(value, tag) => {
                console.log(tag, value);
              }}
              onSave={(formData) => {
                console.log(formData);
              }}
              bottomInputTpl={
                <>
                  <div className="nb-addressedit__item">
                    <Input
                      label={"自定义内容1"}
                      className="nut-input-text"
                      defaultValue={""}
                      placeholder={"请输入"}
                      type="text"
                      clearable
                      onChange={(v, e) => {
                        console.log(v, e);
                      }}
                    />
                  </div>
                  <div className="nb-addressedit__item">
                    <Input
                      label={"自定义内容2"}
                      className="nut-input-text"
                      defaultValue={""}
                      placeholder={"请输入"}
                      type="text"
                      clearable
                      onChange={(v, e) => {
                        console.log(v, e);
                      }}
                    />
                  </div>
                </>
              }
            />
          </>
        )}
      </>
    </div>
  );
};

export default AddressEditDemo;
