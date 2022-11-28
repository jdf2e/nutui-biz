import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface OrderRemarkProps extends IComponent {
}

const defaultProps = {
} as OrderRemarkProps

export const OrderRemark: FunctionComponent<
  Partial<OrderRemarkProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

OrderRemark.defaultProps = defaultProps
OrderRemark.displayName = 'NutOrderRemark'
