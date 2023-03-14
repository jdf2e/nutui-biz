import React, {
  FunctionComponent,
  ReactNode,
  useRef
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { IComponent } from '@/utils/typings'
import { Icon, IconProps } from '@nutui/nutui-react';
import classNames from 'classnames'
import bem from '@/utils/bem'
import Unit from '@/utils/unit'
import {numericProp} from '@/utils/props'


export type MaskPositionType = "left" | "right";
export type MaskShadowTypeType = "triangle" | "shadow" | "transparent" | "none";

export interface HorizontalScrollingProps extends IComponent {
  // 是否需要遮罩层
  showMask: boolean
  // 遮罩层位置
  maskPosition: MaskPositionType
  maskShadowType: MaskShadowTypeType
  maskWidth: numericProp
  maskDistance: numericProp
  maskContent: ReactNode
  iconProps: Partial<IconProps>
  onClickMask: () => void
  onScrollRight: () => void
  onScrollChange: (val: number) => void
}

const defaultProps = {
  showMask: true,
  maskPosition: "right",
  maskShadowType: "triangle",
  maskWidth: '100px',
  maskDistance: 0,
  maskContent: '',
  onClickMask: () => { },
  onScrollRight: () => { },
  onScrollChange: (val: number) => { },
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
    maskContent,
    onClickMask,
    onScrollRight,
    onScrollChange,
    iconProps,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('horizontalscrolling')

  const scrollRef = useRef(null)

  const containStyles = (() => {
    return {
      [`padding${maskPosition[0].toUpperCase() + maskPosition.substr(1)}`]: Unit.pxAdd(maskDistance) ? Unit.pxAdd(maskDistance) : Unit.pxAdd(maskWidth)
    }
  })

  const handleMaskClick = ()=>{
    onClickMask()
  }

  const onScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      onScrollChange(scrollLeft)
      if (scrollLeft + clientWidth >= scrollWidth) {
        onScrollRight();
      }
    }
  };

  const maskRender = () => {
    return (
      <div className={classNames([b(`mask-${maskPosition}`), b(`mask-${maskPosition}--${maskShadowType}`)])} style={{width: maskWidth}} onClick={handleMaskClick}>
        {typeof maskContent !== 'string' ? maskContent : 
        <div className={b('mask-box')}>
          <Icon name="category" {...iconProps} className={b('mask-icon')}></Icon>
          <span>{maskContent ? maskContent : locale.horizontalscrolling.more}</span>
        </div>}
      </div>
    )
  }

  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
      {maskPosition == 'left' && showMask && 
        maskRender()
      }
      <div 
        className={b('contain')} 
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
