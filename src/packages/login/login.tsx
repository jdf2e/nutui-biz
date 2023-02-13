import React, {
  FunctionComponent,
  ReactHTML,
  useEffect,
  useState,
  useRef,
} from "react";
import { useConfig } from "@/packages/configprovider";
import bem from "@/utils/bem";
import { IComponent } from "@/utils/typings";
import { Input, Button, Icon, Checkbox, Toast } from "@nutui/nutui-react";

interface LoginParamsProps {
  account?: string;
  accountPlaceholder?: string;
  accountErrorText?: string;
  telOrMail?: string | any;
  telOrMailPlaceholder?: string;
  telOrMailErrorText?: string;
  password?: string | any;
  passwordPlaceholder?: string;
  passwordErrorText?: string;
  isShowPwdInput?: boolean;
  verifyCode?: string;
  verifyPlaceholder?: string;
  verifyButtonText?: string;
  verifyErrorText?: string;
  getCodeErrorToast?: string;
  switchLoginText1?: string;
  switchLoginText2?: string;
  forgetPwdText?: string;
}
export interface LoginProps extends IComponent {
  logo: string;
  title: string;
  formParams: LoginParamsProps;
  loginType: string;
  loginButtonDisable: boolean;
  loginButtonText: string;
  hasForgetPassWord: boolean;
  slotProtocolText?: React.ReactNode;
  slotBottom?: React.ReactNode;
  hasHidePwd?: boolean;
  isGetCode?: boolean;
  countDownTime?: number;
  isHideSwitchBtn?: boolean;
  onInputChange?: (value: string, tag: string) => void;
  onLoginBtnClick?: (data: any) => void;
  onVerifyBtnClick?: (formData: LoginParamsProps) => void;
  onForgetBtnClick?: () => void;
}

const defaultProps = {
  logo: "",
  title: "",
  formParams: {},
  loginType: "verify",
  loginButtonDisable: true,
  loginButtonText: "登录",
  verifyButtonDisable: false,
  isGetCode: false,
  hasForgetPassWord: true,
  hasHidePwd: true,
  isHideSwitchBtn: false,
  countDownTime: 60,
} as LoginProps;

export const Login: FunctionComponent<
  Partial<LoginProps> & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { locale } = useConfig();
  const {
    logo,
    title,
    formParams,
    loginType,
    loginButtonDisable,
    loginButtonText,
    hasForgetPassWord,
    hasHidePwd,
    isGetCode,
    slotProtocolText,
    slotBottom,
    countDownTime = 60,
    isHideSwitchBtn,
    onInputChange,
    onLoginBtnClick,
    onVerifyBtnClick,
    onForgetBtnClick,
  } = {
    ...defaultProps,
    ...props,
  };
  let [countTime, setCountTime] = useState(countDownTime);
  const [inCountDown, setInCountDown] = useState(false);
  const [isHidePwd, setIsHidePwd] = useState(true);
  const [isLoginDisable, setIsLoginDisable] = useState(loginButtonDisable);
  const [currLoginType, setCurrLoginType] = useState(loginType);
  const [isProtocol, setIsPrtocal] = useState(false);
  let timer: any = useRef(null);

  useEffect(() => {
    //初始化数据
    setLoginParams({ ...loginParams, ...formParams });
  }, [formParams]);
  //监听登录按钮是否禁用
  useEffect(() => {
    setIsLoginDisable(loginButtonDisable);
  }, [loginButtonDisable]);

  const [loginParams, setLoginParams] = useState<LoginParamsProps>({
    account: "",
    accountPlaceholder: "请输入登录码",
    accountErrorText: "",
    telOrMail: "",
    telOrMailPlaceholder: "请输入手机号或邮箱",
    telOrMailErrorText: "",
    password: "",
    passwordPlaceholder: "请输入密码",
    passwordErrorText: "",
    isShowPwdInput: true,
    verifyCode: "",
    verifyPlaceholder: "请输入验证码",
    verifyButtonText: "获取验证码",
    verifyErrorText: "",
    getCodeErrorToast: "请填写正确的手机号或邮箱",
    switchLoginText1: "账号密码登录",
    switchLoginText2: "手机/邮箱登录",
    forgetPwdText: "忘记密码",
  });

  const switchLogin = () => {
    if (currLoginType === "pwd") {
      setCurrLoginType("verify");
      resetParams();
    } else {
      setCurrLoginType("pwd");
      resetParams();
    }
  };
  //重置
  const resetParams = () => {
    const clearObj = {
      account: "",
      accountErrorText: "",
      telOrMail: "",
      telOrMailErrorText: "",
      password: "",
      passwordErrorText: "",
      verifyCode: "",
      verifyErrorText: "",
    };
    setLoginParams({ ...loginParams, ...clearObj });
    setIsPrtocal(false);
    clearInterval(timer.current);
    setInCountDown(false);
    setCountTime(countDownTime);
  };
  useEffect(() => {
    const { account, telOrMail, password, verifyCode, isShowPwdInput } =
      loginParams;
    //登录状态可点击情况
    let status1 =
      currLoginType === "pwd" &&
      account != "" &&
      password != "" &&
      isShowPwdInput;
    let status2 = currLoginType === "pwd" && account != "" && !isShowPwdInput;
    let status3 =
      currLoginType === "verify" && telOrMail != "" && verifyCode != "";

    if (slotProtocolText) {
      if ((status1 || status2 || status3) && isProtocol) {
        setIsLoginDisable(false);
        return;
      }
    } else {
      if (status1 || status2 || status3) {
        setIsLoginDisable(false);
        return;
      }
    }
    setIsLoginDisable(true);
  }, [loginParams, slotProtocolText, isProtocol]);

  const inputOnChange = (value: any, tag: string) => {
    let params: any = { ...loginParams };
    params[tag] = value;
    setLoginParams({ ...loginParams, ...params });
    onInputChange && onInputChange(value, tag);
  };

  // 获取验证码
  const getCode = () => {
    const { telOrMail, getCodeErrorToast } = loginParams;
    //校验手机号和邮箱
    const telreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    const mailreg =
      /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (telreg.test(telOrMail) || mailreg.test(telOrMail)) {
      onVerifyBtnClick && onVerifyBtnClick(loginParams);
    } else {
      Toast.text(getCodeErrorToast, { duration: 2 });
    }
  };
  useEffect(() => {
    if (isGetCode && countDownTime) {
      setCountTime(countDownTime);
      countDown(countDownTime);
    }
  }, [isGetCode]);

  // 倒计时
  const countDown = (time: number) => {
    setInCountDown(true);
    timer.current = setInterval(() => {
      setCountTime(countTime--);
      if (countTime < 10) {
        setCountTime(countTime);
        if (countTime == 0) {
          clearInterval(timer.current);
          setInCountDown(false);
          setCountTime(time);
        }
      }
    }, 1000);
  };

  const forgetClick = () => {
    onForgetBtnClick && onForgetBtnClick();
  };

  const loginClick = () => {
    onLoginBtnClick && onLoginBtnClick(loginParams);
  };
  const inputClear = (tag: string) => {
    let params: any = loginParams;
    params[tag] = "";
    setLoginParams({ ...loginParams, ...params });
  };
  const isError = (tag: string) => {
    switch (tag) {
      case "account":
        return loginParams.accountErrorText != "";
        break;
      case "password":
        return loginParams.passwordErrorText != "";
        break;
      case "telOrMail":
        return loginParams.telOrMailErrorText != "";
        break;
      case "verifyCode":
        return loginParams.verifyErrorText != "";
        break;
      default:
        break;
    }
  };

  const b = bem("login");
  return (
    <div className={`${b()}`}>
      {logo ? (
        <div className={`${b("logo")}`}>
          <img src={logo} />
        </div>
      ) : null}
      {title ? <div className={`${b("title")}`}>{title}</div> : null}
      <div className={`${b("content")}`}>
        {currLoginType == "pwd" ? (
          <>
            <div className={`input-wrap ${isError("account") ? "error" : ""}`}>
              <div className="input-item">
                <Input
                  className="nut-input-text"
                  border={false}
                  defaultValue={loginParams.account}
                  name="account"
                  placeholder={loginParams.accountPlaceholder}
                  type="text"
                  clearable
                  onChange={(e) => {
                    inputOnChange(e, "account");
                    console.log("输入");
                  }}
                  onClear={() => {
                    inputClear("account");
                  }}
                />
              </div>
              {loginParams.accountErrorText ? (
                <div className="error-msg">{loginParams.accountErrorText}</div>
              ) : null}
            </div>
            {loginParams.isShowPwdInput ? (
              <div
                className={`input-wrap ${isError("password") ? "error" : ""}`}
              >
                <div className="input-item">
                  <Input
                    className="nut-input-text"
                    border={false}
                    defaultValue={loginParams.password}
                    name="password"
                    placeholder={loginParams.passwordPlaceholder}
                    type={isHidePwd ? "password" : "text"}
                    clearable
                    onChange={(e) => {
                      inputOnChange(e, "password");
                      console.log("输入");
                    }}
                    onClear={() => {
                      inputClear("password");
                    }}
                  />
                  {hasHidePwd ? (
                    <div
                      className="pwd-hide-icon"
                      onClick={() => {
                        setIsHidePwd(!isHidePwd);
                      }}
                    >
                      <Icon
                        name={isHidePwd ? "marshalling" : "eye"}
                        size="14"
                        color={isHidePwd ? "#ccc" : "#666"}
                      />
                    </div>
                  ) : null}
                </div>
                {hasForgetPassWord ? (
                  <div className="forget-pwd" onClick={forgetClick}>
                    {loginParams.forgetPwdText}
                  </div>
                ) : null}
                {loginParams.passwordErrorText ? (
                  <div className="error-msg">
                    {loginParams.passwordErrorText}
                  </div>
                ) : null}
              </div>
            ) : null}
          </>
        ) : (
          <>
            <div
              className={`input-wrap ${isError("telOrMail") ? "error" : ""}`}
            >
              <div className="input-item">
                <Input
                  className="nut-input-text"
                  border={false}
                  defaultValue={loginParams.telOrMail}
                  name="telOrMail"
                  placeholder={loginParams.telOrMailPlaceholder}
                  type="text"
                  clearable
                  onChange={(e) => {
                    inputOnChange(e, "telOrMail");
                    console.log("输入");
                  }}
                  onClear={() => {
                    inputClear("telOrMail");
                  }}
                />
              </div>
              {loginParams.telOrMailErrorText ? (
                <div className="error-msg">
                  {loginParams.telOrMailErrorText}
                </div>
              ) : null}
            </div>
            <div
              className={`input-wrap ${isError("verifyCode") ? "error" : ""}`}
            >
              <div className="input-item">
                <Input
                  className="nut-input-text"
                  border={false}
                  defaultValue={loginParams.verifyCode}
                  name="verifyCode"
                  placeholder={loginParams.verifyPlaceholder}
                  type="text"
                  clearable
                  onChange={(e) => {
                    inputOnChange(e, "verifyCode");
                    console.log("输入");
                  }}
                  onClear={() => {
                    inputClear("verifyCode");
                  }}
                />
                {!inCountDown ? (
                  <div className="code-box" onClick={getCode}>
                    {loginParams.verifyButtonText}
                  </div>
                ) : (
                  <div className="code-box disabled">
                    <div className="counts">{countTime}s</div>
                  </div>
                )}
              </div>
              {loginParams.verifyErrorText ? (
                <div className="error-msg">{loginParams.verifyErrorText}</div>
              ) : null}
            </div>
          </>
        )}
        {slotProtocolText ? (
          <Checkbox
            className="login-protocal"
            iconSize={14}
            checked={isProtocol}
            onChange={(state) => {
              setIsPrtocal(state);
            }}
          >
            {slotProtocolText}
          </Checkbox>
        ) : null}
      </div>
      <div className={`${b("btn")}`}>
        <Button
          block
          type="danger"
          shape="square"
          disabled={isLoginDisable}
          onClick={loginClick}
        >
          {loginButtonText}
        </Button>
      </div>
      {!isHideSwitchBtn ? (
        <div className="switch-type" onClick={switchLogin}>
          {currLoginType === "verify"
            ? loginParams.switchLoginText1
            : loginParams.switchLoginText2}
        </div>
      ) : null}
      {slotBottom ? <div className="custom-slot">{slotBottom}</div> : null}
    </div>
  );
};

Login.defaultProps = defaultProps;
Login.displayName = "NutLogin";
