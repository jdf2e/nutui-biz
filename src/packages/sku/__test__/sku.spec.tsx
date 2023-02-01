import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Sku } from '../sku'
import { Button, Cell } from '@nutui/nutui-react'

test('test base', async () => {
  const { container } = render(
    <Sku visible={true} />
  )
  const nutSku = container.querySelector('.nut-sku') as HTMLElement
  expect(nutSku).toBeTruthy()
})

test('test btnExtraText', async () => {
  const { container } = render(
    <Sku 
      visible={true}
      btnExtraText="抱歉，此商品在所选区域暂无存货" 
    />
  )
  const nutSkuOOperateDesc = container.querySelector('.nut-sku-operate-desc') as HTMLElement
  expect(nutSkuOOperateDesc).toHaveTextContent('抱歉，此商品在所选区域暂无存货')
})

test('test stepperExtraText', async () => {
  const { container } = render(
    <Sku 
      visible={true}
      stepperExtraText={() => <div>2 件起售</div>} 
    />
  )
  const nutSkuStepperLimit = container.querySelector('.nut-sku-stepper-limit') as HTMLElement
  expect(nutSkuStepperLimit).toHaveTextContent('2 件起售')
})

test('test stepperExtraText', async () => {
  const { container } = render(
    <Sku 
      visible={true}
      stepperExtraText={() => <div>2 件起售</div>} 
    />
  )
  const nutSkuStepperLimit = container.querySelector('.nut-sku-stepper-limit') as HTMLElement
  expect(nutSkuStepperLimit).toHaveTextContent('2 件起售')
})

test('test stepperExtraText', async () => {
  const { container } = render(
    <Sku 
      visible={true}
      skuHeaderPrice={<div className='sku-header-price'></div>}
      skuHeaderExtra={<span className='nut-sku-header-right-extra'>重量：0.1kg 编号：123</span>}
      operateBtn = {
        <div style={{
          width: '100%',
          display: 'flex',
          padding: '8px 10px',
          boxSizing: 'border-box'
        }}>
          <Button style={{
            width: '100%',
            flexShrink: 1,
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px'
          }} shape="square" type="warning">加入购物车</Button>
          <Button style={{
            width: '100%',
            flexShrink: 1,
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px'
          }} shape="square" type="primary">立即购买</Button>
        </div>
      }
      skuSelectTop={
        <Cell
          style={{boxShadow: 'none', padding: '13px 0'}}
          title="送至"
          desc='配送地会影响库存，请先确认'
        />
      }
    />
  )
  const nutSkuHeaderRightExtra = container.querySelector('.nut-sku-header-right-extra') as HTMLElement
  const nutSkuContent = container.querySelector('.nut-sku-content') as HTMLElement
  const nutSkuOperate = container.querySelector('.nut-sku-operate') as HTMLElement
  const skuHeaderPrice = container.querySelector('.sku-header-price') as HTMLElement
  expect(nutSkuHeaderRightExtra).toBeTruthy()
  expect(nutSkuContent).toHaveTextContent('配送地会影响库存，请先确认')
  expect(nutSkuOperate).toHaveTextContent('加入购物车')
  expect(skuHeaderPrice).toBeTruthy()
})