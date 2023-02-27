import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { HorizontalScrolling } from './horizontalscrolling'
import { Cell, ButtonProps } from '@nutui/nutui-react'
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
      title7: '事件演示',
      symbol: '￥',
      demo4: '共3件',
      more: '查看更多'
    },
    'en-US': {
      title1: 'Basic Usage',
      title2: 'Mask Position',
      title3: 'Overlay Shadow Style',
      title4: 'Overlay Translucent Shadow Style',
      title5: 'Custom Mask Content',
      title6: 'No Mask',
      title7: 'Event Demo',
      symbol: '$',
      demo4: 'Total 3 pieces',
      more: 'More'
    },
  })

  const iconProps: any = () => {
    return {
      name: "more-x",
      color: "#fa2c19",
      size: "26"
    }
  }

  const onChange = () => {
    console.log('change')
  }

  const onScroll = () => {
    console.log('scroll right')
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.title1}</h2>
        <Cell
          className="nut-cell-right-zero"
        >
          <HorizontalScrolling>
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
            iconProps={{
              name: "more-x",
              color: "#fa2c19",
              size: "26"
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
            maskContent={
              <div className="nut-biz-horizontalscrolling__mask-box buy-price">
                <div><i>{translated.symbol}</i>199</div>
                <div>{translated.more}</div>
              </div>}
            >
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
            maskContent={
              <div className="more-box">
                {translated.more}
              </div>
            }
          >
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
                >
                  <img
                    src="https://img13.360buyimg.com/imagetools/s140x140_jfs/t1/209493/27/20842/369749/6260d2eeE02eb253c/97386232ecf1c1ef.jpg"
                  />
                </div>
              )
            })}
          </HorizontalScrolling>
        </Cell>
        <h2>{translated.title7}</h2>
        <Cell
          className="nut-cell-right-zero"
        >
          <HorizontalScrolling 
            maskShadowType="shadow" 
            onClickMask={onChange}
            onScrollRight={onScroll}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div   
                  className="nut-biz-horizontalscrolling__contain-item"
                  key={item}
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
