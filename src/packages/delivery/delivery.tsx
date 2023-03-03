import React, {
  FunctionComponent,
  ReactNode,
  CSSProperties,
  useState,
  useEffect
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from "classnames";
import bem from '@/utils/bem'
import { Popup, Radio } from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

export interface DeliveryBaseType {
  label: string;
  text: ReactNode;
  selected?: boolean;
}

export interface DateType extends DeliveryBaseType { }
export interface DateTimeType {
  label: string;
  title: ReactNode;
  children: Array<DateType>;
}

export interface DateTimeAccurateType {
  label: string;
  title: ReactNode;
  children: DateTimeType[]
}

export type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;
export interface DeliveryTypes extends DeliveryBaseType {
  disabled?: boolean;
  desc?: ReactNode;
}
export interface DeliveryData extends DeliveryTypes {
  type: DeliveryDateType;
  times: DateTimesType[];
}
export interface DeliveryProps extends IComponent {
  visible: boolean;
  title?: string;
  deliveryTypes?: Array<DeliveryTypes>;
  deliveryTimeTitle?: ReactNode;
  deliveryDateType?: DeliveryDateType;
  deliveryDateData?: DeliveryData[];
  popStyle?: CSSProperties;
  popClassName?: string;
  buttonText?: ReactNode;
  onCloseMask: () => void;
}

const defaultProps = {
  visible: false,
  title: '配送',
  deliveryTimeTitle: '送货时间',
  deliveryTypes: [{
    label: 'jd',
    text: '京东快递',
    disabled: false,
    desc: ''
  }],
  buttonText: '确定',
  deliveryDateType: 'date',
  deliveryDateData: [],
  popStyle: { "height": '80%' },
  popClassName: '',
  onCloseMask: () => { },
} as DeliveryProps

export const Delivery: FunctionComponent<
  Partial<DeliveryProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {

  const { locale } = useConfig()

  const {
    visible,
    title,
    deliveryTimeTitle,
    deliveryTypes,
    buttonText,
    deliveryDateType,
    deliveryDateData,
    popStyle,
    popClassName,
    className,
    style,
    onCloseMask,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('delivery')

  const [showPopup, setShowPopup] = useState(false);
  const [deliveryType, setDeliveryType] = useState('jd');
  const [deliveryTime, setDeliveryTime] = useState(''); // 送货/安装/其他时间的默认选中
  const [timeDate, setTimeDate] = useState("");
  const [accurateTimeDate, setAccurateTimeDate] = useState("");
  const [date, setDate] = useState<DateType>({ label: '', text: '' });

  const clickOverlay = () => {
    onCloseMask && onCloseMask();
  }

  const closeFun = () => {

  }

  const initDeliveryTime = () => {
    if(!deliveryDateData || !deliveryDateData.length) return;
    const dataLen = deliveryDateData.length;
    for(let i = 0; i < dataLen; i++) {
      const type = deliveryDateData[i].type;
      const times = deliveryDateData[i].times;
      let currentDeliveryTime = null;
      switch(type) {
        case 'date': 
          currentDeliveryTime = times.find((item: DateTimesType) => (item as DateType).selected);
          // console.log(currentDeliveryTime);
          if(currentDeliveryTime) {
            setDeliveryTime(deliveryDateData[i].label);
            return;
          }
          break;
        case 'date-time':
          times.forEach((item: DateTimesType, index: number) => {
            if(index === 0) {
              setTimeDate((item as DateTimeType).label);
            }
            const children = (item as DateTimeType).children;
            if(children && children.length) {
              currentDeliveryTime = children.find((subitem: DateTimesType) => (subitem as DateType).selected);
              // console.log(currentDeliveryTime);
              if(currentDeliveryTime) {
                setTimeDate((item as DateTimeType).label);
                setDeliveryTime(deliveryDateData[i].label);
                // return false;
              }
            }
          })
          break;
        case 'date-time-accurate': 
          times.forEach((item: DateTimesType, index: number) => {
            if(index === 0) {
              setAccurateTimeDate((item as DateTimeAccurateType).label);
            }
            const children = (item as DateTimeType).children;
            if(children && children.length) {
              children.forEach((subitem: DateTimesType) => {
                const subChildren = (subitem as DateTimeType).children;
                if(subChildren && subChildren.length) {
                  currentDeliveryTime = subChildren.find((item: DateTimesType) => (item as DateType).selected);
                  // console.log(currentDeliveryTime);
                  if(currentDeliveryTime) {
                    setAccurateTimeDate((item as DateTimeAccurateType).label);
                    setDeliveryTime(deliveryDateData[i].label);
                  }
                }
              })
            }
          })
          break;
        default:
          break;
      }
    }
  }

  const handleTypeChange = (label: string | number | boolean) => {
    setDeliveryType(label as string);
  }

  const getDeliveryTypeDesc = (label: string) => {
    const deliveryType = deliveryTypes?.find((item: DeliveryTypes) => item.label === label);
    return deliveryType?.desc
  }

  const handleDeliveryTimeChange = (label: string | number | boolean) => {
    setDeliveryTime(label as string);
  }

  const getDeliveryTimeItem = (label: string) => {
    return deliveryDateData?.find((item: DeliveryData) => item.label === label)
  }

  const handleDate = (item: DateType) => {
    setDate(item);
  }

  const handleTimeDateLeft = (item: DateTimeType, date: string) => {
    if(date === item.label) return;
    setTimeDate(item.label);
  }

  const getDeliveryTimeChildren = (deliveryTime: string, label: string) => {
    return getDeliveryTimeItem(deliveryTime)?.times.find((item: DateTimesType) => (item as DateTimeType).label === label) as DateTimeType
  }

  const handleTimeDateAccurateTypeLeft = (item: DateTimeAccurateType, date: string) => {
    if(date === item.label) return;
    setAccurateTimeDate(item.label);
  }

  const getDeliveryTimeAccurateChildren
   = (deliveryTime: string, label: string) => {
    console.log(getDeliveryTimeItem(deliveryTime)?.times.find((item: DateTimesType) => (item as DateTimeAccurateType).label === label) as DateTimeAccurateType);
    return getDeliveryTimeItem(deliveryTime)?.times.find((item: DateTimesType) => (item as DateTimeAccurateType).label === label) as DateTimeAccurateType
  }


  useEffect(() => {

    setShowPopup(visible)

  }, [visible])

  useEffect(() => {
    if(visible && deliveryDateData) {
      initDeliveryTime();
    }
  }, [visible, deliveryDateData]);


  return (
    <>
      <Popup
        visible={showPopup}
        position="bottom"
        style={popStyle}
        className={popClassName}
        closeable
        round
        onClickOverlay={clickOverlay}
        onClickCloseIcon={clickOverlay}
        onClose={closeFun}
      >
        <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
          <div className={`${b('title')}`}>{title}</div>
          <div className={`${b('content')}`}>
            <div className={`${b('content-type')}`}>
              <Radio.RadioGroup value={deliveryType} onChange={handleTypeChange}>
                {
                  deliveryTypes && deliveryTypes.map((item: DeliveryTypes) => (
                    <Radio
                      key={item.label}
                      shape="button"
                      value={item.label}
                      disabled={typeof item.disabled !== 'undefined' ? item.disabled : false}
                    >{item.text}</Radio>
                  ))
                }
              </Radio.RadioGroup>
              <div className={`${b('content-type-tips')}`}>
                {getDeliveryTypeDesc(deliveryType)}
              </div>
            </div>
            <div className={`${b('content-deliverytime')}`}>
              <div className={`${b('content-deliverytime-title')}`}>{deliveryTimeTitle}</div>
              <div className={`${b('content-deliverytime-tabs')}`}>
                <Radio.RadioGroup value={deliveryTime} onChange={handleDeliveryTimeChange}>
                  {
                    deliveryDateData && deliveryDateData.map((item: DeliveryData) => (
                      <Radio
                        shape="button"
                        value={item.label}
                        key={item.label}
                        disabled={typeof item.disabled !== 'undefined' ? item.disabled : false}
                      >{item.text}</Radio>
                    ))
                  }
                </Radio.RadioGroup>
              </div>
              <div className={`${b('content-deliverytime-tips')}`}>
                {getDeliveryTimeItem(deliveryTime)?.desc}
              </div>
              <div className={`${b('content-deliverytime-select')}`}>
                {/* <div className={`${b('content-deliverytime-select-date')}`}>
                  {
                    getDeliveryTimeItem(deliveryTime) && Array.isArray(getDeliveryTimeItem(deliveryTime)?.times)
                      ?
                      getDeliveryTimeItem(deliveryTime)?.times.map((item: DateTimesType) => (
                        <div
                          className={classNames([
                            `${b('content-deliverytime-select-date-item')}`,
                            `${(item as DateType).text === date ? b('content-deliverytime-select-date-item--current') : ''}`,
                          ])}
                          key={(item as DateType).label}
                          onClick={ () => { handleDate(item as DateType) } }
                        >{(item as DateType).text}</div>
                      ))
                      : null
                  }
                </div> */}
                {/* <div className={`${b('content-deliverytime-select-stage')}`}>
                  <div className={`${b('content-deliverytime-select-stage-pannel')}`}>
                    {
                      getDeliveryTimeItem(deliveryTime)?.times.map((item: DateTimesType) => (
                        <div
                          className={classNames([
                            `${b('content-deliverytime-select-stage-pannel-title')}`,
                            `${(item as DateTimeType).label === timeDate ? b('content-deliverytime-select-stage-pannel-title--current') : ''}`,
                          ])}
                          key={ (item as DateTimeType).label }
                          onClick={ () => { handleTimeDateLeft(item as DateTimeType, timeDate) } }
                        >{ (item as DateTimeType).title }</div>
                      ))
                    }
                  </div>
                  <div className={`${b('content-deliverytime-select-stage-detail')}`}>
                    {
                      getDeliveryTimeChildren(deliveryTime, timeDate)?.children.map((item: DateType) => (
                        <div 
                          className={classNames([
                            `${b('content-deliverytime-select-stage-detail-item')}`,
                            `${((item as DateType).text === date.text && (item as DateType).label === date.label) ? b('content-deliverytime-select-stage-detail-item--current') : ''}`,
                          ])}
                          key={ item.label }
                          onClick={ () => { handleDate(item as DateType) } }
                        >{ item.text }</div>
                      ))
                    }
                  </div>
                </div> */}
                <div className={`${b('content-deliverytime-select-accurate')}`}>
                  <div className={`${b('content-deliverytime-select-accurate-pannel')}`}>
                    {
                        getDeliveryTimeItem(deliveryTime)?.times.map((item: DateTimesType) => (
                          <div
                            className={classNames([
                              `${b('content-deliverytime-select-accurate-pannel-title')}`,
                              `${(item as DateTimeAccurateType).label === accurateTimeDate ? b('content-deliverytime-select-accurate-pannel-title--current') : ''}`,
                            ])}
                            key={ (item as DateTimeType).label }
                            onClick={ () => { handleTimeDateAccurateTypeLeft(item as DateTimeAccurateType, accurateTimeDate) } }
                          >{ (item as DateTimeAccurateType).title }</div>
                        ))
                      }
                  </div>
                  <div className={`${b('content-deliverytime-select-accurate-detail')}`}>
                    {
                      getDeliveryTimeAccurateChildren(deliveryTime, accurateTimeDate)?.children.map((item: DateTimeType) => (
                        <div className={`${b('content-deliverytime-select-accurate-detail-item')}`} key={ item.label }>
                          <div className={`${b('content-deliverytime-select-accurate-detail-item-title')}`}>{ item.title }</div>
                          <div className={`${b('content-deliverytime-select-accurate-detail-item-times')}`}>
                            {
                              item?.children.map((subitem: DateType) => (
                                <div 
                                  className={classNames([
                                  `${b('content-deliverytime-select-accurate-detail-item-times-time')}`,
                                  `${((subitem as DateType).text === date.text && (subitem as DateType).label === date.label) ? b('content-deliverytime-select-accurate-detail-item-times-time--current') : ''}`,
                                  ])} 
                                  key={ subitem.label }
                                  onClick={ () => { handleDate(subitem as DateType) } }
                                >{ subitem.text }</div>
                              ))
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  )
}

Delivery.defaultProps = defaultProps
Delivery.displayName = 'NutDelivery'
