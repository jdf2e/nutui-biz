#  Sku 商品规格选择

### Intro

Commonly found on product detail pages, mainly used to select product specifications.

### Install

```javascript
import { Sku } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts
import  React, { useState, useEffect } from 'react';
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
    })
    .catch((err) => console.log('Oh, error', err));
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
      price: '4599.00'
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
    console.log('Clicked operate button', op);
  };

  return (
    <>
      <Cell onClick={() => setBase(true)}>Basic Usage</Cell>
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

### Not Sell

:::demo

```ts
import  React, { useState, useEffect } from 'react';
import { Sku } from '@nutui/nutui-biz';
import { Cell, Button } from '@nutui/nutui-react'

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
  const [notSell, setNotSell] = useState<boolean>(false)
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

  const changeStepper = (count: number) => {
    console.log('Buy number', count);
  };

  const changeStepper = (count: number) => {
    console.log('购买数量', count);
  };

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
      <Cell onClick={() => setNotSell(true)}>Not Sell</Cell>
      <Sku 
        visible={notSell} 
        sku={skuData}
        goods={goodsInfo}
        btnExtraText="Sorry, this product is not currently in stock in the selected region"
        onChangeStepper={changeStepper}
        btnOptions={['buy', 'cart']}
        onSelectSku={selectSku}
        operateBtn = {
          <div style={skuOperateBoxStyle}>
            <Button style={skuOperateBoxDisFirstChildStyle} type="warning">View similar products</Button>
            <Button style={skuOperateBoxDisLastChildStyle} type="info">Arrival Notice</Button>
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

### Custom Stepper

:::demo

```ts
import  React, { useState, useEffect } from 'react';
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
  const [customStepper, setCustomStepper] = useState<boolean>(false)
  const [skuData, setSkuData] = useState<Skus>([] as unknown as Skus)
  const [goodsInfo, setGoodsInfo] = useState({})

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

  const stepperExtraText = () => {
    return <div style={{width:"100%",textAlign:"right",color:"#F00"}}>Minimum 2 pieces</div>;
  };

  const overLimit = () => {
    console.log('Limit value reached')
  };

  const changeStepper = (count: number) => {
    console.log('购买数量', count);
  };

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

  return (
    <>
      <Cell onClick={() => setCustomStepper(true)}>Custom Stepper</Cell>
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

### Custom Content

:::demo

```ts
import  React, { useState, useEffect } from 'react';
import { Sku, Address } from '@nutui/nutui-biz';
import { Celll, Price, Button } from '@nutui/nutui-react'

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
  const [customByContent, setCustomByContent] = useState<boolean>(false)
  const [addressDesc, setAddressDesc] = useState<string>('(The delivery address will affect the stock, please confirm first)')
  const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false)
  const [skuData, setSkuData] = useState<Skus>([] as unknown as Skus)
  const [goodsInfo, setGoodsInfo] = useState({})

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

  const clickBtnOperate = (op: string) => {
    console.log('点击了操作按钮', op);
  };

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

  const existAddress = [
    {
      id: 1,
      addressDetail: 'Somewhere No 18',
      cityName: 'Yizhuang',
      countyName: 'Daxing',
      provinceName: 'Beijing',
      selectedAddress: true,
      townName: ''
    },
    {
      id: 2,
      addressDetail: 'Somewhere No 19',
      cityName: 'Yizhuang',
      countyName: 'Daxing',
      provinceName: 'Beijing',
      selectedAddress: false,
      townName: ''
    },
    {
      id: 3,
      addressDetail: 'Somewhere No 20',
      cityName: 'Yizhuang',
      countyName: 'Daxing',
      provinceName: 'Beijing',
      selectedAddress: false,
      townName: ''
    },
    {
      id: 4,
      addressDetail: 'Somewhere No 21',
      cityName: 'Yizhuang',
      countyName: 'Daxing',
      provinceName: 'Beijing',
      selectedAddress: false,
      townName: ''
    }
  ];

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

  const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
    const { provinceName, countyName, cityName } = nowExistAdd;
    setAddressDesc(`${provinceName}${countyName}${cityName}`)
  };

  const close = (num: number)=>{}

  return (
    <div>
      <Cell onClick={() => setCustomByContent(true)}>Custom Content</Cell>
      <Sku 
        visible={customByContent} 
        sku={skuData}
        goods={goodsInfo}
        btnOptions={['buy', 'cart']}
        skuHeaderPrice={<div>
          <Price price={goodsInfo.price} needSymbol={true} thousands={false} />
          <span style={tagStyle}></span>
        </div>}
        skuHeaderExtra={<span className='nut-sku-header-right-extra'>weight：0.1kg skuId：{ goodsInfo.skuId }</span>}
        operateBtn = {
          <div style={skuOperateBoxStyle}>
            <Button style={skuOperateItemFirstChildStyle} shape="square" type="warning">Add Cart</Button>
            <Button style={skuOperateItemLastChildStyle} shape="square" type="primary">Buy it now</Button>
          </div>
        }
        skuSelectTop={
          <Cell
            style={{boxShadow: 'none', padding: '13px 0'}}
            title="Sent To"
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
        type="exit"
        existAddress={existAddress}
        onClose={close}
        isShowCustomAddress={false}
        onSelect={() => selectedAddress()}
        existAddressTitle="Deliver To"
      />
    </div>
  );
};
export default App;
```

:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| visible         | Whether to open popup               | Boolean |  `false`              |
| sku         | Sku data | Array | []               |
| goods |  Product Info    | Object | - |
| stepperMax         | Stepper max  | String \| Number | 99999               |
| stepperMin         | Stepper min  | String \| Number | 1               |
| btnOptions        |           Bottom button              | Array | [`confirm`]           |
| btnExtraText | Add text above button | String | -            |
| stepperTitle         | Stepper left text | String | `Buy Num`                |
| stepperExtraText        |   The text between the stepper and the headline       | () => ReactNode \| Boolean | `false`              |
| buyText |  Buy button text    | String | `Buy It Now` |
| addCartText          |        Add cart button text                 | String | `Add To cart`             |
| confirmText          |           Confirm button text              | String | `Confirm`             |
| skuHeader  | Custom header | ReactNode | -             |
| skuHeaderPrice  | Custom header price area| ReactNode | -             |
| skuHeaderExtra  | Extra header area | ReactNode | -             |
| skuSelectTop | Custom select top | ReactNode | -             |
| skuSelect | Custom sku | ReactNode | -             |
| skuStepper  | Custom stepper | ReactNode | -             |
| skuStepperBottom  | Custom stepper bottom | ReactNode | -             |
| skuOperate | Custom stepper bottom operation |ReactNode | -             |

### Events

| Attribute | Description           | Arguments     |
|--------|----------------|--------------|
| onSelectSku  | Emitted when select sku | {sku,skuIndex,parentSku,parentIndex} |
| onAdd  | Emitted when click stepper add button | value |
| onReduce  | Emitted when click stepper reduce button | value |
| overLimit  | Emitted when click stepper disabled button | value |
| onChangeStepper  | Emitted when click stepper change | value |
| onClickBtnOperate  | Emitted when click bottom button | {type:'confirm',value:'inputNumber value'} |
| onClickCloseIcon  | Emitted when click close button | - |
| onClickOverlay  | Emitted when click mask | - |
| onClose  | Emitted when popup close | - |