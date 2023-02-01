import React, {
  FunctionComponent, CSSProperties, HTMLAttributes, useState, useEffect
} from 'react'
import { Infiniteloading } from '@nutui/nutui-react';

import classNames from 'classnames'
import bem from '@/utils/bem'

// export interface ProductList {
//   name: string
//   imgUrl: string
// }
export interface ProductFeedProps {
  className: string
  style: CSSProperties
  col: number | string
  // data: any[] | []
  // 是否还有更多数据
  hasMore: boolean
  containerId: string
  useWindow: boolean
  // “没有更多数”据展示文案
  loadMoreTxt: string
  // 上拉加载图标名称
  loadIcon: string
  // 上拉加载提示文案
  loadTxt: string
  // 是否开启下拉刷新
  isOpenRefresh: boolean
  // 下拉刷新图标名称
  pullIcon: string
  // 下拉刷新提示文案
  pullTxt: string
  // 继续加载的回调函数
  onLoadMore: (param: () => void) => void
  // 下拉刷新事件回调
  onRefresh: (param: () => void) => void
  onClick: () => void
}

const defaultProps = {
  col: 2,
  // data: [],
  onClick: () => { }
} as ProductFeedProps

export const ProductFeed: FunctionComponent<
  Partial<ProductFeedProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
    col,
    // data,
    hasMore,
    containerId,
    useWindow,
    loadMoreTxt,
    loadIcon,
    loadTxt,
    isOpenRefresh,
    pullIcon,
    pullTxt,
    onLoadMore,
    onRefresh,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [list, setList] = useState([] as any)

  // const [hasMore, setHasMore] = useState(true)

  const b = bem('biz-productfeed')


  useEffect(() => {
  }, [])


  return (
    <div className={classNames([b(), className])} style={{ ...style }} {...rest}>
      <Infiniteloading
        containerId={containerId}
        useWindow={useWindow}
        hasMore={hasMore}
        loadMoreTxt={loadMoreTxt}
        isOpenRefresh={isOpenRefresh}
        pullIcon={pullIcon}
        pullTxt={pullTxt}
        onLoadMore={onLoadMore}
        onRefresh={onRefresh}
      >
        <div className={b('main')} >
          {children}
        </div>
      </Infiniteloading>
    </div>
  )
}

ProductFeed.defaultProps = defaultProps
ProductFeed.displayName = 'NutProductFeed'
