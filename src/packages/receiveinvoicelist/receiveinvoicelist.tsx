import React, {
  FunctionComponent, useState,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { Checkbox, Icon, Tag, Cell, CellGroup } from '@nutui/nutui-react';
import { IComponent } from '@/utils/typings'

export interface ReceiveInvoiceItemExt {
  label: String;
  value: String,
  [x: string]: any;
}

export interface ReceiveInvoiceItem {
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
}

const defaultProps = {
  modelValue: "",
  list: [],
  onEdit: (item: ReceiveInvoiceItem) => { console.log('onEdit', item) },
  onSelected: (item: ReceiveInvoiceItem) => { console.log('onSelected', item) },
} as ReceiveInvoiceListProps;


export const ReceiveInvoiceList: FunctionComponent<
  Partial<ReceiveInvoiceListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig();
  const [modelValue, setModelValue] = useState(props.modelValue);

  const {
    list,
    onSelected,
    onEdit
  } = {
    ...defaultProps,
    ...props,
  }

  const onSelect = (item: ReceiveInvoiceItem) => {
    setModelValue(item.id);
    onSelected(item);
  }

  return (
    <div className='nut-receive-invoice-list'>
      {list.map((item) => {
        return (
          <CellGroup key={item.id} className='nut-receive-invoice-list__item'>
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
          </CellGroup>)
      })}

    </div >
  )
}

ReceiveInvoiceList.defaultProps = defaultProps;
ReceiveInvoiceList.displayName = 'NutReceiveInvoiceList'
