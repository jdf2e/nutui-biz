import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface InvoiceTitleListProps extends IComponent {
}

const defaultProps = {
} as InvoiceTitleListProps

export const InvoiceTitleList: FunctionComponent<
  Partial<InvoiceTitleListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

InvoiceTitleList.defaultProps = defaultProps
InvoiceTitleList.displayName = 'NutInvoiceTitleList'
