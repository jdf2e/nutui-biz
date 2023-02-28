import React, {
  FunctionComponent,
  ReactNode
} from 'react'
import classNames from 'classnames';
import {cn2} from '@/utils/bem'
import {Button, ButtonProps} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface CartBarButtonProps extends IComponent {
  text: ReactNode
  buttonProps: Partial<ButtonProps>
  onClick: () => void
}

const defaultProps = {
  onClick: () => {}
} as CartBarButtonProps

export const CartBarButton: FunctionComponent<
  Partial<CartBarButtonProps>
> = (props) => {
  const {
    className,
    style,
    text,
    onClick,
    buttonProps,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = cn2('cart-bar-button')

  const handleClick = () => {
    onClick()
  }

  return (
    <p className={classNames(b(),className)} style={style} {...rest} onClick={handleClick}>
      <Button 
        {...buttonProps}
      >
        {text}
      </Button>
    </p>
  )
}

CartBarButton.defaultProps = defaultProps
CartBarButton.displayName = 'NutCartBarButton'
