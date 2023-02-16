import React, { useState, CSSProperties } from "react";
import { OrderCancelPanel } from "./ordercancelpanel";
import { Cell } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";
interface T {
  basic: string;
  tipsText: string;
  otherText: string;
  cellTitle: string;
  btnsText: string;
}
//
const CouponDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      tipsText: "带有温馨提示的组件",
      otherText: "带有其他原因选项的组件",
      cellTitle: "显示弹窗",
      btnsText: "确认",
    },
    "zh-TW": {
      basic: "基本用法",
      tipsText: "带有事件的优惠组件",
      otherText: "带有其他原因选项的组件",
      cellTitle: "显示弹窗",
      btnsText: "确认",
    },
    "en-US": {
      basic: "基本用法",
      tipsText: "带有事件的优惠组件",
      otherText: "带有其他原因选项的组件",
      cellTitle: "显示弹窗",
      btnsText: "确认",
    },
  });
  //组件共有变量
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  const cancelResons = [
    {
      key: "resons1",
      value: "商品无货",
    },
    {
      key: "resons2",
      value: "发货时间问题",
    },
    {
      key: "resons3",
      value: "不想要了",
    },
    {
      key: "resons4",
      value: "商品选错/多选",
    },
    {
      key: "resons5",
      value: "地址信息填写错误",
    },
    {
      key: "resons6",
      value: "商品降价",
    },
  ];
  const clickClosePopUp = () => {
    setShowCancelPanel(false);
    setShowPanel(false);
    setShowOtherCancelPanel(false);
  };
  const submitBtn = (currActivedKey: string, textAreaValue: string) => {
    console.log(
      `currActivedKey:${currActivedKey}, textAreaValue,${textAreaValue}`
    );
    setShowCancelPanel(false);
    setShowPanel(false);
    setShowOtherCancelPanel(false);
  };
  //基本使用
  const [showPanel, setShowPanel] = useState(false);
  //带有温馨提示的组件
  const [showCancelPanel, setShowCancelPanel] = useState(false);
  //带有其他原因选项的组件
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell title={translated.cellTitle} onClick={() => setShowPanel(true)} />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          showCancelPanel={showPanel}
          cancelResons={cancelResons}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.tipsText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          reasonTitle={<div>请选择取消订单原因</div>}
          showCancelPanel={showCancelPanel}
          warmTips={warmTips}
          cancelResons={cancelResons}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
        />
        <h2>{translated.otherText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>退款原因</div>}
          canCancelReason={true}
          maxlength={50}
          limitshow={true}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
          isShowCloseBtn={false}
          btnsText={translated.btnsText}
          isAddOtherReason={true}
          showCancelPanel={showOtherCancelPanel}
          warmTips={warmTips}
          cancelResons={cancelResons}
        />
      </div>
    </>
  );
};

export default CouponDemo;
