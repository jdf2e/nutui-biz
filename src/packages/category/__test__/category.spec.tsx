import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Category } from '../category'
import { categoryInfo } from '../data'

const intersectionObserverMock = () => ({
  observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

test('Show Category',() => {
  const { container } = render(
    <Category category={categoryInfo} />
  )

  const listItem = container.querySelectorAll('.nut-biz-category__cate-list-item')
  expect(listItem.length).toBe(16)

  const panel = container.querySelectorAll('.nut-category-pane__child-anchor')
  expect(panel.length).toBe(7)
})


test('Image hide',() => {
  const { container } = render(
    <Category category={categoryInfo}  showSkuImg={false} />
  )

  const panel = container.querySelectorAll('.nut-category-pane__child-anchor')
  expect(panel.length).toBe(7)

  const imgItem = container.querySelectorAll('.nut-category-pane__child-img')
  expect(imgItem.length).toBe(0)
})


test('Show quick nav',() => {
  const { container } = render(
    <Category category={categoryInfo}  showSecondLevelQuickNav={true}/>
  )

  const panel = container.querySelector('.nut-category-pane__quick-box')
  expect(panel).toBeInTheDocument()

})

