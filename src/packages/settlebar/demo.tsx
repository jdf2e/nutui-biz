import React from 'react'
import { SettleBar } from './settlebar'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}
const SettleBarDemo = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', fontSize: '12px', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }

  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <SettleBar />
        <h2>对齐方式</h2>
        <SettleBar totalAlign="left" />
        <h2>禁用状态</h2>
        <SettleBar disabled />
        <h2>加载状态</h2>
        <SettleBar loading />
        <h2>提交订单</h2>
        <SettleBar customSelectAll="" noCount={true} totalText="总计" settleButtonText="提交订单" />
        <h2>去结算数量和单位</h2>
        <SettleBar settleCount="100" settleUnit="个" />
        <h2>自定义合计额外区域内容</h2>
        <SettleBar customTotalExtra={<div style={{fontSize: '12px'}}>已减 ¥30.00</div>} />
        <h2>带有警告信息</h2>
        <SettleBar customWarning={customWarningHtml()} />
      </div>
    </>
  )
}

export default SettleBarDemo
