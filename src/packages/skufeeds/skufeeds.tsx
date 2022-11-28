import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface SkuFeedsProps extends IComponent {
}

const defaultProps = {
} as SkuFeedsProps

export const SkuFeeds: FunctionComponent<
  Partial<SkuFeedsProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

SkuFeeds.defaultProps = defaultProps
SkuFeeds.displayName = 'NutSkuFeeds'
