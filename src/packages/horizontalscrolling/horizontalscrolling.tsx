import React, {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  useRef
} from 'react'

import { IComponent } from '@/utils/typings'
import { Icon } from '@nutui/nutui-react';

import classNames from 'classnames'
import bem from '@/utils/bem'
export interface HorizontalScrollingProps extends IComponent {
  className: string
  style: CSSProperties
  // 是否需要遮罩层
  showMask: boolean
  // 遮罩层位置
  maskPosition: string,
  maskShadowType: string
  maskWidth: string
  maskDistance: string
  showScrollBar: boolean
  maskIcon: string
  maskHpl: ReactNode
  onClickMask: () => void,
  onScrollRight: () => void
}

const defaultProps = {
  showMask: true,
  maskPosition: "right",
  maskShadowType: "triangle",
  maskWidth: "100px",
  maskDistance: "0px",
  showScrollBar: false,
  maskIcon: "category"
} as HorizontalScrollingProps

export const HorizontalScrolling: FunctionComponent<
  Partial<HorizontalScrollingProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const {
    className,
    style,
    children,
    showMask,
    maskPosition,
    maskShadowType,
    maskWidth,
    maskDistance,
    showScrollBar,
    maskIcon,
    maskHpl,
    onClickMask,
    onScrollRight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-horizontalscrolling')

  const scrollRef = useRef(null)

  const containStyles = (() => {
    if(maskShadowType == 'transparent'){
      if(maskPosition == 'right'){
        return {
          paddingRight: maskDistance ? maskDistance : maskWidth
        }
      } else {
        return {
          paddingLeft: maskDistance ? maskDistance : maskWidth
        }
      }
    }
    return {}
  })

  const handleMaskClick = ()=>{
    onClickMask && onClickMask()
  }

  const onScroll = () => {
    
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        onScrollRight && onScrollRight();
      }
    }
  };

  const maskRender = () => {
    return (
      <div className={`${b('mask-')}${maskPosition} ${b('mask-')}${maskPosition}--${maskShadowType}`} style={{width: maskWidth}} onClick={handleMaskClick}>
        {maskHpl ? maskHpl : 
        <div className={b('mask-box')}>
          <Icon name={maskIcon} color="#fa2c19" size="26"></Icon>
          <span>查看更多</span>
        </div>}
      </div>
    )
  }

  return (
    <div className={classNames([b(), className])} style={{ ...style }} {...rest}>
      {maskPosition == 'left' && showMask && 
        maskRender()
      }
      <div 
        className={`${b('contain')} ${showScrollBar ? '' : b('contain-bar-hidden')}`} 
        ref={scrollRef}
        style={containStyles()}
        onScroll={onScroll}
      >
        {children}
      </div>
      {maskPosition == 'right' && showMask && 
        maskRender()
      }
    </div>
  )
}

HorizontalScrolling.defaultProps = defaultProps
HorizontalScrolling.displayName = 'NutHorizontalScrolling'
