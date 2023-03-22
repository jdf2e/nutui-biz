import React from 'react'
import { InvoiceTitleEdit, Idata } from './invoicetitleedit'
import { useTranslate } from '../../sites/assets/locale'
import { Toast } from '@nutui/nutui-react'
import '../../styles/demo.css'

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
  
  const specialData: Idata = {
    title: '京东集团',
    companyCode: '123456ABCD',
    address: '北京市经开区',
    companyPhone: '010-12345678',
    bankDeposit: '中国银行',
    bankAccount: '12345678'
  }
  
  const normalData: Idata = {
    titleType: 'enterprise',
    title: '京东集团',
    companyCode: '123456ABCD',
    address: '北京市经开区',
    companyPhone: '010-12345678',
    bankDeposit: '中国银行',
    bankAccount: '12345678'
  }

  return (
    <>
      <div className="demo full">
        <h2>{translated.specialInvoice}</h2>
        <InvoiceTitleEdit 
          data = {specialData}
          onSubmit={handleSubmit}
          onInput={handleInput}
        />
        <h2>{translated.normalInvoice}</h2>
        <InvoiceTitleEdit 
          data = {normalData}
          invoiceType="normal"
          submitButtonText="提交"
          onSubmit={handleSubmit}
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
