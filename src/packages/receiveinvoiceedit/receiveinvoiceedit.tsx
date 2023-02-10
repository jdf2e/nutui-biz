import React, { FunctionComponent, useState, useEffect } from "react";
import { IComponent } from "@/utils/typings";
import {
  Input,
  Button,
  Address,
} from "@nutui/nutui-react";
import "./receiveinvoiceedit.scss";
import { useConfig } from "@/packages/configprovider";

interface CalResult {
  type: string;
  data: any;
}
interface RegionData {
  name?: string;
  [key: string]: any;
}
interface InvoiceInfo {
  name?: string;
  tel?: string;
  region?: string;
  regionIds?: any;
  address?: string;
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
  required?: any;
  bottomText?: string;
}
interface AddressResult {
  addressSelect: any;
  addressStr: string;
  province: RegionData[];
  city: RegionData[];
  country: RegionData[];
  town: RegionData[];
  addressTitle: string;
}

export interface ReceiveInvoiceEdit extends IComponent {
  invoiceInfo: InvoiceInfo;
  data: InvoiceData;
  address: AddressResult;
  onChange: (val: string, tag: string) => void;
  onChangeAddress: (data: any) => void;
  onCloseAddress: (data: any) => void;
  onSave: (data: any) => void;
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
} as unknown as ReceiveInvoiceEdit;

export const ReceiveInvoiceEdit: FunctionComponent<
  Partial<ReceiveInvoiceEdit> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    invoiceInfo = null,
    showSave = false,
    data = null,
    address,
    onChange,
    onSave,
    onChangeAddress,
    onCloseAddress,
    ...rest
  } = {
    ...props,
  };
  //提交数据格式
  const [formData, setFormData] = useState<any>({
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
  });
  //必填项设置
  const [isRequired, setIsRequired] = useState([
    "name",
    "tel",
    "region",
    "address",
  ]);
  //地址组件相关数据
  const [addressData, setAddressData] = useState({
    addressSelect: [],
    province: [] as RegionData[],
    city: [] as RegionData[],
    country: [] as RegionData[],
    town: [] as RegionData[],
    addressTitle: "选择所在地区",
  });
  //地址编辑数据形式兜底文案配置
  const [editSeting, setEditSeting] = useState({
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
    //地址组件所需相关信息获取
    if (address) {
      setAddressData(address);
    }
    //编辑地址所需字段设置获取
    if (data) {
      setEditSeting({ ...editSeting,...data });
      if (data?.required) {
        setIsRequired(data.required);
      }
    }
    //地址信息初始化获取
    if (invoiceInfo) {
      setFormData({ ...formData, ...invoiceInfo });
      //同步地址组件
      if (invoiceInfo.regionIds.length) {
        setAddressData({
          ...addressData,
          addressSelect: invoiceInfo.regionIds,
        });
      }
    }
    //重置error错误
    setErrorList([]);
  }, [address, data, invoiceInfo]);
  const changeAddress = (cal: any) => {
    setErrorList(errorList.filter((i: any) => i != "region"));
    if (cal.next === "town") {
      setAddressVisible(false);
    }
    onChangeAddress && onChangeAddress(cal);
  };

  const closeAddress = (val: CalResult) => {
    if ((val.data as AddressResult).addressStr) {
      //地址id格式处理
      let ids = val.data.addressIdStr.split("_").map((item: any) => item * 1);
      //删除数组中为0的项
      ids.splice(ids.indexOf(0));
      //提交信息数据同步
      setFormData({ ...formData, region: val.data.addressStr, regionIds: ids });
      //地址组件数据同步
      setAddressData({ ...addressData, addressSelect: ids });
    }
    onCloseAddress && onCloseAddress(val);

    setAddressVisible(false);
  };
  const inputOnchange = (val: any, tag: string) => {
    let data = { ...formData };
    if (val.length != 0) {
      setErrorList(errorList.filter((i: any) => i != tag));
    }

    Object.keys(formData).map((key: any) => {
      if (key === tag) {
        if (key === "tel") {
          const regTel =
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
          const regNumber = /[^-0-9]/g;
          let number =
            !regTel.test(val) && val.length > 11
              ? val.substring(0, 11)
              : val.replace(regNumber, "");
          data[tag] = number;
        } else {
          data[tag] = val;
        }
      }
    });
    setFormData({ ...formData, ...data });
    onChange && onChange(val, tag);
  };
  const validForm = () => {
    let form = formData;
    let flag = false
    let arr: any = [].concat(errorList);
    Object.keys(form).map((key) => {
      // console.log(key);
      // console.log(isRequired);
      if (isRequired.includes(key) && formData[key] == "") {
        console.log(key);
        
        switch (key) {
          case "name":
            if (!errorList.includes("name")) {
              arr.push("name");
              setErrorList(arr);
            }
            break;
          case "tel":
            if (!errorList.includes("tel")) {
              arr.push("tel");
              setErrorList(arr);
            }
            break;
          case "region":
            if (!errorList.includes("region")) {
              arr.push("region");
              setErrorList(arr);
            }
            break;
          case "address":
            if (!errorList.includes("address")) {
              arr.push("address");
              setErrorList(arr);
            }
            break;

          default:
            break;
        }
        flag = false
      }else{
        flag =  true
      }
    });
    return flag
  };
  const save = () => {
    if (validForm()) {
      onSave && onSave(formData);
    } else {
      console.log("校验不通过");
    }
  };

  return (
    <div className="nut-receive-invoice-edit" {...rest}>
      <div className="nut-receive-invoice-edit-item">
        <Input
          className="nut-input-text"
          label={editSeting.nameText}
          defaultValue={formData.name}
          name="name"
          placeholder={editSeting?.namePlaceholder}
          type="text"
          required={isRequired.includes("name") || false}
          onChange={(e) => inputOnchange(e, "name")}
          errorMessage={errorList.includes("name") && editSeting.nameErrorMsg}
        />
      </div>
      <div className="nut-receive-invoice-edit-item">
        <Input
          className="nut-input-text"
          label={editSeting.telText}
          defaultValue={formData.tel}
          name="tel"
          placeholder={editSeting.telPlaceholder}
          type="tel"
          required={isRequired.includes("tel") || false}
          onChange={(e) => inputOnchange(e, "tel")}
          errorMessage={errorList.includes("tel") && editSeting.telErrorMsg}
        />
      </div>
      <div className="nut-receive-invoice-edit-item">
        <Input
          className="nut-input-text"
          label={editSeting.regionText}
          defaultValue={formData.region}
          name="region"
          readonly
          placeholder={editSeting.regionPlaceholder}
          type="text"
          required={isRequired.includes("region") || false}
          onClick={() => setAddressVisible(true)}
          errorMessage={
            errorList.includes("region") && editSeting.regionErrorMsg
          }
        />
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
      </div>
      <div className="nut-receive-invoice-edit-item">
        <Input
          label={editSeting.addressText}
          className="nut-input-text"
          defaultValue={formData.address}
          placeholder={editSeting.addressPlaceholder}
          type="text"
          required={isRequired.includes("address") || false}
          onChange={(e) => inputOnchange(e, "address")}
          errorMessage={
            errorList.includes("address") && editSeting.addressErrorMsg
          }
        />
      </div>
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
