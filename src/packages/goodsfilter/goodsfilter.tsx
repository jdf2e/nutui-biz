import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface GoodsFilterProps extends IComponent {
}

const defaultProps = {
} as GoodsFilterProps

export const GoodsFilter: FunctionComponent<
  Partial<GoodsFilterProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

GoodsFilter.defaultProps = defaultProps
GoodsFilter.displayName = 'NutGoodsFilter'
