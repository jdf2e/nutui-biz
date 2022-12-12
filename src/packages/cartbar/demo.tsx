import React from 'react'
import { CartBar } from './cartbar'
import { CartBarIcon } from '../cartbaricon/cartbaricon'
import { CartBarButton } from '../cartbarbutton/cartbarbutton'
import { useTranslate } from '../../sites/assets/locale'

interface T {
}
const CartBarDemo = () => {
  const customTopHtml = () => {
    return <div style={{display: 'flex', height: '30px', alignItems: 'center', justifyContent: 'center', color: 'red'}}>我是自定义内容！</div>
  }
  
  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <CartBar>
          <CartBarIcon text="店铺" icon="shop" />
          <CartBarIcon text="购物车" icon="cart" />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
        <h2>带有徽标</h2>
        <CartBar>
          <CartBarIcon text="店铺" icon="shop" badge="10" />
          <CartBarIcon text="购物车" icon="cart" dot />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
        <h2>自定义图标颜色</h2>
        <CartBar>
          <CartBarIcon text="店铺" color="red" icon="shop" />
          <CartBarIcon text="购物车" icon="cart" />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
        <h2>图标无文本</h2>
        <CartBar>
          <CartBarIcon icon="shop" />
          <CartBarIcon icon="cart" />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
        <h2>胶囊型按钮</h2>
        <CartBar hasCapsuleButtons>
          <CartBarIcon text="店铺" icon="shop" />
          <CartBarIcon text="购物车" icon="cart" />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
        <h2>顶部自定义内容</h2>
        <CartBar top={customTopHtml()}>
          <CartBarIcon text="店铺" icon="shop" />
          <CartBarIcon text="购物车" icon="cart" />
          <CartBarButton text="加入购物车" type="danger" />
          <CartBarButton text="立即购买" type="warning" />
        </CartBar>
      </div>
    </>
  )
}

export default CartBarDemo
