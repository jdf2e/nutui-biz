import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { HorizontalScrolling } from './horizontalscrolling'
import { Cell } from '@nutui/nutui-react'
import './demo.scss'

interface T {
  [props: string]: string
}

const HorizontalScrollingDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '基本用法',
      title2: '遮罩层位置',
      title3: '遮罩层阴影样式',
      title4: '遮罩层半透明阴影样式',
      title5: '自定义遮罩内容',
      title6: '无遮罩',
      title7: '自定义图标',
    },
    'zh-TW': {
      title1: '基本用法',
      title2: '選擇地址',
      title3: '選擇自定義地址',
      title4: '選中省市區',
      title5: '選擇自定義地址2',
      title6: '選擇已有地址',
      title7: '自定義圖標',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Choose Address',
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      customAddress2: 'Choose Custom Address2',
      existAddress: 'Choose Exist Address',
      icon: 'Custom Icon',
    },
  })

  const onChange = () => {
    console.log('change')
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Cell
          className="nut-cell-right-zero"
        >
          <HorizontalScrolling>
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
        </Cell>
        <h2>{translated.title2}</h2>
        <Cell
          className="nut-cell-left-zero"
        >
          <HorizontalScrolling maskPosition="left">
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
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell
          className="nut-cell-left-zero"
        >
          <HorizontalScrolling
            maskPosition="left"
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
        </Cell>
        <h2>{translated.title4}</h2>
        <Cell
          className="nut-cell-right-zero"
        >
          <HorizontalScrolling        
            maskShadowType="transparent"  
            maskWidth="50px"
            maskDistance="10px"
            maskHpl={
            <div className="nut-biz-horizontalscrolling__mask-box buy-price">
              <div><i>￥</i>199</div>
              <div>共3件</div>
            </div>
          }
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
        </Cell>
        <h2>{translated.title5}</h2>
        <Cell
          className="nut-cell-left-zero"
        >
          <HorizontalScrolling 
            maskShadowType="shadow" 
            maskPosition="left" 
            maskWidth="40px" 
            className="custom-float"
            maskHpl={
              <div className="nut-biz-horizontalscrolling__mask-right-box">
                查看更多
              </div>
            }
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
        </Cell>
        <h2>{translated.title6}</h2>
        <Cell>
          <HorizontalScrolling 
            showMask={false} 
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
        </Cell>
      </div>
    </>
  )
}

export default HorizontalScrollingDemo
