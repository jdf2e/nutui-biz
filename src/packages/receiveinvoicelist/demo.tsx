import React from 'react'
import { ReceiveInvoiceItem, ReceiveInvoiceList } from './receiveinvoicelist'
import { useTranslate } from '../../sites/assets/locale'

interface tarnslatedOption {
  basic: string;
}

const ReceiveInvoiceListDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
    },
    'zh-TW': {
      basic: '基本用法',
    },
    'en-US': {
      basic: 'Basic Usage',
    }
  });

  const state = {
    modelValue: 1,
    list: [
      {
        id: 1,
        name: '张三',
        tel: '15088888888',
        addres: '北京市大兴京东大厦1号楼',
        isDefault: true,
      },
      {
        id: 2,
        name: '李四',
        tel: '15088888888',
        addres: '北京市大兴京东大厦2号楼',
        isDefault: false,
        extends: [
          { label: '扩展1', value: '扩展信息展示' },
          { label: '扩展2', value: '扩展信息展示' }
        ]
      }
    ]
  };

  const event = {
    onEdit: (item: ReceiveInvoiceItem) => { console.log('onEdit', item) },
    onSelected: (item: ReceiveInvoiceItem) => { console.log('onSelected', item) }
  }


  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <ReceiveInvoiceList list={state.list} modelValue={state.modelValue} onSelected={event.onSelected} onEdit={event.onEdit} />
      </div>
    </>
  )
}

export default ReceiveInvoiceListDemo
