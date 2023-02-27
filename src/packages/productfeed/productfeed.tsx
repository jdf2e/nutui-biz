import React, {
  FunctionComponent, CSSProperties, HTMLAttributes, useState, useEffect
} from 'react'
import { Infiniteloading } from '@nutui/nutui-react';
import { IComponent } from '@/utils/typings'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface ProductFeedProps extends IComponent {
  // 是否还有更多数据
  hasMore: boolean
  // 在 useWindow 属性为 false 的时候，自定义设置节点ID
  containerId: string
  // 将滚动侦听器添加到 window 否则侦听组件的父节点
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
}

const defaultProps = {
  hasMore: true,
  useWindow: true,
  loadMoreTxt: '哎呀，这里是底部了啦',
  loadTxt: '加载中...',
  isOpenRefresh: false,
  pullTxt: '松手刷新'
} as ProductFeedProps

export const ProductFeed: FunctionComponent<
  Partial<ProductFeedProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    children,
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

  const b = bem('biz-productfeed')

  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
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
        {...props}
      >
        <div className={b('main')}>
          {children}
        </div>
      </Infiniteloading>
    </div>
  )
}

ProductFeed.defaultProps = defaultProps
ProductFeed.displayName = 'NutProductFeed'
