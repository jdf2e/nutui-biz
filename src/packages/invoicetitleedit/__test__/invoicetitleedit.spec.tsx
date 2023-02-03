import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InvoiceTitleEdit } from '../invoicetitleedit'

test('test 增值税专用发票', async () => {
  const { container } = render(
    <InvoiceTitleEdit />
  )

  const nutInvoiceTitleEdit = container.querySelector('.nut-invoice-title-edit') as HTMLElement
  const nutInvoiceTitleEditSubmit = container.querySelector('.nut-invoice-title-edit__submit') as HTMLElement
  expect(nutInvoiceTitleEdit).toBeTruthy()
  expect(nutInvoiceTitleEditSubmit).toHaveTextContent('提交审批')
})

test('test 电子普通发票', async () => {
  const { container } = render(
    <InvoiceTitleEdit invoiceType="normal" />
  )

  const nutInvoiceTitleEditSubmit = container.querySelector('.nut-invoice-title-edit__submit') as HTMLElement
  expect(nutInvoiceTitleEditSubmit).not.toHaveTextContent('审批')
})

test('test 自定义底部', async () => {
  const { container } = render(
    <InvoiceTitleEdit 
      invoiceType="normal"
      bottom={<div style={{textAlign: 'center', lineHeight: '40px'}}>我是自定义的底部</div>} 
    />
  )

  const nutInvoiceTitleEdit = container.querySelector('.nut-invoice-title-edit') as HTMLElement
  expect(nutInvoiceTitleEdit).toHaveTextContent('我是自定义的底部')
})