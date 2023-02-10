import React, { useState } from "react";
import { Login } from "./login";
import { useTranslate } from "../../sites/assets/locale";
import { Radio, Cell, CellGroup } from "@nutui/nutui-react";
const { RadioGroup } = Radio;
interface T {
  basic: string;
  hasProtocol: string;
  hasCustom: string;
  hasError: string;
  placeholder1: string;
  placeholder2: string;
  placeholder3: string;
  placeholder4: string;
  codeText: string;
  loginText: string;
  errorText1: string;
  errorText2: string;
  forgetPwd: string;
  switchText1: string;
  switchText2: string;
  titleText: string;
  zhuce: string;
  errorToast: string;
}
const LoginDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      hasProtocol: "有知情同意勾选项",
      hasCustom: "用户自定义",
      hasError: "错误提示",
      placeholder1: "请输入账号",
      placeholder2: "请输入手机号或邮箱",
      placeholder3: "请输入账号密码",
      placeholder4: "请输入验证码",
      codeText: "获取验证码",
      loginText: "登录",
      errorText1: "账号不存在",
      errorText2: "请输入6位密码",
      forgetPwd: "忘记密码",
      switchText1: "账号密码登录",
      switchText2: "手机/邮箱登录",
      titleText: "卡号登录",
      zhuce: "新用户注册",
      errorToast: "请填写正确的手机号或邮箱",
    },
    "zh-TW": {
      basic: "基本用法",
      hasProtocol: "有知情同意勾選項",
      hasCustom: "用戶自定義",
      hasError: "錯誤提示",
      placeholder1: "請輸入賬號",
      placeholder2: "請輸入手機號或郵箱",
      placeholder3: "請輸入賬號密碼",
      placeholder4: "請輸入驗證碼",
      codeText: "獲取驗證碼",
      loginText: "登錄",
      errorText1: "賬號不存在",
      errorText2: "請輸入6位密碼",
      forgetPwd: "忘记密码",
      switchText1: "賬號密碼登錄",
      switchText2: "手機/郵箱登錄",
      titleText: "卡號登錄",
      zhuce: "新用户注册",
      errorToast: "请填写正确的手机号或邮箱",
    },
    "en-US": {
      basic: "Basic usage",
      hasProtocol: "Has informed consent",
      hasCustom: "User-defined",
      hasError: "Error Prompt",
      placeholder1: "Please enter account number",
      placeholder2: "Please enter your phone number or email",
      placeholder3: "Please enter the account password",
      placeholder4: "Please enter the verification code",
      codeText: "Get code",
      loginText: "Login",
      errorText1: "Account does not exist",
      errorText2: "Please enter a 6-digit password",
      forgetPwd: "Forget password",
      switchText1: "Account login",
      switchText2: "Mobile phone/email login",
      titleText: "Login title",
      zhuce: "New User Registration",
      errorToast: "Please fill in the correct phone number or email address",
    },
  });

  const logoImg =
    "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
  const [formParams, setformParams] = useState({
    account: "",
    accountPlaceholder: translated.placeholder1,
    accountErrorText: "",
    telOrMail: "",
    telOrMailPlaceholder: translated.placeholder2,
    telOrMailErrorText: "",
    password: "",
    passwordPlaceholder: translated.placeholder3,
    passwordErrorText: "",
    verifyCode: "",
    verifyPlaceholder: translated.placeholder4,
    verifyButtonText: translated.codeText,
    forgetPwdText: translated.forgetPwd,
    switchLoginText1: translated.switchText1,
    switchLoginText2: translated.switchText2,
    getCodeErrorToast: translated.errorToast,
  });
  const [formParams2, setformParams2] = useState({
    account: "",
    accountPlaceholder: translated.placeholder1,
    accountErrorText: "",
    telOrMail: "",
    telOrMailErrorText: "",
    password: "",
    passwordErrorText: "",
    verifyCode: "",
    isShowPwdInput: false,
  });
  const [formParams3, setformParams3] = useState({
    account: "12345",
    accountPlaceholder: translated.placeholder1,
    accountErrorText: translated.errorText1,
    telOrMail: "",
    telOrMailPlaceholder: translated.placeholder2,
    telOrMailErrorText: "",
    password: "123",
    passwordErrorText: translated.errorText2,
    passwordPlaceholder: translated.placeholder3,
    verifyCode: "",
    verifyPlaceholder: translated.placeholder4,
    forgetPwdText: translated.forgetPwd,
    switchLoginText1: translated.switchText1,
    switchLoginText2: translated.switchText2,
    verifyButtonText: translated.codeText,
    getCodeErrorToast: translated.errorToast,
  });
  const [getVerify, setGetVerify] = useState(false);
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };
  const queryVerifyCode = (formData: any) => {
    setGetVerify(false);
    console.log("getcode", formData);
    //异步获取校验码成功
    setTimeout(() => {
      setGetVerify(true);
    }, 300);
  };
  const queryLogin = (formData: any) => {
    console.log("login", formData);
  };
  const [radioVal, setRadioVal] = useState("1");
  const handleChange = (v: any) => {
    setRadioVal(v);
  };
  return (
    <div className="demo">
      <CellGroup>
        <Cell>
          <RadioGroup
            value={radioVal}
            onChange={handleChange}
            direction="horizontal"
          >
            <Radio value="1">{translated.basic}</Radio>
            <Radio value="2">{translated.hasProtocol}</Radio>
            <Radio value="3">{translated.hasCustom}</Radio>
            <Radio value="4">{translated.hasError}</Radio>
          </RadioGroup>
        </Cell>
      </CellGroup>

      {radioVal === "1" ? (
        <>
          <h2>{translated.basic}</h2>
          <Login
            formParams={formParams}
            loginType="verify"
            logo={logoImg}
            onInputChange={onChange}
            isGetCode={getVerify}
            loginButtonText={translated.loginText}
            onVerifyBtnClick={queryVerifyCode}
            onLoginBtnClick={queryLogin}
            countDownTime={30}
          />
        </>
      ) : null}
      {radioVal === "2" ? (
        <>
          <h2>{translated.hasProtocol}</h2>
          <Login
            formParams={formParams}
            loginType="verify"
            logo={logoImg}
            onInputChange={onChange}
            hasHidePwd={true}
            isGetCode={getVerify}
            onVerifyBtnClick={queryVerifyCode}
            countDownTime={30}
            loginButtonText={translated.loginText}
            slotProtocolText={
              <div>
                勾选后代表您已阅读并同意
                <span style={{ color: "red" }}>《用户隐私政策》</span>
              </div>
            }
          />
        </>
      ) : null}
      {radioVal === "3" ? (
        <>
          <h2>{translated.hasCustom}</h2>
          <Login
            formParams={formParams2}
            title={translated.titleText}
            loginType="pwd"
            onInputChange={onChange}
            hasHidePwd={true}
            isGetCode={getVerify}
            onVerifyBtnClick={queryVerifyCode}
            countDownTime={30}
            isHideSwitchBtn={true}
            loginButtonText={translated.loginText}
            slotBottom={
              <div
                style={{
                  color: "#006FFF",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {translated.zhuce}
              </div>
            }
          />
        </>
      ) : null}
      {radioVal === "4" ? (
        <>
          <h2>{translated.hasError}</h2>
          <Login
            formParams={formParams3}
            logo={logoImg}
            loginType="pwd"
            onInputChange={onChange}
            isGetCode={getVerify}
            onVerifyBtnClick={queryVerifyCode}
            countDownTime={60}
            loginButtonText={translated.loginText}
          />
        </>
      ) : null}
    </div>
  );
};

export default LoginDemo;
