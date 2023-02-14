import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HorizontalScrolling } from '../horizontalscrolling'



// test('HorizontalScrolling maskPosition', async () => {
//   const { container } = render(
//     <HorizontalScrolling
//     maskPosition="left"
//     >
//       {[1, 2, 3, 4, 5, 6].map((item, index) => {
//         return (
//           <div   
//             className="nut-biz-horizontalscrolling__contain-item"
//             key={index}
//           >
//             <img
//               src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
//             />
//           </div>
//         )
//       })}
//     </HorizontalScrolling>
//   )
//   const regionItem = container.querySelectorAll('.nut-biz-horizontalscrolling__mask-left')
//   expect(regionItem.length).toBe(1)
// })

// test('choose address item', async () => {
//   const changeHandle = jest.fn()
//   const { container } = render(
//     <HorizontalScrolling
//       modelValue
//       province={addressData.province}
//       city={addressData.city}
//       country={addressData.country}
//       town={addressData.town}
//       customAddressTitle="请选择所在地区"
//       onChange={changeHandle}
//     />
//   )
//   const regionItem = container.querySelectorAll('.nut-address__region-item')[0]
//     .firstElementChild
//   regionItem && fireEvent.click(regionItem)

//   await waitFor(() => {
//     const regionItemNext = container.querySelectorAll(
//       '.nut-address__tab-item '
//     )[0]
//     expect(changeHandle.mock.calls[0][0].next).toEqual('city')
//     expect(regionItemNext.textContent).toEqual('北京')
//   })
// })

// test('default choose address', async () => {
//   const changeHandle = jest.fn()
//   const { container } = render(
//     <HorizontalScrolling
//       modelValue
//       modelSelect={[1, 7, 3]}
//       province={addressData.province}
//       city={addressData.city}
//       country={addressData.country}
//       town={addressData.town}
//       customAddressTitle="请选择所在地区"
//     />
//   )
//   const regionItem = container.querySelectorAll('.nut-address__region-tab')[0]
//   const contentItem = container.querySelectorAll('.nut-address__region-item')[0]
//   await waitFor(() => {
//     expect(regionItem.textContent).toEqual('北京朝阳区请选择')
//     expect(contentItem.querySelector('.nutui-iconfont')).toBeEmptyDOMElement()
//   })
// })

// test('exist address', async () => {
//   const { container } = render(
//     <HorizontalScrolling
//       modelValue
//       type="exist"
//       existAddress={existAddress}
//       isShowCustomAddress={false}
//       customAddressTitle="请选择所在地区"
//     />
//   )
//   const existItem = container.querySelectorAll('.nut-address__exist-item')

//   await waitFor(() => {
//     expect(existItem.length).toBe(3)
//   })
// })

// test('exist address choose event', async () => {
//   const selectHandle = jest.fn()
//   const { container } = render(
//     <HorizontalScrolling
//       modelValue
//       type="exist"
//       existAddress={existAddress}
//       customAddressTitle="请选择所在地区"
//       isShowCustomAddress={false}
//       onSelected={selectHandle}
//     />
//   )
//   const existSecondItem = container.querySelectorAll(
//     '.nut-address__exist-item'
//   )[1].firstElementChild
//   existSecondItem && fireEvent.click(existSecondItem)

//   await waitFor(() => {
//     expect(selectHandle.mock.calls[0][1].id).toBe(2)
//   })
// })

// test('exist address & list address', async () => {
//   const changeHandle = jest.fn()
//   const switchModule = jest.fn()
//   const { container } = render(
//     <HorizontalScrolling
//       modelValue
//       type="exist"
//       province={addressData.province}
//       city={addressData.city}
//       country={addressData.country}
//       town={addressData.town}
//       existAddress={existAddress}
//       customAddressTitle="请选择所在地区"
//       onSwitchModule={switchModule}
//       onChange={changeHandle}
//     />
//   )
//   const chooseBtn = container.querySelectorAll(
//     '.nut-address__choose-other-btn'
//   )[0]
//   chooseBtn && fireEvent.click(chooseBtn)

//   await waitFor(() => {
//     expect(switchModule).toBeCalled()
//   })

//   const regionItem = container.querySelectorAll('.nut-address__region-item')
//   expect(regionItem.length).toBe(5)
// })
