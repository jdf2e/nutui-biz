import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Coupon, ButtonPropsType } from "../coupon";

test("should match snapshot", () => {
  const basedOnClick = jest.fn();
  const buttonProps: Partial<ButtonPropsType> = {
    type: "primary",
    size: "small",
    plain: true,
    className: "cancel-btn",
  };
  const state = {
    //优惠券样式
    couponBaseStyle: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    },
    couponMainBaseStyle: {
      width: "69%",
      color: "#fff",
    },
    baseCouponObj: {
      price: "9",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    },
    btnText: "立即领取",
    receivedStatus: false,
    usedIcon: (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    ),
    buttonProps: buttonProps,
  };
  const { asFragment } = render(
    <>
      <Coupon
        pricePosition="back"
        couponStyle={state.couponBaseStyle}
        couponMainStyle={state.couponMainBaseStyle}
        couponData={state.baseCouponObj}
        btnText={state.btnText}
        isReceived={state.receivedStatus}
        usedIcon={state.usedIcon}
        buttonProps={state.buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("prop of Basic Usage", () => {
  const basedOnClick = jest.fn();
  const buttonProps: Partial<ButtonPropsType> = {
    type: "primary",
    size: "small",
    plain: true,
    className: "cancel-btn",
  };
  const state = {
    //优惠券样式
    couponBaseStyle: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    },
    couponMainBaseStyle: {
      width: "69%",
      color: "#fff",
    },
    baseCouponObj: {
      price: "9",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    },
    btnText: "立即领取",
    receivedStatus: false,
    usedIcon: (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    ),
    buttonProps: buttonProps,
  };
  const { container } = render(
    <>
      <Coupon
        pricePosition="front"
        couponStyle={state.couponBaseStyle}
        couponMainStyle={state.couponMainBaseStyle}
        couponData={state.baseCouponObj}
        btnText={state.btnText}
        isReceived={state.receivedStatus}
        usedIcon={state.usedIcon}
        buttonProps={state.buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </>
  );
  //价格和单位的前后位置
  expect(
    container.querySelectorAll(".nb-coupon .nb-coupon__main-price div")[1]
      ?.innerHTML
  ).toBe("¥");
  //点击按钮事件
  const nutCoupon = container.querySelector(
    ".nb-coupon .nb-coupon__btns .nut-button--primary"
  ) as HTMLElement;
  fireEvent.click(nutCoupon);
  expect(basedOnClick).toBeCalled();
});

test("small type of coupon", () => {
  const basedOnClick = jest.fn();
  const buttonProps: Partial<ButtonPropsType> = {
    type: "primary",
    size: "small",
    plain: true,
    className: "cancel-btn",
  };
  const state = {
    //优惠券样式
    couponBaseStyle: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    },
    couponMainBaseStyle: {
      width: "69%",
      color: "#fff",
    },
    baseCouponObj: {
      price: "9",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    },
    btnText: "立即领取",
    receivedStatus: true,
    usedIcon: (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    ),
    buttonProps: buttonProps,
  };
  const { container } = render(
    <>
      <Coupon
        type="small"
        pricePosition="front"
        couponStyle={state.couponBaseStyle}
        couponMainStyle={state.couponMainBaseStyle}
        couponData={state.baseCouponObj}
        btnText={state.btnText}
        isReceived={state.receivedStatus}
        usedIcon={state.usedIcon}
        buttonProps={state.buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </>
  );

  expect(
    container.querySelector(".nb-coupon .nb-coupon__btns div")
  ).toHaveClass("nb-coupon__btns-vertcal");
});

test("test price length", () => {
  const basedOnClick = jest.fn();
  const buttonProps: Partial<ButtonPropsType> = {
    type: "primary",
    size: "small",
    plain: true,
    className: "cancel-btn",
  };
  const state = {
    //优惠券样式
    couponBaseStyle: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    },
    couponMainBaseStyle: {
      width: "69%",
      color: "#fff",
    },
    baseCouponObj: {
      price: "9.123",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    },
    btnText: "立即领取",
    receivedStatus: false,
    usedIcon: (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    ),
    buttonProps: buttonProps,
  };
  const { container } = render(
    <>
      <Coupon
        pricePosition="front"
        couponStyle={state.couponBaseStyle}
        couponMainStyle={state.couponMainBaseStyle}
        couponData={state.baseCouponObj}
        btnText={state.btnText}
        isReceived={state.receivedStatus}
        usedIcon={state.usedIcon}
        buttonProps={state.buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </>
  );
  //价格和单位的前后位置
  expect(
    container.querySelector(".nb-coupon .nb-coupon__main-price--number")
      ?.textContent
  ).toBe("9.12");
});

test("test price length sec", () => {
  const basedOnClick = jest.fn();
  const buttonProps: Partial<ButtonPropsType> = {
    type: "primary",
    size: "small",
    plain: true,
    className: "cancel-btn",
  };
  const state = {
    //优惠券样式
    couponBaseStyle: {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    },
    couponMainBaseStyle: {
      width: "69%",
      color: "#fff",
    },
    baseCouponObj: {
      price: "9.1",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: "内购专享",
      timeRange: "2022.03.01-2022.04.01",
    },
    btnText: "立即领取",
    receivedStatus: false,
    usedIcon: (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    ),
    buttonProps: buttonProps,
  };
  const { container } = render(
    <>
      <Coupon
        pricePosition="front"
        couponStyle={state.couponBaseStyle}
        couponMainStyle={state.couponMainBaseStyle}
        couponData={state.baseCouponObj}
        btnText={state.btnText}
        isReceived={state.receivedStatus}
        usedIcon={state.usedIcon}
        buttonProps={state.buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </>
  );
  //价格和单位的前后位置
  expect(
    container.querySelector(".nb-coupon .nb-coupon__main-price--number")
      ?.textContent
  ).toBe("9.1");
});
