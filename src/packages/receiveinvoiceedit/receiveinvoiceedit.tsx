import React, { FunctionComponent, useState, useEffect } from "react";
import { IComponent } from "@/utils/typings";
import { Input, Button } from "@nutui/nutui-react";
import { Address } from "../address/address";
import { useConfig } from "@/packages/configprovider";

interface InvoiceInfo {
  name?: string;
  tel?: string;
  region?: string;
  regionIds?: any;
  address?: string;
  [key: string]: any;
}
interface InvoiceData {
  nameText?: string;
  namePlaceholder?: string;
  nameErrorMsg?: string;
  telText?: string;
  telPlaceholder?: string;
  telErrorMsg?: string;
  regionText?: string;
  regionPlaceholder?: string;
  regionErrorMsg?: string;
  addressText?: string;
  addressPlaceholder?: string;
  addressErrorMsg?: string;
  required?: string[];
  showSaveBtn?: boolean;
  bottomText?: string;
  [key: string]: any;
}
interface AddressResult {
  addressSelect: any;
  province: [];
  city: [];
  country: [];
  town: [];
  addressTitle: string;
  [key: string]: any;
}

export interface ReceiveInvoiceEditProps extends IComponent {
  invoiceInfo: InvoiceInfo;
  data: InvoiceData;
  address: AddressResult;
  onChange?: (val: string, tag: string) => void;
  onAddressChange?: (data: any) => void;
  onAddressClose?: (data: any) => void; // 地址弹窗关闭时触发事件
  onSave?: (data: any) => void; // 保存按钮事件
}

const defaultProps = {
  invoiceInfo: {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
  },
  data: {},
  address: {
    modelValue: false,
    addressSelect: [],
    province: [],
    city: [],
    country: [],
    town: [],
    addressTitle: "选择所在地区",
  },
} as ReceiveInvoiceEditProps;

export const ReceiveInvoiceEdit: FunctionComponent<
  Partial<ReceiveInvoiceEditProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    invoiceInfo,
    data,
    address,
    onChange,
    onSave,
    onAddressChange,
    onAddressClose,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const [formData, setFormData] = useState<InvoiceInfo>(invoiceInfo);
  const [required, setRequired] = useState([
    "name",
    "tel",
    "region",
    "address",
  ]);
  //地址组件相关数据
  const [addressData, setAddressData] = useState<AddressResult>({
    addressSelect: [],
    province: [],
    city: [],
    country: [],
    town: [],
    addressTitle: "选择所在地区",
  });
  //地址编辑数据形式兜底文案配置
  const [editSeting, setEditSeting] = useState<InvoiceData>({
    nameText: locale.receiveInvoiceEdit.nameText,
    namePlaceholder: locale.receiveInvoiceEdit.namePlaceholder,
    nameErrorMsg: locale.receiveInvoiceEdit.nameErrorMsg,
    telText: locale.receiveInvoiceEdit.telText,
    telPlaceholder: locale.receiveInvoiceEdit.telPlaceholder,
    telErrorMsg: locale.receiveInvoiceEdit.telErrorMsg,
    regionText: locale.receiveInvoiceEdit.regionText,
    regionPlaceholder: locale.receiveInvoiceEdit.regionPlaceholder,
    regionErrorMsg: locale.receiveInvoiceEdit.regionErrorMsg,
    addressText: locale.receiveInvoiceEdit.addressText,
    addressPlaceholder: locale.receiveInvoiceEdit.addressPlaceholder,
    addressErrorMsg: locale.receiveInvoiceEdit.addressErrorMsg,
    bottomText: locale.receiveInvoiceEdit.bottomText,
  });
  const [errorList, setErrorList] = useState<any>([]);
  const [addressVisible, setAddressVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setEditSeting({ ...editSeting, ...data });
      if (data?.required) {
        setRequired(data.required);
      }
    }
    if (invoiceInfo) {
      setFormData({ ...formData, ...invoiceInfo });
      setAddressData({
        ...address,
        addressSelect: invoiceInfo.regionIds,
      });
    }
    setErrorList([]);
  }, [address, data, invoiceInfo]);
  const changeAddress = (cal: any) => {
    setErrorList(errorList.filter((i: any) => i != "region"));
    const name = addressData[cal.next];
    if (name.length < 1) {
      setAddressVisible(false);
    }
    onAddressChange && onAddressChange(cal);
  };
  const closeAddress = (val: any) => {
    //地址id格式处理
    let ids = val.data.addressIdStr.split("_").map((item: any) => item * 1);
    //删除数组中为0的项
    ids.splice(ids.indexOf(0));
    //提交信息数据同步
    setFormData({ ...formData, region: val.data.addressStr, regionIds: ids });
    //地址组件数据同步
    setAddressData({ ...addressData, addressSelect: ids });
    onAddressClose && onAddressClose(val);
    setAddressVisible(false);
  };
  const inputOnchange = (val: any, tag: string) => {
    let data = { ...formData };
    if (val.length != 0) {
      setErrorList(errorList.filter((i: any) => i != tag));
    }
    Object.keys(formData).map((key: any) => {
      if (key === tag) {
          data[tag] = val;
      }
    });
    setFormData({ ...formData, ...data });
    onChange && onChange(val, tag);
  };
  const validForm = () => {
    let form = formData;
    let arr: any = [].concat(errorList);
    Object.keys(form).map((key) => {
      if (required.includes(key) && formData[key] == "") {
        if(!errorList.includes(key)){
          arr.push(key);
        }
        setErrorList(arr);
      }
    });
    return arr.length>0 ?false:true;
  };
  const save = () => {
    if (validForm()) {
      onSave && onSave(formData);
    }
  };
  const InputDom = (props: { name: string; type: string; }) => {
    const { name, type } = props;
    const label = name + "Text";
    const errorMsg = name + "ErrorMsg";
    const placeholder = name + "Placeholder";
    return (
      <div className="nut-receive-invoice-edit-item">
        <Input
          className="nut-input-text"
          label={editSeting[label]}
          defaultValue={formData[name]}
          name={name}
          placeholder={editSeting[placeholder]}
          type={type}
          readonly={name == "region"}
          required={required.includes(name)}
          onChange={(e) => inputOnchange(e, name)}
          onClick={() => (name == "region" ? setAddressVisible(true) : "")}
          errorMessage={errorList.includes(name) && editSeting[errorMsg]}
        />
      </div>
    );
  };

  return (
    <div className="nut-receive-invoice-edit" {...rest}>
      {InputDom({ name: "name", type: "text" })}
      {InputDom({ name: "tel", type: "tel" })}
      {InputDom({ name: "region", type: "text" })}
      {InputDom({ name: "address", type: "text" })}
      <Address
        modelValue={addressVisible}
        modelSelect={addressData.addressSelect}
        province={addressData.province}
        city={addressData.city}
        country={addressData.country}
        town={addressData.town}
        customAddressTitle={addressData.addressTitle}
        onChange={(cal) => changeAddress(cal)}
        onClose={closeAddress}
      />
      <div className="nut-receive-invoice-edit-bottom">
        <Button block type="danger" onClick={save}>
          {editSeting.bottomText}
        </Button>
      </div>
    </div>
  );
};

ReceiveInvoiceEdit.defaultProps = defaultProps;
ReceiveInvoiceEdit.displayName = "NutReceiveInvoiceEdit";
