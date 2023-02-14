import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Comment } from '../comment'
import data from '../data.json'

test('props & one imageRow test', () => {
  const state = data.Comment
  state.info.avatar = "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
  const onHandleClick = (info: any) => {
    console.log("进行跳转", info)
  }
  const onClickImages = (imgs: any) => {
    console.log("进行图片展示", imgs)
  }
  const { container } = render(
    <Comment
      images={state.images}
      videos={state.videos}
      info={state.info}
      onClick={onHandleClick}
      onClickImages={onClickImages}
      onClickOperate={(type: string) => {
        console.log(type);
      }}
      operation={["reply"]}
      commentLabels={
        <img
          className='item'
          style={{
            height: '20px'
          }}
          src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
        />
      }
    ></Comment>
  )
  // rate
  const nutRate = container.querySelector('.nut-rate') as HTMLElement
  expect(nutRate).toBeTruthy()
  // avatar
  expect(
    container.querySelector('.nut-comment-header__user-avter img')?.getAttribute('src')
  ).toBe(state.info.avatar)
  // nickName
  expect(container.querySelector('.nut-comment-header__user-default-name')).toContainHTML(
    state.info.nickName
  )
  // time
  expect(container.querySelector('.nut-comment-header__time')).toContainHTML(
    state.info.time
  )
  // videos
  expect(container.querySelectorAll('.nut-comment-images__item--video').length).toBe(state.videos.length)
  // images
  expect(container.querySelectorAll('.nut-comment-images__item--imgbox').length).toBe(state.images.length)
  // commentLabels
  expect(container.querySelector('.nut-comment-header__user-default img.item')).toHaveStyle({
    height: '20px'
  })
  // one
  const images = container.querySelector('.nut-comment-images--one') as HTMLElement
  expect(images).toBeTruthy()
  expect(container).toMatchSnapshot()
})

test('multi imagesRows test', () => {
  const state = data.Comment
  state.info.avatar = "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
  const onClickImages = jest.fn()
  const onClickOperate = jest.fn()
  const { container } = render(
    <Comment
      type="complex"
      imagesRows="multi"
      images={state.images}
      videos={state.videos}
      info={state.info}
      ellipsis="6"
      onClickOperate={onClickOperate}
      onClickImages={onClickImages}
      commentLabels={
        <img
          src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
          style={{ height: "12px" }}
        />
      }
      commentShopReply={
        <div className="nut-comment-shop">
          <span>京东美妆国际：</span>
          尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
        </div>
      }
    ></Comment>
  )
  // multi images
  const images = container.querySelector('.nut-comment-images--multi') as HTMLElement
  expect(images).toBeTruthy()
  // click video
  const video = container.querySelector('.nut-comment-images__item--video') as HTMLElement
  fireEvent.click(video)
  expect(onClickImages).toBeCalledWith({
    index: 0,
    type: 'video',
    value: state.videos[0]
  })
  // operations
  const operations = container.querySelectorAll('.nut-comment-bottom__cpx-item')
  expect(operations.length).toBe(3)
  // click operate reply
  const reply = container.querySelector('.nut-comment-bottom__cpx-item--reply') as HTMLElement
  fireEvent.click(reply)
  expect(onClickOperate).toBeCalledWith('reply')
  // click operate more
  const more = container.querySelector('.nut-comment-bottom__cpx-item--more') as HTMLElement
  fireEvent.click(more)
  expect(onClickOperate).toBeCalledWith('more')
  expect(container).toMatchSnapshot()
})

test('follow test', () => {
  const state = data.Comment
  state.info.avatar = "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
  const onClick = jest.fn()
  const { container } = render(
    <Comment
      type='complex'
      imagesRows="multi"
      images={state.images}
      videos={state.videos}
      info={state.info}
      follow={state.follow}
      onClick={onClick}
    ></Comment>
  )
  // follow
  const follow = container.querySelector('.nut-comment__follow') as HTMLElement
  expect(follow).toBeTruthy
  // click reply
  const replyMain = container.querySelector('.nut-comment__main') as HTMLElement
  fireEvent.click(replyMain)
  expect(onClick).toBeCalled()
})