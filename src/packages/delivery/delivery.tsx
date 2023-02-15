import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import { Popup, Radio } from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export type DeliveryDateType = 'date' | 'date-time' | 'date-time-fee'
export interface DeliveryProps extends IComponent {
  visible: boolean;
  title: string;
  buttonText?: string | React.ReactNode;
  deliveryDateType?: DeliveryDateType;
  deliveryDateData?: any[];
  popStyle?: React.CSSProperties;
  popClassName?: string;
  onCloseMask: () => void;
}

const defaultProps = {
  visible: false,
  title: '配送',
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
  const [deliveryTime, setDeliveryTime] = useState('1');

  const clickOverlay = () => {
    onCloseMask && onCloseMask();
  }

  const closeFun = () => {

  }

  useEffect(() => {

    setShowPopup(visible)

  }, [visible])

  return (
    <>
      <Popup
        visible={showPopup}
        position="bottom"
        style={popStyle}
        className={popClassName}
        onClickOverlay={clickOverlay}
        onClickCloseIcon={clickOverlay}
        closeable
        round
        onClose={() => {
          closeFun()
        }}
      >
        <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
          <div className={`${b('title')}`}>{title}</div>
          <div className={`${b('content')}`}>
            <div className={`${b('type')}`}>
              <Radio.RadioGroup value={deliveryType}>
                <Radio shape="button" value="jd">京东快递</Radio>
                <Radio shape="button" value="sf">无接触配送</Radio>
              </Radio.RadioGroup>
              <div className={`${b('type__tips')}`}>
                若社区村镇人员出入管控，京东快递可送货上门
              </div>
            </div>
            <div className={`${b('deliverytime')}`}>
              <div className={`${b('deliverytime__title')}`}>送货时间</div>
              <div className={`${b('deliverytime__time')}`}>
                <Radio.RadioGroup value={deliveryTime}>
                  <Radio shape="button" value="1">标准达</Radio>
                  <Radio shape="button" value="2">京准达</Radio>
                </Radio.RadioGroup>
              </div>
              <div className={`${b('deliverytime__tips')}`}>
                精确收货时间段的派送服务
              </div>
            </div>
            <div className={`${b('select')}`}>
              {/* <div className={`${b('select__stage')}`}>
                <div className={`${b('select__stage__pannel')}`}>
                  <div className={`${b('select__stage__pannel-title')} `}>2月23日(今天)</div>
                  <div className={`${b('select__stage__pannel-title')} ${b('select__stage__pannel--current')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__stage__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__stage__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__stage__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__stage__pannel-title')}`}>2月24日(星期三)</div>
                </div>
                <div className={`${b('select__stage__detail')}`}>
                  <div className={`${b('select__stage__detail-item')} ${b('select__stage__detail--current')}`}>09:00-15:00</div>
                  <div className={`${b('select__stage__detail-item')} `}>09:00-15:00</div>
                  <div className={`${b('select__stage__detail-item')} `}>09:00-15:00</div>
                  <div className={`${b('select__stage__detail-item')} `}>09:00-15:00</div>
                </div>
              </div> */}
              {/* <div className={`${b('select__accurate')}`}>
                <div className={`${b('select__accurate__pannel')}`}>
                  <div className={`${b('select__accurate__pannel-title')} `}>2月23日(今天)</div>
                  <div className={`${b('select__accurate__pannel-title')} ${b('select__accurate__pannel--current')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__accurate__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__accurate__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__accurate__pannel-title')}`}>2月24日(星期三)</div>
                  <div className={`${b('select__accurate__pannel-title')}`}>2月24日(星期三)</div>
                </div>
                <div className={`${b('select__accurate__detail')}`}>
                  <div className={`${b('select__accurate__detail-item')}`}>
                    <div className="title">上午</div>
                    <div className={`${b('select__accurate__detail-item__times')}`}>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                    </div>
                  </div>
                  <div className={`${b('select__accurate__detail-item')}`}>
                    <div className="title">下午</div>
                    <div className={`${b('select__accurate__detail-item__times')}`}>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                    </div>
                  </div>
                  <div className={`${b('select__accurate__detail-item')}`}>
                    <div className="title">晚间</div>
                    <div className={`${b('select__accurate__detail-item__times')}`}>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                      <div className="time">09:00-11:00</div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className={`${b('select__date')}`}>
                <div className={`${b('select__date-item')} ${b('select__date--current')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>2月24日(星期三)</div>
                <div className={`${b('select__date-item')}`}>暂不配送</div>
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
