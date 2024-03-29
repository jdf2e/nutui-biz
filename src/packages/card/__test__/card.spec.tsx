import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Card } from '../card'

test('props test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
    />
  )
  const priceDoms = container.querySelectorAll('.nut-price__big')
  const tagDoms = container.querySelectorAll('.nut-tag')
  const nutPrice = container.querySelector('.nut-price') as HTMLElement
  expect(nutPrice).toBeTruthy()
  expect(
    container.querySelector('.nut-card__left img')?.getAttribute('src')
  ).toBe(state.imgUrl)
  expect(container.querySelector('.nut-card__right__title')).toContainHTML(
    state.title
  )
  expect(priceDoms[0].innerHTML).toBe(state.price)
  expect(container.querySelector('.nut-card__right__shop__name')).toContainHTML(
    state.shopName
  )
  expect(container).toMatchSnapshot()
})

test('prolistTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      prolistTpl={
        <div className="search_prolist_attr">
          {['鲜活', '礼盒', '国产'].map((item) => {
            return (
              <span className="word" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      }
    />
  )
  expect(container.querySelector('.search_prolist_attr')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('priceAfterTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const plusIconUrl =
    'https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png'

  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      priceAfterTpl={<img src={plusIconUrl} alt="" />}
    />
  )
  expect(
    container.querySelector('.nut-card__right__price img')?.getAttribute('src')
  ).toBe(plusIconUrl)
  expect(container).toMatchSnapshot()
})

test('shopTagTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      productTagsTpl={<div>这里是自定义区域</div>}
    />
  )
  expect(container.querySelector('.nut-card__right__other')?.innerHTML).toBe(
    '<div>这里是自定义区域</div>'
  )
  expect(container).toMatchSnapshot()
})

test('bottomTpl slot test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }

  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      bottomTpl={<div style={{ fontSize: '12px' }}>自定义</div>}
    />
  )
  expect(
    container
      .querySelector('.nut-biz-card__main + div')
      ?.getAttribute('style')
  ).toBe('font-size: 12px;')
  expect(container).toMatchSnapshot()
})

test('showType test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      showType="half-line"
    />
  )
  const priceDoms = container.querySelectorAll('.half-line')
  expect(priceDoms.length).toBe(1)
})

test('titleLine test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      showType="half-line"
      titleLine={1}
    />
  )
  const priceDoms = container.querySelector('.half-line-title')
  expect(priceDoms).toHaveClass('one-line')
})

test('imgTag and imgTagDirection test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      imgTag={<img src="" />}
      imgTagDirection="top-right"
    />
  )
  const priceDoms = container.querySelector('.img-tag') as HTMLElement
  expect(priceDoms).toBeTruthy()
  expect(priceDoms).toHaveClass('top-right')
})

test('titleTag test', () => {
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      titleTag={<div>标题标签</div>}
    />
  )
  const titleTag = container.querySelector('.nut-biz-card__right__title')
  expect(titleTag).toHaveTextContent('标题标签')
})

test('click test', () => {
  const onClick1 = jest.fn()
  const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    marketingType: '自营',
    delivery: ['厂商配送'],
    shopName: '阳澄湖大闸蟹自营店>',
  }
  const { container } = render(
    <Card
      imageProps={{src: state.imgUrl}}
      title={state.title}
      price={state.price}
      shopName={state.shopName}
      onClick={onClick1}
    />
  )
  const nutBizCard = container.querySelector('.nut-biz-card') as HTMLElement
  fireEvent.click(nutBizCard)
  expect(onClick1).toBeCalled()
})