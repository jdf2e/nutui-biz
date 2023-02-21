import React from 'react'
import { ConfigProvider } from '@/packages/nutui.react.taro'
import enUS from '../../locales/en-US'
import zhCN from '../../locales/zh-CN'

const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>Textarea 默认</h2>
        <ConfigProvider>{/* <TextArea disabled limitshow maxlength="20" /> */}</ConfigProvider>
        <h2>Textarea 英文</h2>
        <ConfigProvider locale={enUS}></ConfigProvider>
        <h2>Textarea 中文</h2>
        <ConfigProvider locale={zhCN}>
        </ConfigProvider>
      </div>
    </>
  );
};

export default ConfigProviderDemo;
