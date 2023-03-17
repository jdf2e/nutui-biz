import React, {
  FunctionComponent
} from 'react'
import { useConfig } from '@/packages/configprovider'
import {Icon} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'

export interface ItemContentsProps extends IComponent {
  item: {
    phone: string
    addressName: string
    defaultAddress: string
    fullAddress: string
  }
  onDelIcon: (event: Event, item: Object) => void
  onEditIcon: (event: Event, item: Object) => void
  onClickItem: (event: Event, item: Object) => void
}

const defaultProps = {
  item: {
    phone: '',
    addressName: '',
    defaultAddress: '',
    fullAddress: ''
  }
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
    onDelIcon && onDelIcon(event, item)
    event.stopPropagation();
  }

  const editClick = (event: any) => {
    onEditIcon && onEditIcon(event, item)
    event.stopPropagation();
  }

  const contentsClick = (event: any) => {
    onClickItem && onClickItem(event, item)
    event.stopPropagation();
  }

  return (
    <div className={b('item')} onClick={contentsClick} {...rest}>
      <div className={b('item-info')}>
        <div className={b('item-info-contact')}>
          <slot name="contentTop">
            <div className={b('item-info-contact-name')}>{ item.addressName }</div>
            <div className={b('item-info-contact-tel')}>{ item.phone }</div>
            {item.defaultAddress && <div className={b('item-info-contact-default')}>{locale.itemContents.default}</div>}
          </slot>
        </div>
        <div className={b('item-info-handle')}>
          <Icon name="del" className={b('item-info-handle-del')} onClick={delClick}></Icon>
          <Icon name="edit" className={b('item-info-handle-edit')} onClick={editClick}></Icon>
        </div>
      </div>
      <div className={b('item-addr')}>
        <slot name="contentAddr">
          { item.fullAddress }
        </slot>
      </div>
    </div>
  )
}
  
ItemContents.defaultProps = defaultProps
ItemContents.displayName = 'NutItemContents'
  