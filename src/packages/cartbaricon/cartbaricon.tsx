import React, {
  FunctionComponent,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import bem from '@/utils/bem'
import {Icon, Badge} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface CartBarIconProps extends IComponent {
  icon: ReactNode
  badge: number | string
  color: string
  text: ReactNode
  dot: boolean
  onClick: () => void
}

const defaultProps = {
  dot: false,
  onClick: () => {}
} as CartBarIconProps

export const CartBarIcon: FunctionComponent<
  Partial<CartBarIconProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    icon,
    color,
    dot,
    badge,
    text,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('cart-bar-icon')

  const renderIcon = () => {
    return typeof icon === 'string' ? <Icon name={icon} color={color} /> : icon
  }

  const renderText = () => {
    return typeof text === 'string' ? <span className='txt'>{text}</span> : text
  }

  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <div className={classNames(b(),className)} style={style} {...rest} onClick={handleClick}>
      <Badge value={badge} dot={dot}>
        {renderIcon()}
      </Badge>
      {renderText()}
    </div>
  )
}

CartBarIcon.defaultProps = defaultProps
CartBarIcon.displayName = 'NutCartBarIcon'
