import React from 'react'
import { InvoiceTitleEdit } from './invoicetitleedit'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}

const InvoiceTitleEditDemo = () => {
  const handle1 = () => {
    console.log(111)
  }

  return (
    <>
      <div className="demo full">
        <h2>基本用法</h2>
        <InvoiceTitleEdit onInput={handle1} />
      </div>
    </>
  )
}

export default InvoiceTitleEditDemo
