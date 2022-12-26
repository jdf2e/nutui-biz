import React, {useEffect, useState, CSSProperties} from 'react'
import { Sku } from './sku'
import Address from '../address'
import {Cell, Button, Price} from '@nutui/nutui-react'
import { useTranslate } from '../../sites/assets/locale'

interface Skus {
  id: number;
  name: string;
  list: SkuItem[];
  [key: string]: any;
}

interface SkuItem {
  id: number;
  name: string;
  imagePath: string;
  [key: string]: any;
}

const SkuDemo = () => {
  const [base, setBase] = useState<boolean>(false)
  const [notSell, setNotSell] = useState<boolean>(false)
  const [customStepper, setCustomStepper] = useState<boolean>(false)
  const [customBySlot, setCustomBySlot] = useState<boolean>(false)
  const [skuData, setSkuData] = useState<Skus>([] as unknown as Skus)
  const [goodsInfo, setGoodsInfo] = useState({})
  const [imagePathMap, setImagePathMap] = useState({})
  const [addressDesc, setAddressDesc] = useState<string>('(配送地会影响库存，请先确认)')
  const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false)

  const existAddress = [
    {
      id: 1,
      addressDetail: 'th ',
      cityName: '石景山区',
      countyName: '城区',
      provinceName: '北京',
      selectedAddress: true,
      townName: ''
    },
    {
      id: 2,
      addressDetail: '12_ ',
      cityName: '电饭锅',
      countyName: '扶绥县',
      provinceName: '北京',
      selectedAddress: false,
      townName: ''
    },
    {
      id: 3,
      addressDetail: '发大水比 ',
      cityName: '放到',
      countyName: '广宁街道',
      provinceName: '钓鱼岛全区',
      selectedAddress: false,
      townName: ''
    },
    {
      id: 4,
      addressDetail: '还是想吧百度吧 ',
      cityName: '研发',
      countyName: '八里庄街道',
      provinceName: '北京',
      selectedAddress: false,
      townName: ''
    }
  ];

  const getData = () => {
    fetch('//storage.360buyimg.com/nutui/3x/data.js')
      .then((response) => response.json())
      .then((res) => {
        const { Sku, Goods, imagePathMap } = res;
        setSkuData(Sku)
        setGoodsInfo(Goods)
        setImagePathMap(imagePathMap)
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
  };

  useEffect(() => {
    getData()
  }, [])

  const selectSku = (s: any) => {
    const { sku, parentIndex } = s;

    if (sku.disable) return false;

    let skuDataBck = skuData;

    skuDataBck[parentIndex].list.forEach((s) => {
      s.active = s.id == sku.id;
    });

    setSkuData(skuDataBck)

    setGoodsInfo({
      skuId: sku.id,
      price: '4599.00' // 商品信息展示区，商品价格
    })
    
    let goodsInfoBck = goodsInfo;
    skuData[0]?.list.forEach((el) => {
      if (el.active && !el.disable) {
        goodsInfoBck['imagePath'] = imagePathMap[el.id];
      }
    });
    
    // setGoodsInfo(goodsInfoBck)
  };

  const clickBtnOperate = (op: string) => {
    console.log('点击了操作按钮', op);
  };

  // stepper 更改
  const changeStepper = (count: number) => {
    console.log('购买数量', count);
  };

  // styles
  const skuOperateBoxStyle = {
    width: '100%',
    display: 'flex',
    padding: '8px 10px',
    boxSizing: 'border-box'
  } as CSSProperties

  const skuOperateItemStyle = {
    width: '100%',
    flexShrink: 1
  } as CSSProperties

  const skuOperateItemFirstChildStyle = {
    ...skuOperateItemStyle,
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px'
  } as CSSProperties

  const skuOperateItemLastChildStyle = {
    ...skuOperateItemStyle,
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  } as CSSProperties

  const skuOperateBoxDisLastChildStyle = {
    width: '100%',
    flexShrink: 1
  } as CSSProperties

  const skuOperateBoxDisFirstChildStyle = {
    ...skuOperateBoxDisLastChildStyle,
    marginRight: '18px'
  } as CSSProperties

  const tagStyle = {
    display: 'inline-block',
    width: '50px',
    height: '15px',
    fontSize: '12px',
    marginLeft: '10px',
    background:  `url('//storage.360buyimg.com/imgtools/bbdf6c9a2a-e3f6fbc0-fb4d-11eb-a27f-676da10c85f4.png') no-repeat
    center center`,
    backgroundSize: '100% 100%'
  } as CSSProperties

  // stepper 极限值
  const overLimit = () => {
    console.log('已到极限值')
  };

  const stepperExtraText = () => {
    return <div style={{width:"100%",textAlign:"right",color:"#F00"}}>2 件起售</div>;
  };

  const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
    const { provinceName, countyName, cityName } = nowExistAdd;
    setAddressDesc(`${provinceName}${countyName}${cityName}`)
  };

  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <Cell onClick={() => setBase(true)}>基本用法</Cell>
        <Sku 
          visible={base} 
          sku={skuData}
          goods={goodsInfo}
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setBase(false)} 
        />
        <h2>不可售</h2>
        <Cell onClick={() => setNotSell(true)}>不可售</Cell>
        <Sku 
          visible={notSell} 
          sku={skuData}
          goods={goodsInfo}
          btnExtraText="抱歉，此商品在所选区域暂无存货"
          onChangeStepper={changeStepper}
          btnOptions={['buy', 'cart']}
          onSelectSku={selectSku}
          operateBtn = {
            <div style={skuOperateBoxStyle}>
              <Button style={skuOperateBoxDisFirstChildStyle} type="warning">查看相似商品</Button>
              <Button style={skuOperateBoxDisLastChildStyle} type="info">到货通知</Button>
            </div>
          }
          onClose={() => setNotSell(false)} 
        />
        <h2>自定义计步器</h2>
        <Cell onClick={() => setCustomStepper(true)}>自定义计步器</Cell>
        <Sku 
          visible={customStepper} 
          sku={skuData}
          goods={goodsInfo}
          stepperMax={7}
          stepperMin={2}
          stepperExtraText={stepperExtraText}
          onChangeStepper={changeStepper}
          onOverLimit={overLimit}
          btnOptions={['buy', 'cart']}
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setCustomStepper(false)} 
        />
        <h2>自定义插槽</h2>
        <Cell onClick={() => setCustomBySlot(true)}>自定义插槽</Cell>
        <Sku 
          visible={customBySlot} 
          sku={skuData}
          goods={goodsInfo}
          btnOptions={['buy', 'cart']}
          skuHeaderPrice={<div>
            <Price price={goodsInfo.price} needSymbol={true} thousands={false} />
            <span style={tagStyle}></span>
          </div>}
          skuHeaderExtra={<span className='nut-sku-header-right-extra'>重量：0.1kg 编号：{ goodsInfo.skuId }</span>}
          operateBtn = {
            <div style={skuOperateBoxStyle}>
              <Button style={skuOperateItemFirstChildStyle} shape="square" type="warning">加入购物车</Button>
              <Button style={skuOperateItemLastChildStyle} shape="square" type="primary">立即购买</Button>
            </div>
          }
          skuSelectTop={
            <Cell
              style={{boxShadow: 'none', padding: '13px 0'}}
              title="送至"
              desc={addressDesc}
              onClick={() => setShowAddressPopup(true)}
            />
          }
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setCustomBySlot(false)} 
        />
        <Address
          modelValue={showAddressPopup}
          type="exit"
          existAddress={existAddress}
          onClose={close}
          isShowCustomAddress={false}
          onSelect={() => selectedAddress.bind(this)}
          existAddressTitle="配送至"
        />
      </div>
    </>
  )
}

export default SkuDemo
