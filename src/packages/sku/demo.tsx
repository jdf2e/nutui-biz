import React, {useEffect, useState, CSSProperties} from 'react'
import { Sku } from './sku'
import Address from '../address'
import { AddressList, RegionData } from '../address/type'
import { Cell, Button, Price } from '@nutui/nutui-react'
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
interface tarnslatedOption {
  basic: string;
  notSell: string;
  customStepper: string;
  customByContent: string;
  deliverTo: string;
  sendTo: string;
  weight: string;
  skuId: string;
  addCart: string;
  buyItNow: string;
}

const SkuDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      notSell: '不可售',
      customStepper: '自定义计步器',
      customByContent: '自定义内容',
      deliverTo: '配送至',
      sendTo: '送至',
      weight: '重量',
      skuId: '编号',
      addCart: '加入购物车',
      buyItNow: '立即购买'
    },
    'en-US': {
      basic: 'Basic Usage',
      notSell: 'Not Sell',
      customStepper: 'Custom Stepper',
      customByContent: 'Custom Content',
      deliverTo: 'Deliver To',
      sendTo: 'Send To',
      weight: 'Weight',
      skuId: 'SkuId',
      addCart: 'Add Cart',
      buyItNow: 'Buy It Now'
    }
  });
  const [base, setBase] = useState<boolean>(false)
  const [notSell, setNotSell] = useState<boolean>(false)
  const [customStepper, setCustomStepper] = useState<boolean>(false)
  const [customByContent, setCustomByContent] = useState<boolean>(false)
  const [skuData, setSkuData] = useState<Skus[]>([])
  const [goodsInfo, setGoodsInfo] = useState<any>({})
  const [imagePathMap, setImagePathMap] = useState<any>({})
  const [addressDesc, setAddressDesc] = useState<string>('(配送地会影响库存，请先确认)')
  const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false)
  const [count, setCount] = useState<number>(2)
  const [existAddress] = useState([
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
  ])

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
      imagePath: "//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg",
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

  const changeStepper2 = (count: number) => {
    setCount(count)
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
    return <div style={{width:"100%",textAlign:"right",color:"#F00"}}>{count} 件起售</div>;
  };

  const selectedAddress = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
    const { provinceName, countyName, cityName } = nowExistAdd;
    setAddressDesc(`${provinceName}${countyName}${cityName}`)
  }

  const close = ()=>{setShowAddressPopup(false)}

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell onClick={() => setBase(true)}>{translated.basic}</Cell>
        <Sku 
          visible={base} 
          sku={skuData}
          goods={goodsInfo}
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setBase(false)} 
        />
        <h2>{translated.notSell}</h2>
        <Cell onClick={() => setNotSell(true)}>{translated.notSell}</Cell>
        <Sku 
          visible={notSell} 
          sku={skuData}
          goods={goodsInfo}
          btnExtraText="抱歉，此商品在所选区域暂无存货"
          onChangeStepper={changeStepper}
          onSelectSku={selectSku}
          operateBtn = {
            <div style={skuOperateBoxStyle}>
              <Button style={skuOperateBoxDisFirstChildStyle} type="warning">查看相似商品</Button>
              <Button style={skuOperateBoxDisLastChildStyle} type="info">到货通知</Button>
            </div>
          }
          onClose={() => setNotSell(false)} 
        />
        <h2>{translated.customStepper}</h2>
        <Cell onClick={() => setCustomStepper(true)}>{translated.customStepper}</Cell>
        <Sku 
          visible={customStepper} 
          sku={skuData}
          goods={goodsInfo}
          stepperMax={7}
          stepperMin={2}
          stepperExtraText={stepperExtraText}
          onChangeStepper={changeStepper2}
          onOverLimit={overLimit}
          btnOptions={['buy', 'cart']}
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setCustomStepper(false)} 
        />
        <h2>{translated.customByContent}</h2>
        <Cell onClick={() => setCustomByContent(true)}>{translated.customByContent}</Cell>
        <Sku 
          visible={customByContent} 
          sku={skuData}
          goods={goodsInfo}
          btnOptions={['buy', 'cart']}
          skuHeaderPrice={<div>
            <Price price={goodsInfo.price} needSymbol={true} thousands={false} />
            <span style={tagStyle}></span>
          </div>}
          skuHeaderExtra={<span className='nut-sku-header-right-extra'>{translated.weight}：0.1kg {translated.skuId}：{ goodsInfo.skuId }</span>}
          operateBtn = {
            <div style={skuOperateBoxStyle}>
              <Button style={skuOperateItemFirstChildStyle} shape="square" type="warning">{translated.addCart}</Button>
              <Button style={skuOperateItemLastChildStyle} shape="square" type="primary">{translated.buyItNow}</Button>
            </div>
          }
          skuSelectTop={
            <Cell
              style={{boxShadow: 'none', padding: '13px 0'}}
              title={translated.sendTo}
              desc={addressDesc}
              onClick={() => setShowAddressPopup(true)}
            />
          }
          onSelectSku={selectSku}
          onClickBtnOperate={clickBtnOperate}
          onClose={() => setCustomByContent(false)} 
        />
        <Address
          modelValue={showAddressPopup}
          type="exist"
          existAddress={existAddress}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selectedAddress}
          existAddressTitle={translated.deliverTo}
        />
      </div>
    </>
  )
}

export default SkuDemo
