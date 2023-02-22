import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CartBar } from '../cartbar'
import { CartBarIcon } from '../../cartbaricon/cartbaricon'
import { CartBarButton } from '../../cartbarbutton/cartbarbutton'

test('test base', async () => {
  const { container } = render(
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车" buttonProps={{type: "danger"}} />
      <CartBarButton text="立即购买" buttonProps={{type: "warning"}} />
    </CartBar>
  )
  const cartBar = container.querySelector('.nb-cart-bar')
  expect(cartBar).toHaveClass('nut-biz-safe-area-bottom')
  expect(cartBar).toBeTruthy()
  const cartBarIcons = container.querySelectorAll('.nb-cart-bar-icon')
  const cartBarButtons = container.querySelectorAll('.nb-cart-bar-button')
  expect(cartBarIcons.length).toBe(2)
  expect(cartBarButtons.length).toBe(2)
})

test('test icon badge and dot', async () => {
  const { container } = render(
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" badge="10" />
      <CartBarIcon text="购物车" icon="cart" dot />
    </CartBar>
  )

  const cartBarIcons = container.querySelectorAll('.nb-cart-bar-icon')
  
  expect(cartBarIcons[0].querySelector('.nut-badge__content')?.innerHTML).toBe('10')
  expect(cartBarIcons[1].querySelector('.nut-badge__content')).toHaveClass('is-dot')
})

test('test icon color', async () => {
  const { container } = render(
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" color='red' />
    </CartBar>
  )

  const iconfont = container.querySelector('.nb-cart-bar-icon .nutui-iconfont')
  
  expect(iconfont).toHaveAttribute('style', 'color: red;')
})

test('test no text icon', async () => {
  const { container } = render(
    <CartBar>
      <CartBarIcon icon="shop" />
    </CartBar>
  )

  const txt = container.querySelector('.txt')
  expect(txt).not.toBeTruthy()
})

test('test hasCapsuleButtons', async () => {
  const { container } = render(
    <CartBar hasCapsuleButtons>
      <CartBarButton text="加入购物车"  buttonProps={{type: "danger"}} />
      <CartBarButton text="立即购买"  buttonProps={{type: "warning"}} />
    </CartBar>
  )

  const cartBarInner = container.querySelector('.nb-cart-bar__inner')
  expect(cartBarInner).toHaveClass('has-capsule-buttons')
})

test('test hasCapsuleButtons', async () => {
  const { container } = render(
    <CartBar top={<div>我是自定义内容！</div>}>
      <CartBarIcon text="店铺" icon="shop" />
      <CartBarIcon text="购物车" icon="cart" />
      <CartBarButton text="加入购物车"  buttonProps={{type: "danger"}} />
      <CartBarButton text="立即购买"  buttonProps={{type: "warning"}} />
    </CartBar>
  )

  const cartBar = container.querySelector('.nb-cart-bar')
  expect(cartBar).toHaveTextContent('我是自定义内容！')
})

test('test placeholder', async () => {
  const { container } = render(
    <CartBar placeholder>
      <CartBarIcon text="店铺" icon="shop" />
    </CartBar>
  )

  expect(container.querySelector('.nut-cart-bar--placeholder')?.innerHTML).toMatchSnapshot()
})

test('test click', async () => {
  const onClick1 = jest.fn()
  const onClick2 = jest.fn()
  const { container } = render(
    <CartBar>
      <CartBarIcon text="店铺" icon="shop" onClick={onClick1} />
      <CartBarButton text="加入购物车"  buttonProps={{type: "danger"}} onClick={onClick2} />
    </CartBar>
  )

  const cartBarIcon = container.querySelector('.nb-cart-bar-icon') as HTMLElement
  const cartBarButton = container.querySelector('.nb-cart-bar-button') as HTMLElement
  fireEvent.click(cartBarIcon)
  fireEvent.click(cartBarButton)
  expect(onClick1).toBeCalled()
  expect(onClick2).toBeCalled()
})