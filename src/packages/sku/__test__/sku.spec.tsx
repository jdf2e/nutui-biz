import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Sku } from '../sku'

test('test base', async () => {
  const { container } = render(
    <Sku />
  )
  const settleBar = container.querySelector('.nut-settle-bar')
  
  expect(settleBar).toHaveClass('nut-biz-safe-area-bottom')
})