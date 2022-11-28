import React, {
  FunctionComponent,
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'

export interface CommentProps extends IComponent {
}

const defaultProps = {
} as CommentProps

export const Comment: FunctionComponent<
  Partial<CommentProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

Comment.defaultProps = defaultProps
Comment.displayName = 'NutComment'
