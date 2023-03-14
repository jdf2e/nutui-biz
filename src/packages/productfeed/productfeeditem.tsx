import React, {
  FunctionComponent, ReactNode, CSSProperties
} from 'react'
import { Image } from '@nutui/nutui-react';

import {cn2} from '@/utils/bem'
import Unit from '@/utils/unit'
import { errorImg } from '@/utils'
import {numericProp} from '@/utils/props'

export interface ProductFeedItemProps {
  index: number
  data: Array<any>
  col: numericProp
  padding: numericProp
  borderRadius: numericProp
  imgUrl: string
  imgWidth: string
  imgHeight: string
  imgTag: ReactNode
  isImageLazy: boolean
  loadingImg: string
  errorImg: string
  onClick: (item: object, number: number) => void
  onImageClick: (item: object, number: number) => void
}

const defaultProps = {
  data: [],
  col: 2,
  padding: '10px',
  borderRadius: '8px',
  imgWidth: '150px',
  imgHeight: '150px',
  isImageLazy: true,
  loadingImg: errorImg,
  errorImg,
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
    index,
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

  const b = cn2('productfeedItem')

  const itemStyle = () => {
    return {
      "borderRadius": Unit.pxAdd(borderRadius),
      "padding": Unit.pxAdd(padding),
    } as CSSProperties
  }

  const contentStyle = () => {
    return {
      "width": col == 1 && `calc(100% - ${Unit.pxAdd(imgWidth ? imgWidth : imgHeight)})`,
    } as CSSProperties
  }

  const handleClick = () => {
    onClick(data, index);
  };

  const handleImageClick = (event: any) => {
    onImageClick(data, index);
    event.stopPropagation();
  };

  return (
    <div 
      className={`${b()} ${col == 1 ? b("single") : b("multiple")}`}
      style={itemStyle()} 
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
