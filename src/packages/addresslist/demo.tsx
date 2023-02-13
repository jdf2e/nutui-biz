import React from 'react'
import { AddressList } from './addresslist'
import { useTranslate } from '../../sites/assets/locale'

interface tarnslatedOption {
  basic: string
  title1: string
  title2: string
  testaddressName: string
  fullAddress: string
}

const AddressListDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      title1: '长按功能',
      title2: '滑动功能',
      testaddressName: '姓名',
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '長按功能',
      title2: '滑動功能',
      testaddressName: '姓名',
      fullAddress: '北京亦莊經濟技術開發區科創十一街18號院'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Long Press Function',
      title2: 'Swipe Function',
      testaddressName: 'Name',
      fullAddress: 'Full Address'
    },
  })

  const data = [
    {
      testid: 3,
      testaddressName: translated.testaddressName,
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: translated.fullAddress
    },
    {
      testid: 4,
      testaddressName: translated.testaddressName,
      phone: '123****4567',
      defaultAddress: true,
      fullAddress: translated.fullAddress
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
        <h2>{translated.basic}</h2>
        <AddressList
          data={data}
          showBottomButton={false}
          dataMapOptions={dataMapOptions}
          onDelIcon={delClick}
          onEditIcon={editClick}
          onItemClick={itemClick}
        />
        <h2>{translated.title1}</h2>
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
        <h2>{translated.title2}</h2>
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
