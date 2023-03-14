import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
} from "react";
import { useConfig } from "@/packages/configprovider";
import classNames from "classnames";
import bem from "@/utils/bem";
import { IComponent } from "@/utils/typings";
import { Input, Button, ButtonProps, Switch, Toast } from "@nutui/nutui-react";
import Address from "../address";
import { AddressProps, AddressType, RegionData } from "../address/type";

interface CalResult {
  type: string;
  data: any;
}

export type showErrorType = "toast" | "bottomMsg";

export interface AddressInfo {
  name?: string;
  tel?: string;
  region?: string;
  regionIds?: (string | number)[] | any;
  address?: string;
  default?: boolean;
  [key: string]: any;
}
export interface AddressData {
  id?: string | number | any;
  nameText: string;
  namePlaceholder: string;
  nameErrorMsg: string;
  telText: string;
  telPlaceholder: string;
  telErrorMsg: string;
  regionText: string;
  regionPlaceholder: string;
  regionErrorMsg: string;
  addressText: string;
  addressPlaceholder: string;
  addressErrorMsg: string;
  isDefualtAddress?: boolean;
  isRequired?: string[];
  bottomText: string;
  errorShowType?: string;
  errorToastText?: string;
  [key: string]: any;
}
export interface AddressResult {
  addressSelect?: (string | number)[];
  addressStr?: string;
  province?: RegionData[];
  city?: RegionData[];
  country?: RegionData[];
  town?: RegionData[];
  addressTitle?: string;
  type?: AddressType | undefined;
  height?: string;
}

export interface AddressEditProps extends IComponent {
  addressInfo: AddressInfo;
  data: Partial<AddressData>;
  address: AddressResult;
  bottomInputTpl?: ReactNode;
  showSave?: Boolean;
  showDefault?: Boolean;
  buttonProps?: Partial<ButtonProps>;
  onChange?: (val: string, tag: string) => void;
  onChangeAddress?: (data: any) => void;
  onCloseAddress?: (data: any) => void;
  onSave?: (data: any) => void;
  onSwitch?: (state: boolean, data: any) => void;
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
  address: {
    addressSelect: [],
    addressStr: "",
    province: [],
    city: [],
    country: [],
    town: [],
    addressTitle: "选择所在地区",
    type: "custom",
    height: "",
  },
  showSave: true,
  showDefault: true,
} as AddressEditProps;

export const AddressEdit: FunctionComponent<
  Partial<AddressEditProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    className,
    style,
    addressInfo,
    showSave,
    showDefault,
    data,
    address,
    bottomInputTpl,
    buttonProps,
    onChange,
    onSave,
    onChangeAddress,
    onCloseAddress,
    onSwitch,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  //提交数据格式
  const [formData, setFormData] = useState<AddressInfo>({
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
  const [addressData, setAddressData] = useState<AddressResult>({
    addressSelect: [],
    addressStr: "",
    province: [],
    city: [],
    country: [],
    town: [],
    addressTitle: "选择所在地区",
    type: "custom",
    height: "500px",
  });
  //地址编辑数据形式兜底文案配置
  const [editSeting, setEditSeting] = useState<AddressData>({
    nameText: locale.addressedit.nameText,
    namePlaceholder: locale.addressedit.namePlaceholder,
    nameErrorMsg: locale.addressedit.nameErrorMsg,
    telText: locale.addressedit.telText,
    telPlaceholder: locale.addressedit.telPlaceholder,
    telErrorMsg: locale.addressedit.telErrorMsg,
    regionText: locale.addressedit.regionText,
    regionPlaceholder: locale.addressedit.regionPlaceholder,
    regionErrorMsg: locale.addressedit.regionErrorMsg,
    addressText: locale.addressedit.addressText,
    addressPlaceholder: locale.addressedit.addressPlaceholder,
    addressErrorMsg: locale.addressedit.addressErrorMsg,
    bottomText: locale.addressedit.bottomText,
    errorShowType: "toast",
    errorToastText: locale.addressedit.errorToastText,
  });
  const [errorList, setErrorList] = useState<string[] | any>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    //地址组件所需相关信息获取
    if (address) {
      setAddressData({ ...addressData, ...address });
    }

    //编辑地址所需字段设置获取
    if (data) {
      setEditSeting({ ...editSeting, ...data });
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
          ...address,
          addressSelect: addressInfo.regionIds,
        });
      }
    }
    //重置error错误
    setErrorList([]);
  }, [address, data, addressInfo]);

  const changeAddress = (cal: any) => {
    setErrorList(errorList.filter((i: any) => i != "region"));
    if (cal.next === "town") {
      setShowPopup(false);
    }
    onChangeAddress && onChangeAddress(cal);
  };

  //地址组件关闭事件数据处理
  const closeAddress = (val: CalResult) => {
    if (val.data.addressStr) {
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
      setErrorList(errorList.filter((i: string) => i != tag));
    }

    Object.keys(formData).map((key: string) => {
      if (key === tag) {
        if (key === "tel") {
          const regTel = /^1\d{10}$/;
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
      if (
        isRequired.includes(key) &&
        form[key] === "" &&
        !errorList.includes(key)
      ) {
        arr.push(key);
      }
    });
    setErrorList(arr);
    return arr.length === 0;
  };
  //保存按钮控制
  const save = () => {
    console.log("save", validForm());
    if (validForm()) {
      onSave && onSave(formData);
    } else {
      console.log("error");
      editSeting.errorShowType === "toast" && Toast.text("请完成必填项");
    }
  };
  const inputClear = (tag: string) => {
    let data = { ...formData };
    data[tag] = "";
    setFormData({ ...formData, ...data });
  };

  const inputTpl = (tag: string) => {
    const label = tag + "Text";
    const errorMsg = tag + "ErrorMsg";
    const placeholder = tag + "Placeholder";
    return (
      <div className={`${b("item")}`}>
        <Input
          className="nut-input-text"
          label={editSeting[label]}
          defaultValue={formData[tag]}
          name={tag}
          placeholder={editSeting[placeholder]}
          type={tag == "tel" ? "tel" : "text"}
          clearable
          readonly={tag === "region"}
          required={isRequired.includes(tag) || false}
          onChange={(e) => inputOnchange(e, tag)}
          onClear={() => inputClear(tag)}
          onClick={() => {
            if (tag !== "region") return;
            setShowPopup(true);
          }}
          errorMessage={
            editSeting.errorShowType != "toast" &&
            errorList.includes(tag) &&
            editSeting[errorMsg]
          }
        />
        {tag === "region" && (
          <Address
            modelValue={showPopup}
            type={addressData.type}
            modelSelect={addressData.addressSelect}
            province={addressData.province}
            city={addressData.city}
            country={addressData.country}
            town={addressData.town}
            height={addressData.height}
            customAddressTitle={addressData.addressTitle}
            onChange={(cal) => changeAddress(cal)}
            onClose={closeAddress}
          />
        )}
      </div>
    );
  };

  const b = bem("addressedit");
  return (
    <div
      className={classNames([b(), className])}
      id={data?.id}
      style={style}
      {...rest}
    >
      {inputTpl("name")}
      {inputTpl("tel")}
      {inputTpl("region")}
      {inputTpl("address")}
      {bottomInputTpl ? <>{bottomInputTpl}</> : null}
      {showDefault && (
        <div className={`${b("item")} setdefualt`}>
          <span className="label">{locale.addressedit.setDefaultText}</span>
          <Switch
            checked={formData.default}
            onChange={(state) => {
              setFormData({ ...formData, default: state });
              onSwitch && onSwitch(state, { ...formData, default: state });
            }}
          />
        </div>
      )}
      {showSave && (
        <div className={`${b("bottom")}`}>
          <Button block type="danger" onClick={save} {...buttonProps}>
            {editSeting.bottomText}
          </Button>
        </div>
      )}
    </div>
  );
};

AddressEdit.defaultProps = defaultProps;
AddressEdit.displayName = "NutAddressEdit";
