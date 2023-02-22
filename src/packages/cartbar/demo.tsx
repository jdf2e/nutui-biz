import React from 'react'
import { CartBar } from './cartbar'
import { CartBarIcon } from '../cartbaricon/cartbaricon'
import { CartBarButton } from '../cartbarbutton/cartbarbutton'
import { useTranslate } from '../../sites/assets/locale'

interface tarnslatedOption {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  shop: string
  shoppingCart: string
  addCart: string
  buyItNow: string
}

const CartBarDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      title1: '带有徽标',
      title2: '自定义图标颜色',
      title3: '图标无文本',
      title4: '胶囊型按钮',
      title5: '顶部自定义内容',
      shop: '店铺',
      shoppingCart: '购物车',
      addCart: '加入购物车',
      buyItNow: '立即购买'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'With Badge',
      title2: 'Custom Icon Color',
      title3: 'Icon Without Text',
      title4: 'Capsule Button',
      title5: 'Custom Top Content',
      shop: 'shop',
      shoppingCart: 'shoppingCart',
      addCart: 'add cart',
      buyItNow: 'buy it now'
    }
  });
  const customTopHtml = () => {
    return <div style={{display: 'flex', height: '30px', alignItems: 'center', justifyContent: 'center', color: 'red'}}>{translated.title5}</div>
  }
  
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <CartBar>
          <CartBarIcon text={translated.shop} icon="shop" />
          <CartBarIcon text={translated.shoppingCart} icon="cart" />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
        <h2>{translated.title1}</h2>
        <CartBar>
          <CartBarIcon text={translated.shop} icon="shop" badge="10" />
          <CartBarIcon text={translated.shoppingCart} icon="cart" dot />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
        <h2>{translated.title2}</h2>
        <CartBar>
          <CartBarIcon text={translated.shop} color="red" icon="shop" />
          <CartBarIcon text={translated.shoppingCart} icon="cart" />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
        <h2>{translated.title3}</h2>
        <CartBar>
          <CartBarIcon icon="shop" />
          <CartBarIcon icon="cart" />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
        <h2>{translated.title4}</h2>
        <CartBar hasCapsuleButtons>
          <CartBarIcon text={translated.shop} icon="shop" />
          <CartBarIcon text={translated.shoppingCart} icon="cart" />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
        <h2>{translated.title5}</h2>
        <CartBar top={customTopHtml()}>
          <CartBarIcon text={translated.shop} icon="shop" />
          <CartBarIcon text={translated.shoppingCart} icon="cart" />
          <CartBarButton text={translated.addCart} buttonProps={{type: 'danger'}} />
          <CartBarButton text={translated.buyItNow} buttonProps={{type: 'warning'}} />
        </CartBar>
      </div>
    </>
  )
}

export default CartBarDemo
