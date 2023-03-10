import React from 'react'
import { ReceiveInvoiceItem, ReceiveInvoiceList } from './receiveinvoicelist'
import { useTranslate } from '../../sites/assets/locale'
import { Toast } from '@nutui/nutui-react';

interface tarnslatedOption {
  basic: string;
  useSwipe: string;
}

const ReceiveInvoiceListDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      useSwipe: '使用左滑删除',
    },
    'en-US': {
      basic: 'Basic Usage',
      useSwipe: 'Use Swipe Delete',
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
    onEdit: (item: ReceiveInvoiceItem, index: number) => {
      Toast.text('onEdit ' + item.name);
      console.log('onEdit', item, index);
    },
    onSelected: (item: ReceiveInvoiceItem, index: number) => {
      Toast.text('onSelected ' + item.name);
      console.log('onSelected', item, index);
    },
    onDelete: (item: ReceiveInvoiceItem, index: number) => {
      Toast.text('onDelete ' + item.name);
      console.log('onDelete', item, index);
    }
  }


  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <ReceiveInvoiceList list={state.list} modelValue={state.modelValue} onSelected={event.onSelected} onEdit={event.onEdit} />
        <h2>{translated.useSwipe}</h2>
        <ReceiveInvoiceList enableDelete={true} list={state.list} modelValue={state.modelValue} onSelected={event.onSelected} onEdit={event.onEdit} onDelete={event.onDelete} />
      </div>
    </>
  )
}

export default ReceiveInvoiceListDemo
