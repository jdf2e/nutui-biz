import React, { Children, FunctionComponent, ReactNode, useState } from 'react'
import { useConfig } from '@/packages/configprovider'
import { Checkbox, Icon, Tag, Cell, CellGroup, Swipe, Button } from '@nutui/nutui-react';
import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'
import classNames from 'classnames';
import { numericProp } from '@/utils/props';
export interface ReceiveInvoiceItemExt {
  label: string;
  value: string;
  [x: string]: any;
}
export interface ReceiveInvoiceItem {
  id: numericProp;
  name: string;
  tel: string;
  addres: string;
  isDefault: boolean;
  extends?: Array<ReceiveInvoiceItemExt>;
  [x: string]: any;
}
export interface ReceiveInvoiceListProps extends IComponent {
  defaultValue: numericProp;
  list: Array<ReceiveInvoiceItem>;
  enableDelete: boolean;
  customEdit?: ReactNode;
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
  const b = bem('receive-invoice-list');
  const {
    style,
    className,
    list,
    onSelected,
    onEdit,
    onDelete,
    enableDelete,
    customEdit,
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
  function RenderRowInfo(label: string, value: string) {
    return (
      <div className={b('item-footer-info')} key={label}>
        <span>{label}</span>
        <p>{value}</p>
      </div>
    );
  }
  const RenderItem = (item: ReceiveInvoiceItem, index: number) => {
    return (<CellGroup className={b('item')}>
      <Cell className={b('item-header')}
        onClick={() => onSelect(item, index)}
        title={
          <div className={b('item-header-title')}>{item.isDefault && <><Tag type="danger">{locale.default}</Tag>&nbsp;</>}<p>{item.name}</p></div>
        }
        linkSlot={
          <div className={b('item-header-edit')} onClick={(e) => { e.stopPropagation(); onEdit?.(item, index) }}>
            {customEdit ? customEdit : <Icon name="edit" color='#666' ></Icon>}
          </div>
        } />
      <Cell className={b('item-footer')} onClick={() => onSelect(item, index)}>
        <Checkbox textPosition="right" label="" checked={item.id == defaultValue} />
        <div className={b('item-footer infobox')}>
          {RenderRowInfo(locale.tel, item.tel)}
          {RenderRowInfo(locale.addres, item.addres)}
          {item?.extends?.map((i) => {
            return RenderRowInfo(i.label, i.value);
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
