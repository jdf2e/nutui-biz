import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface QuickEnterProps extends IComponent {
}

const defaultProps = {
} as QuickEnterProps

export const QuickEnter: FunctionComponent<
  Partial<QuickEnterProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

QuickEnter.defaultProps = defaultProps
QuickEnter.displayName = 'NutQuickEnter'
