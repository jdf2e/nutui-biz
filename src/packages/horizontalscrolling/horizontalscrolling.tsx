import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface HorizontalScrollingProps extends IComponent {
}

const defaultProps = {
} as HorizontalScrollingProps

export const HorizontalScrolling: FunctionComponent<
  Partial<HorizontalScrollingProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

HorizontalScrolling.defaultProps = defaultProps
HorizontalScrolling.displayName = 'NutHorizontalScrolling'
