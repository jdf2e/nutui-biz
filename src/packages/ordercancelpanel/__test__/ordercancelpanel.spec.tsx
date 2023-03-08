import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderCancelPanel } from "../ordercancelpanel";

test("should match snapshot", () => {
  const { asFragment } = render(
    <>
      <OrderCancelPanel
        showCancelPanel={true}
        popupTitle="退款原因"
        cancelReason={[
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
        ]}
        buttonProps={{
          type: "primary",
          className: "cancel-btn",
        }}
      />
    </>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("prop of Basic Usage", () => {
  const closeClick = jest.fn();
  const state = {
    popupTitle: "退款原因",
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
  };
  const { container } = render(
    <OrderCancelPanel
      showCancelPanel={true}
      popupTitle={state.popupTitle}
      cancelReason={state.cancelReason}
      onClickCloseIcon={closeClick}
      buttonProps={{
        type: "primary",
        className: "cancel-btn",
      }}
    />
  );
  expect(
    container.querySelector(".nut-biz-ordercancel .nut-biz-ordercancel__header")
  ).toHaveTextContent("退款原因");
  expect(
    container.querySelectorAll(
      ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
    ).length
  ).toBe(state.cancelReason.length);

  expect(
    container.querySelector(
      ".nut-biz-ordercancel .nut-biz-ordercancel__btns .nut-button"
    )
  ).toHaveClass("nut-button--primary");

  //点击了某个原因
  const nutOrderCancelList = container.querySelectorAll(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
  )[1] as HTMLElement;
  fireEvent.click(nutOrderCancelList);
  expect(
    container
      .querySelectorAll(
        ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
      )[1]
      .querySelector(
        ".nut-biz-ordercancel__reason--list__checkbox .nut-checkbox .nut-icon"
      )
  ).toHaveClass("nut-icon-checked");
  //点击了关闭icon按钮
  const nutOrderCancelCloseIcon = container.querySelector(
    ".nut-biz-ordercancel .nut-popup__close-icon"
  ) as HTMLElement;
  fireEvent.click(nutOrderCancelCloseIcon);
  expect(closeClick).toBeCalled();
});

test("Overlay event of Basic Usage", () => {
  const closeClick = jest.fn();
  //   const closeClick2 = jest.fn();
  const state = {
    popupTitle: "退款原因",
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
  };
  const { container } = render(
    <OrderCancelPanel
      showCancelPanel={true}
      popupTitle={state.popupTitle}
      cancelReason={state.cancelReason}
      onClickOverlay={closeClick}
      //   onClose={closeClick2}
      buttonProps={{
        type: "primary",
        className: "cancel-btn",
      }}
    />
  );
  //点击了关闭按钮
  const nutOrderCancelOverlay = document.querySelector(
    ".nut-overlay"
  ) as HTMLElement;
  fireEvent.click(nutOrderCancelOverlay);
  expect(closeClick).toBeCalled();
  //   expect(closeClick2).toBeCalled();
});

test("Components with warm tips", () => {
  const state = {
    popupTitle: "退款原因",
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
  };
  const { container } = render(
    <OrderCancelPanel
      warmTips={state.warmTips}
      showCancelPanel={true}
      popupTitle={state.popupTitle}
      cancelReason={state.cancelReason}
      canCancelReason={true}
      buttonProps={{
        type: "primary",
        className: "cancel-btn",
      }}
    />
  );
  expect(
    container.querySelector(".nut-biz-ordercancel .nut-biz-ordercancel__header")
  ).toHaveTextContent("退款原因");
  expect(
    container.querySelectorAll(
      ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
    ).length
  ).toBe(state.cancelReason.length);
  expect(
    container.querySelectorAll(
      ".nut-biz-ordercancel .nut-biz-ordercancel__tips .nut-biz-ordercancel__tips-list"
    ).length
  ).toBe(state.warmTips.length);
  expect(
    container.querySelector(
      ".nut-biz-ordercancel .nut-biz-ordercancel__btns .nut-button"
    )
  ).toHaveClass("nut-button--primary");

  const nutOrderCancelList = container.querySelectorAll(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
  )[1] as HTMLElement;
  fireEvent.click(nutOrderCancelList);
  expect(
    container
      .querySelectorAll(
        ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
      )[1]
      .querySelector(
        ".nut-biz-ordercancel__reason--list__checkbox .nut-checkbox .nut-icon"
      )
  ).toHaveClass("nut-icon-checked");
  fireEvent.click(nutOrderCancelList);
  expect(
    container
      .querySelectorAll(
        ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
      )[1]
      .querySelector(
        ".nut-biz-ordercancel__reason--list__checkbox .nut-checkbox .nut-icon"
      )
  ).toHaveClass("nut-icon-check-normal");
});

test("Components with other reason options", () => {
  const onClick1 = jest.fn();
  const state = {
    popupTitle: "退款原因",
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
      {
        key: "other",
        value: "其他",
      },
    ],
  };
  const { container } = render(
    <OrderCancelPanel
      warmTips={state.warmTips}
      showCancelPanel={true}
      popupTitle={state.popupTitle}
      cancelReason={state.cancelReason}
      onSubmitBtn={onClick1}
      buttonProps={{
        type: "primary",
        className: "cancel-btn",
      }}
    />
  );
  //点击其他选项
  const nutOrderCancelList = container.querySelectorAll(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
  )[state.cancelReason.length - 1] as HTMLElement;
  fireEvent.click(nutOrderCancelList);
  const textareaEl = container.querySelector(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-textarea"
  ) as HTMLTextAreaElement;
  expect(textareaEl).toHaveClass("nut-biz-ordercancel__area");

  //文字改变
  const textareaDom = container.querySelector(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-textarea .nut-textarea__textarea"
  ) as HTMLTextAreaElement;
  fireEvent.change(textareaDom, { target: { value: "文字改变" } });
  expect(textareaDom.innerHTML).toBe("文字改变");
  //点击第一个
  const nutOrderCancelListFirst = container.querySelectorAll(
    ".nut-biz-ordercancel .nut-biz-ordercancel__reason .nut-biz-ordercancel__reason--list"
  )[0] as HTMLElement;
  fireEvent.click(nutOrderCancelListFirst);

  //点击确认按钮
  const nutOrderCancelBtns = container.querySelector(
    ".nut-biz-ordercancel .nut-biz-ordercancel__btns .nut-button--normal"
  ) as HTMLElement;
  fireEvent.click(nutOrderCancelBtns);
  expect(onClick1).toBeCalled();
});
