import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InvoiceTitleList } from '../invoicetitlelist'
import { Toast } from '@nutui/nutui-react'

test('test 增值税专用发票', async () => {
  const { container } = render(
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'special',
        status: '通过',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654'
      }}
      onClick={() => Toast.text('触发点击事件')}
      onEdit={() => Toast.text('触发编辑事件')}
      onDelete={() => Toast.text('触发删除事件')}
    />
  )

  const nutInvoiceTitleList = container.querySelector('.nb-invoice-title-list') as HTMLElement
  const nutInvoiceTitleListMainDefault = container.querySelector('.nb-invoice-title-list__main-default') as HTMLElement
  const nutInvoiceTitleListMainStatus = container.querySelector('.nb-invoice-title-list__main-status')
  
  expect(nutInvoiceTitleList).toBeTruthy()
  expect(nutInvoiceTitleListMainDefault).toBeTruthy()
  expect(nutInvoiceTitleListMainStatus).toHaveClass('pass')
  expect(nutInvoiceTitleListMainStatus).toHaveTextContent('通过')
})

test('test 增值税专用发票-发票状态', async () => {
  const { container } = render(
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'special',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654'
      }}
      onClick={() => Toast.text('触发点击事件')}
      onEdit={() => Toast.text('触发编辑事件')}
      onDelete={() => Toast.text('触发删除事件')}
    />
  )

  const nutInvoiceTitleListMainStatus = container.querySelector('.nb-invoice-title-list__main-status')
  
  expect(nutInvoiceTitleListMainStatus).toHaveClass('veto')
})

test('test 电子普通发票', async () => {
  const { container } = render(
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654'
      }}
      onClick={() => Toast.text('触发点击事件')}
      onEdit={() => Toast.text('触发编辑事件')}
      onDelete={() => Toast.text('触发删除事件')}
    />
  )

  const nutInvoiceTitleListMainStatus = container.querySelector('.nb-invoice-title-list__main-status')
  const nutIconEdit = container.querySelector('.nb-invoice-title-list .nut-icon-edit') as HTMLElement
  
  expect(nutInvoiceTitleListMainStatus).not.toBeTruthy()
  expect(nutIconEdit).toBeTruthy()
})

test('test 选中状态', async () => {
  const { container } = render(
    <InvoiceTitleList 
      data={{
        isSelected: true,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654'
      }}
      onClick={() => Toast.text('触发点击事件')}
      onEdit={() => Toast.text('触发编辑事件')}
      onDelete={() => Toast.text('触发删除事件')}
    />
  )

  const nutIconChecked = container.querySelector('.nb-invoice-title-list .nut-icon-checked') as HTMLElement
  
  expect(nutIconChecked).toBeTruthy()
})

test('test 操作按钮自定义', async () => {
  const onClick = jest.fn()
  const onEdit = jest.fn()
  const onDelete = jest.fn()

  const { container } = render(
    <InvoiceTitleList 
      data={{
        isSelected: false,
        type: 'normal',
        status: '否决',
        isShowDefault: true,
        title: '北京环球影城娱乐信息技术有限公司',
        companyCode: '91110302MA222LU88A',
        address: '北京市通州区台湖镇',
        companyPhone: '88488848',
        bankDeposit: '中国银行股份有限公司北京分行',
        bankAccount: '5833 2153 4243 2654'
      }}
      onClick={onClick}
      onEdit={onEdit}
      onDelete={onDelete}
      otherOperate = {<div>同步到电子发票</div>}
    />
  )

  const nutInvoiceTitleListButtons = container.querySelector('.nb-invoice-title-list__buttons') as HTMLElement
  
  expect(nutInvoiceTitleListButtons).toHaveTextContent('同步到电子发票')

  const nutInvoiceTitleListMain = container.querySelector('.nb-invoice-title-list__main') as HTMLElement
  fireEvent.click(nutInvoiceTitleListMain)
  expect(onClick).toBeCalled()

  const nutInvoiceTitleListButtonsEdit = container.querySelector('.nb-invoice-title-list__buttons-edit') as HTMLElement
  const nutIconEdit = container.querySelector('.nb-invoice-title-list .nut-icon-edit') as HTMLElement
  fireEvent.click(nutInvoiceTitleListButtonsEdit)
  fireEvent.click(nutIconEdit)
  expect(onEdit).toBeCalled()

  const nutInvoiceTitleListButtonsDelete = container.querySelector('.nb-invoice-title-list__buttons-delete') as HTMLElement
  fireEvent.click(nutInvoiceTitleListButtonsDelete)
  expect(onDelete).toBeCalled()
})