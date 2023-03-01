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
import  React from 'react';
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
    verifyCode: "",
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
        />
  );
};
export default App;
```
:::

### have user privacy tick option

:::demo

```tsx
import  React from 'react';
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
    verifyCode: "",
  });
  const [getVerify, setGetVerify] = useState(false);
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
  };
  return (
     <Login
        formParams={formParams}
        loginType="verify"
        logo={logoImg}
        onInputChange={onChange}
        isGetCode={getVerify}
        onVerifyBtnClick={queryVerifyCode}
        countDownTime={30}
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
import  React from 'react';
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
        onInputChange={onChange}
        />
  );
};
export default App;
```
:::

### Custom login box

:::demo

```tsx
import  React from 'react';
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

###  Custom input

:::demo

```tsx
import  React from 'react';
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
        onClear={(tag) => {
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
                placeholder={'请输入验证码'}
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
  );
};
export default App;
```
:::


## API

### Props


| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| logo | logo url | String | -- |
| title | header title | String | -- |
| formParams | input box configuration information | Object |{} |
| loginType | login type (optional verification code verification `verify`, account password verification `pwd`), default verify | String | `verify` |
| loginButtonDisable | Whether the login button is disabled |Boolean | true |
| loginButtonText | Login button text |String | `Login` |
| hasForgetPassWord | Whether there is a forgot password text button |Boolean |true |
| isGetCode | Whether to get the verification code successfully |Boolean |false |
| isHideSwitchBtn | Whether to hide the login type switch button |Boolean |true |
| countDownTime | countdown time for checking code acquisition anti-frequency |number |60 |
| slotProtocolText | Custom check informed consent content |React.ReactNode |- |
| slotBottom | Customize the content below the login button |React.ReactNode |- |
| slotInput   | Custom Input  |ReactNode  |--        |


### Props formParams

| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| account | account name | String | -- |
| accountPlaceholder | Placeholder text of the account input box | String | `Please enter the account` |
| accountErrorText | account error prompt text | String | -- |
| telOrMail | mobile phone or email | String | -- |
| telOrMailPlaceholder | Phone or email placeholder text | String | `Please enter your phone number or email` |
| telOrMailErrorText | Phone or email error prompt text | String | -- |
| password | password | String | -- |
| passwordPlaceholder | password placeholder text | String | `Please enter a password` |
| passwordErrorText | password error prompt text | String | -- |
| isShowPwdInput | Whether to show the password input box | Boolean | true |
| verifyCode | verification code | String | -- |
| verifyPlaceholder | Verification code placeholder text | String | `Please enter the verify code` |
| verifyButtonText | Verification code get button text | String | `Get code` |
| verifyErrorText | verification code error prompt text | String | -- |
| getCodeErrorToast | Get the verification code button and click the verification error prompt, which is used to prompt the phone or email input format error | String | `Please fill in the correct phone number or email` |
| switchLoginText1 | Prompt text 1 for switching login type, which is a non-default login type | String | `Account password login` |
| switchLoginText2 | Login type switch prompt text 2, which is the default login type | String | `Mobile login / Email login` |
| forgetPwdText | Forgot password button text | String | `Forgot password` |



### Events
| Attribute    | Description     | Callback |
|----- | ----- | -----  |
| onInputChange | Input text in the input box, return the input text and the identification tag of the input box (account,password,telOrMail,verifyCode) | value,tag |
| onLoginBtnClick | Login button click callback | formData |
| onVerifyBtnClick | Get verification code button click callback | formData |
| onForgetBtnClick | Click forgot password callback | - |
| onInputClear | Triggered when the clear button of the input box is clicked, `tag`(account,password,telOrMail,verifyCode)|tag|
| onLoginTypeClick | Click switch login type callback | -- |


