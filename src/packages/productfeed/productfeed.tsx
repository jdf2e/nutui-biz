import React, {
  FunctionComponent, CSSProperties, HTMLAttributes
} from 'react'

import {Row, Col} from '@nutui/nutui-react'

import { Card } from '../card/card'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface ProductFeedProps {
  className: string
  style: CSSProperties
  col: number | string
  gutter: number | string
  imgUrl: string
  onClick: () => void
}

const defaultProps = {
  imgUrl: '',
  col: 2,
  gutter: 2,
  onClick: () => {}
} as ProductFeedProps

export const ProductFeed: FunctionComponent<
  Partial<ProductFeedProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    col,
    gutter,
    imgUrl,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-productfeed')

  const mainStyles = () => {
    return {'marginLeft': gutter + 'px'}
  }

  return (
    <div className={classNames([b(), className])} style={{ ...style }}>
      {/* <div className={b('main')} style={mainStyles()} {...rest}>
      
      </div> */}
      <Row>
        <Col span={24 / Number(col)} {...rest}>
            
        </Col>
      </Row>
    </div>
  )
}

ProductFeed.defaultProps = defaultProps
ProductFeed.displayName = 'NutProductFeed'
