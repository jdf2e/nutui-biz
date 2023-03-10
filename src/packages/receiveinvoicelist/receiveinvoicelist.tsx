import React, { FunctionComponent, useState } from 'react'
import { useConfig } from '@/packages/configprovider'
import { Checkbox, Icon, Tag, Cell, CellGroup, Swipe, Button } from '@nutui/nutui-react';
import { IComponent } from '@/utils/typings'
import { cn2 } from '@/utils/bem'
import classNames from 'classnames';
export interface ReceiveInvoiceItemExt {
  label: string;
  value: string;
  [x: string]: any;
}
export interface ReceiveInvoiceItem {
  id: number | string;
  name: string;
  tel: string;
  addres: string;
  isDefault: boolean;
  extends?: Array<ReceiveInvoiceItemExt>;
  [x: string]: any;
}
export interface ReceiveInvoiceListProps extends IComponent {
  defaultValue: string | number;
  list: Array<ReceiveInvoiceItem>;
  enableDelete: boolean;
  onEdit?: (item: ReceiveInvoiceItem, index: number) => void;
  onSelected?: (item: ReceiveInvoiceItem, index: number) => void;
  onDelete?: (item: ReceiveInvoiceItem, index: number) => void;
}
const defaultProps = {
  defaultValue: "",
  list: new Array<ReceiveInvoiceItem>,
  enableDelete: false
} as ReceiveInvoiceListProps;
export const ReceiveInvoiceList: FunctionComponent<Partial<ReceiveInvoiceListProps>> = (props) => {
  const { locale } = useConfig();
  const [defaultValue, setDefaultValue] = useState(props.defaultValue);
  const b = cn2('receive-invoice-list');
  const {
    style,
    className,
    list,
    onSelected,
    onEdit,
    onDelete,
    enableDelete,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const onSelect = (item: ReceiveInvoiceItem, index: number) => {
    if (item.id == defaultValue) {
      setDefaultValue("")
      return
    }
    setDefaultValue(item.id);
    onSelected?.(item, index);
  }
  const RenderItem = (item: ReceiveInvoiceItem, index: number) => {
    return (<CellGroup className={b('item')}>
      <Cell className={b('item-header')}
        onClick={() => onSelect(item, index)}
        title={
          <>
            {item.isDefault && <><Tag type="danger">{locale.default}</Tag>&nbsp;</>}
            {item.name}
          </>
        }
        linkSlot={
          <Icon name="edit" color='#666' onClick={(e) => { e.stopPropagation(); onEdit?.(item, index) }}></Icon>
        } />
      <Cell className={b('item-footer')} onClick={() => onSelect(item, index)}>
        <Checkbox textPosition="right" label="" checked={item.id == defaultValue} />
        <div className={b('item-footer infobox')}>
          <div className={b('item-footer-info')} >
            <span>{locale.tel}</span>
            <p>{item.tel}</p>
          </div>
          <div className={b('item-footer-info')} >
            <span>{locale.addres}</span>
            <p>{item.addres}</p>
          </div>
          {item?.extends?.map((i, index) => {
            return (
              <div key={index} className={b('item-footer-info')} >
                <span>{i.label}</span>
                <p>{i.value}</p>
              </div>)
          })}
        </div>
      </Cell>
    </CellGroup>);
  }
  return (
    <div className={classNames([b(), className])} style={style} {...rest}>
      {list?.map((item, index) => {
        return (
          <React.Fragment key={item.id.toString()}>
            {enableDelete ?
              <Swipe rightAction={
                <Button type="primary" shape="square" onClick={() => onDelete?.(item, index)}>{locale.swipeShell.delete}</Button>
              }>
                {RenderItem(item, index)}
              </Swipe>
              : RenderItem(item, index)}
          </React.Fragment>
        )
      })}
    </div>
  )
}
ReceiveInvoiceList.defaultProps = defaultProps;
ReceiveInvoiceList.displayName = 'NutReceiveInvoiceList'
