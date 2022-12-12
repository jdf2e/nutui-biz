import React, {
  FunctionComponent,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import bem from '@/utils/bem'
import {Button} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface CartBarButtonProps extends IComponent {
  text: ReactNode
  disabled: boolean
  loading: boolean
  type: string
  color: string
  onClick: () => void
}

const defaultProps = {
  disabled: false,
  loading: false,
  onClick: () => {}
} as CartBarButtonProps

export const CartBarButton: FunctionComponent<
  Partial<CartBarButtonProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    text,
    type,
    disabled,
    loading,
    color,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('cart-bar-button')

  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <article className={classNames(b(),className)} style={style} {...rest} onClick={handleClick}>
      <Button 
        type={type as any} 
        disabled={disabled}
        loading={loading}
        color={color}
      >
        {text}
      </Button>
    </article>
  )
}

CartBarButton.defaultProps = defaultProps
CartBarButton.displayName = 'NutCartBarButton'
