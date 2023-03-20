import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { numericProp } from '@/utils/props'
import { Button } from '@nutui/nutui-react'
import { LongPressShell } from './longPressShell'
import { SwipeShell } from './swipeShell'
import { floatData } from '@/utils'

import { IComponent } from '@/utils/typings'

export interface IDataInfo {
  id: numericProp;
  addressName: string;
  phone: string;
  defaultAddress: boolean;
  fullAddress: string
}

export type functionType = (event: Event, item: Object) => void

export interface AddressListProps extends IComponent {
  data: Array<IDataInfo>
  longPress: boolean
  swipeEdition: boolean
  showBottomButton: boolean
  dataMapOptions: Object
  onAdd?: (event: Event) => void
  onDelIcon?: functionType
  onEditIcon?: functionType
  onItemClick?: functionType
  onSwipeDel?: functionType
  onLongCopy?: functionType
  onLongSet?: functionType
  onLongDel?: functionType
}

const defaultProps = {
  data: [] as any,
  longPress: false,
  swipeEdition: false,
  showBottomButton: true,
  dataMapOptions: {}
} as AddressListProps

export const AddressList: FunctionComponent<
  Partial<AddressListProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    data,
    longPress,
    swipeEdition,
    showBottomButton,
    dataMapOptions,
    onAdd,
    onDelIcon,
    onEditIcon,
    onItemClick,
    onSwipeDel,
    onLongCopy,
    onLongSet,
    onLongDel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('address-list')

  const addAddress = (event: any) => {
    onAdd?.(event)
    event.stopPropagation();
  }

  const [dataArray, setdataArray] = useState<Array<IDataInfo>>([])
  const dataInfo = {
    id: '',
    addressName: '',
    phone: '',
    defaultAddress: false,
    fullAddress: ''
  };

  const trowelData = () => {
    if(Object.keys(dataMapOptions).length > 0) {
      let floatDataArray = data.map((item) => {
        return floatData(dataInfo, item, dataMapOptions);
      });
      setdataArray(floatDataArray)
    }
  }

  useEffect(() => {
    trowelData()
  }, [data])

  const clickDelIcon = (event: Event, item: Object) => {
    onDelIcon?.(event, item)
    event.stopPropagation();
  }

  const clickEditIcon = (event: Event, item: Object) => {
    if(item){
      onEditIcon?.(event, item)
    }
    event.stopPropagation();
  }

  const clickContentItem = (event: Event, item: Object) => {
    if(item){
      onItemClick?.(event, item)
    }
    event.stopPropagation();
  }

  const clickSwipeDel = (event: Event, item: Object) => {
    if(item){
      onSwipeDel?.(event, item)
    }
    event.stopPropagation();
  }

  const clickLongCopy = (event: Event, item: Object) => {
    if(item){
      onLongCopy?.(event, item)
    }
    event.stopPropagation();
  }

  const clickLongSet = (event: Event, item: Object) => {
    if(item){
      onLongSet?.(event, item)
    }
    event.stopPropagation();
  }

  const clickLongDel = (event: Event, item: Object) => {
    if(item){
      onLongDel?.(event, item)
    }
    event.stopPropagation();
  }

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      {swipeEdition ? 
        dataArray.map((item, index) => {
          return <SwipeShell 
                  item={item} 
                  key={index} 
                  onDelIcon={clickDelIcon}
                  onEditIcon={clickEditIcon}
                  onItemClick={clickContentItem}
                  onSwipeDel={clickSwipeDel}
                />
        }) : dataArray.map((item, index) => {
          return <LongPressShell 
                  item={item} 
                  key={index} 
                  longPress={longPress}
                  onDelIcon={clickDelIcon}
                  onEditIcon={clickEditIcon}
                  onItemClick={clickContentItem}
                  onLongCopy={clickLongCopy}
                  onLongSet={clickLongSet}
                  onLongDel={clickLongDel}
                />
        })
      }
      {showBottomButton && <div className={b('bottom')} onClick={addAddress}>
        <Button block type="danger">{locale.addresslist.addAddress}</Button>
      </div>}
    </div>
  )
}

AddressList.defaultProps = defaultProps
AddressList.displayName = 'NutAddressList'
