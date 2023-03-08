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
  PopupProps,
  Switch,
} from "@nutui/nutui-react";
import { IComponent } from "@/utils/typings";
import bem from "@/utils/bem";
import { cn2 } from "@/utils/bem";

export type ICheckboxPosition = "front" | "back";
export interface IreasonsObject {
  key: string;
  value: string;
  [x: string]: any;
}
export interface OrderCancelPanelProps extends IComponent {
  popupProps: Partial<PopupProps>;
  showCancelPanel: boolean;
  warmTips: string[];
  cancelReason: Array<IreasonsObject>;
  canCancelReason: boolean;
  popupTitle: React.ReactNode;
  reasonTitle: React.ReactNode;
  submitText: string;
  tipsTitle: React.ReactNode;
  showBtntips: boolean;
  checkboxType: ICheckboxPosition;
  buttonProps: Partial<ButtonProps>;
  safeAreaCancelBottom: boolean;
  textAreaProps: Partial<Omit<TextAreaProps, "defaultValue">>;
  onClose: () => void;
  onSubmitBtn: (
    selectedReason: IreasonsObject,
    textAreaValue: string,
    switchStatus: boolean
  ) => void;
}

const defaultProps = {
  showCancelPanel: false,
  canCancelReason: false,
  submitText: "提交",
  tipsTitle: "温馨提示",
  checkboxType: "back",
  safeAreaCancelBottom: false,
  showBtntips: false,
} as OrderCancelPanelProps;

export const OrderCancelPanel: FunctionComponent<
  Partial<OrderCancelPanelProps> & React.HTMLAttributes<HTMLDivElement>
> = React.memo((props) => {
  const {
    popupProps,
    showCancelPanel,
    className,
    warmTips,
    cancelReason,
    reasonTitle,
    popupTitle,
    canCancelReason,
    submitText,
    tipsTitle,
    buttonProps,
    textAreaProps,
    style,
    showBtntips,
    safeAreaCancelBottom,
    checkboxType,
    onClose,
    onSubmitBtn,
  } = {
    ...defaultProps,
    ...props,
  };
  const b = cn2("biz-ordercancel");
  const [currActivedKey, setCurrActivedKey] = useState("");
  const preChecked = useRef("");
  //其它文本框输入
  const [textAreaValue, setTextAreaValue] = useState("");
  //其它文本框是否显示
  const [showOtherText, setShowOtherText] = useState(false);

  //处理切换原因list，复选框是否被选中
  const checkedReason = (item: IreasonsObject) => {
    setShowOtherText(false);

    if (item.key === preChecked.current) {
      if (canCancelReason) {
        setCurrActivedKey(preChecked.current ? "" : item.key);
        preChecked.current = "";
      } else {
        if (item.key === "other") {
          setShowOtherText(true);
        }
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
    onSubmitBtn?.(selectedReason[0], currTextarea, switchStatus);
  };
  //关闭弹窗的时候清空数据
  const clearStatus = () => {
    setCurrActivedKey("");
    setTextAreaValue("");
    setShowOtherText(false);
    setSwitchStatus(false);
    preChecked.current = "";
  };
  //关闭相关事件
  const closePopup = () => {
    onClose?.();
    clearStatus();
  };
  //点击切换事件
  const [switchStatus, setSwitchStatus] = useState(false);
  const changeSwitch = (value: boolean) => {
    setSwitchStatus(value);
  };
  return (
    <Popup
      {...popupProps}
      visible={showCancelPanel}
      position="bottom"
      round
      closeable
      style={style}
      onClose={closePopup}
      className={`${b()} ${className} `}
    >
      <div className={b("main")}>
        {popupTitle && <div className={b("header")}>{popupTitle}</div>}
        {warmTips?.length > 0 && (
          <div className={b("tips")}>
            {tipsTitle && <div className={b("tips-header")}>{tipsTitle}</div>}
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
                  {checkboxType === "front" ? (
                    <>
                      <div
                        className={b("reason--list__checkbox", {
                          post: "front",
                        })}
                      >
                        <Checkbox checked={currActivedKey === item.key} />
                      </div>
                      <div className={b("reason--list__label")}>
                        {item.value}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={b("reason--list__label")}>
                        {item.value}
                      </div>
                      <div className={b("reason--list__checkbox")}>
                        <Checkbox checked={currActivedKey === item.key} />
                      </div>
                    </>
                  )}

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
        {showBtntips && (
          <div className={b("btns--tips")}>
            <div>提交后，将本单商品放回购物车中</div>
            <Switch onChange={changeSwitch} />
          </div>
        )}
        <div className={b("btns--button")}>
          <Button {...buttonProps} onClick={submitContent}>
            {submitText}
          </Button>
        </div>
        {safeAreaCancelBottom && <div className={b("btns--safe")}></div>}
      </div>
    </Popup>
  );
});

OrderCancelPanel.defaultProps = defaultProps;
OrderCancelPanel.displayName = "NutOrderCancelPanel";
