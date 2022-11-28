import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface ReceiveInvoiceListProps extends IComponent {
}

const defaultProps = {
} as ReceiveInvoiceListProps

export const ReceiveInvoiceList: FunctionComponent<
  Partial<ReceiveInvoiceListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

ReceiveInvoiceList.defaultProps = defaultProps
ReceiveInvoiceList.displayName = 'NutReceiveInvoiceList'
