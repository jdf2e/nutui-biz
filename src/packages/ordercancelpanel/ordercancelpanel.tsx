import React, { FunctionComponent, useState, useRef } from "react";
import {
  Popup,
  Checkbox,
  Button,
  TextArea,
  TextAreaProps,
  ButtonProps,
} from "@nutui/nutui-react";
import { IComponent } from "@/utils/typings";
import bem from "@/utils/bem";
import { throttle } from "@/utils/throttle";
export interface IKeyValue {
  key: string;
  value: string;
}
export interface OrderCancelPanelProps extends IComponent {
  showCancelPanel: boolean;
  warmTips: string[];
  cancelResons: Array<IKeyValue>;
  canCancelReason: boolean;
  popupTitle: React.ReactNode | string;
  reasonTitle: React.ReactNode | string;
  btnsText: string;
  tipsTitle: string;
  className?: string;
  buttonProps: Partial<ButtonProps>;
  textAreaProps: Partial<Omit<TextAreaProps, "defaultValue">>;
  onClose: () => void;
  onClickCloseIcon: () => void;
  onClickOverlay: () => void;
  onSubmitBtn: (currActivedKey: string, textAreaValue: string) => void;
}

const defaultProps = {
  showCancelPanel: false,
  canCancelReason: false,
  btnsText: "提交",
  tipsTitle: "温馨提示",
} as OrderCancelPanelProps;

export const OrderCancelPanel: FunctionComponent<
  Partial<OrderCancelPanelProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = React.memo((props) => {
  const {
    showCancelPanel,
    className,
    warmTips,
    cancelResons,
    reasonTitle,
    popupTitle,
    canCancelReason,
    btnsText,
    tipsTitle,
    buttonProps,
    textAreaProps,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onSubmitBtn,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  console.log("渲染");
  const b = bem("biz-ordercancel");
  const [currActivedKey, setCurrActivedKey] = useState("");
  const preChecked = useRef("");
  //其他文本框输入
  const [textAreaValue, setTextAreaValue] = useState("");
  //其他文本框是否显示
  const [showOtherText, setShowOtherText] = useState(false);

  //处理切换原因list，复选框是否被选中
  const checkedReason = (item: IKeyValue) => {
    setCurrActivedKey(item.key);
    setShowOtherText(false);
    if (canCancelReason && item.key === preChecked.current) {
      setCurrActivedKey(preChecked.current ? "" : item.key);
      preChecked.current = "";
    } else {
      preChecked.current = item.key;
      if (item.key === "other") {
        setShowOtherText(true);
      }
    }
  };

  //提交原因
  const submitContent = throttle(() => {
    let currTextarea = textAreaValue;
    if (currActivedKey !== "other") {
      currTextarea = "";
      setTextAreaValue("");
    }
    onSubmitBtn && onSubmitBtn(currActivedKey, currTextarea);
  }, 300);
  //关闭相关事件
  const closePopup = (type: string) => {
    switch (type) {
      case "icon":
        onClickCloseIcon && onClickCloseIcon();
        break;
      case "overlay":
        onClickOverlay && onClickOverlay();
        break;
      case "close":
        onClose && onClose();
        break;
    }
  };
  return (
    <div {...rest}>
      <Popup
        visible={showCancelPanel}
        position="bottom"
        round
        closeable
        onClose={() => closePopup("close")}
        onClickCloseIcon={() => closePopup("icon")}
        onClickOverlay={() => closePopup("overlay")}
        className={`${b()} ${className} `}
      >
        <div className={b("main")}>
          <h1 className={b("header")}>{popupTitle}</h1>
          {warmTips && (
            <div className={b("tips")}>
              <h2 className={b("tips-header")}>{tipsTitle}</h2>
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
          {cancelResons && (
            <div className={b("reason")}>
              {cancelResons.map((item) => {
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
                  {...textAreaProps}
                  className={b("area")}
                  defaultValue={textAreaValue}
                  onChange={(val) => setTextAreaValue(val)}
                />
              )}
            </div>
          )}
        </div>
        <div className={b("btns")}>
          <Button {...buttonProps} onClick={submitContent}>
            {btnsText}
          </Button>
        </div>
      </Popup>
    </div>
  );
});

OrderCancelPanel.defaultProps = defaultProps;
OrderCancelPanel.displayName = "NutOrderCancelPanel";
