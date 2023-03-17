import React, {
  FunctionComponent, ReactNode, useEffect, useState
} from "react"
import { Infiniteloading, InfiniteloadingProps } from "@nutui/nutui-react";
import { IComponent } from "@/utils/typings"

import classNames from "classnames"
import bem from '@/utils/bem'
import { ProductFeedItem } from "./productfeeditem"
import {numericProp} from '@/utils/props'

export type colType = 1 | 2 | '1' | '2';

export interface ProductFeedProps extends IComponent {
  data: Array<any>
  customProduct: (item: any) => ReactNode
  openInfiniteloading: boolean
  infiniteloadingProps?: Partial<InfiniteloadingProps>
  initProductNum: number
  col: colType
  padding: numericProp
  borderRadius: numericProp
  imgUrl: string
  imgWidth: string
  imgHeight: string
  imgTag?: ReactNode
  isImageLazy: boolean
  loadingImg: string
  errorImg: string
  onClick: (item: object, number: number) => void
  onImageClick: (item: object, number: number) => void
}

const defaultProps = {
  data: [],
  customProduct: () => {},
  openInfiniteloading: true,
  initProductNum: 6,
  col: 2,
  padding: '10px',
  borderRadius: '8px',
  imgUrl: '',
  imgWidth: '150px',
  imgHeight: '150px',
  isImageLazy: true,
  loadingImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  onClick: () => { },
  onImageClick: () => { }
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
    openInfiniteloading,
    infiniteloadingProps,
    initProductNum,
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

  const b = bem('productfeed')

  const  [listLeft, setListLeft] = useState([] as any)
  const  [listRight, setListRight] = useState([] as any)

  useEffect(() => {
    col == 2 && init();
  }, [data])

  const init = () => {
    const leftLen = listLeft.length
    const rightLen = listRight.length

    if (listLeft.length >= data.length/2 && listRight.length >= data.length/2) {
    } else {
      for (let i = leftLen + rightLen; i < (leftLen + rightLen + initProductNum > data.length ? data.length : leftLen + rightLen + initProductNum) ; i++) {
        i % 2 == 0 ? listLeft.push(data[i]) : listRight.push(data[i])
      }
      setListLeft([...listLeft])
      setListRight([...listRight])
    }
  }

  const productItem = (item: any, index: number)=>{
    return (
      <ProductFeedItem
        key={item.id}
        index={index}
        data={item}
        col={col}
        imgUrl={item[imgUrl]}
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

  const product = ()=>{
    return (
      <div className={b("main")}>
        { col == 1 ? 
          data.map((item: any, index: number)=> {
            return (
              productItem(item, index)
            )
          }) 
        :
          <>
            <div className={b("left")}>
              { listLeft.map((item: any, index: number)=> {
                return (
                  productItem(item, index * 2)
                )
              }) }
            </div>
            <div className={b("right")}>
              { listRight.map((item: any, index: number)=> {
                return (
                  productItem(item, index * 2 + 1)
                )
              }) }
            </div>
          </>
        }
      </div>
    )
  }

  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
      {openInfiniteloading ? 
        <Infiniteloading
          {...infiniteloadingProps}
        >
          {product()}
        </Infiniteloading> :
        product()
      }
    </div>
  )
}

ProductFeed.defaultProps = defaultProps
ProductFeed.displayName = "NutProductFeed"
