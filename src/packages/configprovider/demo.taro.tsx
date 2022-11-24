import React from 'react'
import { ConfigProvider } from '@/packages/nutui.react.taro'
import enUS from '../../locales/en-US'
import zhCN from '../../locales/zh-CN'
import zhTW from '../../locales/zh-TW'

const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>Textarea 默认</h2>
        <ConfigProvider>
          {/* <TextArea disabled limitshow maxlength="20" /> */}
        </ConfigProvider>
        <h2>Textarea 英文</h2>
        <ConfigProvider locale={enUS}>
        </ConfigProvider>
        <h2>Textarea 中文</h2>
        <ConfigProvider locale={zhCN}>
        </ConfigProvider>
        <h2>Textarea 繁体中文</h2>
        <ConfigProvider locale={zhTW}>
        </ConfigProvider>
      </div>
    </>
  )
}

export default ConfigProviderDemo
