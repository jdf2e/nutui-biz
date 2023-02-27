# Login 登录

### 介绍

主要应用在登录页面。依赖组件：Input、Checkbox、Icon、Button

### 安装

```javascript
import { Login } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

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

### 有用户隐私勾选项

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

### 错误提示

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
### 用户自定义登录框

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

### 用户自定义输入框

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
        onLoginBtnClick={queryLogin}
        loginButtonDisable={isDisable}
        loginButtonText={translated.loginText}
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


| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| logo   | 头部图标链接，不配置不显示                                | String  | --        |
| title  | 头部标题，不配置不显示                                 | String  | --         |
| formParams   | 输入框配置信息                                 | Object  |{}         |
| loginType   | 登录类型(可选验证码校验`verify`，账号密码校验`pwd` )，默认verify                                | String  | `verify`         |
| loginButtonDisable   | 登录按钮是否禁用  |Boolean  | true        |
| loginButtonText   | 登录按钮文案  |String  | 登录        |
| hasForgetPassWord   | 是否有忘记密码文字按钮  |Boolean  |true        |
| isGetCode   | 是否成功获取校验码 |Boolean  |false        |
| isHideSwitchBtn   | 是否隐藏登录类型切换按钮  |Boolean  |true        |
| countDownTime   | 校验码获取防频倒计时时间  |number  |60        |
| slotProtocolText   | 自定义勾选知情同意内容  |ReactNode  |-        |
| slotBottom   | 自定义登录按钮下方内容  |ReactNode  |--       |
| slotInput   | 自定义输入框  |ReactNode  |--        |


### Props formParams
| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| account   | 账号名 | String | -- |
| accountPlaceholder   | 账号输入框占位文字    | String  |   `请输入登录码`      |
| accountErrorText | 账号错误提示文字  | String | -- |
| telOrMail | 手机或邮箱 | String | -- |
| telOrMailPlaceholder | 手机或邮箱占位文字 | String | `请输入手机号或邮箱` |
| telOrMailErrorText | 手机或邮箱错误提示文字 | String | -- |
| password | 密码 | String | -- |
| passwordPlaceholder  | 密码占位文字 | String | `请输入密码` |
| passwordErrorText  | 密码错误提示文字 | String | -- |
| isShowPwdInput  | 是否展示密码输入框 | Boolean | true |
| verifyCode  | 验证码 | String | -- |
| verifyPlaceholder  | 验证码占位文字 | String | `请输入验证码` |
| verifyButtonText  |验证码获取按钮文字 | String | `获取验证码` |
| verifyErrorText  | 验证码错误提示文字 | String | -- |
| getCodeErrorToast  | 获取验证码按钮点击校验错误提示，用于提示手机或邮箱输入格式错误问题 | String | `请填写正确的手机号或邮箱` |
| switchLoginText1  | 登录类型切换提示文字1，为非默认的登录类型 | String | `账号密码登录` |
| switchLoginText2  |  登录类型切换提示文字2，为默认的登录类型| String | `手机/邮箱登录` |
| forgetPwdText  |  忘记密码按钮文案| String | `忘记密码` |



## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onInputChange | 输入框输入文字，返回输入文字和所在输入框的标识tag (account,password,telOrMail,verifyCode) |  value,tag |
| onLoginBtnClick | 登录按钮点击回调 |  formData |
| onVerifyBtnClick | 获取校验码按钮点击回调 | formData |
| onForgetBtnClick | 点击忘记密码回调 |  - |
| onInputClear | 输入框点击清除按钮回调，返回tag(account,password,telOrMail,verifyCode) | tag |
| onLoginTypeClick | 点击切换登录方式回调 | -- |



