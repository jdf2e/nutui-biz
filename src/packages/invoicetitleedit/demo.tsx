import React from 'react'
import { InvoiceTitleEdit } from './invoicetitleedit'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}

const InvoiceTitleEditDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <InvoiceTitleEdit />
      </div>
    </>
  )
}

export default InvoiceTitleEditDemo
