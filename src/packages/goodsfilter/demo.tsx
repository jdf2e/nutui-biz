import React, { useState } from 'react'
import { GoodsFilter } from './goodsfilter'
import { Cell } from '@nutui/nutui-react'
import data from './data'

const GoodsFilterDemo = () => {

  const [state, setState] = useState(data)
  const [visiable1, setVisiable1] = useState(false)
  return (
    <>
      <div className='demo'>
        <h2>基础用法</h2>
        <Cell onClick={() => { setVisiable1(true) }}>点击进行商品筛选</Cell>
        <GoodsFilter
          visiable={visiable1}
          priceRanges={state.priceRanges}
          goodsAttrs={state.goodsAttrs}
          filterAttrs={state.filterAttrs}
          maxLine={3}
          icon={'heart'}
          onClose={() => { setVisiable1(false) }}
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
