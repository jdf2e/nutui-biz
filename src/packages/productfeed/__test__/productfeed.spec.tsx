import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { trigger, triggerDrag } from '@/utils/test/event'

import { ProductFeed } from '../productfeed'

const intersectionObserverMock = () => ({
  observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

test('col test', () => {
  const data = [{
    id: 1,
    imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
    name: "我是标题",
    desc: "更多买点",
    price: "388",
  }]
  const { container } = render(
    <ProductFeed
      data={data}
      col={2}
      imgUrl="imgUrl"
      openInfiniteloading={false}
    />
  )

  expect(container.querySelector('.nb-productfeed__left')).toHaveStyle(
    'width: 50%);'
  )
})

test('image test', () => {
  const data = [{
    id: 1,
    imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
    name: "我是标题",
    desc: "更多买点",
    price: "388",
  }]
  const { container } = render(
    <ProductFeed
      id="refreshScroll1"
      data={data}
      col={2}
      imgUrl="imgUrl"
      imgWidth="160"
      imgHeight="160"
      imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
      openInfiniteloading={false}
    />
  )

  expect(container.querySelector('.nut-img')).toHaveAttribute(
    'data-src',
    '//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
  )

  expect(container.querySelector('.nut-image')).toHaveAttribute(
    'style',
    'height: 160px; width: 160px;'
  )

  const imgTag = container.querySelectorAll('.img-label')
  expect(imgTag.length).toBe(1)
})

test('onRefresh test', () => {
  const data = [{
    id: 1,
    imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
    name: "我是标题",
    desc: "更多买点",
    price: "388",
  }, {
    id: 2,
    imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
    name: "我是标题",
    desc: "更多买点",
    price: "388",
  }]
  const refresh = jest.fn()
  const { container } = render(
    <ProductFeed
    id="refreshScroll2"
      data={data}
      col={2}
      imgUrl="imgUrl"
      imgWidth="160"
      imgHeight="160"
      imgTag={<div className="img-label"><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
      infiniteloadingProps={{
        isOpenRefresh: true,
        onRefresh: refresh
      }}
    />
  )

  const track = container.querySelector('.nut-infiniteloading')
  // pulling
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, 20)
  expect(container).toMatchSnapshot()

  // loading
  trigger(track, 'touchend', 0, 100)
  expect(container).toMatchSnapshot()

  // still loading
  triggerDrag(track, 0, 100)
  expect(refresh).toBeCalled()

})

test('infiniteloading test', () => {
  const App = () => {
    const [list, setList] = React.useState<any[]>([])
    const [hasMore, setHasMore] = React.useState(true)

    React.useEffect(() => {
      init()
    }, [])

    const init = () => {
      for (let i = 0; i < 6; i++) {
        list.push({
          id: i + 1,
          imgUrl: "//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png",
          name: "我是标题",
          desc: "更多买点",
          price: "388",
        })
      }
      setList([...list])
    }

    const loadMore = (done: () => void) => {
      setTimeout(() => {
        const curLen = list.length
        for (let i = curLen; i < curLen + 10; i++) {
          list.push(`${i}`)
        }
        if (list.length >= 30) {
          setHasMore(false)
        } else {
          setList([...list])
        }
        done()
      }, 500)
    }
    return (
      <ProductFeed
        className="demo3"
        data={list}
        infiniteloadingProps={{
          hasMore: hasMore,
          onLoadMore: loadMore,
        }}
        col={2}
        imgUrl="imgUrl"
      />
    )
  }
  const { container } = render(<App />)
  const track = container.querySelector('.nut-infiniteloading')
  trigger(track, 'touchstart', 0, 0)
  trigger(track, 'touchmove', 0, -100)
  trigger(track, 'touchend', 0, -800)
  triggerDrag(track, 0, -800)
  expect(container).toMatchSnapshot()
})
