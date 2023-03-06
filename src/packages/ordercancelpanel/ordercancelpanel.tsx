import React, {
  FunctionComponent,
  useState,
  useRef,
  CSSProperties,
} from "react";
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

export interface IKeyValue {
  key: string;
  value: string;
}
export interface OrderCancelPanelProps extends IComponent {
  showCancelPanel: boolean;
  warmTips: string[];
  cancelReason: Array<IKeyValue>;
  canCancelReason: boolean;
  popupTitle: React.ReactNode | string;
  reasonTitle: React.ReactNode | string;
  btnsText: string;
  tipsTitle: string;
  className?: string;
  style?: CSSProperties;
  buttonProps: Partial<ButtonProps>;
  textAreaProps: Partial<Omit<TextAreaProps, "defaultValue">>;
  onClose: () => void;
  onClickCloseIcon: () => void;
  onClickOverlay: () => void;
  onSubmitBtn: (selectedReason: IKeyValue, textAreaValue: string) => void;
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
    cancelReason,
    reasonTitle,
    popupTitle,
    canCancelReason,
    btnsText,
    tipsTitle,
    buttonProps,
    textAreaProps,
    style,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onSubmitBtn,
  } = {
    ...defaultProps,
    ...props,
  };
  const b = bem("biz-ordercancel");
  const [currActivedKey, setCurrActivedKey] = useState("");
  const preChecked = useRef("");
  //其他文本框输入
  const [textAreaValue, setTextAreaValue] = useState("");
  //其他文本框是否显示
  const [showOtherText, setShowOtherText] = useState(false);

  //处理切换原因list，复选框是否被选中
  const checkedReason = (item: IKeyValue) => {
    setShowOtherText(false);
    if (item.key === preChecked.current) {
      if (canCancelReason) {
        setCurrActivedKey(preChecked.current ? "" : item.key);
        preChecked.current = "";
      }
    } else {
      setCurrActivedKey(item.key);
      preChecked.current = item.key;
      if (item.key === "other") {
        setShowOtherText(true);
      }
    }
  };

  //提交原因
  const submitContent = () => {
    let currTextarea = textAreaValue;
    if (currActivedKey !== "other") {
      currTextarea = "";
      setTextAreaValue("");
    }
    const selectedReason = cancelReason.filter((item) => {
      return item.key === currActivedKey;
    });
    onSubmitBtn && onSubmitBtn(selectedReason[0], currTextarea);
  };
  //关闭弹窗的时候清空数据
  const clearStatus = () => {
    setCurrActivedKey("");
    setTextAreaValue("");
    setShowOtherText(false);
  };
  //关闭相关事件
  const closePopup = (type: string) => {
    console.log("执行了", type);
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
    clearStatus();
  };

  return (
    <Popup
      visible={showCancelPanel}
      position="bottom"
      round
      closeable
      style={style}
      onClose={() => closePopup("close")}
      onClickCloseIcon={() => closePopup("icon")}
      onClickOverlay={() => closePopup("overlay")}
      className={`${b()} ${className} `}
    >
      <div className={b("main")}>
        <h1 className={b("header")}>
          {popupTitle}-{currActivedKey}
        </h1>
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
        {cancelReason && (
          <div className={b("reason")}>
            {cancelReason.map((item) => {
              return (
                <div key={item.key} className={b("reason--list")}>
                  <div>{item.value}</div>
                  <div className={b("reason--list__checkbox")}>
                    <Checkbox checked={currActivedKey === item.key} />
                  </div>
                  <div
                    className={b("reason--list__overlay")}
                    onClick={() => checkedReason(item)}
                  ></div>
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
  );
});

OrderCancelPanel.defaultProps = defaultProps;
OrderCancelPanel.displayName = "NutOrderCancelPanel";
