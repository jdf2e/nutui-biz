import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { trigger, triggerDrag } from '@/utils/test/event'

import { ProductFeed } from '../productfeed'
import { ProductFeedItem } from '../../productfeeditem/productfeeditem'

test('col test', () => {
  const { container } = render(
    <ProductFeed
    >
    </ProductFeed>
  )
})

// test('col、gutter test', () => {
//   const { container } = render(
//     <ProductFeed
//     >
//       <ProductFeedItem
//         col={2}
//         imgUrl='//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//       >
//         <div className="name-box">
//           <div className="label">自营</div>
//           我是标题我是标题我是标题我是标题
//         </div>
//       </ProductFeedItem>
//       <ProductFeedItem
//         col={2}
//         imgUrl='//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//       >
//         <div className="name-box">
//           <div className="label">自营</div>
//           我是标题我是标题我是标题我是标题
//         </div>
//       </ProductFeedItem>
//     </ProductFeed>
//   )

//   expect(container.querySelector('.nut-biz-productfeedItem')).toHaveStyle(
//     'width: calc((100% - 8px) / 2);'
//   )
// })

// test('image test', () => {
//   const { container } = render(
//     <ProductFeed
//     >
//       <ProductFeedItem
//         col={2}
//         imgUrl='https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//         imgWidth="160"
//         imgHeight="160"
//         imgTag={<div className='img-label'><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
//       >
//         <div className="name-box">
//           <div className="label">自营</div>
//           我是标题我是标题我是标题我是标题
//         </div>
//       </ProductFeedItem>
//     </ProductFeed>
//   )

//   expect(container.querySelector('.nut-img')).toHaveAttribute(
//     'src',
//     'https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//   )

//   expect(container.querySelector('.nut-image')).toHaveAttribute(
//     'style',
//     'height: 160px; width: 160px;'
//   )

//   const imgTag = container.querySelectorAll('.img-label')
//   expect(imgTag.length).toBe(1)
// })

// test('onRefresh test', () => {
//   const refresh = jest.fn()
//   const { container } = render(
//     <ProductFeed
//       loadMoreTxt="没有更多" 
//       onRefresh={refresh}
//     >
//       <ProductFeedItem
//         col={2}
//         imgUrl='https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//         imgWidth="160"
//         imgHeight="160"
//         imgTag={<div className='img-label'><img src="https://img12.360buyimg.com/imagetools/jfs/t1/186347/7/7338/1009/60c0806bE0b6c7207/97fd04b48d689ffe.png" /></div>}
//       >
//         <div className="name-box">
//           <div className="label">自营</div>
//           我是标题我是标题我是标题我是标题
//         </div>
//       </ProductFeedItem>
//     </ProductFeed>
//   )

//   const track = container.querySelector('.nut-infiniteloading')
//   // pulling
//   trigger(track, 'touchstart', 0, 0)
//   trigger(track, 'touchmove', 0, 20)
//   expect(container).toMatchSnapshot()

//   // loading
//   trigger(track, 'touchend', 0, 100)
//   expect(container).toMatchSnapshot()

//   // still loading
//   triggerDrag(track, 0, 100)
//   expect(refresh).toBeCalled()

// })

// test('infiniteloading test', () => {
//   const App = () => {
//     const [refreshList, setRefreshList] = React.useState<string[]>([])
//     const [refreshHasMore, setRefreshHasMore] = React.useState(true)

//     React.useEffect(() => {
//       init()
//     }, [])

//     const init = () => {
//       for (let i = 0; i < 6; i++) {
//         refreshList.push(`${i}`)
//       }
//       setRefreshList([...refreshList])
//     }

//     const refreshLoadMore = (done: () => void) => {
//       setTimeout(() => {
//         const curLen = refreshList.length
//         for (let i = curLen; i < curLen + 10; i++) {
//           refreshList.push(`${i}`)
//         }
//         if (refreshList.length >= 30) {
//           setRefreshHasMore(false)
//         } else {
//           setRefreshList([...refreshList])
//         }
//         done()
//       }, 500)
//     }
//     return (
//     <ProductFeed
//       loadMoreTxt="没有更多"
//       onLoadMore={refreshLoadMore}
//       hasMore={refreshHasMore}
//     >
//       {refreshList.map((item: any, index: number)=> {
//         return (
//           <ProductFeedItem
//             key={index}
//             col={2}
//             imgUrl='//img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
//             imgHeight="164"
//           >
//             <>
//               <div className="name-box">
//                 <div className="label">自营</div>
//                 我是标题我是标题我是标题我是标题
//               </div>
//             </>
//           </ProductFeedItem>
//         )
//       })}
//     </ProductFeed>
//     )
//   }
//   const { container } = render(<App />)
//   const track = container.querySelector('.nut-infiniteloading')
//   trigger(track, 'touchstart', 0, 0)
//   trigger(track, 'touchmove', 0, -100)
//   trigger(track, 'touchend', 0, -800)
//   triggerDrag(track, 0, -800)
//   expect(container).toMatchSnapshot()
// })
