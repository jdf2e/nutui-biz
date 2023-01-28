import React, {
    FunctionComponent
  } from 'react'
  import { useConfig } from '@/packages/configprovider'
  import {Icon} from '@nutui/nutui-react'
  
  import { IComponent } from '@/utils/typings'
  
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
  
  export const ItemContents: FunctionComponent<
    Partial<ItemContentsProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
  > = (props) => {
    const { locale } = useConfig()
    const {
      item = {
        phone: '',
        addressName: '',
        defaultAddress: '',
        fullAddress: ''
      },
      onDelIcon,
      onEditIcon,
      onClickItem,
      ...rest
    } = {
      ...props,
    }
  
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
        <div className="nut-address-list-item" onClick={contentsClick} {...rest}>
            <div className="nut-address-list-item__info">
                <div className="nut-address-list-item__info-contact">
                    <slot name="contentTop">
                        <div className="nut-address-list-item__info-contact-name">{ item.addressName }</div>
                        <div className="nut-address-list-item__info-contact-tel">{ item.phone }</div>
                        {item.defaultAddress && <div className="nut-address-list-item__info-contact-default">默认</div>}
                    </slot>
                </div>
                <div className="nut-address-list-item__info-handle">
                    <Icon name="del" className="nut-address-list-item__info-handle-del" onClick={delClick}></Icon>
                    <Icon name="edit" className="nut-address-list-item__info-handle-edit" onClick={editClick}></Icon>
                </div>
            </div>
            <div className="nut-address-list-item__addr">
                <slot name="contentAddr">
                { item.fullAddress }
                </slot>
            </div>
        </div>
    )
  }
  
  ItemContents.displayName = 'NutItemContents'
  