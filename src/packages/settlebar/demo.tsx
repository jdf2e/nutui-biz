import React from 'react'
import { SettleBar } from './settlebar'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}
const SettleBarDemo = () => {
  const customWarningHtml = () => {
    return <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'red'}}>此商品无货！</div>
  }

  return (
    <>
      <div className="demo">
        <h2>合计对齐方式</h2>
        <SettleBar totalAlign="left" onSettle={() => console.log('Settle invoked')} />
        <h2>去结算按钮置灰</h2>
        <SettleBar disabled />
        <h2>去结算加载中</h2>
        <SettleBar loading />
        <h2>自定义合计和去结算按钮文案</h2>
        <SettleBar totalText="总计" settleButtonText="结算" />
        <h2>去结算数量和单位</h2>
        <SettleBar settleCount="100" settleUnit="个" />
        <h2>编辑状态与删除事件</h2>
        <SettleBar isEdit onDelete ={() => console.log('Delete invoked')} />
        <h2>自定义合计区域内容</h2>
        <SettleBar customTotal={<div>自定义合计</div>} />
        <h2>带有警告信息</h2>
        <SettleBar customWarning={customWarningHtml()} />
      </div>
    </>
  )
}

export default SettleBarDemo
