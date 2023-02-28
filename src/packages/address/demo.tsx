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
      customAddress2: '选择自定义地址2',
      hotCity: '热门城市',
      existAddress: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      delivery: '配送',
      other: '选择其他地址'
    },
    'zh-TW': {
      basic: '基本用法',
      title: '選擇地址',
      customAddress: '選擇自定義地址',
      selectCity: '選中省市區',
      customAddress2: '選擇自定義地址2',
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
      customAddress2: 'Choose Custom Address2',
      hotCity: 'Hot City',
      existAddress: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      delivery: 'Delivery',
      other: 'Choose Other Address'
    }
  });
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' }
  ]);

  const handleClickHotCity = (city: any) => {
    console.log(city);
  };

  const addressData: any = {
    province: [
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '广西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
    ],
    city: [
      { id: 7, name: '朝阳区', title: 'C' },
      { id: 8, name: '崇文区', title: 'C' },
      { id: 9, name: '昌平区', title: 'C' },
      { id: 6, name: '石景山区', title: 'S' }
    ],
    country: [
      { id: 3, name: '八里庄街道', title: 'B' },
      { id: 9, name: '北苑', title: 'B' },
      { id: 4, name: '常营乡', title: 'C' }
    ],
    town: [],
    hotCities: [
      { id: 1, name: '北京' },
      { id: 2, name: '广西' },
      { id: 3, name: '江西' },
      { id: 4, name: '四川' },
      { id: 5, name: '浙江' }
    ],
    onClickHotCity: handleClickHotCity
  };

  const [city, setCity] = useState<any>([]);

  const [country, setCountry] = useState<any>([]);

  const [town, setTown] = useState<any>([]);

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
    select: false
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
      cityName: '次渠镇',
      countyName: '通州区',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探鱼',
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
      name: '探探鱼',
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
      name: '探探鱼',
      phone: '182****1718'
    }
  ]);
  const [normal, setNormal] = useState<any>([1, 0, 3]);
  const [normal2, setNormal2] = useState<any>([1, 7, 3]);
  const [normal3, setNormal3] = useState<any>([]);
  const [select, setSelect] = useState<any>([1, 7, 3]);

  const showAddress = (tag: string) => {
    setShowPopup({
      ...showPopup,
      [tag]: !(showPopup as any)[tag]
    });
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
            setCity([
              { id: 7, name: '朝阳区', title: 'C' },
              { id: 8, name: '崇文区', title: 'C' },
              { id: 9, name: '昌平区', title: 'C' },
              { id: 6, name: '石景山区', title: 'S' },
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
          setShowPopup({
            ...showPopup,
            [tag]: false
          });
        }
      }, 200);
    }
  };

  const selected = (prevExistAdd: AddressList, nowExistAdd: AddressList, arr: AddressList[]) => {
    console.log('选择');
  };

  const switchModule = (val: { type: string }) => {
    if (val.type === 'custom') {
      console.log('点击了“选择其他地址”按钮');
    } else {
      console.log('点击了自定义地址左上角的返回按钮');
    }
  };

  const closeMask = (val: { closeWay: string }) => {
    console.log('关闭弹层', val);
  };

  const close1 = (val: CloseCallBack) => {
    console.log(val);
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
    setNormal3((val.data as AddressResult).addressIdStr.split('_'));

    setShowPopup({
      ...showPopup,
      normal3: false
    });
  };

  const close6 = (val: CloseCallBack) => {
    console.log(val);
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
        <h2>{translated.hotCity} </h2>
        <Cell title={translated.title} desc={text.seven} onClick={() => showAddress('normal3')} />
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
          modelValue={showPopup.normal3}
          modelSelect={normal3}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          hotCities={addressData.hotCities}
          height="270px"
          onChange={(cal) => onChange(cal, 'normal3')}
          onClose={close7}
          onClickHotCity={handleClickHotCity}
          customAddressTitle={translated.title}
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
