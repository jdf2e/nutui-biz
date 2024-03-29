import React, {
  FunctionComponent
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { Icon } from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'
import { IDataInfo, functionType } from './addresslist'

export interface ItemContentsProps extends IComponent {
  item: IDataInfo
  onDelIcon?: functionType
  onEditIcon?: functionType
  onClickItem?: functionType
  onTouchStart: () => void,
  onTouchEnd: () => void,
  onTouchMove: () => void
}

const defaultProps = {
  item: {}
} as ItemContentsProps

export const ItemContents: FunctionComponent<
  Partial<ItemContentsProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    item,
    onDelIcon,
    onEditIcon,
    onClickItem,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('address-list')

  const delClick = (event: any) => {
    onDelIcon?.(event, item)
    event.stopPropagation();
  }

  const editClick = (event: any) => {
    onEditIcon?.(event, item)
    event.stopPropagation();
  }

  const contentsClick = (event: any) => {
    onClickItem?.(event, item)
    event.stopPropagation();
  }

  return (
    <div className={b('item')} onClick={contentsClick} {...rest}>
      <div className={b('item-info')}>
        <div className={b('item-info-contact')}>
          <div className={b('item-info-contact-name')}>{ item.addressName }</div>
          <div className={b('item-info-contact-tel')}>{ item.phone }</div>
          {item.defaultAddress && <div className={b('item-info-contact-default')}>{locale.itemContents.default}</div>}
        </div>
        <div className={b('item-info-handle')}>
          <Icon name="del" className={b('item-info-handle-del')} onClick={delClick}></Icon>
          <Icon name="edit" className={b('item-info-handle-edit')} onClick={editClick}></Icon>
        </div>
      </div>
      <div className={b('item-addr')}>
        { item.fullAddress }
      </div>
    </div>
  )
}
  
ItemContents.defaultProps = defaultProps
ItemContents.displayName = 'NutItemContents'
  