import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface CouponProps extends IComponent {
}

const defaultProps = {
} as CouponProps

export const Coupon: FunctionComponent<
  Partial<CouponProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Coupon.defaultProps = defaultProps
Coupon.displayName = 'NutCoupon'
