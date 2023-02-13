import React, { FunctionComponent, useState, useEffect } from "react";
import { useConfig } from "@/packages/configprovider";
import bem from "@/utils/bem";
import { IComponent } from "@/utils/typings";
import {
  Input,
  Button,
  Address,
  Switch,
  Cell,
  CellGroup,
} from "@nutui/nutui-react";

interface CalResult {
  type: string;
  data: any;
}
interface RegionData {
  name?: string;
  [key: string]: any;
}
interface AddressInfo {
  name?: string;
  tel?: string;
  region?: string;
  regionIds?: any;
  address?: string;
  default?: boolean;
}
interface AddressData {
  id?: string | number | any;
  nameText?: string;
  namePlaceholder?: string;
  nameErrorMsg?: string;
  telText?: string;
  telPlaceholder?: string;
  telErrorMsg?: string;
  telFormatter?: string;
  regionText?: string;
  regionPlaceholder?: string;
  regionErrorMsg?: string;
  addressText?: string;
  addressPlaceholder?: string;
  addressErrorMsg?: string;
  isDefualtAddress?: boolean;
  isRequired?: any;
  bottomText?: string;
}
interface AddressResult {
  addressSelect: any;
  addressStr: string;
  province: RegionData[];
  city: RegionData[];
  country: RegionData[];
  town: RegionData[];
  customAddressTitle: string;
  height?: string;
}

export interface AddressEditProps extends IComponent {
  addressInfo: AddressInfo;
  data: AddressData;
  address: any;
  addressType: string;
  onChange: (val: string, tag: string) => void;
  onChangeAddress: (data: any) => void;
  onCloseAddress: (data: any) => void;
  onSave: (data: any) => void;
}

const defaultProps = {
  addressInfo: {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
    default: false,
  },
  data: {},
  addressType: "custom",
  address: {
    modelValue: false,
    addressSelect: [],
    province: [],
    city: [],
    country: [],
    town: [],
    customAddressTitle: "选择所在地区",
  },
} as unknown as AddressEditProps;

export const AddressEdit: FunctionComponent<
  Partial<AddressEditProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    addressInfo = null,
    showSave = false,
    data = null,
    address,
    addressType,
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
    default: false,
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
    province: [],
    city: [],
    country: [],
    town: [],
    addressTitle: "选择所在地区",
    height: "200px",
  });
  //地址编辑数据形式兜底文案配置
  const [editSeting, setEditSeting] = useState({
    nameText: "收货人",
    namePlaceholder: "请输入收货人",
    nameErrorMsg: "该项为必填项，请填写完后提交",
    telText: "手机号码",
    telPlaceholder: "请输入手机号码",
    telErrorMsg: "该项为必填项，请填写完后提交",
    regionText: "所在地区",
    regionPlaceholder: "请选择所在地区",
    regionErrorMsg: "该项为必填项，请填写完后提交",
    addressText: "详细地址",
    addressPlaceholder: "街道、楼牌号",
    addressErrorMsg: "该项为必填项，请填写完后提交",
    bottomText: "保存",
  });
  const [errorList, setErrorList] = useState<any>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState("custom");

  useEffect(() => {
    //地址组件所需相关信息获取
    if (address) {
      setAddressData(address);
    }
    //编辑地址所需字段设置获取
    if (data) {
      setEditSeting({ ...data, ...editSeting });
      if (data?.isRequired) {
        setIsRequired(data.isRequired);
      }
    }
    //地址信息初始化获取
    if (addressInfo) {
      setFormData({ ...formData, ...addressInfo });
      //同步地址组件
      if (addressInfo.regionIds.length) {
        setAddressData({
          ...addressData,
          addressSelect: addressInfo.regionIds,
        });
      }
    }
    //重置error错误
    setErrorList([]);
  }, [address, data, addressInfo]);

  useEffect(() => {
    if (addressType) {
      setType(addressType);
    }
  }, [addressType]);

  const changeAddress = (cal: any, tag: string) => {
    setErrorList(errorList.filter((i: any) => i != "region"));
    if (cal.next === "town") {
      setShowPopup(false);
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

    setShowPopup(false);
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
    let form = { ...formData };
    let arr: any = [].concat(errorList);
    Object.keys(form).map((key) => {
      if (isRequired.includes(key) && form[key] === "") {
        switch (key) {
          case "name":
            if (!errorList.includes("name")) {
              arr.push("name");
            }
            break;
          case "tel":
            if (!errorList.includes("tel")) {
              arr.push("tel");
            }
            break;
          case "region":
            if (!errorList.includes("region")) {
              arr.push("region");
            }
            break;
          case "address":
            if (!errorList.includes("address")) {
              arr.push("address");
            }
            break;

          default:
            break;
        }
        setErrorList(arr);
        return false;
      }
    });

    return true;
  };
  const save = () => {
    if (validForm()) {
      onSave && onSave(formData);
    } else {
      console.log("校验不通过");
    }
  };
  const inputClear = (tag: string) => {
    let data = { ...formData };
    data[tag] = "";
    setFormData({ ...formData, ...data });
  };

  const b = bem("addressedit");
  return (
    <div className={`${b()}`} id={data?.id}>
      <div className={`${b("item")}`}>
        <Input
          className="nut-input-text"
          label={editSeting.nameText}
          defaultValue={formData.name}
          name="name"
          placeholder={editSeting?.namePlaceholder}
          type="text"
          clearable
          required={isRequired.includes("name") || false}
          onChange={(e) => inputOnchange(e, "name")}
          onClear={() => inputClear("name")}
          errorMessage={errorList.includes("name") && editSeting.nameErrorMsg}
        />
      </div>
      <div className={`${b("item")}`}>
        <Input
          className="nut-input-text"
          label={editSeting.telText}
          defaultValue={formData.tel}
          name="tel"
          placeholder={editSeting.telPlaceholder}
          type="tel"
          clearable
          required={isRequired.includes("tel") || false}
          onChange={(e) => inputOnchange(e, "tel")}
          onClear={() => inputClear("tel")}
          errorMessage={errorList.includes("tel") && editSeting.telErrorMsg}
        />
      </div>
      <div className={`${b("item")}`}>
        <Input
          className="nut-input-text"
          label={editSeting.regionText}
          defaultValue={formData.region}
          name="region"
          readonly
          placeholder={editSeting.regionPlaceholder}
          type="text"
          required={isRequired.includes("region") || false}
          onClick={() => setShowPopup(true)}
          errorMessage={
            errorList.includes("region") && editSeting.regionErrorMsg
          }
        />
        <Address
          modelValue={showPopup}
          type={type}
          modelSelect={addressData.addressSelect}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          height={addressData.height}
          customAddressTitle={addressData.addressTitle}
          onChange={(cal) => changeAddress(cal, "select")}
          onClose={closeAddress}
        />
      </div>
      <div className={`${b("item")}`}>
        <Input
          label={editSeting.addressText}
          className="nut-input-text"
          defaultValue={formData.address}
          placeholder={editSeting.addressPlaceholder}
          type="text"
          clearable
          required={isRequired.includes("address") || false}
          onChange={(e) => inputOnchange(e, "address")}
          onClear={() => inputClear("address")}
          errorMessage={
            errorList.includes("address") && editSeting.addressErrorMsg
          }
        />
      </div>
      <div className={`${b("item")} setdefualt`}>
        <span className="label">设置默认地址</span>
        <Switch
          checked={formData.default}
          onChange={(state) => {
            setFormData({ ...formData, default: state });
          }}
        />
      </div>
      <div className={`${b("bottom")}`}>
        <Button block type="danger" onClick={save}>
          {editSeting.bottomText}
        </Button>
      </div>
    </div>
  );
};

AddressEdit.defaultProps = defaultProps;
AddressEdit.displayName = "NutAddressEdit";
