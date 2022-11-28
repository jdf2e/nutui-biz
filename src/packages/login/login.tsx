import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface LoginProps extends IComponent {
}

const defaultProps = {
} as LoginProps

export const Login: FunctionComponent<
  Partial<LoginProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Login.defaultProps = defaultProps
Login.displayName = 'NutLogin'
