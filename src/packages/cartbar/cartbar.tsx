import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface CartBarProps extends IComponent {
}

const defaultProps = {
} as CartBarProps

export const CartBar: FunctionComponent<
  Partial<CartBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <div>
    </div>
  )
}

CartBar.defaultProps = defaultProps
CartBar.displayName = 'NutCartBar'
