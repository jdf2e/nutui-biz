import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface SkuProps extends IComponent {
}

const defaultProps = {
} as SkuProps

export const Sku: FunctionComponent<
  Partial<SkuProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Sku.defaultProps = defaultProps
Sku.displayName = 'NutSku'
