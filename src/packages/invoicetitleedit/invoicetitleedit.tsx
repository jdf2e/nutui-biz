import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface InvoiceTitleEditProps extends IComponent {
}

const defaultProps = {
} as InvoiceTitleEditProps

export const InvoiceTitleEdit: FunctionComponent<
  Partial<InvoiceTitleEditProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

InvoiceTitleEdit.defaultProps = defaultProps
InvoiceTitleEdit.displayName = 'NutInvoiceTitleEdit'
