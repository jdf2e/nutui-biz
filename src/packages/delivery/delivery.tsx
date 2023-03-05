import React, {
  FunctionComponent,
  ReactNode,
  CSSProperties,
  useState,
  useEffect,
  useRef
} from 'react'
import bem from '@/utils/bem'
import { Popup, Radio, Button } from '@nutui/nutui-react'

import DeliveryDate from '@/packages/deliverydate'
import DeliveryDateTime from '@/packages/deliverydatetime'
import DeliveryDateTimeAccurate from '@/packages/deliverydatetimeaccurate'

import { IComponent } from '@/utils/typings'

import { DeliveryDateType, DateType, DateTimeType, DateTimeAccurateType, DateTimesType, DeliveryTypes, DeliveryData } from './type';
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
  onCloseMask?: () => void;
  onClose?: () => void;
  onSure?: (item: DateTimesType, type: string) => void;
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
  onClose: () => { },
  onSure: (item: DateTimesType, type: string) => { }
} as DeliveryProps

export const Delivery: FunctionComponent<
  Partial<DeliveryProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {

  const defaultDeliveryType = 'jd'; // 默认的配送方式key
  const maxCount = 3; // 标签（配送方式、配送时间）的最大数量

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
    children,
    onCloseMask,
    onClose,
    onSure,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('delivery')

  const [deliveryType, setDeliveryType] = useState(defaultDeliveryType);
  const [deliveryTime, setDeliveryTime] = useState(''); // 送货/安装/其他时间的默认选中
  const [timeDate, setTimeDate] = useState("");
  const [accurateTimeDate, setAccurateTimeDate] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<DateTimesType | null>(null);

  const clickOverlay = () => {
    onCloseMask?.();
  }

  const closeFun = () => {
    onClose?.();
  }

  const initDeliveryTime = () => {
    if (!deliveryDateData || !deliveryDateData.length) return;
    const dataLen = deliveryDateData.length;
    for (let i = 0; i < dataLen; i++) {
      const type = deliveryDateData[i].type;
      const times = deliveryDateData[i].times;
      let currentDeliveryTime = null;
      switch (type) {
        case 'date':
          currentDeliveryTime = times.find((item: DateTimesType) => (item as DateType).selected);
          if (currentDeliveryTime) {
            setDeliveryTime(deliveryDateData[i].label);
          }
          break;
        case 'date-time':
          times.forEach((item: DateTimesType, index: number) => {
            if (index === 0) {
              setTimeDate((item as DateTimeType).label);
            }
            const children = (item as DateTimeType).children;
            if (children && children.length) {
              currentDeliveryTime = children.find((subitem: DateTimesType) => (subitem as DateType).selected);
              if (currentDeliveryTime) {
                setTimeDate((item as DateTimeType).label);
                setDeliveryTime(deliveryDateData[i].label);
              }
            }
          })
          break;
        case 'date-time-accurate':
          times.forEach((item: DateTimesType, index: number) => {
            if (index === 0) {
              setAccurateTimeDate((item as DateTimeAccurateType).label);
            }
            const children = (item as DateTimeType).children;
            if (children && children.length) {
              children.forEach((subitem: DateTimesType) => {
                const subChildren = (subitem as DateTimeType).children;
                if (subChildren && subChildren.length) {
                  currentDeliveryTime = subChildren.find((item: DateTimesType) => (item as DateType).selected);
                  if (currentDeliveryTime) {
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
    setSelectedItem(null);
    if (label == defaultDeliveryType) {
      getSelectContainerHeight();
    }
  }

  const getSelectContainerHeight = () => {
    setTimeout(() => {
      if (selectRef.current && deliveryDateData && deliveryDateData.length) {
        (selectRef.current as HTMLDivElement).style.height =
          `calc(100% - ${titleRef.current?.offsetHeight}px - ${contentRef.current?.offsetHeight}px - ${buttonRef.current?.offsetHeight}px)`;
      }
    }, 100);
  }

  const getDeliveryTypeItem = (label: string) => {
    const deliveryType = deliveryTypes?.find((item: DeliveryTypes) => item.label === label);
    return deliveryType
  }

  const handleDeliveryTimeChange = (label: string | number | boolean) => {
    setDeliveryTime(label as string);
  }

  const getDeliveryTimeItem = (label: string) => {
    return deliveryDateData?.find((item: DeliveryData) => item.label === label)
  }

  const handleDeliveryDate = (item: DateTimesType) => {
    setSelectedItem(item);
  }

  const onHandleSure = (selectedItem: DateTimesType, deliveryType: string) => {
    onSure?.(selectedItem, deliveryType);
    onClose?.();
  }

  useEffect(() => {
    if (visible && deliveryDateData) {
      initDeliveryTime();
    }
  }, [visible, deliveryDateData]);

  useEffect(() => {
    if (visible) {
      getSelectContainerHeight();
    }
  }, [visible]);

  return (
    <>
      <Popup
        visible={visible}
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
          <div className={`${b('title')}`} ref={titleRef}>{title}</div>
          <div className={`${b('content')}`} ref={contentRef}>
            <div className={`${b('content-type')}`}>
              <Radio.RadioGroup value={deliveryType} onChange={handleTypeChange}>
                {
                  deliveryTypes && deliveryTypes.slice(0, maxCount).map((item: DeliveryTypes) => (
                    <Radio
                      key={item.label}
                      shape="button"
                      value={item.label}
                      disabled={typeof item.disabled !== 'undefined' ? item.disabled : false}
                    >{item.text}</Radio>
                  ))
                }
              </Radio.RadioGroup>
              {
                getDeliveryTypeItem(deliveryType) && <div className={`${b('content-type-tips')}`}>
                  {getDeliveryTypeItem(deliveryType)?.desc}
                </div>
              }
            </div>
            {
              deliveryType === defaultDeliveryType
                ?
                <div className={`${b('content-deliverytime')}`}>
                  {
                    !getDeliveryTypeItem(deliveryType)?.children
                      ?
                      <>
                        <div className={`${b('content-deliverytime-title')}`}>{deliveryTimeTitle}</div>
                        <div className={`${b('content-deliverytime-tabs')}`}>
                          <Radio.RadioGroup value={deliveryTime} onChange={handleDeliveryTimeChange}>
                            {
                              deliveryDateData && deliveryDateData.slice(0, maxCount).map((item: DeliveryData) => (
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
                      </>
                      :
                      getDeliveryTypeItem(deliveryType)?.children
                  }
                </div>
                :
                <div className={`${b('content-deliverytime')}`}>
                  {getDeliveryTypeItem(deliveryType)?.children}
                </div>
            }
          </div>
          {
            deliveryType === defaultDeliveryType && !getDeliveryTypeItem(deliveryType)?.children
              ?
              <div className={`${b('select')}`} ref={selectRef}>
                {
                  getDeliveryTimeItem(deliveryTime)?.type === 'date' &&
                  <DeliveryDate
                    data={getDeliveryTimeItem(deliveryTime)?.times as DateType[]}
                    activeKey={deliveryTime}
                    onSelect={(item: DateType) => { handleDeliveryDate(item) }}
                  ></DeliveryDate>
                }
                {
                  getDeliveryTimeItem(deliveryTime)?.type === 'date-time' &&
                  <DeliveryDateTime
                    data={getDeliveryTimeItem(deliveryTime)?.times as DateTimeType[]}
                    activeKey={timeDate}
                    onSelect={(item: DateTimeType) => { handleDeliveryDate(item) }}
                  ></DeliveryDateTime>
                }
                {
                  getDeliveryTimeItem(deliveryTime)?.type === 'date-time-accurate' &&
                  <DeliveryDateTimeAccurate
                    data={getDeliveryTimeItem(deliveryTime)?.times as DateTimeAccurateType[]}
                    activeKey={accurateTimeDate}
                    onSelect={(item: DateTimeAccurateType) => { handleDeliveryDate(item) }}
                  ></DeliveryDateTimeAccurate>
                }
              </div>
              : null
          }
          {children}
          <div className={b('btn')} ref={buttonRef}>
            <Button onClick={() => { onHandleSure(selectedItem as DateTimesType, deliveryType) }} type="primary">
              {buttonText}
            </Button>
          </div>
        </div>
      </Popup>
    </>
  )
}

Delivery.defaultProps = defaultProps
Delivery.displayName = 'NutDelivery'
