import React, { useState, useEffect } from "react";
import { Login } from "./login";
import { useTranslate } from "../../sites/assets/locale";
import { Radio, Cell, CellGroup, Input } from "@nutui/nutui-react";
const { RadioGroup } = Radio;
interface T {
  basic: string;
  hasProtocol: string;
  hasCustom: string;
  hasCustomInput: string;
  hasError: string;
  placeholder: string;
  codeText: string;
  loginText: string;
  errorText1: string;
  errorText2: string;
  titleText: string;
  zhuce: string;
}
const LoginDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
      hasProtocol: "有知情同意勾选项",
      hasCustom: "用户自定义登录框",
      hasError: "错误提示",
      hasCustomInput: "用户自定义输入框",
      placeholder: "请输入验证码",
      codeText: "获取验证码",
      loginText: "登录",
      errorText1: "账号不存在",
      errorText2: "请输入6位密码",
      titleText: "卡号登录",
      zhuce: "新用户注册",
    },
    "en-US": {
      basic: "Basic usage",
      hasProtocol: "Has informed consent",
      hasCustom: "Custom Login",
      hasCustomInput: "Custom Input",
      hasError: "Error Prompt",
      placeholder: "Please enter the verify code",
      codeText: "Get code",
      loginText: "Login",
      errorText1: "Account does not exist",
      errorText2: "Please enter a 6-digit password",
      titleText: "Login title",
      zhuce: "New User Registration",
    },
  });

  const logoImg =
    "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
  const [formParams, setformParams] = useState({
    account: "",
    accountErrorText: "",
    telOrMail: "",
    telOrMailErrorText: "",
    password: "",
    passwordErrorText: "",
    verify: "",
    verifyButtonText: translated.codeText,
  });
  const [formParams2, setformParams2] = useState({
    account: "",
    accountErrorText: "",
    telOrMail: "",
    telOrMailErrorText: "",
    password: "",
    passwordErrorText: "",
    verify: "",
    isShowPwdInput: false,
  });
  const [formParams3, setformParams3] = useState({
    account: "12345",
    accountErrorText: translated.errorText1,
    telOrMail: "",
    telOrMailErrorText: "",
    password: "123",
    passwordErrorText: translated.errorText2,
    verify: "",
  });
  const [getVerify, setGetVerify] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [account, setAccount] = useState("");
  const [customInput, setCustomInput] = useState("");
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
    if (tag === "account") {
      setAccount(value);
    }
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
    setGetVerify(false);
  };

  useEffect(() => {
    if (radioVal === "5") {
      if (account.length > 0 && customInput.length > 0) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    }
  }, [account, customInput]);

  return (
    <div className="demo">
      <CellGroup>
        <Cell>
          <RadioGroup
            value={radioVal}
            onChange={handleChange}
            style={{ flexFlow: "wrap" }}
          >
            <Radio value="1">{translated.basic}</Radio>
            <Radio value="2">{translated.hasProtocol}</Radio>
            <Radio value="3">{translated.hasError}</Radio>
            <Radio value="4">{translated.hasCustom}</Radio>
            <Radio value="5">{translated.hasCustomInput}</Radio>
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
            onForgetBtnClick={() => {
              console.log("点击忘记密码");
            }}
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
          <h2>{translated.hasError}</h2>
          <Login
            formParams={formParams3}
            logo={logoImg}
            loginType="pwd"
            onInputChange={onChange}
            loginButtonText={translated.loginText}
          />
        </>
      ) : null}
      {radioVal === "4" ? (
        <>
          <h2>{translated.hasCustom}</h2>
          <Login
            formParams={formParams2}
            title={translated.titleText}
            loginType="pwd"
            onInputChange={onChange}
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

      {radioVal === "5" ? (
        <>
          <h2>{translated.hasCustomInput}</h2>
          {isDisable}
          <Login
            formParams={formParams2}
            title={translated.titleText}
            loginType="pwd"
            onInputChange={onChange}
            isHideSwitchBtn={true}
            loginButtonDisable={isDisable}
            loginButtonText={translated.loginText}
            onInputClear={(tag) => {
              if (tag === "account") {
                setAccount("");
              }
            }}
            slotInput={
              <div className={`input-wrap`}>
                <div className="input-item">
                  <Input
                    className="nut-input-text"
                    border={false}
                    defaultValue={customInput}
                    placeholder={translated.placeholder}
                    type="text"
                    clearable
                    onChange={(value) => {
                      setCustomInput(value);
                    }}
                    onClear={() => {
                      setCustomInput("");
                    }}
                  />
                  <div className="code-box">
                    <img
                      style={{ width: "65px", height: "30px" }}
                      src="https://img12.360buyimg.com/imagetools/jfs/t1/211415/19/9275/14512/61924b82E09366437/cc5cc7297b9073ae.jpg"
                    />
                  </div>
                </div>
              </div>
            }
          />
        </>
      ) : null}
    </div>
  );
};

export default LoginDemo;
