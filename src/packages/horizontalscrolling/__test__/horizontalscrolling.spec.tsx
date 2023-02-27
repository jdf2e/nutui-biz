import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HorizontalScrolling } from '../horizontalscrolling'

test('HorizontalScrolling maskPosition', async () => {
  const { container } = render(
    <HorizontalScrolling
      maskPosition="left"
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  const mask = container.querySelectorAll('.nut-biz-horizontalscrolling__mask-left')
  expect(mask.length).toBe(1)
})

test('HorizontalScrolling maskShadowType', async () => {
  const { container } = render(
    <HorizontalScrolling
      maskShadowType="shadow"
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  const maskShadow = container.querySelectorAll('.nut-biz-horizontalscrolling__mask-right--shadow')
  expect(maskShadow.length).toBe(1)
  
})

test('HorizontalScrolling maskWidth', async () => {
  const { container } = render(
    <HorizontalScrolling
      maskWidth="50px"
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  
  expect(
    container
      .querySelector('.nut-biz-horizontalscrolling__mask-right')
      ?.getAttribute('style')
  ).toBe('width: 50px;')
  
})

test('HorizontalScrolling maskDistance', async () => {
  const { container } = render(
    <HorizontalScrolling
      maskWidth="50px"
      maskDistance="10px"
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  expect(
    container
      .querySelector('.nut-biz-horizontalscrolling__contain')
      ?.getAttribute('style')
  ).toBe('padding-right: 10px;')
  
})

test('HorizontalScrolling iconProps', async () => {
  const { container } = render(
    <HorizontalScrolling
      iconProps={{
        name: "more-x",
        color: "#fa2c19",
        size: "26"
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  expect(
    container.querySelector('.nut-biz-horizontalscrolling__mask-box i')
  ).toHaveClass('nut-icon-more-x')
  
})

test('HorizontalScrolling maskContent', async () => {
  const { container } = render(
    <HorizontalScrolling
      maskContent={
      <div className="nut-biz-horizontalscrolling__mask-box buy-price">
        <div><i>￥</i>199</div>
        <div>共3件</div>
      </div>}
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )

  const maskContent = container.querySelectorAll('.buy-price')
  
  expect(maskContent.length).toBe(1)
})

test('click test', () => {
  const onChange = jest.fn()
  const { container } = render(
    <HorizontalScrolling 
      maskShadowType="shadow" 
      maskPosition="left" 
      maskWidth="40px" 
      className="custom-float"
      onClickMask={onChange}
    >
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div   
            className="nut-biz-horizontalscrolling__contain-item"
            key={index}
          >
            <img
              src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
            />
          </div>
        )
      })}
    </HorizontalScrolling>
  )
  const nutHorizontalScrolling = container.querySelector('.nut-biz-horizontalscrolling__mask-box') as HTMLElement

  nutHorizontalScrolling && fireEvent.click(nutHorizontalScrolling)

  expect(onChange).toBeCalled()
})
