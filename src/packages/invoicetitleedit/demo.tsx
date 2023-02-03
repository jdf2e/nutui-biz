import React from 'react'
import { InvoiceTitleEdit } from './invoicetitleedit'
import { useTranslate } from '../../sites/assets/locale'
import { Toast } from '@nutui/nutui-react'
import './demo.scss'

interface T {
}

const InvoiceTitleEditDemo = () => {
  const handleSubmit = (arg: any) => {
    if (Array.isArray(arg)) {
      Toast.fail('callback: submitFailed error')
      console.log('failed error', arg)
    } else {
      Toast.success('succeed')
      console.log('succeed', arg)
    }
  }

  const handleInput = () => {

  }

  return (
    <>
      <div className="demo full">
        <h2>增值税专用发票</h2>
        <InvoiceTitleEdit 
          onSubmit={handleSubmit}
          onInput={handleInput}
        />
        <h2>电子普通发票</h2>
        <InvoiceTitleEdit 
          onSubmit={handleSubmit}
          invoiceType="normal"
        />
        <h2>自定义底部</h2>
        <InvoiceTitleEdit
          onSubmit={handleSubmit}
          invoiceType="normal"
          bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>我是自定义的底部</div>}
        />
      </div>
    </>
  )
}

export default InvoiceTitleEditDemo
