import React, { useState } from 'react';
import { useTranslate } from '../../sites/assets/locale';
import { Address } from './address';
import { Cell, Icon } from '@nutui/nutui-react';
import { CloseCallBack, AddressList, AddressResult } from './type';

interface T {
  [props: string]: string;
}

const AddressDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title: '选择地址',
      customAddress: '选择自定义地址',
      selectCity: '选中省市区',
      customAddress2: '楼层展示地址信息',
      normalLazy: '异步加载',
      hotCity: '热门城市',
      existAddress: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      delivery: '配送',
      other: '选择其他地址',
      Beijing: '北京',
      Guangxi: '广西',
      Jiangxi: '江西',
      Sichuan: '四川',
      Zhejiang: '浙江',
      city1: '朝阳区',
      city2: '崇文区',
      city3: '昌平区',
      city4: '石景山区',
      country1: '八里庄街道',
      country2: '北苑',
      country3: '常营乡',
      provinceName1:"北京市",
      provinceName2:"钓鱼岛",
      provinceName3:"北京市",
      cityName1:"通州区",
      cityName2:"钓鱼岛全区",
      cityName3:"大兴区",
      countyName1: '次渠镇',
      countyName2: '',
      countyName3: '科创十一街18号院',
      townName1: '',
      townName2: '',
      townName3: '',
      addressDetail3:"京东大厦"

    },
    'zh-TW': {
      basic: '基本用法',
      title: '選擇地址',
      customAddress: '選擇自定義地址',
      selectCity: '選中省市區',
      customAddress2: '樓層展示地址資訊',
      hotCity: '热门城市',
      existAddress: '選擇已有地址',
      icon: '自定義圖標',
      change: '自定義地址與已有地址切換',
      delivery: '配送',
      other: '選擇其他地址'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Choose Address',
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      customAddress2: 'Floor display address information',
      normalLazy: 'Async load',
      hotCity: 'Hot City',
      existAddress: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      delivery: 'Delivery',
      other: 'Choose Other Address',
      Beijing: 'Beijing',
      Guangxi: 'Guangxi',
      Jiangxi: 'Jiangxi',
      Sichuan: 'Sichuan',
      Zhejiang: 'Zhejiang',
      city1: 'Chaoyang District',
      city2: 'Chongwen District',
      city3: 'Changping District',
      city4: 'Shijingshan District',
      country1: 'Balizhuang Street',
      country2: 'Beiyuan',
      country3: 'Changying Township',
      provinceName1:"Beijing",
      provinceName2:"Diaoyu Islands",
      provinceName3:"Beijing",
      cityName1:"Tongzhou District",
      cityName2:"All",
      cityName3:"Daxing District",
      countyName1: 'Ciqu Town',
      countyName2: '',
      countyName3: 'Courtyard 18, Kechuang 11th Street',
      townName1: '',
      townName2: '',
      townName3: '',
      addressDetail3:"Jingdong Edifice"
    }
  });
  const addressData: any = {
    province: [
      { id: 1, name: translated.Beijing, title: 'B' },
      { id: 2, name: translated.Guangxi, title: 'G' },
      { id: 3, name: translated.Jiangxi, title: 'J' },
      { id: 4, name: translated.Sichuan, title: 'S' },
      { id: 5, name: translated.Zhejiang, title: 'Z' }
    ],
    city: [
      { id: 7, name: translated.city1, title: 'C' },
      { id: 8, name: translated.city2, title: 'C' },
      { id: 9, name: translated.city3, title: 'C' },
      { id: 10, name: translated.city4, title: 'S' }
    ],
    country: [
      { id: 3, name: translated.country1, title: 'B' },
      { id: 9, name: translated.country2, title: 'B' },
      { id: 4, name: translated.country3, title: 'C' }
    ],
    town: []
  };
  const [province, setProvince] = useState([
    { id: 1, name: translated.Beijing, title: 'B' },
    { id: 2, name: translated.Guangxi, title: 'G' },
    { id: 3, name: translated.Jiangxi, title: 'J' },
    { id: 4, name: translated.Sichuan, title: 'S' },
    { id: 5, name: translated.Zhejiang, title: 'Z' }
  ]);

  const [city, setCity] = useState<any>([]);
  const [country, setCountry] = useState<any>([]);
  const [town, setTown] = useState<any>([]);
  const [city2, setCity2] = useState<any>([]);
  const [country2, setCountry2] = useState<any>([]);
  const [town2, setTown2] = useState<any>([]);
  const [showloading, setShowloading] = useState(false);
  const [text, setText] = useState<any>({
    one: translated.title,
    two: translated.title,
    three: translated.title,
    four: translated.title,
    five: translated.title,
    six: translated.title,
    seven: translated.title
  });

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town
  });

  const [showPopup, setShowPopup] = useState({
    normal: false,
    normal2: false,
    normal3: false,
    exist: false,
    customImg: false,
    other: false,
    select: false,
    normalLazy: false
  });

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
      cityName: translated.cityName1,
      countyName: translated.countyName1,
      provinceName: translated.provinceName1,
      selectedAddress: true,
      townName: '',
      name: 'Ames',
      phone: '182****1718'
    },
    {
      id: 2,
      addressDetail: '',
      cityName: translated.cityName2,
      countyName: translated.countyName2,
      provinceName: translated.provinceName2,
      selectedAddress: false,
      townName: '',
      name: 'Black',
      phone: '182****1718'
    },
    {
      id: 3,
      addressDetail: translated.addressDetail3,
      cityName: translated.cityName3,
      countyName: translated.countyName3,
      provinceName: translated.provinceName3,
      selectedAddress: false,
      townName: '',
      name: 'Cobe',
      phone: '182****1718'
    }
  ]);
  const [normal, setNormal] = useState<any>([1, 0, 3]);
  const [normal2, setNormal2] = useState<any>([1, 7, 3]);
  const [normal3, setNormal3] = useState<any>([]);
  const [normalLazy, setNormalLazy] = useState<any>([]);
  const [select, setSelect] = useState<any>([1, 7, 3]);

  const showAddress = (tag: string) => {
    setShowPopup({
      ...showPopup,
      [tag]: !(showPopup as any)[tag]
    });
  };
  const onClickItem = async (cal: any, resolve: (arg0: boolean) => void) => {
    console.log(cal);
    setShowloading(true);
    setTimeout(() => {
      switch (cal.next) {
        case 'city':
          setCity2([...addressData.city]);
          break;
        case 'country':
          setCountry2([...addressData.country]);
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
  const onChange = (cal: any, tag: string) => {
    console.log('change', cal, tag);
    if (tag === 'normal2' || tag === 'normal3' || tag === 'select') {
      if (cal.next === 'town') {
        setShowPopup({
          ...showPopup,
          [tag]: false
        });
      }
    } else {
      setTimeout(() => {
        switch (cal.next) {
          case 'city':
            setCity([...addressData.city]);
            break;
          case 'country':
            setCountry([...addressData.country]);
            break;
          default:
            setShowPopup({
              ...showPopup,
              [tag]: false
            });
        }
      }, 200);
    }
  };

  const selected = (prevExistAdd: AddressList, nowExistAdd: AddressList, arr: AddressList[]) => {
    console.log('onSelected');
  };

  const switchModule = (val: { type: string }) => {
    if (val.type === 'custom') {
      console.log('点击了“选择其他地址”按钮');
    } else {
      console.log('点击了自定义地址左上角的返回按钮');
    }
  };

  const closeMask = (val: { closeWay: string }) => {
    console.log('closeMask', val);
  };

  const close1 = (val: CloseCallBack) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        one: (val.data as AddressResult).addressStr
      });
    }
    setNormal((val.data as AddressResult).addressIdStr.split('_'));
    setShowPopup({
      ...showPopup,
      normal: false
    });
  };

  const close2 = (val: CloseCallBack) => {
    if (val.type === 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult;
      if (provinceName) {
        setText({
          ...text,
          two: provinceName + cityName + countyName + townName + addressDetail
        });
      }
    } else if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        two: (val.data as AddressResult).addressStr
      });
    }
    setShowPopup({
      ...showPopup,
      exist: false
    });
  };

  const close3 = (val: CloseCallBack) => {
    if (val.type === 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult;
      if (provinceName) {
        setText({
          ...text,
          three: provinceName + cityName + countyName + townName + addressDetail
        });
      }
    } else if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        three: (val.data as AddressResult).addressStr
      });
    }

    setShowPopup({
      ...showPopup,
      customImg: false
    });
  };

  const close4 = (val: CloseCallBack) => {
    if (val.type === 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult;
      if (provinceName) {
        setText({
          ...text,
          four: provinceName + cityName + countyName + townName + addressDetail
        });
      }
    } else if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        four: (val.data as AddressResult).addressStr
      });
    }

    setShowPopup({
      ...showPopup,
      other: false
    });
  };

  const close5 = (val: CloseCallBack) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        five: (val.data as AddressResult).addressStr
      });
    }
    setNormal2((val.data as AddressResult).addressIdStr.split('_'));
    setShowPopup({
      ...showPopup,
      normal2: false
    });
  };

  const close7 = (val: CloseCallBack) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        seven: (val.data as AddressResult).addressStr
      });
    }
    setNormalLazy((val.data as AddressResult).addressIdStr.split('_'));

    setShowPopup({
      ...showPopup,
      normalLazy: false
    });
  };

  const close6 = (val: CloseCallBack) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        six: (val.data as AddressResult).addressStr
      });
    }
    setSelect((val.data as AddressResult).addressIdStr.split('_'));
    setShowPopup({
      ...showPopup,
      select: false
    });
  };

  return (
    <>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Cell title={translated.customAddress} desc={text.one} onClick={() => showAddress('normal')} />
        <h2>{translated.selectCity}</h2>
        <Cell title={translated.title} desc={text.six} onClick={() => showAddress('select')} />
        <h2>{translated.customAddress2}</h2>
        <Cell title={translated.title} desc={text.five} onClick={() => showAddress('normal2')} />
        <h2>{translated.normalLazy} </h2>
        <Cell title={translated.title} desc={text.seven} onClick={() => showAddress('normalLazy')} />
        <h2>{translated.existAddress}</h2>
        <Cell title={translated.title} desc={text.two} onClick={() => showAddress('exist')} />
        <h2>{translated.icon}</h2>
        <Cell title={translated.title} desc={text.three} onClick={() => showAddress('customImg')} />
        <h2>{translated.change}</h2>
        <Cell title={translated.title} desc={text.four} onClick={() => showAddress('other')} />

        <Address
          modelValue={showPopup.normal}
          modelSelect={normal}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle={translated.title}
          onChange={(cal) => onChange(cal, 'normal')}
          onClose={close1}
        />

        <Address
          modelValue={showPopup.select}
          modelSelect={select}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          customAddressTitle={translated.title}
          onChange={(cal) => onChange(cal, 'select')}
          onClose={close6}
        />

        <Address
          modelValue={showPopup.normal2}
          type="elevator"
          modelSelect={normal2}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          height="270px"
          onChange={(cal) => onChange(cal, 'normal2')}
          onClose={close5}
          customAddressTitle={translated.title}
        />

        <Address
          modelValue={showPopup.normalLazy}
          modelSelect={normalLazy}
          province={province}
          city={city2}
          country={country2}
          town={town2}
          customAddressTitle={translated.title}
          onClose={close7}
          onClickItem={onClickItem}
          loading={showloading}
        />

        <Address
          modelValue={showPopup.exist}
          type="exist"
          existAddress={existAddress}
          onChange={(cal) => onChange(cal, 'exist')}
          onClose={close2}
          isShowCustomAddress={false}
          onSelected={selected}
          existAddressTitle={translated.delivery}
        />

        <Address
          modelValue={showPopup.customImg}
          type="exist"
          existAddress={existAddress}
          onChange={(cal) => onChange(cal, 'customImg')}
          onClose={close3}
          isShowCustomAddress={false}
          onSelected={selected}
          defaultIcon={<Icon name={icon.defaultIcon}></Icon>}
          selectedIcon={<Icon name={icon.selectedIcon}></Icon>}
          closeBtnIcon={icon.closeBtnIcon}
        />

        <Address
          modelValue={showPopup.other}
          type="exist"
          existAddress={existAddress}
          province={province}
          city={city}
          country={country}
          town={town}
          backBtnIcon={icon.backBtnIcon}
          onChange={(cal) => onChange(cal, 'other')}
          onClose={close4}
          onSelected={selected}
          customAndExistTitle={translated.other}
          onSwitchModule={switchModule}
          onCloseMask={closeMask}
        />
      </div>
    </>
  );
};

export default AddressDemo;
