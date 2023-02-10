import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AddressList } from '../addresslist'

test('test base', async () => {
  const { container } = render(
    <AddressList />
  )
})