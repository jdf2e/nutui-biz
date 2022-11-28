import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface ReceiveInvoiceEditProps extends IComponent {
}

const defaultProps = {
} as ReceiveInvoiceEditProps

export const ReceiveInvoiceEdit: FunctionComponent<
  Partial<ReceiveInvoiceEditProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

ReceiveInvoiceEdit.defaultProps = defaultProps
ReceiveInvoiceEdit.displayName = 'NutReceiveInvoiceEdit'
