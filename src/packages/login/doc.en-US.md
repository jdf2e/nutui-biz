# Login 

### Intro

Mainly used on login pages. Dependent components: Input, Checkbox, Icon, Button

### Install

```javascript
import { Login } from '@nutui/nutui-biz';
```

## Demo

### Basic usage

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

const App = () => {
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
  return (
    <Login
        formParams={formParams}
        loginType="verify"
        logo={logoImg}
        onInputChange={onChange}
        isGetCode={getVerify}
        onVerifyBtnClick={queryVerifyCode}
        onLoginBtnClick={queryLogin}
        countDownTime={30}
        onForgetBtnClick={() => {
              console.log("点击忘记密码");
            }}
        />
  );
};
export default App;
```
:::

### have user privacy tick option

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

const App = () => {
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
  });
  const [getVerify, setGetVerify] = useState(false);
   const [toastText, setToastText] = useState("");
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };
  const queryVerifyCode = (formData: any) => {
    setGetVerify(false);
    //异步获取校验码成功
    setTimeout(() => {
      setGetVerify(true);
    }, 300);
  };
  const queryLogin = (formData: any) => {
    console.log("login", formData);
    setToastText("toast 错误提示");
    setTimeout(() => {
        setToastText("");
    }, 2000);
  };
  return (
     <Login
        formParams={formParams}
        loginType="verify"
        logo={logoImg}
        onInputChange={onChange}
        isGetCode={getVerify}
        onVerifyBtnClick={queryVerifyCode}
        toastErrorText={toastText}
        onLoginBtnClick={queryLogin}
        slotProtocolText={
          <div>
            勾选后代表您已阅读并同意
            <span style={{ color: "red" }}>《用户隐私政策》</span>
          </div>
        }
        />
  );
};
export default App;
```
::::::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

const App = () => {
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
  });
  const [getVerify, setGetVerify] = useState(false);
   const [toastText, setToastText] = useState("");
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };
  const queryVerifyCode = (formData: any) => {
    setGetVerify(false);
    //异步获取校验码成功
    setTimeout(() => {
      setGetVerify(true);
    }, 300);
  };
  const queryLogin = (formData: any) => {
    console.log("login", formData);
    setToastText("toast 错误提示");
    setTimeout(() => {
        setToastText("");
    }, 2000);
  };
  return (
     <Login
        formParams={formParams}
        loginType="verify"
        logo={logoImg}
        onInputChange={onChange}
        isGetCode={getVerify}
        onVerifyBtnClick={queryVerifyCode}
        toastErrorText={toastText}
        onLoginBtnClick={queryLogin}
        slotProtocolText={
          <div>
            勾选后代表您已阅读并同意
            <span style={{ color: "red" }}>《用户隐私政策》</span>
          </div>
        }
        />
  );
};
export default App;
```
:::

### Error message

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

const App = () => {
  const logoImg =
    "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
  const [formParams3, setformParams3] = useState({
    account: "12345",
    accountErrorText: "账号不存在",
    password: "123",
    passwordErrorText: "请输入6位密码",
  });
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };

  return (
     <Login
        formParams={formParams3}
        logo={logoImg}
        loginType="pwd"
        showErrorType="bottomMsg"
        onInputChange={onChange}
        />
  );
};
export default App;
```
:::

### User only account login

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';

const App = () => {
  const [formParams2, setformParams2] = useState({
    account: "",
    accountPlaceholder: "请输入账号",
    accountErrorText: "",
    password: "",
    passwordErrorText: "",
    isShowPwdInput: false,
  });
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
  };
 
  const queryLogin = (formData: any) => {
    console.log("login", formData);
  };
  return (
    <Login
        formParams={formParams2}
        title="卡号登录"
        loginType="pwd"
        onInputChange={onChange}
        isHideSwitchBtn={true}
        onLoginBtnClick={queryLogin}
        />
  );
};
export default App;
```
:::

###  Custom input

:::demo

```tsx
import React, { useState, useEffect } from "react";
import { Login } from '@nutui/nutui-biz';
import {Input } from "@nutui/nutui-react";

const App = () => {
  const [formParams2, setformParams2] = useState({
    account: "",
    accountPlaceholder: "请输入账号",
    accountErrorText: "",
    password: "",
    passwordErrorText: "",
    isShowPwdInput: false,
  });
  const [isDisable, setIsDisable] = useState(true);
  const [account, setAccount] = useState("");
  const [customInput, setCustomInput] = useState("");
  const onChange = (value: any, tag: string) => {
    console.log(tag, value);
    if (tag === "account") {
      setAccount(value);
    }
  };
 
  useEffect(() => {
    if (account.length > 0 && customInput.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [account, customInput]);

  return (
    <Login
        formParams={formParams2}
        title="卡号登录"
        loginType="pwd"
        onInputChange={onChange}
        isHideSwitchBtn={true}
        loginButtonDisable={isDisable}
        onInputClear={(tag) => {
            if (tag === "account") {
              setAccount("");
            }
        }}
        slotInput={
          <div className={`nb-login__input-wrap`}>
            <div className="nb-login__input-item">
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
              <div className="nb-login__code-box">
                <img
                  style={{ width: "65px", height: "30px" }}
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/211415/19/9275/14512/61924b82E09366437/cc5cc7297b9073ae.jpg"
                />
              </div>
            </div>
          </div>
        }
        slotBottom={
          <div
            style={{
              color: "#006FFF",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            新用户注册
          </div>
        }
        />
  );
};
export default App;
```
:::


## API

### Props


| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| logo | logo url | string | '' |
| title | header title | string | '' |
| formParams | input box configuration information | Object<LoginParamsProps> | - |
| loginType | login type (optional verification code verification `verify`, account password verification `pwd`), default verify | string | `verify` |
| loginButtonDisable | Whether the login button is disabled |boolean | `true` |
| loginButtonText | Login button text |string | `Login` |
| hasForgetPassWord | Whether there is a forgot password text button |boolean |`true` |
| hasHidePwd | Hide and show password button |boolean |`true` |
| isGetCode | Whether to get the verification code successfully |boolean |`false` |
| isHideSwitchBtn | Whether to hide the login type switch button |boolean |true |
| countDownTime | countdown time for checking code acquisition anti-frequency |number |`60` |
| showErrorType| The type of error prompt in the login box, optional value `toast`/`errorMsg`| string |`toast`|
| toastErrorText| Toast error message content | string | ''|
| slotProtocolText | Custom check informed consent content | ReactNode |- |
| slotBottom | Customize the content below the login button | ReactNode |- |
| slotInput   | Custom Input  | ReactNode  |-        |
| buttonProps| button basic component props | [ButtonProps](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/button) | - |

### Props formParams

| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| account | account name | string | - |
| accountPlaceholder | Placeholder text of the account input box | string | `Please enter the account` |
| accountErrorText | account error prompt text | string | - |
| telOrMail | mobile phone or email | string | - |
| telOrMailPlaceholder | Phone or email placeholder text | string | `Please enter your phone number or email` |
| telOrMailErrorText | Phone or email error prompt text | string | - |
| password | password | string | - |
| passwordPlaceholder | password placeholder text | string | `Please enter a password` |
| passwordErrorText | password error prompt text | string | - |
| isShowPwdInput | Whether to show the password input box | boolean | `true` |
| verify | verification code | string | - |
| verifyPlaceholder | Verification code placeholder text | string | `Please enter the verify code` |
| verifyButtonText | Verification code get button text | string | `Get code` |
| verifyErrorText | verification code error prompt text | string | - |
| getCodeErrorToast | Get the verification code button and click the verification error prompt, which is used to prompt the phone or email input format error | string | `Please fill in the correct phone number or email` |
| switchLoginText1 | Prompt text 1 for switching login type, which is a non-default login type | string | `Account password login` |
| switchLoginText2 | Login type switch prompt text 2, which is the default login type | string | `Mobile login / Email login` |
| forgetPwdText | Forgot password button text | string | `Forgot password` |



### Events
| Attribute    | Description     | Callback |
|----- | ----- | -----  |
| onInputChange | Input text in the input box, return the input text and the identification tag of the input box (account,password,telOrMail,verify) | value,tag |
| onLoginBtnClick | Login button click callback | formData:<LoginParamsProps> |
| onVerifyBtnClick | Get verification code button click callback | formData:<LoginParamsProps> |
| onForgetBtnClick | Click forgot password callback | - |
| onInputClear | Triggered when the clear button of the input box is clicked, `tag`(account,password,telOrMail,verify)|tag|
| onLoginTypeClick | Click switch login type callback | - |


