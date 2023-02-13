import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Category } from '../category'
import { categoryInfo } from '../data'
import { sleep } from '@/utils/test/event'

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

test('Scroll quick nav',() => {
  const { container } = render(
    <Category category={categoryInfo}  showSecondLevelQuickNav={true}/>
  )

  const bodyEl = document.querySelectorAll(`.nut-category-pane__cate-list-right`)[0]
  const elements = document.querySelectorAll(`.nut-category-pane__child-anchor`)

  Object.defineProperty(bodyEl, 'scrollTop', {
    value: 400,
  })

  elements.forEach((panel, i) =>
    Object.defineProperties(panel, {
      clientHeight: {
        value: 260,
      },
      offsetTop: {
        value: i * 260,
      },
    })
  )

  fireEvent.scroll(bodyEl)

  const quickAction = document.querySelector('.nut-category-pane__quick-child-active')

  expect(quickAction).toHaveTextContent('休闲食品')
})


test('Image lazy',async () => {
  const { container } = render(
    <Category category={categoryInfo}  showSecondLevelQuickNav={true}/>
  )
  const loading = container.querySelector('.nut-img-loading')

  expect(loading).toBeInTheDocument()

})

