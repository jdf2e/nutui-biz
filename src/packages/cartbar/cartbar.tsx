import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  ReactNode
} from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'
import {getRect} from '@/utils/useClientRect'

import { IComponent } from '@/utils/typings'

export interface CartBarProps extends IComponent {
  hasCapsuleButtons: boolean
  safeAreaInsetBottom: boolean
  placeholder: boolean
  top: ReactNode
}

const defaultProps = {
  safeAreaInsetBottom: true,
  placeholder: false,
  hasCapsuleButtons: false
} as CartBarProps

export const CartBar: FunctionComponent<
  Partial<CartBarProps>
> = (props) => {
  const root = useRef(null)
  const {
    children,
    className,
    style,
    safeAreaInsetBottom,
    placeholder,
    top,
    hasCapsuleButtons,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('cart-bar')

  const [height,setHeight] = useState(0)

  useEffect(() => {
    if(root.current) {
      setHeight(getRect(root.current).height)
    }
  }, [height])

  const renderActionBar = () => {
    return <div ref={root} className={classNames([b(),className,{'nut-biz-safe-area-bottom':safeAreaInsetBottom}])} style={style} {...rest}>
      {top}
      <div className={classNames([b('inner'),{'has-capsule-buttons':hasCapsuleButtons}])}>
        {children}
      </div>
    </div>
  }

  const renderActionBarWithPlaceholder = () => {
    return <div style={{height}} className={`${b('')}--placeholder`}>
      {renderActionBar()}
    </div>
  }

  return (
    placeholder ? renderActionBarWithPlaceholder() : renderActionBar()
  )
}

CartBar.defaultProps = defaultProps
CartBar.displayName = 'NutCartBar'
