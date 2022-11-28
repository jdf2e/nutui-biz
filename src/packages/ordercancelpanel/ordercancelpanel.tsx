import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface OrderCancelPanelProps extends IComponent {
}

const defaultProps = {
} as OrderCancelPanelProps

export const OrderCancelPanel: FunctionComponent<
  Partial<OrderCancelPanelProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

OrderCancelPanel.defaultProps = defaultProps
OrderCancelPanel.displayName = 'NutOrderCancelPanel'
