import React, {
  FunctionComponent, ReactNode, useEffect, useState
} from "react"
import { Infiniteloading } from "@nutui/nutui-react";
import { IComponent } from "@/utils/typings"

import classNames from "classnames"
import bem from "@/utils/bem"
import { ProductFeedItem } from "./productfeeditem"

export interface ProductFeedProps extends IComponent {
  customProduct: (item: any) => ReactNode
  data: any // Array<any>
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
  // 实时监听滚动高度
  onScrollChange: () => void
  col: number | string
  padding: number | string
  borderRadius: number | string
  imgUrl: string
  imgWidth: string
  imgHeight: string
  imgTag: ReactNode
  isImageLazy: boolean
  loadingImg: string
  errorImg: string
  onClick: (item: any) => void
  onImageClick: (item: any) => void

}

const defaultProps = {
  hasMore: true,
  useWindow: true,
  loadMoreTxt: "哎呀，这里是底部了啦",
  loadTxt: "加载中...",
  isOpenRefresh: false,
  pullTxt: "松手刷新",
  data: [],
  col: 2,
  padding: '10px',
  borderRadius: '8px',
  imgWidth: '150px',
  imgHeight: '150px',
  isImageLazy: true,
  loadingImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  // onClick: () => { },
  // onImageClick: () => { }
} as ProductFeedProps

export const ProductFeed: FunctionComponent<
  Partial<ProductFeedProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    className,
    style,
    children,
    data,
    customProduct,
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
    onScrollChange,
    col,
    padding,
    borderRadius,
    imgUrl,
    imgWidth,
    imgHeight,
    imgTag,
    isImageLazy,
    loadingImg,
    errorImg,
    onClick,
    onImageClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem("biz-productfeed")

  const  [listLeft, setListLeft] = useState([] as any)
  const  [listRight, setListRight] = useState([] as any)

  const productItem = (item: any)=>{
    return (
      <ProductFeedItem
        key={item.id}
        data={item}
        col={col}
        imgUrl={item.imgUrl}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        imgTag={imgTag}
        onClick={onClick}
        onImageClick={onImageClick}
      >
        {customProduct(item)}
      </ProductFeedItem>
    )
  }

  const init = () => {
    const leftLen = listLeft.length
    const rightLen = listRight.length

    if (listLeft.length >= data.length/2 && listRight.length >= data.length/2) {
    } else {
      for (let i = leftLen + rightLen; i < (leftLen + rightLen + 6 > data.length ? data.length : leftLen + rightLen + 6) ; i++) {
        i % 2 == 0 ? listLeft.push(data[i]) : listRight.push(data[i])
      }
      setListLeft([...listLeft])
      setListRight([...listRight])
    }
  }

  useEffect(() => {
    col == 2 && init();
  }, [data])

  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
      <Infiniteloading
        containerId={containerId}
        useWindow={useWindow}
        hasMore={hasMore}
        loadMoreTxt={loadMoreTxt}
        loadIcon={loadIcon}
        loadTxt={loadTxt}
        isOpenRefresh={isOpenRefresh}
        pullIcon={pullIcon}
        pullTxt={pullTxt}
        onLoadMore={onLoadMore}
        onRefresh={onRefresh}
        onScrollChange={onScrollChange}
      >
        <div className={b("main")}>
        { col == 1 ? 
            data.map((item: any)=> {
              return (
                productItem(item)
              )
            }) 
          :
            <>
              <div className={b("left")}>
                { listLeft.map((item: any)=> {
                  return (
                    productItem(item)
                  )
                }) }
              </div>
              <div className={b("right")}>
                { listRight.map((item: any)=> {
                  return (
                    productItem(item)
                  )
                }) }
              </div>
            </>
          }
        </div>
      </Infiniteloading>
    </div>
  )
}

ProductFeed.defaultProps = defaultProps
ProductFeed.displayName = "NutProductFeed"
