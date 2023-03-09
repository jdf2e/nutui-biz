# Address

### Intro

Load on demand Load the  Icon、Popup、Elevator dependent component

### Install

``` javascript
import { Address } from '@nutui/nutui-biz';
```

## Demo

### Choose Custom Address

:::demo
```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [normal,setNormal] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: 'Beijing', title: 'B' },
      { id: 2, name: 'Guangxi', title: 'G' },
      { id: 3, name: 'Jiangxi', title: 'J' },
      { id: 4, name: 'Sichuan', title: 'S' },
      { id: 5, name: 'Zhejiang', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: 'Chaoyang District', title: 'C' },
            { id: 8, name: 'Chongwen District', title: 'C' },
            { id: 9, name: 'Changping District', title: 'C' },
            { id: 6, name: 'Shijingshan District', title: 'S' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: 'Balizhuang Street', title: 'B' },
            { id: 9, name: 'Beiyuan', title: 'B' },
            { id: 4, name: 'Changying Township', title: 'C' },
          ])
          break;
        default:
          setNormal(false)
      }
    },200)
  }
  const close = (val) => {
      console.log(val)
      setNormal(false)

      if (val.data.addressStr) {
        setText(val.data.addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="Choose Address"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::

### Choose City

If you want to select a province, you need to set the region ID in the order of province City country town in the model-value, and ensure that the data of the corresponding province can be queried

:::demo
```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose City')
  const [normal,setNormal] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: 'Beijing', title: 'B' },
      { id: 2, name: 'Guangxi', title: 'G' },
      { id: 3, name: 'Jiangxi', title: 'J' },
      { id: 4, name: 'Sichuan', title: 'S' },
      { id: 5, name: 'Zhejiang', title: 'Z' },
  ])

  const [city, setCity] = useState([
    { id: 7, name: 'Chaoyang District', title: 'C' },
    { id: 8, name: 'Chongwen District', title: 'C' },
    { id: 9, name: 'Changping District', title: 'C' },
    { id: 6, name: 'Shijingshan District', title: 'S' },
  ])

  const [country, setCountry] = useState([
    { id: 3, name: 'Balizhuang Street', title: 'B' },
    { id: 9, name: 'Beiyuan', title: 'B' },
    { id: 4, name: 'Changying Township', title: 'C' },
  ])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]

    if(cal.next == 'town') setNormal(false)
  }
  const close = (val) => {
      console.log(val)
      setNormal(false)

      if (val.data.addressStr) {
        setText(val.data.addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          modelSelect={[1, 7, 3]}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="Choose Address"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::
### Floor display address information

:::demo
```tsx

import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [normal2,setNormal2] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: 'Beijing', title: 'B' },
      { id: 2, name: 'Guangxi', title: 'G' },
      { id: 3, name: 'Jiangxi', title: 'J' },
      { id: 4, name: 'Sichuan', title: 'S' },
      { id: 5, name: 'Zhejiang', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: 'Chaoyang District', title: 'C' },
            { id: 8, name: 'Chongwen District', title: 'C' },
            { id: 9, name: 'Changping District', title: 'C' },
            { id: 6, name: 'Shijingshan District', title: 'S' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: 'Balizhuang Street', title: 'B' },
            { id: 9, name: 'Beiyuan', title: 'B' },
            { id: 4, name: 'Changying Township', title: 'C' },
          ])
          break;
        default:
          setNormal2(false)
      }
    },200)
  }
  const close = (val) => {
      setNormal2(false)
      if (val.data.addressStr) {
        setText(val.data.addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal2(true)} />
      <Address
          modelValue={normal2}
          type="elevator"
          province={province}
          city={city}
          country={country}
          town={town}
          height="270px"
          onChange={onChange}
          onClose={close}
          customAddressTitle="Choose Address"
       />
    </>
  );
};
export default App;

```
:::

### 异步加载
Asynchronous loading is performed through the onClickItem event and the loading field. The onClickItem parameter is the address information and the resolve(`boolean`) method. Note that the resolve method must be called to confirm whether the asynchronous interface is completed. Pass in a `boolean` value, when it is `true`, it will switch to display the next level area, when it is `false`, it will close the popup window and trigger the `onClose` event.
:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [normal, setNormal] = useState(false);
  const [province, setProvince] = useState([
    { id: 1, name: 'Beijing', title: 'B' },
    { id: 2, name: 'Guangxi', title: 'G' },
    { id: 3, name: 'Jiangxi', title: 'J' },
    { id: 4, name: 'Sichuan', title: 'S' },
    { id: 5, name: 'Zhejiang', title: 'Z' },
  ])
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [town, setTown] = useState([]);

  const [showloading, setShowloading] = useState(false);
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });
  const onClickItem = async (cal: any, resolve: (arg0: boolean) => void) => {
    setShowloading(true);
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity([
            { id: 7, name: 'Chaoyang District', title: 'C' },
            { id: 8, name: 'Chongwen District', title: 'C' },
            { id: 9, name: 'Changping District', title: 'C' },
            { id: 6, name: 'Shijingshan District', title: 'S' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: 'Balizhuang Street', title: 'B' },
            { id: 9, name: 'Beiyuan', title: 'B' },
            { id: 4, name: 'Changying Township', title: 'C' },
          ])
          break;
        default:
          setShowloading(false);
          resolve(false);
          return;
      }
      setShowloading(false);
      resolve(true);
    }, 1000);
  };
  const close = (val) => {
    setNormal(false);
    if (val.data.addressStr) {
      setText(val.data.addressStr);
    }
  };
  return (
    <>
      <Cell title="Choose Address" desc={text} onClick={() => setNormal(true)} />
      <Address
        modelValue={normal}
        province={province}
        city={city}
        country={country}
        town={town}
        customAddressTitle="Choose Address"
        onClickItem={onClickItem}
        onClose={close}
        loading={showloading}
      />
    </>
  );
};
export default App;
```
:::

### Choose Exist Address


:::demo
```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [exist,setExist] = useState(false)
  const [existAddress, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: 'Tongzhou District',
        countyName: 'Ciqu Town',
        provinceName: 'Beijing',
        selectedAddress: true,
        townName: '',
        name: 'Ames',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: 'All',
        countyName: '',
        provinceName: 'Diaoyu Islands',
        selectedAddress: false,
        townName: '',
        name: 'Black',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: 'Jingdong Edifice',
        cityName: 'Daxing District',
        countyName: 'Courtyard 18, Kechuang 11th Street',
        provinceName: 'Beijing',
        selectedAddress: false,
        townName: '',
        name: 'Cobe',
        phone: '182****1718',
      },
    ])

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
      console.log(prevExistAdd,nowExistAdd)
  }

  const onChange = (cal) => {
      const name = address[cal.next]
      if (name.length < 1) {
        setExist(false)
      }
  }
  const close = (val) => {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data
      if (provinceName) {
        setText(provinceName + cityName + countyName + townName + addressDetail)
      }
      setExist(false)
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setExist(true)} />
      <Address
          modelValue={exist}
          type="exist"
          existAddress={existAddress}
          onChange={onChange}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selected}
          existAddressTitle="Delivery To"
       />
    </>
  );
};
export default App;

```
:::
### Custom Icon

:::demo
```tsx
import  React, { useState } from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [customImg,setCustomImg] = useState(false)
  const [icon, setIcon] = useState({
      selectedIcon: 'heart-fill',
      defaultIcon: 'heart1',
      closeBtnIcon: 'close',
      backBtnIcon: 'left',
  })

  const [existAddress, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: 'Tongzhou District',
        countyName: 'Ciqu Town',
        provinceName: 'Beijing',
        selectedAddress: true,
        townName: '',
        name: 'Ames',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: 'All',
        countyName: '',
        provinceName: 'Diaoyu Islands',
        selectedAddress: false,
        townName: '',
        name: 'Black',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: 'Jingdong Edifice',
        cityName: 'Daxing District',
        countyName: 'Courtyard 18, Kechuang 11th Street',
        provinceName: 'Beijing',
        selectedAddress: false,
        townName: '',
        name: 'Cobe',
        phone: '182****1718',
      },
    ])

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
      console.log(prevExistAdd,nowExistAdd)
      
  }

  const onChange = (cal) => {
      const name = address[cal.next]
      if (name.length < 1) {
        setCustomImg(false)
      }
  }
  const close = (val) => {
      console.log(val)
      setCustomImg(false)
      const { provinceName, cityName, countyName, townName, addressDetail } =  val.data
      if (provinceName) {
          setText(provinceName + cityName + countyName + townName + addressDetail)
        }
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setCustomImg(true)} />
      <Address
          modelValue={customImg}
          type="exist"
          existAddress={existAddress}
          onChange={onChange}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selected}
          defaultIcon={<Icon name={icon.defaultIcon}></Icon>}
          selectedIcon={<Icon name={icon.selectedIcon}></Icon>}
          closeBtnIcon={icon.closeBtnIcon}
       />
    </>
  );
};
export default App;

```
:::

### Custom Or Exist

:::demo
```tsx
import  React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [other,setOther] = useState(false)
  const [icon, setIcon] = useState({
      selectedIcon: 'heart-fill',
      defaultIcon: 'heart1',
      closeBtnIcon: 'close',
      backBtnIcon: 'left',
  })
  const [province, setProvince] = useState([
      { id: 1, name: 'Beijing', title: 'B' },
      { id: 2, name: 'Guangxi', title: 'G' },
      { id: 3, name: 'Jiangxi', title: 'J' },
      { id: 4, name: 'Sichuan', title: 'S' },
      { id: 5, name: 'Zhejiang', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })
  const [existAddress, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: 'Tongzhou District',
        countyName: 'Ciqu Town',
        provinceName: 'Beijing',
        selectedAddress: true,
        townName: '',
        name: 'Ames',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: 'All',
        countyName: '',
        provinceName: 'Diaoyu Islands',
        selectedAddress: false,
        townName: '',
        name: 'Black',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: 'Jingdong Edifice',
        cityName: 'Daxing District',
        countyName: 'Courtyard 18, Kechuang 11th Street',
        provinceName: 'Beijing',
        selectedAddress: false,
        townName: '',
        name: 'Cobe',
        phone: '182****1718',
      },
    ])

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
      console.log(prevExistAdd,nowExistAdd)
  }

  const onChange = (cal) => {
     
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: 'Chaoyang District', title: 'C' },
            { id: 8, name: 'Chongwen District', title: 'C' },
            { id: 9, name: 'Changping District', title: 'C' },
            { id: 6, name: 'Shijingshan District', title: 'S' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: 'Balizhuang Street', title: 'B' },
            { id: 9, name: 'Beiyuan', title: 'B' },
            { id: 4, name: 'Changying Township', title: 'C' },
          ])
          break;
        default:
          setOther(false)
      }
    },200)
  }
  const close = (val) => {
      setOther(false)
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data
        if (provinceName) {
          setText(provinceName + cityName + countyName + townName + addressDetail)
        }
      } else if (val.data.addressStr) {
          setText(val.data.addressStr)
        }
  }
  const switchModule = (val) => {
      if (val.type == 'custom') {
        console.log('click btn')
      } else {
        console.log('click icon')
      }
  }

  const closeMask = (val) => {
      console.log('closeMask', val)
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setOther(true)} />
      <Address
          modelValue={other}
          type="exist"
          existAddress={existAddress}
          province={province}
          city={city}
          country={country}
          town={town}
          backBtnIcon={icon.backBtnIcon}
          onChange={onChange}
          onClose={close}
          onSelected={selected}
          customAndExistTitle="Choose Other Address"
          onSwitchModule={switchModule}
          onCloseMask={closeMask}
       />
    </>
  );
};
export default App;

```
:::


## API

### Props

| Attribute            | Description               | Type   | Default  |
|----- | ----- | ----- | -----  |
| modelValue | Whether to open address | string | '' |
| modelSelect | Default address value | string\|number[] | [] |
| type | Choose type: exist/custom/elevator  | string |  `custom` |
| province | Province data | Array | [] |
| city | City data | Array | [] |
| country | Country data | Array | [] |
| town | Town data | Array | [] |
| hotCities | Hot cities | Array | [] |
| height | Popup height | string、number | `200px` |
| existAddress | Exist address list data | Array | [] |
| defaultIcon | Exist address default icon | ReactNode | '' |
| selectedIcon | Exist address selected icon | ReactNode | '' |
| closeBtnIcon | Custom close button icon | string | - |
| backBtnIcon | Custom back button icon | string | - |
| isShowCustomAddress | Whether to change custom address | boolean | `true` |
| customAddressTitle  | Custom address title | ReactNode | `Select Region` |
| existAddressTitle|  Exist address title | ReactNode | `Delivery To` |
| customAndExistTitle| Custom address and existing address switch button copywriting | ReactNode | `Choose Another Address` |
| loading | Display loading status, effective when type=`custom`/`elevator`    | boolean    | `false`   |
| bottom | Bottom area custom content     | ReactNode     | `false`   |

### Events
| Attribute            | Description               | Arguments   |
|----- | ----- | -----  |
| onChange | Emitted when to selected custom address |  reference onChange |
| onSelected |  Emitted when to selected exist address  | reference onSelected |
| onClose | Emitted when to close  | reference onClose  |
| onClickItem    | Triggered when a region is clicked      | reference onClickItem                   |
| onCloseMask |Emitted when to close mask | {closeWay:'mask'/'cross'} |
| onSwitchModule | Click to select another address or custom address to select the upper left corner of the return button triggered | {type:'exist'/'custom'/'elevator'} |


### onchange 
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| custom | The administrative region currently clicked  |  province / city / country / town
| next | The next level of the administrative region currently clicked | province / city / country / town
| value | The value of the currently clicked administrative region | {}

### onSelected 
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| First Option（prevExistAdd） |  Select the previously selected address |  {}
| Second Option（nowExistAdd） |  Currently selected address |  {}
| Third Option（arr） |  After selecting the existing address list |  {}

### onClose 
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| type | Selected Type  |  exist/custom/elevator
| data | Selected Data | {} 

### onClickItem 

| Attribute            | Description               | Options   |
| ---------------------- | --------------------------------------------- | ------------------------ |
| First Option（areaData） | Current click area information                 | Same as onChange callback parameter |
| Second option（resolve）  | resolve(`boolean`) callback method, used to confirm whether the asynchronous interface is completed, pass in `boolean` value, when it is `true`, it will switch to display the next level area, when it is `false`, it will close the popup window and trigger the `onClose` event | --   |