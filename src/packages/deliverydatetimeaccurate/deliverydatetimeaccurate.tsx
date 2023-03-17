import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import classNames from "classnames";
import bem from '@/utils/bem'

import { IComponent } from '@/utils/typings'
import { numericProp } from '@/utils/props';

import { DateType, DateTimeType, DateTimeAccurateType, ACTIVEKEY } from '../delivery/type';

export interface DeliveryDateTimeAccurateProps extends IComponent {
  data: DateTimeAccurateType[];
  activeKey?: numericProp;
  onSelect?: (item: DateTimeAccurateType) => void;
}

const defaultProps = {
  data: [],
  activeKey: ACTIVEKEY,
  onSelect: (item: DateTimeAccurateType) => { }
} as DeliveryDateTimeAccurateProps

export const DeliveryDateTimeAccurate: FunctionComponent<
  Partial<DeliveryDateTimeAccurateProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
> = (props) => {

  const {
    data,
    activeKey,
    className,
    style,
    onSelect
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('delivery-date-time-accurate')

  const [accurateTimeDate, setAccurateTimeDate] = useState(activeKey);
  const [date, setDate] = useState<DateType>({ label: '', text: '' });
  const [list, setList] = useState<DateTimeType[]>([]);

  const handleDate = (item: DateTimeType, subitem: DateType, accurateTimeDate: string) => {
    if(subitem.disabled) return;
    const list = (data.find((value: DateTimeAccurateType) => value.label == accurateTimeDate)) as DateTimeAccurateType;
    setDate(subitem);
    onSelect?.({ ...list, children: [{ ...item ,children: [{...subitem}] }] });
  }

  const handleTimeDateAccurateTypeLeft = (item: DateTimeAccurateType, date: string) => {
    if (date === item.label) return;
    setAccurateTimeDate(item.label);
    const list = (data.find((value: DateTimeAccurateType) => value.label == item.label)?.children) as DateTimeType[]
    setList(list);
  }

  const initData = () => {
    const list = ((activeKey == ACTIVEKEY || !activeKey) ? data[0] : data.find((item: DateTimeAccurateType) => item.label == activeKey)) as DateTimeAccurateType;
    let date = list.children[0].children[0];
    for(let i = 0; i < list?.children.length; i++) {
      const item = list?.children[i].children;
      date = item.find((subitem: DateType) => subitem.selected) as DateType;
      if(date) break;
    }
    setDate(!date ? list.children[0].children[0] : date);
    setList(list?.children as DateTimeType[]);
  }

  useEffect(() => {
    if(data && data.length) {
      initData();
    }
  }, [data]);

  return (
    <div className={classNames([b(''), className])} style={style}>
      <div className={`${b('pannel')}`}>
        {
          data && data.map((item: DateTimeAccurateType) => (
            <div
              className={classNames([
                `${b('pannel-title')}`,
                `${item.label === accurateTimeDate ? b('pannel-title--current') : ''}`,
              ])}
              key={item.label}
              onClick={() => { handleTimeDateAccurateTypeLeft(item, accurateTimeDate as string) }}
            >{item.title}</div>
          ))
        }
      </div>
      <div className={`${b('detail')}`}>
        {
          list && list.map((item: DateTimeType) => (
            <div className={`${b('detail-item')}`} key={item.label}>
              <div className={`${b('detail-item-title')}`}>{item.title}</div>
              <div className={`${b('detail-item-times')}`}>
                {
                  item?.children.map((subitem: DateType) => (
                    <div
                      className={classNames([
                        `${b('detail-item-times-time')}`,
                        `${(subitem.text === date.text && subitem.label === date.label) ? b('detail-item-times-time--current') : ''}`,
                        `${subitem.disabled ? b('detail-item-times-time--disable') : ''}`
                      ])}
                      key={subitem.label}
                      onClick={() => { handleDate(item, subitem, accurateTimeDate as string) }}
                    >{subitem.text}</div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

DeliveryDateTimeAccurate.defaultProps = defaultProps
DeliveryDateTimeAccurate.displayName = 'NutDeliveryDateTimeAccurate'
