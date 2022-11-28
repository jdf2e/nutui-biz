import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface DeliveryProps extends IComponent {
}

const defaultProps = {
} as DeliveryProps

export const Delivery: FunctionComponent<
  Partial<DeliveryProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Delivery.defaultProps = defaultProps
Delivery.displayName = 'NutDelivery'
