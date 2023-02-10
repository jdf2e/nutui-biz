# Login 

### Introduce

Mainly used on login pages. Dependent components: Input, Checkbox, Icon, Button

### Install

```javascript
import { Login } from '@nutui/nutui-biz';
```

## Code Demo

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
        countDownTime={60}
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

### User-defined login box

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
  const [getVerify, setGetVerify] = useState(false);
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
        countDownTime={30}
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
        formParams={formParams3}
        logo={logoImg}
        loginType="pwd"
        onInputChange={onChange}
        isGetCode={getVerify}
        onVerifyBtnClick={queryVerifyCode}
        onLoginBtnClick={queryLogin}
        countDownTime={60}
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
| logo | header icon link, not displayed if not configured | String | '' |
| title | head title, not displayed if not configured | String | '' |
| formParams | input box configuration information | Object |{} |
| loginType | login type (optional verification code verification `verify`, account password verification `pwd`), default verify | String | `verify` |
| loginButtonDisable | Whether the login button is disabled |Boolean | true |
| loginButtonText | Login button text |String | Login |
| hasForgetPassWord | Whether there is a forgot password text button |Boolean |true |
| isGetCode | Whether to get the verification code successfully |Boolean |false |
| isHideSwitchBtn | Whether to hide the login type switch button |Boolean |true |
| countDownTime | countdown time for checking code acquisition anti-frequency |number |60 |
| slotProtocolText | Custom check informed consent content |React.ReactNode |- |
| slotBottom | Customize the content below the login button |React.ReactNode |- |


### Props formParams

| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| account | account name | String | [] |
| accountPlaceholder | Placeholder text of the account input box | String | 'Please enter the login code' |
| accountErrorText | account error prompt text | String | '' |
| telOrMail | mobile phone or email | String | '' |
| telOrMailPlaceholder | Phone or email placeholder text | String | 'Please enter your phone number or email' |
| telOrMailErrorText | Phone or email error prompt text | String | '' |
| password | password | String | '' |
| passwordPlaceholder | password placeholder text | String | 'Please enter a password' |
| passwordErrorText | password error prompt text | String | '' |
| isShowPwdInput | Whether to show the password input box | Boolean | true |
| verifyCode | verification code | String | '' |
| verifyPlaceholder | Verification code placeholder text | String | 'Please enter the verification code' |
| verifyButtonText | Verification code get button text | String | 'Get verification code' |
| verifyErrorText | verification code error prompt text | String | '' |
| getCodeErrorToast | Get the verification code button and click the verification error prompt, which is used to prompt the phone or email input format error | String | 'Please fill in the correct phone number or email' |
| switchLoginText1 | Prompt text 1 for switching login type, which is a non-default login type | String | 'Account password login' |
| switchLoginText2 | Login type switch prompt text 2, which is the default login type | String | 'Mobile phone/email login' |
| forgetPwdText | Forgot password button text | String | 'forgot password' |



## Events
| Attribute    | Description     | Callback |
|----- | ----- | -----  |
| onInputChange | Input text in the input box, return the input text and the identification tag of the input box (account,password,telOrMail,verifyCode) | value,tag |
| onLoginBtnClick | Login button click callback | formData |
| onVerifyBtnClick | Get verification code button click callback | formData |
| onForgetBtnClick | Click forgot password callback | - |



