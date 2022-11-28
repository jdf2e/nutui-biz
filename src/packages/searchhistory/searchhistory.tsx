import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface SearchHistoryProps extends IComponent {
}

const defaultProps = {
} as SearchHistoryProps

export const SearchHistory: FunctionComponent<
  Partial<SearchHistoryProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

SearchHistory.defaultProps = defaultProps
SearchHistory.displayName = 'NutSearchHistory'
