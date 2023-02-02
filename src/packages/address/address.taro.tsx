import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
} from 'react'
import {Icon,Popup} from '@nutui/nutui-react-taro'
import bem from '@/utils/bem'
import { ExistRender } from './existRender'
import { CustomRender } from './customRender.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import {
  RegionData,
  NextListObj,
  SelectedRegionObj,
  ChangeCallBack,
  CloseCallBack,
  AddressList,
} from './type'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface AddressProps extends IComponent {
  className?: string
  style?: CSSProperties
  modelValue: boolean
  modelSelect: (string | number)[]
  type: string
  customAddressTitle: string
  province: RegionData[]
  city: RegionData[]
  country: RegionData[]
  town: RegionData[]
  isShowCustomAddress: boolean
  existAddress: AddressList[]
  existAddressTitle: string
  customAndExistTitle: string
  height: string | number
  defaultIcon: string
  selectedIcon: string
  closeBtnIcon: string
  backBtnIcon: string
  onSelected?: (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => void
  onClose?: (cal: CloseCallBack) => void
  onCloseMask?: (cal: { closeWay: string }) => void
  onSwitchModule?: (cal: { type: string }) => void
  onChange?: (cal: ChangeCallBack) => void
  onTabChecked?: (cal: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  modelValue: false,
  modelSelect: [],
  type: 'custom',
  customAddressTitle: '请选择所在地区',
  province: [],
  city: [],
  country: [],
  town: [],
  isShowCustomAddress: true,
  existAddress: [],
  existAddressTitle: '配送至',
  customAndExistTitle: '选择其他地址',
  height: '200px',
  defaultIcon: 'location2',
  selectedIcon: 'Check',
  closeBtnIcon: 'circle-close',
  backBtnIcon: 'left',
} as AddressProps

export const Address: FunctionComponent<
  Partial<AddressProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    modelValue,
    modelSelect,
    children,
    type,
    height,
    customAddressTitle,
    existAddress,
    existAddressTitle,
    province,
    city,
    country,
    town,
    isShowCustomAddress,
    customAndExistTitle,
    selectedIcon,
    defaultIcon,
    closeBtnIcon,
    backBtnIcon,
    onChange,
    onSelected,
    onClose,
    onCloseMask,
    onSwitchModule,
    onTabChecked,
    style,
    className,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('address')

  const [privateType, setPrivateType] = useState<string>(type)
  const [tabName] = useState<string[]>(['province', 'city', 'country', 'town'])
  const [showPopup, setShowPopup] = useState(modelValue)
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegionObj>({
    province: { name: '' },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' },
  }) // 已选择的 省、市、县、镇

  const [selectedExistAddress, setSelectedExistAddress] = useState({}) // 当前选择的地址

  // 手动关闭 点击叉号(cross)，或者蒙层(mask)
  const handClose = () => {
    setShowPopup(false)
  }
  // 点击遮罩层关闭
  const clickOverlay = () => {
    onCloseMask && onCloseMask({ closeWay: 'mask' })
  }
  // 切换下一级列表
  const nextAreaList = (item: NextListObj) => {
    // onchange 接收的参数
    const callbackParams = {
      next: item.next,
      value: item.value,
      custom: item.custom,
    }

    setSelectedRegion({
      ...(item.selectedRegion as typeof selectedRegion),
    })

    onChange && onChange(callbackParams)
  }
  // 选择现有地址
  const selectedExist = (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => {
    setSelectedExistAddress(item)
    onSelected && onSelected(prevExistAdd, item, copyExistAdd)
    handClose()
  }
  // 初始化
  const initAddress = () => {
    for (let i = 0; i < tabName.length; i++) {
      setSelectedRegion({
        ...selectedRegion,
        [tabName[i]]: {},
      })
    }
  }
  // 关闭
  const closeFun = () => {
    const resCopy = {
      addressIdStr: '',
      addressStr: '',
      ...selectedRegion,
    }
    const res: CloseCallBack = {
      data: {
        addressIdStr: '',
        addressStr: '',
        ...selectedRegion,
      },
      type: privateType,
    }
    if (privateType === 'custom' || privateType === 'custom2') {
      const { province, city, country, town } = resCopy
      resCopy.addressIdStr = [
        (province as RegionData).id || 0,
        (city as RegionData).id || 0,
        (country as RegionData).id || 0,
        (town as RegionData).id || 0,
      ].join('_')
      resCopy.addressStr = [
        (province as RegionData).name,
        (city as RegionData).name,
        (country as RegionData).name,
        (town as RegionData).name,
      ].join('')
      res.data = resCopy
    } else {
      res.data = selectedExistAddress as AddressList
    }

    initAddress()

    onClose && onClose(res)
  }
  // 选择其他地址
  const handleSwitchModule = () => {
    if (privateType === 'exist') {
      setPrivateType('custom')
    } else {
      setPrivateType('exist')
    }
    initAddress()
    onSwitchModule && onSwitchModule({ type: privateType })
  }

  const headerRender = () => {
    return (
      <div className={b('header')}>
        <div className="arrow-back" onClick={handleSwitchModule}>
          {privateType === 'custom' && backBtnIcon && (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={backBtnIcon}
              color="#cccccc"
            />
          )}
        </div>

        <div className={b('header__title')}>
          {privateType === 'custom'
            ? locale.address.selectRegion || customAddressTitle
            : locale.address.deliveryTo || existAddressTitle}
        </div>

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
    )
  }

  useEffect(() => {
    setShowPopup(modelValue)
  }, [modelValue])

  useEffect(() => {
    if (!showPopup) {
      closeFun()
    }
  }, [showPopup])

  return (
    <>
      {showPopup && (
        <Popup
          visible={showPopup}
          position="bottom"
          onClickOverlay={clickOverlay}
          onClose={() => {
            closeFun()
          }}
        >
          <div
            className={`${b()} ${className || ''}`}
            style={{ ...style }}
            {...rest}
          >
            {headerRender()}
            {(privateType === 'custom' || privateType === 'custom2') && (
              <CustomRender
                modelValue={modelSelect}
                type={privateType}
                province={province}
                city={city}
                country={country}
                town={town}
                height={height}
                onNextArea={(cal) => {
                  nextAreaList && nextAreaList(cal)
                }}
                onTabClick={(type) => {
                  onTabChecked && onTabChecked(type)
                }}
                onClose={handClose}
              />
            )}
            {privateType === 'exist' && (
              <ExistRender
                type={privateType}
                existAddress={existAddress}
                selectedIcon={selectedIcon}
                defaultIcon={defaultIcon}
                isShowCustomAddress={isShowCustomAddress}
                customAndExistTitle={
                  locale.address.chooseAnotherAddress || customAndExistTitle
                }
                onSelected={selectedExist}
                onSwitchModule={handleSwitchModule}
              />
            )}
          </div>
        </Popup>
      )}
    </>
  )
}

Address.defaultProps = defaultProps
Address.displayName = 'NutAddress'
