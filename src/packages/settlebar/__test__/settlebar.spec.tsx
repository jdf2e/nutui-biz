import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SettleBar } from '../settlebar'

test('test totalAlign', async () => {
  const { container } = render(
    <SettleBar totalAlign="left" />
  )
  const total = container.querySelector('.total')
  
  expect(total).toHaveAttribute('style', 'align-items: flex-start;')
})

test('test disable', async () => {
  const { container } = render(
    <SettleBar disabled />
  )
  const total = container.querySelector('.buy')
  expect(total).toHaveClass('disabled')
})

test('test loading', async () => {
  const { container } = render(
    <SettleBar loading />
  )
  const total = container.querySelector('.buy')
  const loadingIcon = container.querySelector('.nut-icon-loading') as HTMLElement
  expect(total).toHaveClass('disabled')
  expect(loadingIcon).toBeTruthy()
})

test('test totalText and settleButtonText', async () => {
  const { container } = render(
    <SettleBar totalText="总计" settleButtonText="jiesuan" />
  )
  const settleBarMainData = container.querySelector('.nut-settle-bar-main')
  expect(settleBarMainData).toHaveTextContent('总计')
  expect(settleBarMainData).toHaveTextContent('jiesuan')
})

test('test settleCount and settleUnit', async () => {
  const { container } = render(
    <SettleBar settleCount="100" settleUnit="个" />
  )
  const settleBarMainData = container.querySelector('.num')
  expect(settleBarMainData).toHaveTextContent('100个')
})

test('test isEdit and onDelete', async () => {
  const onDelete = jest.fn()
  const { container } = render(
    <SettleBar isEdit onDelete ={onDelete} />
  )
  const settleBarMainData = container.querySelector('.nut-settle-bar-main')
  const btn = container.querySelector('.btn') as HTMLElement
  expect(settleBarMainData).toHaveTextContent('删除')
  expect(settleBarMainData).not.toHaveTextContent('去结算')
  fireEvent.click(btn)
  expect(onDelete).toBeCalled()
})

test('test customTotal', async () => {
  const { container } = render(
    <SettleBar customTotal={<div>自定义合计</div>} />
  )
  const settleBarMainData = container.querySelector('.total')
  expect(settleBarMainData).toHaveTextContent('自定义合计')
})

test('test customTotal', async () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }

  const { container } = render(
    <SettleBar customWarning={customWarningHtml()} />
  )
  const settleBarWarning = container.querySelector('.nut-settle-bar-warning')
  expect(settleBarWarning).toBeInTheDocument()
})