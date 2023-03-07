import React from 'react'
import { SettleBar } from './settlebar'
import { useTranslate } from '../../sites/assets/locale'
import { Toast } from '@nutui/nutui-react';
import './demo.scss';

interface tarnslatedOption {
  basic: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  totalText: string;
  settleButtonText: string;
  customWarningText: string;
  reduced: string;
  clicked: string;
}

const SettleBarDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      title1: '对齐方式',
      title2: '禁用状态',
      title3: '加载状态',
      title4: '提交订单',
      title5: '去结算数量',
      title6: '自定义合计额外区域内容',
      title7: '带有警告信息',
      totalText: '总计',
      settleButtonText: '提交订单',
      customWarningText: '此商品无货！',
      reduced: '已减',
      clicked: '点击按钮'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Alignment',
      title2: 'Disabled',
      title3: 'Loading',
      title4: 'Submit Order',
      title5: 'To Settle Quantity',
      title6: 'Custom Total Extra Area Content',
      title7: 'With Warning Message',
      totalText: 'Total',
      settleButtonText: 'Submit Order',
      customWarningText: 'This product is out of stock！',
      reduced: 'reduced',
      clicked: 'Settle'
    }
  });
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>{translated.customWarningText}</div>
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <SettleBar 
          total={100}
          onClickButton={() => Toast.text(translated.clicked)} 
        />
        <h2>{translated.title1}</h2>
        <SettleBar 
          total={100}
          totalAlign="left" 
          onClickButton={() => Toast.text(translated.clicked)} 
        />
        <h2>{translated.title2}</h2>
        <SettleBar 
          total={100}
          disabled 
        />
        <h2>{translated.title3}</h2>
        <SettleBar 
          total={100}
          loading 
        />
        <h2>{translated.title4}</h2>
        <SettleBar 
          total={100}
          customSelectAll="" 
          noCount={true} 
          totalText={translated.totalText} 
          settleButtonText={translated.settleButtonText} 
          onClickButton={() => Toast.text(translated.clicked)} 
        />
        <h2>{translated.title5}</h2>
        <SettleBar 
          total={100}
          settleCount="100" 
          onClickButton={() => Toast.text(translated.clicked)} 
        />
        <h2>{translated.title6}</h2>
        <SettleBar 
          total={100}
          customTotalExtra={<div style={{fontSize: '12px'}}>{translated.reduced} ¥30.00</div>} 
          onClickButton={() => Toast.text(translated.clicked)} 
        />
        <h2>{translated.title7}</h2>
        <SettleBar 
          total={100}
          customWarning={customWarningHtml()} 
          onClickButton={() => Toast.text(translated.clicked)} 
        />
      </div>
    </>
  )
}

export default SettleBarDemo
