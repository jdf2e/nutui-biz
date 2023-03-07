import React, { useState } from 'react'
import { GoodsFilter } from './goodsfilter'
import { Cell } from '@nutui/nutui-react'
import data from './data'

const GoodsFilterDemo = () => {

  const [state, setState] = useState(data)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  return (
    <>
      <div className='demo'>
        <h2>基础用法</h2>
        <Cell onClick={() => { setVisible1(true) }}>点击进行商品筛选</Cell>
        <GoodsFilter
          visible={visible1}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          onClose={() => { setVisible1(false) }}
        ></GoodsFilter>
        <h2>自定义图标</h2>
        <Cell onClick={() => { setVisible2(true) }}>点击进行商品筛选</Cell>
        <GoodsFilter
          visible={visible2}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          icon={'heart'}
          onClose={() => { setVisible2(false) }}
        ></GoodsFilter>
        <h2>设置默认展示行数</h2>
        <Cell onClick={() => { setVisible3(true) }}>点击进行商品筛选</Cell>
        <GoodsFilter
          visible={visible3}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          maxLine={3}
          onClose={() => { setVisible3(false) }}
        ></GoodsFilter>
        <h2>点击事件</h2>
        <Cell onClick={() => { setVisible4(true) }}>点击进行商品筛选</Cell>
        <GoodsFilter
          visible={visible4}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          onClose={() => { setVisible4(false) }}
          onReset={() => { console.log('onReset')}}
          onConfirm={(res) => { console.log('onConfirm', res) }}
          onClickAddress={() => {
            console.log('onClickAddress')
          }}
          onSelectedAttrs={(attr: any, selected: boolean, selectedAttrs: any) => {
            console.log('onSelectedAttrs', attr)
            console.log('selected', selected)
            console.log('selectedAttrs', selectedAttrs)
          }}
          onSelectedPrice={(range: any) => {
            console.log('onSelectedPrice', range)
          }}
        ></GoodsFilter>
      </div>
    </>
  );
};

export default GoodsFilterDemo;
