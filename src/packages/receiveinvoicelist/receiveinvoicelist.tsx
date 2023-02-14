import React, {
  FunctionComponent, useState,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { Checkbox, Icon, Tag, Cell, CellGroup, Swipe, Button } from '@nutui/nutui-react';
import { IComponent } from '@/utils/typings'

export interface ReceiveInvoiceItemExt {
  label: String;
  value: String,
  [x: string]: any;
}

export interface ReceiveInvoiceItem {
  id: Number | String;
  name: String;
  tel: String,
  addres: String,
  isDefault: Boolean,
  extends?: Array<ReceiveInvoiceItemExt>,
  [x: string]: any;
}

export interface ReceiveInvoiceListProps extends IComponent {
  modelValue: String | Number;
  list: Array<ReceiveInvoiceItem>,
  onEdit: Function,
  onSelected: Function,
  onDelete: Function,
  enableDelete: Boolean,
}

const defaultProps = {
  modelValue: "",
  list: new Array<ReceiveInvoiceItem>,
  onEdit: (item: ReceiveInvoiceItem) => { },
  onSelected: (item: ReceiveInvoiceItem) => { },
  onDelete: (item: ReceiveInvoiceItem) => { },
  enableDelete: false
} as ReceiveInvoiceListProps;


export const ReceiveInvoiceList: FunctionComponent<
  Partial<ReceiveInvoiceListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig();
  const [modelValue, setModelValue] = useState(props.modelValue);

  const {
    list,
    onSelected,
    onEdit,
    onDelete,
    enableDelete,
  } = {
    ...defaultProps,
    ...props,
  }

  const onSelect = (item: ReceiveInvoiceItem) => {
    setModelValue(item.id);
    onSelected(item);
  }

  const RenderItem = (item: ReceiveInvoiceItem) => {
    return (<CellGroup className='nut-receive-invoice-list__item'>
      <Cell className="nut-receive-invoice-list__item-header"
        onClick={() => onSelect(item)}
        title={
          <>
            {item.isDefault && <><Tag type="danger">{locale.default}</Tag>&nbsp;</>}
            {item.name}
          </>
        }
        linkSlot={
          <Icon name="edit" color='#666' onClick={(e) => { e.stopPropagation(); onEdit(item) }}></Icon>
        } />
      <Cell className="nut-receive-invoice-list__item-footer" onClick={() => onSelect(item)}>
        <Checkbox textPosition="right" label="" checked={item.id == modelValue} />
        <div className="nut-receive-invoice-list__item-footer infobox">
          <div className="nut-receive-invoice-list__item-footer-info">
            <span>{locale.tel}</span>
            <p>{item.tel}</p>
          </div>
          <div className="nut-receive-invoice-list__item-footer-info">
            <span>{locale.addres}</span>
            <p>{item.addres}</p>
          </div>
          {item?.extends?.map((i, index) => {
            return (
              <div key={index} className="nut-receive-invoice-list__item-footer-info">
                <span>{i.label}</span>
                <p>{i.value}</p>
              </div>)
          })}

        </div>
      </Cell>
    </CellGroup>);
  }

  return (
    <div className='nut-receive-invoice-list'>
      {list.map((item) => {
        return (
          <React.Fragment key={item.id.toString()}>
            {enableDelete ?
              <Swipe rightAction={
                <Button type="primary" shape="square" onClick={() => onDelete(item)}>{locale.swipeShell.delete}</Button>
              }>
                {RenderItem(item)}
              </Swipe>
              : RenderItem(item)}
          </React.Fragment>
        )
      })}

    </div >
  )
}

ReceiveInvoiceList.defaultProps = defaultProps;
ReceiveInvoiceList.displayName = 'NutReceiveInvoiceList'
