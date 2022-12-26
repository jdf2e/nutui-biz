import React from 'react'
import { AddressList } from './addresslist'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}
const AddressListDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
    },
    'zh-TW': {
    },
    'en-US': {
    },
  })

  const data = [
    {
      testid: 3,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
    },
    {
      testid: 4,
      testaddressName: '姓名',
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
    }
  ];

  const dataMapOptions = {
    id: 'testid',
    addressDetail: 'testaddressDetail',
    addressName: 'testaddressName'
  };

  const itemClick = () => {
    console.log('Click To Address');
  }

  const delClick = () => {
    console.log('Click To Delete');
  }

  const editClick = () => {
    console.log('Click To Edit');
  }

  const copyClick = ()=>{
    console.log('Click To Copy');
  }

  const setClick = ()=>{
    console.log('Click On Settings');
  }

  const addAddress = ()=>{
    console.log('Click To Add');
  }

  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <AddressList
          data={data}
          showBottomButton={false}
          dataMapOptions={dataMapOptions}
          onDelIcon={delClick}
          onEditIcon={editClick}
          onItemClick={itemClick}
        />
        <h2>长按功能</h2>
        <AddressList
          data={data}
          longPress={true}
          showBottomButton={false}
          dataMapOptions={dataMapOptions}
          onDelIcon={delClick}
          onEditIcon={editClick}
          onItemClick={itemClick}
          onLongCopy={copyClick}
          onLongSet={setClick}
          onLongDel={delClick}
        />
        <h2>滑动功能</h2>
        <AddressList
          data={data}
          showBottomButton={true}
          dataMapOptions={dataMapOptions}
          swipeEdition={true}
          onDelIcon={delClick}
          onEditIcon={editClick}
          onItemClick={itemClick}
          onAdd={addAddress}
          onSwipeDel={delClick}
        />
      </div>
    </>
  )
}

export default AddressListDemo
