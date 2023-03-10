import React, { FunctionComponent, useEffect, useState } from 'react';
import { Icon, Popup } from '@nutui/nutui-react';
import { cn2 } from '@/utils/bem';
import { ExistRender } from './existRender';
import { CustomRender } from './customRender';
import { useConfig } from '@/packages/configprovider';
import {
  RegionData,
  NextListObj,
  SelectedRegionObj,
  CloseCallBack,
  AddressList,
  AddressType,
  AddressProps
} from './type';

export type { AddressProps } from './type';
export const Address: FunctionComponent<Partial<AddressProps>> = (props) => {
  const { locale } = useConfig();
  const {
    modelValue = false,
    modelSelect = [],
    children,
    type = 'custom',
    height = '200px',
    customAddressTitle = locale.address.selectRegion,
    existAddress = [],
    // hotCities = [],
    existAddressTitle = locale.address.deliveryTo,
    province = [],
    city = [],
    country = [],
    town = [],
    isShowCustomAddress = true,
    customAndExistTitle = '选择其他地址',
    selectedIcon = '',
    defaultIcon = '',
    closeBtnIcon = 'circle-close',
    backBtnIcon = 'left',
    onChange,
    onSelected,
    onClose,
    onClickItem,
    onCloseMask,
    onSwitchModule,
    onTabChecked,
    style,
    className,
    iconClassPrefix,
    iconFontClassName,
    loading = false,
    bottom = '',
    ...rest
  } = {
    ...props
  };
  const b = cn2('address');

  const [privateType, setPrivateType] = useState<AddressType>(type);
  const [tabName] = useState<string[]>(['province', 'city', 'country', 'town']);
  const [showPopup, setShowPopup] = useState(modelValue);
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegionObj>({
    province: { name: '' },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' }
  }); // 已选择的 省、市、县、镇

  const [selectedExistAddress, setSelectedExistAddress] = useState({}); // 当前选择的地址

  // 手动关闭 点击叉号(cross)，或者蒙层(mask)
  const handClose = () => {
    setShowPopup(false);
    // closeFun();
  };
  // 点击遮罩层关闭
  const clickOverlay = () => {
    onCloseMask && onCloseMask({ closeWay: 'mask' });
  };
  // 切换下一级列表
  const nextAreaList = (item: NextListObj, resStatus: boolean) => {
    // onchange 接收的参数
    const callbackParams = {
      next: item.next,
      value: item.value,
      custom: item.custom
    };

    setSelectedRegion({
      ...(item.selectedRegion as typeof selectedRegion)
    });

    onChange && onChange(callbackParams);
    if (!resStatus && onClickItem) {
      handClose();
    }
  };
  // 选择现有地址
  const selectedExist = (prevExistAdd: AddressList, item: AddressList, copyExistAdd: AddressList[]) => {
    setSelectedExistAddress(item);
    onSelected && onSelected(prevExistAdd, item, copyExistAdd);
    handClose();
  };
  // 初始化 重置已选择数据
  const initAddress = () => {
    for (let i = 0; i < tabName.length; i++) {
      setSelectedRegion({
        ...selectedRegion,
        [tabName[i]]: {}
      });
    }
  };
  // 关闭
  const closeFun = () => {
    const resCopy = {
      addressIdStr: '',
      addressStr: '',
      ...selectedRegion
    };
    const res: CloseCallBack = {
      data: {
        addressIdStr: '',
        addressStr: '',
        ...selectedRegion
      },
      type: privateType
    };
    if (privateType === 'custom' || privateType === 'elevator') {
      const { province, city, country, town } = resCopy;
      resCopy.addressIdStr = [
        (province as RegionData).id || 0,
        (city as RegionData).id || 0,
        (country as RegionData).id || 0,
        (town as RegionData).id || 0
      ].join('_');
      resCopy.addressStr = [
        (province as RegionData).name,
        (city as RegionData).name,
        (country as RegionData).name,
        (town as RegionData).name
      ].join('');
      res.data = resCopy;
    } else {
      res.data = selectedExistAddress as AddressList;
    }

    initAddress();

    onClose && onClose(res);
  };
  // 选择其他地址
  const handleSwitchModule = () => {
    setPrivateType(privateType === 'exist' ? 'custom' : 'exist');
    initAddress();
    onSwitchModule && onSwitchModule({ type: privateType });
  };
  const initSelectValue = (selectedRegion: SelectedRegionObj) => {
    setSelectedRegion({
      ...selectedRegion
    });
  };
  const headerRender = () => {
    return (
      <div className={b('header')}>
        <div className="arrow-back" onClick={handleSwitchModule}>
          {type == 'exist' && privateType == 'custom' && backBtnIcon && (
            <Icon classPrefix={iconClassPrefix} fontClassName={iconFontClassName} name={backBtnIcon} color="#cccccc" />
          )}
        </div>

        <div className={b('header__title')}>{privateType === 'custom' ? customAddressTitle : existAddressTitle}</div>

        <div onClick={() => handClose()}>
          {closeBtnIcon && (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={closeBtnIcon}
              color="#cccccc"
              size="18px"
            />
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setShowPopup(modelValue);
  }, [modelValue]);
  useEffect(() => {
    setPrivateType(type);
  }, [type]);

  return (
    <Popup
      visible={showPopup}
      position="bottom"
      onClickOverlay={clickOverlay}
      onClose={() => {
        closeFun();
      }}>
      <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
        {headerRender()}
        {(privateType === 'custom' || privateType === 'elevator') && (
          <CustomRender
            modelValue={modelSelect}
            type={privateType}
            province={province}
            city={city}
            country={country}
            town={town}
            loading={loading}
            // hotCities={hotCities}
            height={height}
            onNextArea={(cal, resStatus) => {
              nextAreaList && nextAreaList(cal, resStatus);
            }}
            onTabClick={(type) => {
              onTabChecked && onTabChecked(type);
            }}
            emitSelectedRegion={(cal) => {
              initSelectValue(cal);
            }}
            onClose={handClose}
            onClickItem={onClickItem}
          />
        )}
        {privateType === 'exist' && (
          <ExistRender
            type={privateType}
            existAddress={existAddress}
            selectedIcon={selectedIcon}
            defaultIcon={defaultIcon}
            isShowCustomAddress={isShowCustomAddress}
            customAndExistTitle={customAndExistTitle || locale.address.chooseAnotherAddress}
            onSelected={selectedExist}
            onSwitchModule={handleSwitchModule}
          />
        )}
        {bottom}
      </div>
    </Popup>
  );
};

Address.displayName = 'NutAddress';
