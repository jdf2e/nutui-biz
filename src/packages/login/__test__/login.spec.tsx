import React, { useState } from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "../login";

const logoImg =
  "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
const formParams = {
  account: "",
  accountPlaceholder: "请输入账号",
  accountErrorText: "",
  telOrMail: "",
  telOrMailPlaceholder: "请输入手机号或邮箱",
  telOrMailErrorText: "",
  password: "",
  passwordPlaceholder: "请输入账号密码",
  passwordErrorText: "",
  verifyCode: "",
  verifyPlaceholder: "请输入验证码",
  verifyButtonText: "获取验证码",
};
const getVerify = false;

test("Verify Login test", async () => {
  const { container } = render(
    <Login
      formParams={formParams}
      loginType="verify"
      logo={logoImg}
      isGetCode={getVerify}
      loginButtonText={"登录"}
      countDownTime={30}
    />
  );
  const logoImge = container.querySelector(".nut-login__logo img");
  const telEl = container.querySelector('.input-text[name="telOrMail"]');
  const verifyEl = container.querySelector('.input-text[name="verifyCode"]');
  const codeBtn = container.querySelector(".code-box") as HTMLElement;
  const loginBtn = container.querySelector(".nut-login__btn .nut-button");
  await waitFor(() => {
    expect(logoImge).toHaveAttribute("src", `${logoImg}`);
    expect(container.querySelector(".switch-type")?.innerHTML).toBe(
      "账号密码登录"
    );
    expect(telEl).toHaveAttribute(
      "placeholder",
      `${formParams.telOrMailPlaceholder}`
    );
    expect(verifyEl).toHaveAttribute(
      "placeholder",
      `${formParams.verifyPlaceholder}`
    );
    expect(codeBtn.innerHTML).toBe(formParams.verifyButtonText);
    expect(loginBtn).toHaveClass("nut-button--disabled");
    expect(container).toMatchSnapshot();
  });
});

test("Password Login test", async () => {
  const { container } = render(
    <Login
      formParams={formParams}
      loginType="pwd"
      logo={logoImg}
      isGetCode={getVerify}
      loginButtonText={"登录"}
      countDownTime={30}
    />
  );
  const accountEl = container.querySelector('.input-text[name="account"]');
  const pwdEl = container.querySelector('.input-text[name="password"]');
  await waitFor(() => {
    // expect(logoImge).toHaveAttribute("src", `${logoImg}`);
    // expect(container.querySelector(".switch-type")?.innerHTML).toBe(
    //   "账号密码登录"
    // );
    expect(accountEl).toHaveAttribute(
      "placeholder",
      `${formParams.accountPlaceholder}`
    );
    expect(pwdEl).toHaveAttribute(
      "placeholder",
      `${formParams.passwordPlaceholder}`
    );
    expect(container.querySelector(".pwd-hide-icon")).toBeTruthy;
    expect(container.querySelector(".forget-pwd")).toBeTruthy;
    expect(container.querySelector(".switch-type")?.innerHTML).toBe(
      "手机/邮箱登录"
    );
    expect(container).toMatchSnapshot();
  });
});

test("Has informed consent", async () => {
  const { container } = render(
    <Login
      formParams={formParams}
      loginType="verify"
      logo={logoImg}
      countDownTime={30}
      slotProtocolText={
        <div>
          勾选后代表您已阅读并同意
          <span style={{ color: "red" }}>《用户隐私政策》</span>
        </div>
      }
    />
  );
  const checkEl = container.querySelector(
    ".login-protocal .nut-checkbox__label "
  );

  await waitFor(() => {
    expect(checkEl?.innerHTML).toBe(
      `<div>勾选后代表您已阅读并同意<span style="color: red;">《用户隐私政策》</span></div>`
    );
  });
});

const formParams2 = {
  telOrMail: "13123456789",
  verifyCode: "1111",
  account: "张三",
  accountErrorText: "账号不存在",
  password: "123456",
  passwordErrorText: "请输入6位密码",
};

test("event test", async () => {
  const onChange = jest.fn();
  const verifyClick = jest.fn();
  const loginClick = jest.fn();
  const { container } = render(
    <Login
      formParams={formParams2}
      loginType="verify"
      logo={logoImg}
      onInputChange={onChange}
      isGetCode={getVerify}
      loginButtonText={"登录"}
      onVerifyBtnClick={verifyClick}
      onLoginBtnClick={loginClick}
      countDownTime={30}
    />
  );
  const telEl = container.querySelector('.input-text[name="telOrMail"]');
  const verifyEl = container.querySelector('.input-text[name="verifyCode"]');
  const loginBtn = container.querySelector(".nut-login__btn .nut-button");
  const codeBtn = container.querySelector(".code-box") as HTMLElement;
  expect(telEl).toHaveAttribute("value", `${formParams2.telOrMail}`);
  expect(verifyEl).toHaveAttribute("value", `${formParams2.verifyCode}`);
  expect(loginBtn).not.toHaveClass("nut-button--disabled");
  codeBtn && fireEvent.click(codeBtn);
  loginBtn && fireEvent.click(loginBtn);
  telEl && fireEvent.change(telEl, { target: { value: "12345" } });

  await waitFor(() => {
    expect(verifyClick).toBeCalled();
    expect(loginClick).toBeCalled();
    waitFor(() => {
      expect(onChange).toBeCalled();
    });
  });
});

test("error test", async () => {
  const onChange = jest.fn();
  const verifyClick = jest.fn();
  const loginClick = jest.fn();
  const { container } = render(
    <Login
      formParams={formParams2}
      loginType="pwd"
      logo={logoImg}
      onInputChange={onChange}
      isGetCode={getVerify}
      loginButtonText={"登录"}
      onVerifyBtnClick={verifyClick}
      onLoginBtnClick={loginClick}
      countDownTime={30}
    />
  );
  const errorMsg = container.querySelectorAll(".error-msg");

  expect(errorMsg[0].innerHTML).toBe(`${formParams2.accountErrorText}`);
  expect(errorMsg[1].innerHTML).toBe(`${formParams2.passwordErrorText}`);
});
