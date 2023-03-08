import React, { useState, CSSProperties } from "react";
import { OrderCancelPanel, IreasonsObject } from "./ordercancelpanel";
import { Cell, Button, ButtonProps, TextAreaProps } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";

interface T {
  basic: string;
  tipsText: string;
  otherText: string;
  cellTitle: string;
  submitText: string;
  checkboxText: string;
  cancelText: string;
  cancelReasonTitle: string;
  reasonTitle: string;
  tipsTitle: string;
  textareaPlaceholder: string;
  warmTips: Array<string>;
  cancelReason: Array<IreasonsObject>;
  otherReason: Array<IreasonsObject>;
}

const CouponDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      tipsText: "带有温馨提示的组件",
      otherText: "带有其它原因选项的组件",
      cancelText: "可取消已选中的原因",
      checkboxText: "checkbox框选择在前面",
      cellTitle: "显示弹窗",
      submitText: "确认",
      cancelReasonTitle: "退款原因",
      reasonTitle: "请选择取消订单原因",
      tipsTitle: "温馨提示",
      textareaPlaceholder: "请输入内容",
      warmTips: [
        "1. 限时特价、预约资格等购买优惠可能一并取消",
        "2. 如遇订单拆分，京券将换成同价值京豆返还",
        "3. 支付券不予返还；支付优惠一并取消",
        "4. 订单一旦取消，无法恢复",
      ],
      cancelReason: [
        {
          key: "reasons1",
          value: "商品无货",
        },
        {
          key: "reasons2",
          value: "发货时间问题",
        },
        {
          key: "reasons3",
          value: "不想要了",
        },
        {
          key: "reasons4",
          value: "商品选错/多选",
        },
        {
          key: "reasons5",
          value: "地址信息填写错误",
        },
        {
          key: "reasons6",
          value: "商品降价",
        },
      ],
      otherReason: [
        {
          key: "other",
          value: "其它",
        },
      ],
    },
    "en-US": {
      basic: "Basic Usage",
      tipsText: "Components with warm tips",
      otherText: "Components with other reason options",
      cellTitle: "Show Dialog",
      checkboxText: "",
      cancelText: "",
      tipsTitle: "reminder",
      reasonTitle: "Please select the reason for canceling the order",
      cancelReasonTitle: "Refund reason",
      submitText: "confirm",
      textareaPlaceholder: "Please enter content",
      warmTips: [
        "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
        "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
        "3. The payment voucher will not be returned; Cancellation of payment preference",
        "4. Once the order is cancelled, it cannot be recovered",
      ],
      cancelReason: [
        {
          key: "reasons1",
          value: "No goods",
        },
        {
          key: "reasons2",
          value: "Delivery time problem",
        },
        {
          key: "reasons3",
          value: "do not want goods",
        },
        {
          key: "reasons4",
          value: "Wrong goods selected",
        },
        {
          key: "reasons5",
          value: "Incorrect address information",
        },
        {
          key: "reasons6",
          value: "Commodity price reduction",
        },
      ],
      otherReason: [
        {
          key: "other",
          value: "other",
        },
      ],
    },
  });

  //合并other其它原因
  const otherReasonList = React.useMemo(() => {
    return [...translated.cancelReason, ...translated.otherReason];
  }, []);
  //公共参数
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  const textareaProps: Partial<TextAreaProps> = React.useMemo(() => {
    return {
      placeholder: translated.textareaPlaceholder,
      rows: "3",
      limitshow: true,
      maxlength: 100,
    };
  }, []);
  const popupTitleMemo = React.useMemo(() => {
    return translated.cancelReasonTitle;
  }, []);
  const reasonTitleMemo = React.useMemo(() => {
    return <div>{translated.reasonTitle}</div>;
  }, []);

  //基本使用
  const [showPanel, setShowPanel] = useState(false);
  //关闭弹窗触发的事件
  const clickClosePopUp = React.useCallback(() => {
    setShowPanel(false);
  }, [showPanel]);

  //带有温馨提示的组件
  const [showCancelPanel, setShowCancelPanel] = useState(false);
  const clickClosePopUpSec = React.useCallback(() => {
    setShowCancelPanel(false);
  }, [showCancelPanel]);

  //带有其它原因选项的组件
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  const clickClosePopUpThree = React.useCallback(() => {
    setShowOtherCancelPanel(false);
  }, [showOtherCancelPanel]);

  //可以取消已选择原因选项的组件
  const [showCancelCancelPanel, setShowCancelCancelPanel] = useState(false);
  const clickClosePopUpCancel = React.useCallback(() => {
    setShowCancelCancelPanel(false);
  }, [showCancelCancelPanel]);

  // checkbox在前面
  const [showcheckboxCancelPanel, setShowcheckboxCancelPanel] = useState(false);
  const clickClosePopUpCheckbox = React.useCallback(() => {
    setShowcheckboxCancelPanel(false);
  }, [showcheckboxCancelPanel]);
  //提交事件
  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUp();
      clickClosePopUpSec();
      clickClosePopUpThree();
      clickClosePopUpCancel();
      clickClosePopUpCheckbox();
    },
    []
  );

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell title={translated.cellTitle} onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          showCancelPanel={showPanel}
          popupTitle={popupTitleMemo}
          cancelReason={translated.cancelReason}
          buttonProps={buttonProps}
          onClose={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.tipsText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showCancelPanel}
          popupTitle={popupTitleMemo}
          reasonTitle={reasonTitleMemo}
          cancelReason={translated.cancelReason}
          warmTips={translated.warmTips}
          tipsTitle={translated.tipsTitle}
          submitText={translated.submitText}
          buttonProps={buttonProps}
          onClose={clickClosePopUpSec}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.otherText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          tipsTitle={""}
          submitText={translated.submitText}
          warmTips={[]}
          cancelReason={otherReasonList}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClose={clickClosePopUpThree}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.cancelText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowCancelCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showCancelCancelPanel}
          popupTitle={popupTitleMemo}
          canCancelReason={true}
          cancelReason={translated.cancelReason}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClose={clickClosePopUpCancel}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.checkboxText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowcheckboxCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showcheckboxCancelPanel}
          checkboxType="front"
          showBtntips={true}
          popupTitle={popupTitleMemo}
          cancelReason={translated.cancelReason}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClose={clickClosePopUpCheckbox}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};

export default CouponDemo;
