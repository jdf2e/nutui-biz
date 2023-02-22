import React, {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  useRef
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { IComponent } from '@/utils/typings'
import { Icon } from '@nutui/nutui-react';
import classNames from 'classnames'
import bem from '@/utils/bem'

export type MaskPositionType = "left" | "right";
export type MaskShadowTypeType = "triangle" | "shadow" | "transparent" | "none";

export interface HorizontalScrollingProps extends IComponent {
  className: string
  // 样式
  style: CSSProperties
  // 是否需要遮罩层
  showMask: boolean
  // 遮罩层位置
  maskPosition: MaskPositionType
  maskShadowType: MaskShadowTypeType
  maskWidth: number | string
  maskDistance: number | string
  showScrollBar: boolean
  maskIcon: string
  maskContent: string | ReactNode
  onClickMask: () => void,
  onScrollRight: () => void
}

const defaultProps = {
  showMask: true,
  maskPosition: "right",
  maskShadowType: "triangle",
  maskWidth: 100,
  maskDistance: 0,
  showScrollBar: false,
  maskIcon: "category",
  maskContent: '',
  onClickMask: () => { },
  onScrollRight: () => { },
} as HorizontalScrollingProps

export const HorizontalScrolling: FunctionComponent<
  Partial<HorizontalScrollingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
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
    maskContent,
    onClickMask,
    onScrollRight,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-horizontalscrolling')

  const scrollRef = useRef(null)

  const pxAdd = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const containStyles = (() => {
    if(maskPosition == 'right'){
      return {
        paddingRight: pxAdd(maskDistance) ? pxAdd(maskDistance) : pxAdd(maskWidth)
      }
    } else {
      return {
        paddingLeft: pxAdd(maskDistance) ? pxAdd(maskDistance) : pxAdd(maskWidth)
      }
    }
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
        {typeof maskContent !== 'string' ? maskContent : 
        <div className={b('mask-box')}>
          <Icon name={maskIcon} color="#fa2c19" size="26"></Icon>
          <span>{maskContent ? maskContent : locale.horizontalscrolling.more}</span>
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
