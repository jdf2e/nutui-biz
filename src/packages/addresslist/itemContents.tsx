import React, {
    FunctionComponent
  } from 'react'
  import { useConfig } from '@/packages/configprovider'
  import {Icon} from '@nutui/nutui-react'
  
  import { IComponent } from '@/utils/typings'
  import {cn2} from '@/utils/bem'
  
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

    const b = cn2('address-list')
  
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
  
  ItemContents.displayName = 'NutItemContents'
  