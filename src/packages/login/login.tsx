import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from "react";
import { useConfig } from "@/packages/configprovider";
import classNames from "classnames";
import bem from "@/utils/bem";
import { IComponent } from "@/utils/typings";
import { numericProp } from "@/utils/props";
import {
  Input,
  Button,
  ButtonProps,
  Icon,
  Checkbox,
  Toast,
} from "@nutui/nutui-react";

export type loginType = "verify" | "pwd";
export type showErrorType = "toast" | "bottomMsg";

export interface LoginParamsProps {
  account?: string;
  accountPlaceholder?: string;
  accountErrorText?: string;
  telOrMail?: string | undefined;
  telOrMailPlaceholder?: string;
  telOrMailErrorText?: string;
  password?: string;
  passwordPlaceholder?: string;
  passwordErrorText?: string;
  isShowPwdInput?: boolean;
  verify?: string;
  verifyPlaceholder?: string;
  verifyButtonText?: string;
  verifyErrorText?: string;
  getCodeErrorToast?: string;
  switchLoginText1?: string;
  switchLoginText2?: string;
  forgetPwdText?: string;

  [key: string]: any;
}

export interface LoginFormProps {
  account?: string;
  password?: string;
  telOrMail?: string;
  verify?: string;
  [key: string]: any;
}
export interface LoginProps extends IComponent {
  logo?: string;
  title?: string;
  formParams: LoginParamsProps;
  loginType: loginType;
  loginButtonDisable?: boolean;
  loginButtonText?: string;
  hasForgetPassWord?: boolean;
  showErrorType?: showErrorType;
  toastErrorText?: string;
  hasHidePwd?: boolean;
  isGetCode?: boolean;
  countDownTime?: number | undefined;
  isHideSwitchBtn?: boolean;
  slotProtocolText?: ReactNode;
  slotInput?: ReactNode;
  slotBottom?: ReactNode;
  buttonProps?: ButtonProps;
  onInputChange?: (value: string, tag: string) => void;
  onLoginBtnClick?: (
    formData: LoginFormProps,
    totalData: LoginParamsProps
  ) => void;
  onVerifyBtnClick?: (
    formData: LoginFormProps,
    totalData: LoginParamsProps
  ) => void;
  onForgetBtnClick?: () => void;
  onInputClear?: (tag: string) => void;
  onLoginTypeClick?: () => void;
}

const defaultProps = {
  logo: "",
  title: "",
  formParams: {},
  loginType: "verify",
  loginButtonDisable: true,
  loginButtonText: "登录",
  isGetCode: false,
  hasForgetPassWord: true,
  hasHidePwd: true,
  isHideSwitchBtn: false,
  showErrorType: "toast",
  countDownTime: 60,
} as LoginProps;

export const Login: FunctionComponent<Partial<LoginProps>> = (props) => {
  const { locale } = useConfig();
  const {
    className,
    style,
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
    countDownTime,
    isHideSwitchBtn,
    showErrorType,
    toastErrorText,
    slotInput,
    buttonProps,
    onInputChange,
    onLoginBtnClick,
    onVerifyBtnClick,
    onForgetBtnClick,
    onInputClear,
    onLoginTypeClick,
  } = {
    ...defaultProps,
    ...props,
  };
  let [countTime, setCountTime] = useState(60);
  const [inCountDown, setInCountDown] = useState(false);
  const [isHidePwd, setIsHidePwd] = useState(true);
  const [isLoginDisable, setIsLoginDisable] = useState(loginButtonDisable);
  const [currLoginType, setCurrLoginType] = useState(loginType);
  const [isProtocol, setIsPrtocal] = useState(false);
  let timer: any = useRef(null);
  const [loginForm, setLoginForm] = useState<LoginFormProps>({});

  useEffect(() => {
    //初始化数据
    setLoginParams({ ...loginParams, ...formParams });

    setLoginForm({
      account: formParams.account,
      password: formParams.password,
      telOrMail: formParams.telOrMail,
      verify: formParams.verify,
    });
  }, [formParams]);

  useEffect(() => {
    countDownTime && !inCountDown && setCountTime(countDownTime);
  }, [countDownTime]);

  //监听登录按钮是否禁用
  useEffect(() => {
    setIsLoginDisable(loginButtonDisable);
  }, [loginButtonDisable]);

  const [loginParams, setLoginParams] = useState<LoginParamsProps>({
    account: "",
    accountPlaceholder: locale.login.accountPlaceholder,
    accountErrorText: "",
    telOrMail: "",
    telOrMailPlaceholder: locale.login.telOrMailPlaceholder,
    telOrMailErrorText: "",
    password: "",
    passwordPlaceholder: locale.login.passwordPlaceholder,
    passwordErrorText: "",
    isShowPwdInput: true,
    verify: "",
    verifyPlaceholder: locale.login.verifyPlaceholder,
    verifyButtonText: locale.login.verifyButtonText,
    verifyErrorText: "",
    getCodeErrorToast: locale.login.getCodeErrorToast,
    switchLoginText1: locale.login.switchLoginText1,
    switchLoginText2: locale.login.switchLoginText2,
    forgetPwdText: locale.login.forgetPwdText,
  });

  const switchLogin = () => {
    setCurrLoginType(currLoginType === "pwd" ? "verify" : "pwd");
    resetParams();
    onLoginTypeClick && onLoginTypeClick();
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
      verify: "",
      verifyErrorText: "",
    };
    setLoginForm({
      account: "",
      password: "",
      telOrMail: "",
      verify: "",
    });
    setLoginParams({ ...loginParams, ...clearObj });
    setIsPrtocal(false);
    clearInterval(timer.current);
    setInCountDown(false);
    countDownTime && setCountTime(countDownTime);
  };
  useEffect(() => {
    const { account, telOrMail, password, verify, isShowPwdInput } =
      loginParams;

    //登录状态可点击情况
    let isPwdNotEmpty =
      currLoginType === "pwd" &&
      account != "" &&
      password != "" &&
      isShowPwdInput;
    let isAccountNotEmpty =
      currLoginType === "pwd" && account != "" && !isShowPwdInput;
    let isVerfiyNotEmpty =
      currLoginType === "verify" && telOrMail != "" && verify != "";
    // 用户自定义输入框slotInput时，登录按钮是否可点击用户控制
    if (!slotInput) {
      if (slotProtocolText) {
        if (
          (isPwdNotEmpty || isAccountNotEmpty || isVerfiyNotEmpty) &&
          isProtocol
        ) {
          setIsLoginDisable(false);
          return;
        }
      } else {
        if (isPwdNotEmpty || isAccountNotEmpty || isVerfiyNotEmpty) {
          setIsLoginDisable(false);
          return;
        }
      }
    }

    !slotInput && setIsLoginDisable(true);
  }, [loginParams, slotProtocolText, isProtocol, slotInput]);
  //toast 错误提示监听
  useEffect(() => {
    if (showErrorType === "toast" && toastErrorText?.length) {
      Toast.text(toastErrorText);
    }
  }, [toastErrorText]);

  const inputOnChange = (value: any, tag: string) => {
    let params: LoginParamsProps = { ...loginParams };
    let form: LoginFormProps = { ...loginForm };
    params[tag] = value;
    form[tag] = value;
    setLoginParams({ ...loginParams, ...params });
    setLoginForm({ ...loginForm, ...form });
    onInputChange && onInputChange(value, tag);
  };

  // 获取验证码
  const getCode = () => {
    const { telOrMail, getCodeErrorToast } = loginParams;
    //校验手机号和邮箱
    if (telOrMail?.length) {
      onVerifyBtnClick && onVerifyBtnClick(loginForm, loginParams);
    } else {
      Toast.text(getCodeErrorToast, { duration: 2 });
    }
  };
  //异步获取验证码，控制倒计时
  useEffect(() => {
    if (isGetCode && countDownTime && !inCountDown) {
      setCountTime(countDownTime);
      countDown(countDownTime);
    }
  }, [isGetCode]);

  // 倒计时
  const countDown = (time: number) => {
    setCountTime(countTime--);
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
    onLoginBtnClick && onLoginBtnClick(loginForm, loginParams);
  };
  const inputClear = (tag: string) => {
    let params: LoginParamsProps = loginParams;
    let form: LoginFormProps = { ...loginForm };
    params[tag] = "";
    form[tag] = "";
    onInputClear && onInputClear(tag);
    setLoginParams({ ...loginParams, ...params });
    setLoginForm({ ...loginForm, ...form });
  };

  const isError = (tag: string) => {
    let name = tag + "ErrorText";
    return loginParams[name] != "" && showErrorType === "bottomMsg";
  };
  //隐藏密码icon
  const pwdEyesIcon = () => {
    return (
      <div
        className={`${b("hide-icon")}`}
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
    );
  };
  //获取验证码倒计时按钮
  const countDownTpl = () => {
    return !inCountDown ? (
      <div className={`${b("code-box")}`} onClick={getCode}>
        {loginParams.verifyButtonText}
      </div>
    ) : (
      <div className={classNames([b("code-box"), "disabled"])}>
        <div className="counts">{countTime}s</div>
      </div>
    );
  };
  const inputTpl = (tag: string) => {
    let placeholder = tag + "Placeholder";
    let errorText = tag + "ErrorText";

    return (
      <div
        className={classNames([b("input-wrap"), isError(tag) ? "error" : ""])}
      >
        <div className={`${b("input-item")}`}>
          <Input
            className="nut-input-text"
            border={false}
            defaultValue={loginParams[tag]}
            name={tag}
            placeholder={loginParams[placeholder]}
            type={isHidePwd && tag === "password" ? "password" : "text"}
            clearable
            onChange={(e) => {
              inputOnChange(e, tag);
            }}
            onClear={() => {
              inputClear(tag);
            }}
          />
          {tag === "password" && hasHidePwd && pwdEyesIcon()}
          {tag === "verify" && countDownTpl()}
        </div>
        {tag === "password" && hasForgetPassWord && (
          <div className="forget-pwd" onClick={forgetClick}>
            {loginParams.forgetPwdText}
          </div>
        )}
        {loginParams[errorText] && (
          <div className="error-msg">{loginParams[errorText]}</div>
        )}
      </div>
    );
  };

  const b = bem("login");
  return (
    <div className={classNames([b(), className])} style={style}>
      {logo && (
        <div className={`${b("logo")}`}>
          <img src={logo} />
        </div>
      )}
      {title && <div className={`${b("title")}`}>{title}</div>}
      <div className={`${b("content")}`}>
        {currLoginType == "pwd" ? (
          <>
            {inputTpl("account")}
            {loginParams.isShowPwdInput && inputTpl("password")}
          </>
        ) : (
          <>
            {inputTpl("telOrMail")}
            {inputTpl("verify")}
          </>
        )}
        {slotInput}
        {slotProtocolText && (
          <div className={`${b("protocal")}`}>
            <Checkbox
              iconSize={14}
              checked={isProtocol}
              onChange={(state) => {
                setIsPrtocal(state);
              }}
            ></Checkbox>
            <div className="customer-protocal">{slotProtocolText}</div>
          </div>
        )}
      </div>
      <div className={`${b("btn")}`}>
        <Button
          block
          type="danger"
          shape="square"
          disabled={isLoginDisable}
          onClick={loginClick}
          {...buttonProps}
        >
          {loginButtonText ? loginButtonText : locale.login.loginButtonText}
        </Button>
      </div>
      {!isHideSwitchBtn && (
        <div className={`${b("switch-type")}`} onClick={switchLogin}>
          {currLoginType === "verify"
            ? loginParams.switchLoginText1
            : loginParams.switchLoginText2}
        </div>
      )}
      {slotBottom && <div className="custom-slot">{slotBottom}</div>}
    </div>
  );
};

Login.defaultProps = defaultProps;
Login.displayName = "NutLogin";
