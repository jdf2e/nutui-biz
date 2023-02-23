import React, {
  FunctionComponent, ReactNode, CSSProperties, HTMLAttributes, useState
} from 'react'
import { Image } from '@nutui/nutui-react';

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface ProductFeedItemProps {
  className: string
  style: CSSProperties
  col: number | string
  gutter: number | string
  imgUrl: string
  imgWidth: string
  imgHeight: string
  imgTag: ReactNode
  isImageLazy: boolean
  loadingImg: string
  errorImg: string
  onClick: () => void
}

const defaultProps = {
  col: 2,
  gutter: 6,
  imgWidth: '150',
  imgHeight: '150',
  isImageLazy: true,
  loadingImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
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
    imgWidth,
    imgHeight,
    imgTag,
    isImageLazy,
    loadingImg,
    errorImg,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem("biz-productfeedItem")

  const pxAdd = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const itemStyle = () => {
    return {
      "width": col == 1 ? "100%" : 
                  `calc((100% - ${pxAdd(gutter)})/${col})`,
    }
  }

  const contentStyle = () => {
    return {
      "width": col == 1 && `calc(100% - ${pxAdd(imgWidth ? imgWidth : imgHeight)})`,
    } as CSSProperties
  }

  return (
    <div 
      className={`${b()} ${col == 1 ? b("single") : b("multiple")}`}
      style={{ ...itemStyle(), ...style }} 
      {...rest}
    >
      <div className={b("image")}>
        <Image
          src={imgUrl}
          isLazy={isImageLazy}
          width={imgWidth}
          height={imgHeight}
          loadingImg={loadingImg}
          errorImg={loadingImg}
        />
        {imgTag && <div className={b("image-tag")}>{imgTag}</div>}
      </div>
      <div className={b("content")} style={contentStyle()} >
        {children}
      </div>
    </div>
  )
}

ProductFeedItem.defaultProps = defaultProps
ProductFeedItem.displayName = 'NutProductFeedItem'
