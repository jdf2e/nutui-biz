import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { useConfig } from "@/packages/configprovider";
import { Popup, Checkbox, Button, TextArea } from "@nutui/nutui-react";
import { IComponent } from "@/utils/typings";
import bem from "@/utils/bem";
import { throttle } from "@/utils/throttle";
import "./ordercancelpanel.scss";
//视觉稿路径：https://relay.jd.com/web/project/page/0e041de9-9299-400a-8eec-2239bd8b9315/0/
export interface IResonsObject {
  key: string;
  value: string;
  isChecked?: boolean;
}
export type IPositionType =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";
export interface OrderCancelPanelProps extends IComponent {
  showCancelPanel: boolean;
  warmTips: string[];
  popupTitilePosition: IPositionType;
  cancelResons: Array<IResonsObject>;
  isAddOtherReason: boolean;
  canCancelReason: boolean;
  popupTitle: React.ReactNode;
  reasonTitle: React.ReactNode;
  maxlength: number;
  isShowCloseBtn: boolean;
  limitshow: boolean;
  btnsText: string;
  onClose: () => void;
  onClickCloseIcon: () => void;
  onClickOverlay: () => void;
  onSubmitBtn: (currActivedKey: string, textAreaValue: string) => void;
}

const defaultProps = {
  showCancelPanel: false,
  isAddOtherReason: false,
  canCancelReason: false,
  popupTitilePosition: "left",
  limitshow: false,
  isShowCloseBtn: true,
  btnsText: "提交",
  maxlength: 100,
} as OrderCancelPanelProps;

export const OrderCancelPanel: FunctionComponent<
  Partial<OrderCancelPanelProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    showCancelPanel,
    className,
    warmTips,
    cancelResons,
    reasonTitle,
    popupTitle,
    canCancelReason,
    isAddOtherReason,
    popupTitilePosition,
    maxlength,
    btnsText,
    limitshow,
    isShowCloseBtn,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onSubmitBtn,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("biz-ordercancel");
  const [cancelResonsList, setCancelResonsList] = useState<
    Array<IResonsObject>
  >([]);
  useEffect(() => {
    if (cancelResons && cancelResons.length > 0) {
      const cancelResonsListCheck: Array<IResonsObject> = cancelResons.map(
        (item) => {
          return Object.assign(item, { ischecked: false });
        }
      );
      const otherReason = {
        key: "other",
        value: "其他",
        isChecked: false,
      };
      isAddOtherReason && cancelResonsListCheck.push(otherReason);
      setCancelResonsList(cancelResonsListCheck);
    }
  }, [cancelResons]);

  const [currActivedKey, setCurrActivedKey] = useState("");
  const preChecked = useRef("");
  const checkedReason = (item: IResonsObject) => {
    handleCheckedBox(item);
  };
  //处理切换原因list，复选框是否被选中
  const handleCheckedBox = (item: IResonsObject) => {
    setCurrActivedKey(item.key);
    setShowOtherText(false);
    if (item.key === preChecked.current && canCancelReason) {
      setCurrActivedKey(preChecked.current ? "" : item.key);
      preChecked.current = "";
    } else {
      preChecked.current = item.key;
      if (item.key === "other") {
        setShowOtherText(true);
      }
    }
  };
  //其他文本框输入
  const [textAreaValue, setTextAreaValue] = useState("");
  //其他文本框是否显示
  const [showOtherText, setShowOtherText] = useState(false);
  //提交原因
  const submitContent = throttle(() => {
    onSubmitBtn && onSubmitBtn(currActivedKey, textAreaValue);
  }, 300);
  //关闭相关事件
  const closePopup = (type: string) => {
    if (type == "icon") {
      onClickCloseIcon && onClickCloseIcon();
    }

    if (type == "overlay") {
      onClickOverlay && onClickOverlay();
    }

    if (type == "close") {
      onClose && onClose();
    }
  };
  return (
    <div {...rest}>
      <Popup
        visible={showCancelPanel}
        position="bottom"
        round
        closeable={isShowCloseBtn}
        onClose={closePopup.bind(this, "close")}
        onClickCloseIcon={closePopup.bind(this, "icon")}
        onClickOverlay={closePopup.bind(this, "overlay")}
        className={`${b()} ${className} `}
      >
        <div className={b("main")}>
          <h1
            className={b("header")}
            style={{ textAlign: popupTitilePosition }}
          >
            {popupTitle}
          </h1>
          {warmTips && (
            <div className={b("tips")}>
              <h2 className={b("tips-header")}>温馨提示</h2>
              {warmTips.map((item, index) => {
                return (
                  <p key={index} className={b("tips-list")}>
                    {item}
                  </p>
                );
              })}
            </div>
          )}
          {reasonTitle && <h1 className={b("reason-header")}>{reasonTitle}</h1>}
          {cancelResonsList && (
            <div className={b("reason")}>
              {cancelResonsList.map((item, index) => {
                return (
                  <div
                    key={item.key}
                    className={b("reason--list")}
                    onClick={() => checkedReason(item)}
                  >
                    <div>{item.value}</div>
                    <div className={b("reason--list__checkbox")}>
                      <Checkbox checked={currActivedKey === item.key} />
                    </div>
                  </div>
                );
              })}
              {showOtherText && (
                <TextArea
                  className={b("area")}
                  defaultValue={textAreaValue}
                  rows="3"
                  limitshow={limitshow}
                  autosize={false}
                  maxlength={maxlength}
                  onChange={(val) => setTextAreaValue(val)}
                />
              )}
            </div>
          )}
        </div>
        <div className={b("btns")}>
          <Button
            type="primary"
            style={{ width: "80%" }}
            onClick={submitContent}
          >
            {btnsText}
          </Button>
        </div>
      </Popup>
    </div>
  );
};

OrderCancelPanel.defaultProps = defaultProps;
OrderCancelPanel.displayName = "NutOrderCancelPanel";
