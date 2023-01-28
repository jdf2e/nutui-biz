#  Sku 商品规格选择

### 介绍

常见于商详（单品）页，主要用来选择商品的规格。

### 安装

```javascript
import { Sku } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React, { useState } from 'react';
import { Sku } from '@nutui/nutui-biz';
import { Cell } from '@nutui/nutui-react'

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

const App = () => {
    const [base, setBase] = useState<boolean>(false)
    const [skuData, setSkuData] = useState<Skus>([] as unknown as Skus)
    const [goodsInfo, setGoodsInfo] = useState({})
    const [imagePathMap, setImagePathMap] = useState({})

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

  return (
    <>
        <Cell onClick={() => setBase(true)}>基本用法</Cell>
        <Sku 
            visible={base} 
            sku={skuData}
            goods={goodsInfo}
            onSelectSku={selectSku}
            onClickBtnOperate={clickBtnOperate}
            onClose={() => setBase(false)} 
        />
    </>
  );
};
export default App;
```

:::

### 不可售

:::demo

```ts
import  React, { useState } from 'react';
import { Sku } from '@nutui/nutui-biz';
import { Cell } from '@nutui/nutui-react'

const App = () => {
  const [notSell, setNotSell] = useState<boolean>(false)

  const changeStepper = (count: number) => {
    console.log('购买数量', count);
  };

    const skuOperateBoxStyle = {
        width: '100%',
        display: 'flex',
        padding: '8px 10px',
        boxSizing: 'border-box'
    } as CSSProperties

      const skuOperateBoxDisLastChildStyle = {
        width: '100%',
        flexShrink: 1
    } as CSSProperties

    const skuOperateBoxDisFirstChildStyle = {
        ...skuOperateBoxDisLastChildStyle,
        marginRight: '18px'
    } as CSSProperties

  return (
    <>
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
    </>
  );
};
export default App;
```

:::

### 自定义计步器

:::demo

```ts
import  React, { useState } from 'react';
import { Sku } from '@nutui/nutui-biz';
import { Cell } from '@nutui/nutui-react'

const App = () => {
    const [customStepper, setCustomStepper] = useState<boolean>(false)

      const stepperExtraText = () => {
        return <div style={{width:"100%",textAlign:"right",color:"#F00"}}>2 件起售</div>;
    };

      const overLimit = () => {
        console.log('已到极限值')
    };

  return (
    <>
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
    </>
  );
};
export default App;
```

:::

### 自定义插槽

:::demo

```ts
import  React, { useState } from 'react';
import { Sku } from '@nutui/nutui-biz';
import { Cell } from '@nutui/nutui-react'

const App = () => {
    const [customBySlot, setCustomBySlot] = useState<boolean>(false)
    const [addressDesc, setAddressDesc] = useState<string>('(配送地会影响库存，请先确认)')
    const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false)

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

      const skuOperateBoxStyle = {
        width: '100%',
        display: 'flex',
        padding: '8px 10px',
        boxSizing: 'border-box'
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

      const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
        const { provinceName, countyName, cityName } = nowExistAdd;
        setAddressDesc(`${provinceName}${countyName}${cityName}`)
    };

  return (
    <div>
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
  );
};
export default App;
```

:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:visible         | 是否显示商品规格弹框               | Boolean |  `false`              |
| sku         | 商品 sku 数据 | Array | []               |
| goods |  商品信息    | Object | - |
| stepper-max         | 设置 inputNumber 最大值  | String \| Number | 99999               |
| stepper-min         | 设置 inputNumber 最小值  | String \| Number | 1               |
| btn-options        |           底部按钮设置。['confirm','buy','cart' ] 分别对应确定、立即购买、加入购物车              | Array | [`confirm`]           |
| btn-extra-text | 按钮上部添加文案，默认为空，有值时显示 | String | -            |
| stepper-title         | 数量选择组件左侧文案 | String | `购买数量`                |
| stepper-extra-text        |   inputNumber 与标题之间的文案       | Function \| Boolean | `false`              |
| buy-text |  立即购买按钮文案    | String | `立即购买` |
| add-cart-text          |        加入购物车按钮文案                 | String | `加入购物车`             |
| confirm-text          |           确定按钮文案              | String | `确定`             |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| select-sku  | 切换规格类目时触发 | {sku,skuIndex,parentSku,parentIndex} |
| add  | inputNumber 点击增加按钮时触发 | value |
| reduce  | inputNumber 点击减少按钮时触发 | value |
| overLimit  | inputNumber 点击不可用的按钮时触发 | value |
| change-stepper  | 购买变化时触发 | value |
| click-btn-operate  | 点击底部按钮时触发 | {type:'confirm',value:'inputNumber value'} |
| click-close-icon  | 点击左上角关闭 icon 时触发 | - |
| click-overlay  | 点击遮罩时触发 | - |
| close  | 关闭弹层时触发 | - |


### Slots

Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。

| 事件名 | 说明           | 
|--------|----------------|
| sku-header  | 商品信息展示区，包含商品图片、价格、编号 | 
| sku-header-price  | 商品信息展示区，价格区域展示| 
| sku-header-extra  | 商品信息展示区，编号区域展示 | 
| sku-select-top | sku 展示区上方与商品信息展示区下方区域，无默认展示内容 | 
| sku-select | sku 展示区 | 
| sku-stepper  | 数量选择区 | 
| sku-stepper-bottom  | 数量选择区下方区域 | 
| sku-operate | 底部按钮操作区域 |