import React, { useState, CSSProperties } from "react";
import { OrderCancelPanel, ICurrLang } from "./ordercancelpanel";
import { Cell } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";

interface IKeyValue {
  key: string;
  value: string;
}
interface T {
  basic: string;
  tipsText: string;
  otherText: string;
  cellTitle: string;
  btnsText: string;
  cancelReasonTitle: string;
  reasonTitle: string;
  tipsTitle: string;
  currLang: ICurrLang;
  warmTips: Array<string>;
  cancelResons: Array<IKeyValue>;
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
      cancelReasonTitle: "退款原因",
      reasonTitle: "请选择取消订单原因",
      tipsTitle: "温馨提示",
      currLang: "cn",
      warmTips: [
        "1. 限时特价、预约资格等购买优惠可能一并取消",
        "2. 如遇订单拆分，京券将换成同价值京豆返还",
        "3. 支付券不予返还；支付优惠一并取消",
        "4. 订单一旦取消，无法恢复",
      ],
      cancelResons: [
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
      ],
    },
    "zh-TW": {
      basic: "基本用法",
      tipsText: "帶有溫馨提示的組件",
      otherText: "帶有其他原因選項的組件",
      cellTitle: "顯示彈窗",
      currLang: "tw",
      tipsTitle: "温馨提示",
      reasonTitle: "請選擇取消訂單原因",
      cancelReasonTitle: "退款原因",
      btnsText: "確認",
      warmTips: [
        "1. 限時特價、預約資格等購買優惠可能一並取消",
        "2. 如遇訂單拆分，京券將換成同價值京豆返還",
        "3. 支付券不予返還；支付優惠一並取消",
        "4. 訂單一旦取消，無法恢復",
      ],
      cancelResons: [
        {
          key: "resons1",
          value: "商品無貨",
        },
        {
          key: "resons2",
          value: "發貨時間問題",
        },
        {
          key: "resons3",
          value: "不想要了",
        },
        {
          key: "resons4",
          value: "商品選錯/多選",
        },
        {
          key: "resons5",
          value: "地址信息填寫錯誤",
        },
        {
          key: "resons6",
          value: "商品降價",
        },
      ],
    },
    "en-US": {
      basic: "Basic Usage",
      currLang: "us",
      tipsText: "Components with warm tips",
      otherText: "Components with other reason options",
      cellTitle: "Show Dialog",
      tipsTitle: "reminder",
      reasonTitle: "Please select the reason for canceling the order",
      cancelReasonTitle: "Refund reason",
      btnsText: "confirm",
      warmTips: [
        "1. Limited time special offers, reservation qualifications and other purchase privileges may be cancelled at the same time",
        "2. In case of order splitting, coupons will be exchanged for beans of the same value and returned",
        "3. The payment voucher will not be returned; Cancellation of payment preference",
        "4. Once the order is cancelled, it cannot be recovered",
      ],
      cancelResons: [
        {
          key: "resons1",
          value: "No goods",
        },
        {
          key: "resons2",
          value: "Delivery time problem",
        },
        {
          key: "resons3",
          value: "do not want goods",
        },
        {
          key: "resons4",
          value: "Wrong goods selected",
        },
        {
          key: "resons5",
          value: "Incorrect address information",
        },
        {
          key: "resons6",
          value: "Commodity price reduction",
        },
      ],
    },
  });

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
          popupTitle={<div>{translated.cancelReasonTitle}</div>}
          showCancelPanel={showPanel}
          cancelResons={translated.cancelResons}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
          tipsTitle={translated.tipsTitle}
          btnsText={translated.btnsText}
          currLang={translated.currLang}
        />
        <h2>{translated.tipsText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>{translated.cancelReasonTitle}</div>}
          reasonTitle={<div>{translated.reasonTitle}</div>}
          showCancelPanel={showCancelPanel}
          warmTips={translated.warmTips}
          cancelResons={translated.cancelResons}
          tipsTitle={translated.tipsTitle}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
          btnsText={translated.btnsText}
          currLang={translated.currLang}
        />
        <h2>{translated.otherText}</h2>
        <Cell
          title={translated.cellTitle}
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          popupTitle={<div>{translated.cancelReasonTitle}</div>}
          canCancelReason={true}
          maxlength={50}
          limitshow={true}
          onClickCloseIcon={clickClosePopUp}
          onClose={clickClosePopUp}
          onClickOverlay={clickClosePopUp}
          onSubmitBtn={submitBtn}
          tipsTitle={translated.tipsTitle}
          isShowCloseBtn={false}
          btnsText={translated.btnsText}
          isAddOtherReason={true}
          showCancelPanel={showOtherCancelPanel}
          warmTips={translated.warmTips}
          cancelResons={translated.cancelResons}
          currLang={translated.currLang}
        />
      </div>
    </>
  );
};

export default CouponDemo;
