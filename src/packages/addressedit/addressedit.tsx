import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface AddressEditProps extends IComponent {
}

const defaultProps = {
} as AddressEditProps

export const AddressEdit: FunctionComponent<
  Partial<AddressEditProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

AddressEdit.defaultProps = defaultProps
AddressEdit.displayName = 'NutAddressEdit'
