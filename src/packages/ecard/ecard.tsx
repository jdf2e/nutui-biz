import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface EcardProps extends IComponent {
}

const defaultProps = {
} as EcardProps

export const Ecard: FunctionComponent<
  Partial<EcardProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Ecard.defaultProps = defaultProps
Ecard.displayName = 'NutEcard'
