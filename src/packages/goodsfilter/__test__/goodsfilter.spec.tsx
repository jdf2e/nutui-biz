import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GoodsFilter } from '../goodsfilter'
import data from '../data'

const state = data
test('Show GoodsFilter', async () => {
  const { asFragment } = render(
    <GoodsFilter
      visible={true}
      priceRanges={state.priceRanges}
      goodsAttrs={state.goodsAttrs}
      filterAttrs={state.filterAttrs}
      maxLine={3}
      icon={'heart'}
      onReset={() => { console.log('onReset') }}
      onConfirm={(res) => { console.log('onConfirm', res) }}
      onClickAddress={() => {
        console.log('onClickAddress')
      }}
      onSelectedAttrs={(attr: any, selected: boolean, selectedAttrs: any) => {
        console.log('onSelectedAttrs', attr)
        console.log('selected', selected)
        console.log('selectedAttrs', selectedAttrs)
      }}
      onSelectedPrice={(range: any) => {
        console.log('onSelectedPrice', range)
      }}
    ></GoodsFilter>
  )
  expect(asFragment()).toMatchSnapshot();
})

test('Custome icon', async () => {
  const { container } = render(
    <GoodsFilter
      visible={true}
      priceRanges={state.priceRanges}
      goodsAttrs={state.goodsAttrs}
      filterAttrs={state.filterAttrs}
      icon={'heart'}
    ></GoodsFilter>
  )
  const icon = container.querySelector('i.nut-icon-heart')
  expect(icon).toBeTruthy;
})

test('Click test', async () => {
  const onReset = jest.fn()
  const onClickAddress = jest.fn()
  const onConfirm = jest.fn()
  const onSelectedAttrs = jest.fn()
  const onSelectedPrice = jest.fn()
  const { container } = render(
    <GoodsFilter
      visible={true}
      priceRanges={state.priceRanges}
      goodsAttrs={state.goodsAttrs}
      filterAttrs={state.filterAttrs}
      onReset={onReset}
      onConfirm={onConfirm}
      onClickAddress={onClickAddress}
      onSelectedAttrs={onSelectedAttrs}
      onSelectedPrice={onSelectedPrice}
    ></GoodsFilter>
  )
  const address = container.querySelector('.nut-goods-filter__chunk__group__address')
  fireEvent.click(address as Element)
  expect(onClickAddress).toBeCalled

  const resetBtn = container.querySelector('.nut-goods-filter__operate__btn--reset')
  fireEvent.click(resetBtn as Element)
  expect(onReset).toBeCalled

  // click the first filter
  const filter = container.querySelector('.nut-goods-filter__chunk__type div')
  fireEvent.click(filter as Element)
  expect(onSelectedAttrs).toBeCalledWith({
    id: 0,
    name: "仅看有货"
  }, true, [{
    id: 0,
    name: "仅看有货"
  }])
  const activeFilter = container.querySelector('.nut-goods-filter__chunk__type .active')
  expect(activeFilter).toEqual(filter)

  // expand
  const length = container.querySelectorAll('.nut-goods-filter__chunk__groups--item').length
  expect(length).toEqual(20)
  const expand = container.querySelector('.nut-icon-arrow-up')
  fireEvent.click(expand as Element)
  const expandedLength = container.querySelectorAll('.nut-goods-filter__chunk__groups--item').length
  expect(expandedLength).toEqual(43)

  const goodsAttr = container.querySelector('.nut-goods-filter__chunk__groups--item')
  fireEvent.click(goodsAttr as Element)

  const priceRange = container.querySelector('.nut-goods-filter__chunk__price--recommend__item')
  fireEvent.click(priceRange as Element)

  const confirmBtn = container.querySelector('.nut-goods-filter__operate__btn--confirm')
  fireEvent.click(confirmBtn as Element)
  expect(onConfirm).toBeCalledWith({
    address: "",
    filterAttrs: [
      {
        id: 0,
        name: '仅看有货'
      }
    ],
    goodsAttrs: [
      {
        id: 1,
        values: ['12690'],
        isExpand: true
      }
    ],
    price: {
      high: "132",
      low: "53",
    },
  })

  // input number
  const input = container.querySelector('.input-num')
  fireEvent.input(input as Element, {
    target: {
      value: ""
    }
  })
  fireEvent.input(input as Element, {
    target: {
      value: "3"
    }
  })

  // cancel
  fireEvent.click(filter as Element)
  fireEvent.click(goodsAttr as Element)
  fireEvent.click(confirmBtn as Element)
  expect(onConfirm).toBeCalledWith({
    address: "",
    filterAttrs: [],
    goodsAttrs: [
      {
        id: 1,
        values: [],
        isExpand: true
      }
    ],
    price: {
      high: "132",
      low: "3",
    },
  })
})
