import React, {
  FunctionComponent, ReactNode, CSSProperties, HTMLAttributes, useState
} from 'react'
import { Card } from '../card/card'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface ProductFeedItemProps {
  className: string
  style: CSSProperties
  col: number | string
  gutter: number | string
  dara: Array<any>
  imgUrl: string
  imgTag: ReactNode
  onClick: () => void
}

const defaultProps = {
  imgUrl: '',
  col: 2,
  gutter: 6,
  onClick: () => { }
} as unknown as ProductFeedItemProps

export const ProductFeedItem: FunctionComponent<
  Partial<ProductFeedItemProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
    col,
    gutter,
    imgUrl,
    imgTag,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [hasMore, setHasMore] = useState(true)

  const b = bem('biz-productfeedItem')

  const cardStyle = () => {
    return {
      'width': col == 1 ? '100%' : 
                  `calc((100% - ${gutter}px)/${col})`,
      // 'marginLeft': gutter + 'px'
    }
  }

  return (
    <div className={classNames([b(), className])} style={{ ...cardStyle(), ...style }} {...rest}>
      <Card
        imgUrl={imgUrl}
        showType={col == 1 ? 'full-line' : 'half-line'}
        imgTag={imgTag}
        infoTpl={children}
      />
    </div>
  )
}

ProductFeedItem.defaultProps = defaultProps
ProductFeedItem.displayName = 'NutProductFeedItem'
