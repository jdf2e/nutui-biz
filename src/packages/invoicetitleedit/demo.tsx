import React from 'react'
import { InvoiceTitleEdit } from './invoicetitleedit'
import { useTranslate } from '../../sites/assets/locale'
import { Toast } from '@nutui/nutui-react'
import './demo.scss'

interface tarnslatedOption {
  normalInvoice: string;
  specialInvoice: string;
  customBottom: string;
}

const InvoiceTitleEditDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      normalInvoice: '电子普通发票',
      specialInvoice: '增值税专用发票',
      customBottom: '自定义底部',
    },
    'en-US': {
      normalInvoice: 'Normal Invoice',
      specialInvoice: 'Special Invoice',
      customBottom: 'Custom Bottom',
    }
  });

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
    console.log('Invoice title input event is triggered')
  }

  return (
    <>
      <div className="demo full">
        <h2>{translated.specialInvoice}</h2>
        <InvoiceTitleEdit 
          onSubmit={handleSubmit}
          onInput={handleInput}
        />
        <h2>{translated.normalInvoice}</h2>
        <InvoiceTitleEdit 
          onSubmit={handleSubmit}
          invoiceType="normal"
          submitButtonText="提交"
        />
        <h2>{translated.customBottom}</h2>
        <InvoiceTitleEdit
          onSubmit={handleSubmit}
          invoiceType="normal"
          submitButtonText="提交"
          bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>{translated.customBottom}</div>}
        />
      </div>
    </>
  )
}

export default InvoiceTitleEditDemo
