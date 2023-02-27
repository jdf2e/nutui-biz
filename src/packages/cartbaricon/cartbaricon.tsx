import React, {
  FunctionComponent,
  ReactNode
} from 'react'
import classNames from 'classnames';
import {cn2} from '@/utils/bem'
import {Icon, Badge, IconProps, BadgeProps} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface CartBarIconProps extends IComponent {
  text: ReactNode
  iconProps: Partial<Omit<IconProps, "className">>
  badgeProps: Partial<BadgeProps>
  onClick: () => void
}

const defaultProps = {
  onClick: () => {}
} as CartBarIconProps

export const CartBarIcon: FunctionComponent<
  Partial<CartBarIconProps>
> = (props) => {
  const {
    className,
    style,
    text,
    iconProps,
    badgeProps,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = cn2('cart-bar-icon')

  const renderIcon = () => {
    return <Icon className={b('icon')} {...iconProps} />
  }

  const renderText = () => {
    return typeof text === 'string' ? <span className='txt'>{text}</span> : text
  }

  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <div className={classNames(b(),className)} style={style} {...rest} onClick={handleClick}>
      <Badge {...badgeProps}>
        {renderIcon()}
      </Badge>
      {renderText()}
    </div>
  )
}

CartBarIcon.defaultProps = defaultProps
CartBarIcon.displayName = 'NutCartBarIcon'
