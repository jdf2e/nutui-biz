import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface AddressListProps extends IComponent {
}

const defaultProps = {
} as AddressListProps

export const AddressList: FunctionComponent<
  Partial<AddressListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

AddressList.defaultProps = defaultProps
AddressList.displayName = 'NutAddressList'
