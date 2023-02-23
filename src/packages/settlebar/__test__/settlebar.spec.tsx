import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SettleBar } from '../settlebar'

test('test base', async () => {
  const { container } = render(
    <SettleBar />
  )
  const settleBar = container.querySelector('.nb-settle-bar')
  
  expect(settleBar).toHaveClass('nut-biz-safe-area-bottom')
})

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
  const settleBarMainData = container.querySelector('.nb-settle-bar__main')
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

test('test customTotal', async () => {
  const { container } = render(
    <SettleBar customTotal={<div>自定义合计</div>} />
  )
  const settleBarMainData = container.querySelector('.total')
  expect(settleBarMainData).toHaveTextContent('自定义合计')
})

test('test placeholder', async () => {
  const { container } = render(
    <SettleBar placeholder />
  )

  expect(container.querySelector('.nut-settle-bar--placeholder')?.innerHTML).toMatchSnapshot()
})

test('test customWarning', async () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }

  const { container } = render(
    <SettleBar customWarning={customWarningHtml()} />
  )
  const settleBarWarning = container.querySelector('.nb-settle-bar__warning')
  expect(settleBarWarning).toBeInTheDocument()
})