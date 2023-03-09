# Address 地址

### 介绍

常见于网站顶部、购物车页和地址管理页面等，可进行配送地址的选择。

### 安装

```javascript
import { Address } from '@nutui/nutui-biz';
```

## 代码演示

### 选择自定义地址

:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [normal, setNormal] = useState(false);
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);

  const [city, setCity] = useState([]);

  const [country, setCountry] = useState([]);
  const [town, setTown] = useState([]);

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });

  const onChange = (cal) => {
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity([
            { id: 6, name: '朝阳区', title: 'C' },
            { id: 7, name: '崇文区', title: 'C' },
            { id: 8, name: '昌平区', title: 'C' },
            { id: 9, name: '石景山区', title: 'S' }
          ]);
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' }
          ]);
          break;
        default:
          setNormal(false);
      }
    }, 200);
  };
  const close = (val) => {
    setNormal(false);
    if (val.data.addressStr) {
      setText(val.data.addressStr);
    }
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setNormal(true)} />
      <Address
        modelValue={normal}
        province={province}
        city={city}
        country={country}
        town={town}
        customAddressTitle="请选择所在地区"
        onChange={onChange}
        onClose={close}
      />
    </>
  );
};
export default App;
```

:::

### 选中省市区

如果想选中某个省市区，需要在 modelSelect 中按照 province、city、country、town 的顺序配置想要展示的地区 id 值，并且保证有能查询到对应的省市区数据即可。

:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [normal, setNormal] = useState(false);
  const [value] = useState([1, 7, 3]);
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);

  const [city, setCity] = useState([
    { id: 7, name: '朝阳区', title: 'C' },
    { id: 8, name: '崇文区', title: 'C' },
    { id: 9, name: '昌平区', title: 'C' },
    { id: 10, name: '石景山区', title: 'S' }
  ]);

  const [country, setCountry] = useState([
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常营乡', title: 'C' }
  ]);
  const [town, setTown] = useState([]);

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });

  const onChange = (cal) => {
    const name = address[cal.next];
    if (cal.next === 'town') setNormal(false);
  };
  const close = (val) => {
    setNormal(false);
    if (val.data.addressStr) {
      setText(val.data.addressStr);
    }
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setNormal(true)} />
      <Address
        modelValue={normal}
        modelSelect={value}
        province={province}
        city={city}
        country={country}
        town={town}
        customAddressTitle="请选择所在地区"
        onChange={onChange}
        onClose={close}
      />
    </>
  );
};
export default App;
```

:::

### 楼层展示地址信息

:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [normal2, setNormal2] = useState(false);
  const [value] = useState([1, 7, 3]);
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [town, setTown] = useState([]);

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });

  const onChange = (cal) => {
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 10, name: '石景山区', title: 'S' }
          ]);
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 4, name: '北苑', title: 'B' },
            { id: 5, name: '常营乡', title: 'C' }
          ]);
          break;
        default:
          setNormal2(false);
      }
    }, 200);
  };
  const close = (val) => {
    setNormal2(false);
    if (val.data.addressStr) {
      setText(val.data.addressStr);
    }
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setNormal2(true)} />
      <Address
        modelValue={normal2}
        modelSelect={value}
        type="elevator"
        province={province}
        city={city}
        country={country}
        town={town}
        height="270px"
        onChange={onChange}
        onClose={close}
        customAddressTitle="请选择所在地区"
      />
    </>
  );
};
export default App;
```

:::

### 异步加载
通过 onClickItem 事件与 loading 字段，进行异步加载。onClickItem 参数为地址信息与 resolve(`boolean`) 方法，注意 resolve 方法必须调用，，用以确认异步接口是否完成。传入 `boolean` 值，当为 `true` 时，将切换显示下一级地区，当为 `false` 时，将关闭弹窗并触发 `onClose` 事件。
:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [normal, setNormal] = useState(false);
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);
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
            { id: 6, name: '朝阳区', title: 'C' },
            { id: 7, name: '崇文区', title: 'C' },
            { id: 8, name: '昌平区', title: 'C' },
            { id: 9, name: '石景山区', title: 'S' }
          ]);
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' }
          ]);
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
      <Cell title="选择地址" desc={text} onClick={() => setNormal(true)} />
      <Address
        modelValue={normal}
        province={province}
        city={city}
        country={country}
        town={town}
        customAddressTitle="请选择所在地区"
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

### 选择已有地址

:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [exist, setExist] = useState(false);
  const [existAddress, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '通州区',
      countyName: '次渠镇',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: 'Ames',
      phone: '182****1718'
    },
    {
      id: 2,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: 'Black',
      phone: '182****1718'
    },
    {
      id: 3,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: 'Cobe',
      phone: '182****1718'
    }
  ]);

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
    console.log(prevExistAdd, nowExistAdd);
  };

  const onChange = (cal) => {
    const name = address[cal.next];
    if (name.length < 1) {
      setExist(false);
    }
  };
  const close = (val) => {
    const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail);
    }
    setExist(false);
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setExist(true)} />
      <Address
        modelValue={exist}
        type="exist"
        existAddress={existAddress}
        onChange={onChange}
        onClose={close}
        isShowCustomAddress={false}
        onSelected={selected}
        existAddressTitle="配送至"
      />
    </>
  );
};
export default App;
```

:::

### 自定义图标

:::demo

```tsx
import React, { useState } from 'react';
import { Cell, Icon } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [customImg, setCustomImg] = useState(false);
  const [icon, setIcon] = useState({
    selectedIcon: 'heart-fill',
    defaultIcon: 'heart1',
    closeBtnIcon: 'close',
    backBtnIcon: 'left'
  });

  const [existAddress, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '通州区',
      countyName: '次渠镇',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: 'Ames',
      phone: '182****1718'
    },
    {
      id: 2,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: 'Black',
      phone: '182****1718'
    },
    {
      id: 3,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: 'Cobe',
      phone: '182****1718'
    }
  ]);

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
    console.log(prevExistAdd, nowExistAdd);
  };

  const onChange = (cal) => {
    const name = address[cal.next];
    if (name.length < 1) {
      setCustomImg(false);
    }
  };
  const close = (val) => {
    setCustomImg(false);
    const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail);
    }
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setCustomImg(true)} />
      <Address
        modelValue={customImg}
        type="exist"
        existAddress={existAddress}
        onChange={onChange}
        onClose={close}
        isShowCustomAddress={false}
        onSelected={selected}
        defaultIcon={<Icon name="heart-fill"></Icon>}
        selectedIcon={<Icon name="heart-fill"></Icon>}
        closeBtnIcon={icon.closeBtnIcon}
      />
    </>
  );
};
export default App;
```

:::

### 自定义地址与已有地址切换

:::demo

```tsx
import React, { useState } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Address } from '@nutui/nutui-biz';

const App = () => {
  const [text, setText] = useState('请选择地址');
  const [other, setOther] = useState(false);
  const [icon, setIcon] = useState({
    selectedIcon: 'heart-fill',
    defaultIcon: 'heart1',
    closeBtnIcon: 'close',
    backBtnIcon: 'left'
  });
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);

  const [city, setCity] = useState([]);

  const [country, setCountry] = useState([]);
  const [town, setTown] = useState([]);
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });
  const [existAddress, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '通州区',
      countyName: '次渠镇',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: 'Ames',
      phone: '182****1718'
    },
    {
      id: 2,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: 'Black',
      phone: '182****1718'
    },
    {
      id: 3,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: 'Cobe',
      phone: '182****1718'
    }
  ]);

  const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
    console.log(prevExistAdd, nowExistAdd);
  };

  const onChange = (cal) => {
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 10, name: '石景山区', title: 'S' }
          ]);
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' }
          ]);
          break;
        default:
          setOther(false);
      }
    }, 200);
  };
  const close = (val) => {
    setOther(false);
    if (val.type === 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
      if (provinceName) {
        setText(provinceName + cityName + countyName + townName + addressDetail);
      }
    } else if (val.data.addressStr) {
      setText(val.data.addressStr);
    }
  };
  const switchModule = (val) => {
    if (val.type === 'custom') {
      console.log('点击了“选择其他地址”按钮');
    } else {
      console.log('点击了自定义地址左上角的返回按钮');
    }
  };

  const closeMask = (val) => {
    console.log('关闭弹层', val);
  };
  return (
    <>
      <Cell title="选择地址" desc={text} onClick={() => setOther(true)} />
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
        customAndExistTitle="选择其他地址"
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

| 字段                | 说明           | 类型         | 默认值           |
| ------------ | --------------------- | ------------ | ---------------- |
| modelValue  | 是否打开地址选择                   | string           | ''               |
| modelSelect   | 设置默认选中地址，按照 province、city、country、town 顺序， Id 组成的数组           | string\|number[] | []   |
| type   | 地址选择类型 exist/custom/elevator            | string           | `custom`         |
| province    | 省，每个省的对象中，必须有 name 字段，如果类型选择 elevator，必须指定 title 字段为首字母      | Array   | [] |
| city    | 市，每个市的对象中，必须有 name 字段，如果类型选择 elevator，必须指定 title 字段为首字母    | Array   | []    |
| country  | 县，每个县的对象中，必须有 name 字段，如果类型选择 elevator，必须指定 title 字段为首字母     | Array   | []  |
| town   | 乡/镇，每个乡/镇的对象中，必须有 name 字段，如果类型选择 elevator，必须指定 title 字段为首字母    | Array    | []   |
| height   | 弹层中内容容器的高度，仅在 type="elevator"时有效       | string \| number | `200px` |
| existAddress   | 已存在地址列表，每个地址对象中，必传值 provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | Array  | []  |
| defaultIcon    | 已有地址列表默认图标，type=‘exist’ 时生效     | ReactNode           | ''   |
| selectedIcon   | 已有地址列表选中图标，type=‘exist’ 时生效     | ReactNode           | ''   |
| closeBtnIcon   | 自定义关闭弹框按钮图标                       | string           | -    |
| backBtnIcon    | 自定义地址与已有地址切换时，自定义返回的按钮图标          | string  | -                |
| isShowCustomAddress | 是否可以切换自定义地址选择，type=‘exist’ 时生效    | boolean          | `true`           |
| customAddressTitle  | 自定义地址选择文案，type='custom' 时生效      | ReactNode           | `请选择所在地区` |
| existAddressTitle   | 已有地址文案 ，type=‘exist’ 时生效            | ReactNode           | `配送至`         |
| customAndExistTitle | 自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效    | ReactNode   | `选择其他地址`   |
| loading | 展示 loading 状态，type=`custom`/`elevator` 时生效     | boolean      | `false`   |
| bottom | 底部区域自定义内容          | ReactNode     | `false`   |

- provinceName 省的名字
- cityName 市的名字
- countyName 县的名字
- townName 乡/镇的名字
- addressDetail 具体地址
- selectedAddress 字段用于判断当前地址列表的选中项。

### Events

| 字段           | 说明                                                 | 回调参数                           |
| -------------- | ---------------------------------------------------- | ---------------------------------- |
| onChange       | 自定义选择地址时，选择地区时触发                     | 参考 onChange                      |
| onSelected     | 选择已有地址列表时触发                               | 参考 onSelected                    |
| onClose        | 地址选择弹框关闭时触发                               | 参考 onClose                       |
| onClickItem    | 点击地区时触发                                       | 参考 onClickItem                   |
| onCloseMask    | 点击遮罩层或点击右上角叉号关闭时触发                 | {closeWay:'mask'/'cross'}          |
| onSwitchModule | 点击‘选择其他地址’或自定义地址选择左上角返回按钮触发 | {type:'exist'/'custom'/'elevator'} |

### onChange 回调参数

| 参数   | 说明                                   | 可能值                                           |
| ------ | -------------------------------------- | ------------------------------------------------ |
| custom | 当前点击的行政区域                     | province(省) / city(市) / country(县) / town(乡) |
| next   | 当前点击的行政区域的下一级             | province(省) / city(市) / country(县) / town(乡) |
| value  | 当前点击的行政区域的值（返回传入的值） | {}                                               |

### onSelected 回调参数

| 参数                       | 说明                                                   | 可能值 |
| -------------------------- | ------------------------------------------------------ | ------ |
| 第一个参数（prevExistAdd） | 选择前选中的地址                                       | {}     |
| 第二个参数（nowExistAdd）  | 当前选中的地址                                         | {}     |
| 第三个参数（arr）          | 选择完之后的已有地址列表（selectedAddress 值发生改变） | {}     |

### onClose 回调参数

| 参数 | 说明                                                | 可能值                |
| ---- | --------------------------------------------------- | --------------------- |
| type | 地址选择类型 exist/custom/elevator                  | exist/custom/elevator |
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | {}                    |

### onClickItem 回调参数

| 参数                   | 说明                                           | 可能值                   |
| ---------------------- | --------------------------------------------- | ------------------------ |
| 第一个参数（areaData） | 当前点击地区信息                 | 与 onChange 回调参数相同 |
| 第二个参数（resolve）  | resolve(`boolean`) 回调方法，用以确认异步接口是否完成，传入 `boolean` 值，当为 `true` 时，将切换显示下一级地区，当为 `false` 时，将关闭弹窗并触发 `onClose` 事件 | --   |
