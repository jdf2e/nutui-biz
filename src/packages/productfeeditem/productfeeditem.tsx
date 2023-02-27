import React, {
  FunctionComponent, ReactNode, CSSProperties, HTMLAttributes, useState
} from 'react'
import { Image } from '@nutui/nutui-react';

import bem from '@/utils/bem'
import Unit from '@/utils/unit'

export interface ProductFeedItemProps {
  data: any
  col: number | string
  gutter: number | string
  borderRadius: number | string
  padding: number | string
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
  col: 2,
  gutter: 6,
  borderRadius: 8,
  padding: 10,
  imgWidth: '150',
  imgHeight: '150',
  isImageLazy: true,
  loadingImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg: '//img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  onClick: () => { },
  onImageClick: () => { }
} as unknown as ProductFeedItemProps

export const ProductFeedItem: FunctionComponent<
  Partial<ProductFeedItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const {
    className,
    style,
    children,
    data,
    col,
    gutter,
    borderRadius,
    padding,
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

  const b = bem("biz-productfeedItem")

  const itemStyle = () => {
    return {
      "width": col == 1 ? "100%" : 
                  `calc((100% - ${Unit.pxAdd(gutter)})/${col})`,
      "borderRadius": Unit.pxAdd(borderRadius),
      "padding": Unit.pxAdd(padding),
    }
  }

  const contentStyle = () => {
    return {
      "width": col == 1 && `calc(100% - ${Unit.pxAdd(imgWidth ? imgWidth : imgHeight)})`,
    } as CSSProperties
  }

  const handleClick = () => {
    onClick(data);
  };

  const handleImageClick = (event: any) => {
    onImageClick(data);
    event.stopPropagation();
  };

  return (
    <div 
      className={`${b()} ${col == 1 ? b("single") : b("multiple")}`}
      style={{ ...itemStyle(), ...style }} 
      onClick={handleClick}
      {...rest}
    >
      <div className={b("image")} onClick={handleImageClick}>
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
