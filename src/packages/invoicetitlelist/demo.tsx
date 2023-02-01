import React from 'react'
import { InvoiceTitleList } from './invoicetitlelist'
import { Button, Toast } from '@nutui/nutui-react'

const InvoiceTitleListDemo = () => {
    return (
      <>
        <div className="demo">
          <h2>增值税专用发票</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'special',
              status: '通过',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            onClick={() => Toast.text('触发点击事件')}
            onEdit={() => Toast.text('触发编辑事件')}
            onDelete={() => Toast.text('触发删除事件')}
          />
          <h2>增值税专用发票-发票状态</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'special',
              status: '否决',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            onClick={() => Toast.text('触发点击事件')}
            onEdit={() => Toast.text('触发编辑事件')}
            onDelete={() => Toast.text('触发删除事件')}
          />
          <h2>电子普通发票</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: '否决',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            onClick={() => Toast.text('触发点击事件')}
            onEdit={() => Toast.text('触发编辑事件')}
            onDelete={() => Toast.text('触发删除事件')}
          />
          <h2>选中状态</h2>
          <InvoiceTitleList 
            data={{
              isSelected: true,
              type: 'normal',
              status: '否决',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            onClick={() => Toast.text('触发点击事件')}
            onEdit={() => Toast.text('触发编辑事件')}
            onDelete={() => Toast.text('触发删除事件')}
          />
          <h2>操作按钮自定义</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: '否决',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            onClick={() => Toast.text('触发点击事件')}
            onEdit={() => Toast.text('触发编辑事件')}
            onDelete={() => Toast.text('触发删除事件')}
            otherOperate = {<Button onClick={() => Toast.success('同步成功')}>同步到电子发票</Button>}
          />
          <h2>隐藏所有操作</h2>
          <InvoiceTitleList 
            data={{
              isSelected: false,
              type: 'normal',
              status: '否决',
              isShowDefault: true,
              title: '北京环球影城娱乐信息技术有限公司',
              companyCode: '91110302MA222LU88A',
              address: '北京市通州区台湖镇',
              companyPhone: '88488848',
              bankDeposit: '中国银行股份有限公司北京分行',
              bankAccount: '5833 2153 4243 2654'
            }}
            isShowEdit = {false}
            isShowOperate = {false}
            onClick={() => Toast.text('触发点击事件')}
          />
        </div>
      </>
    )
}

export default InvoiceTitleListDemo