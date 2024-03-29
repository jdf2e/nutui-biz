import React, { FunctionComponent, useState, useEffect, useLayoutEffect, CSSProperties } from "react";
import { IComponent } from "@/utils/typings";
import {
  RegionData,
  NextListObj,
  CloseCallBack,
  CloseCallBackData,
} from "../address/type";
import { Input, Button,ButtonProps } from "@nutui/nutui-react";
import { Address } from "../address/address";
import { useConfig } from "@/packages/configprovider";
import bem from "@/utils/bem";
import classNames from "classnames";

export interface InvoiceInfo {
  name?: string;
  tel?: string;
  region?: string;
  regionIds?: Array<number>;
  address?: string;
  [key: string]: any;
}
export interface InvoiceData {
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
  required?: Array<string>;
  showSaveBtn?: boolean;
  bottomText?: string;
  [key: string]: any;
}
export interface AddressResult {
  addressSelect?: (string | number)[];
  province?: Array<RegionData>;
  city?: Array<RegionData>;
  country?: Array<RegionData>;
  town?: Array<RegionData>;
  addressTitle?: string;
  [key: string]: any;
}

export interface ReceiveInvoiceEditProps extends IComponent {
  invoiceInfo: InvoiceInfo;
  data: InvoiceData;
  address: AddressResult;
  buttonProps?: Partial<ButtonProps>;
  onChange?: (val: string, tag: string) => void;
  onAddressChange?: (data: NextListObj) => void;
  onAddressClose?: (data: CloseCallBack) => void; // 地址弹窗关闭时触发事件
  onSave?: (data: InvoiceInfo) => void; // 保存按钮事件
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
  Partial<ReceiveInvoiceEditProps>
> = (props) => {
  const b = bem('receive-invoice-edit');
  const {
    invoiceInfo,
    data,
    address,
    buttonProps,
    style,
    className,
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
  const [addressData, setAddressData] = useState<AddressResult>(address);
  //地址编辑数据形式兜底文案配置
  const {
    nameText,
    namePlaceholder,
    nameErrorMsg,
    telText,
    telPlaceholder,
    telErrorMsg,
    regionText,
    regionPlaceholder,
    regionErrorMsg,
    addressText,
    addressPlaceholder,
    addressErrorMsg,
    bottomText,
  } = useConfig()?.locale?.receiveInvoiceEdit;
  const [editSeting, setEditSeting] = useState<InvoiceData>({
    nameText: nameText,
    namePlaceholder: namePlaceholder,
    nameErrorMsg: nameErrorMsg,
    telText: telText,
    telPlaceholder: telPlaceholder,
    telErrorMsg: telErrorMsg,
    regionText: regionText,
    regionPlaceholder: regionPlaceholder,
    regionErrorMsg: regionErrorMsg,
    addressText: addressText,
    addressPlaceholder: addressPlaceholder,
    addressErrorMsg: addressErrorMsg,
    bottomText: bottomText,
  });
  const [errorList, setErrorList] = useState<Array<string>>([]);
  const [addressVisible, setAddressVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setEditSeting({ ...editSeting, ...data });
      if (data.required) {
        setRequired(data.required);
      }
    }
    if (invoiceInfo) {
      setFormData({ ...formData, ...invoiceInfo });
      setAddressData({
        ...address,
        addressSelect: invoiceInfo?.regionIds,
      });
    }
    setErrorList([]);
  }, [address, data, invoiceInfo]);
  const changeAddress = (cal: NextListObj) => {
    setErrorList(errorList.filter((i: string) => i != "region"));
    const name = addressData[cal.next];
    if (name.length < 1) {
      setAddressVisible(false);
    }
    onAddressChange && onAddressChange(cal);
  };
  const closeAddress = (val: CloseCallBack) => {
    //地址id格式处理
    let ids = (val.data as CloseCallBackData).addressIdStr
      .split("_")
      .map((item: string) => +item * 1);
    //删除数组中为0的项
    ids.splice(ids.indexOf(0));
    //提交信息数据同步
    setFormData({
      ...formData,
      region: (val.data as CloseCallBackData).addressStr,
      regionIds: ids,
    });
    //地址组件数据同步
    setAddressData({ ...addressData, addressSelect: ids });
    onAddressClose && onAddressClose(val);
    setAddressVisible(false);
  };
  const inputOnchange = (val: string, tag: string) => {
    let data = { ...formData };
    if (val.length != 0) {
      setErrorList(errorList.filter((i: string) => i != tag));
    }
    Object.keys(formData).map((key: string) => {
      if (key === tag) {
        data[tag] = val;
      }
    });
    setFormData({ ...formData, ...data });
    onChange && onChange(val, tag);
  };
  const validForm = () => {
    let form = formData;
    let arr: Array<string> = ([] as Array<string>).concat(errorList);
    Object.keys(form).map((key) => {
      if (required.includes(key) && formData[key] == "") {
        if (!errorList.includes(key)) {
          arr.push(key);
        }
        setErrorList(arr);
      }
    });
    return !arr.length;
  };
  const save = () => {
      validForm() && onSave?.(formData);
  };
  const desc = (name:string,str:string)=>{
    return name + str;
  }
  const inputDom = (name: string, type: string) => {
    const label = desc(name,"Text") ;
    const errorMsg = desc(name,"ErrorMsg") ;
    const placeholder = desc(name,"Placeholder");
    return (
      <div className={b('item')}>
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
    <div className={classNames([b(), className])} style={style} {...rest}>
      {inputDom("name", "text")}
      {inputDom( "tel", "tel" )}
      {inputDom( "region","text" )}
      {inputDom( "address","text")}
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
      <div className={b('bottom')}>
        <Button block type="danger" onClick={save} {...buttonProps}>
          {editSeting.bottomText}
        </Button>
      </div>
    </div>
  );
};

ReceiveInvoiceEdit.defaultProps = defaultProps;
ReceiveInvoiceEdit.displayName = "NutReceiveInvoiceEdit";
