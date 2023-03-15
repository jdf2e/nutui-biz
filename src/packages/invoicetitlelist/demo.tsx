import React from 'react'
import { InvoiceTitleList, Idata } from './invoicetitlelist'
import { useTranslate } from '../../sites/assets/locale'
import { Button, Toast } from '@nutui/nutui-react'

interface tarnslatedOption {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  clicked: string;
  edited: string;
  deleted: string;
}

const InvoiceTitleListDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      title1: '增值税专用发票',
      title2: '增值税专用发票-发票状态',
      title3: '电子普通发票',
      title4: '选中状态',
      title5: '操作按钮自定义',
      title6: '隐藏所有操作',
      clicked: '触发点击事件',
      edited: '触发编辑事件',
      deleted: '触发删除事件'
    },
    'en-US': {
      title1: 'Special Invoice',
      title2: 'Special Invoice-Invoice Status',
      title3: 'Normal Invoice',
      title4: 'Selected Status',
      title5: 'Custom Bottom',
      title6: 'Hide All Operates',
      clicked: 'Clicked',
      edited: 'Edited',
      deleted: 'Deleted'
    }
  });

    return (
      <>
        <div className="demo">
          <h2>{translated.title1}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'special',
              status: 'pass',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
            onEdit={(data: Idata) => {
              Toast.text('触发编辑事件')
              console.log('data', data)
            }}
            onDelete={(data: Idata) => {
              Toast.text('触发删除事件')
              console.log('data', data)
            }}
          />
          <h2>{translated.title2}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'special',
              status: 'veto',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
            onEdit={(data: Idata) => {
              Toast.text('触发编辑事件')
              console.log('data', data)
            }}
            onDelete={(data: Idata) => {
              Toast.text('触发删除事件')
              console.log('data', data)
            }}
          />
          <h2>{translated.title3}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: 'veto',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
            onEdit={(data: Idata) => {
              Toast.text('触发编辑事件')
              console.log('data', data)
            }}
            onDelete={(data: Idata) => {
              Toast.text('触发删除事件')
              console.log('data', data)
            }}
          />
          <h2>{translated.title4}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: true,
              type: 'normal',
              status: 'veto',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
            onEdit={(data: Idata) => {
              Toast.text('触发编辑事件')
              console.log('data', data)
            }}
            onDelete={(data: Idata) => {
              Toast.text('触发删除事件')
              console.log('data', data)
            }}
          />
          <h2>{translated.title5}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: 'veto',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
            onEdit={(data: Idata) => {
              Toast.text('触发编辑事件')
              console.log('data', data)
            }}
            onDelete={(data: Idata) => {
              Toast.text('触发删除事件')
              console.log('data', data)
            }}
            otherOperate = {<Button onClick={() => Toast.success('同步成功')}>同步到电子发票</Button>}
          />
          <h2>{translated.title6}</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: 'veto',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654',
              isDelete: true,
              isEdit: true
            }}
            isShowEdit = {false}
            onClick={(data: Idata) => {
              Toast.text('触发点击事件')
              console.log('data', data)
            }}
          />
        </div>
      </>
    )
}

export default InvoiceTitleListDemo