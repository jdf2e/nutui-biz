import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import classNames from "classnames";
import bem from '@/utils/bem'

import { IComponent } from '@/utils/typings'

import { DateType, DateTimeType, ACTIVEKEY } from '../delivery/type';

export interface DeliveryDateTimeProps extends IComponent {
  data: DateTimeType[];
  activeKey?: string | number;
  onSelect?: (item: DateTimeType) => void;
}

const defaultProps = {
  data: [],
  activeKey: ACTIVEKEY,
  onSelect: (item: DateTimeType) => { }
} as DeliveryDateTimeProps

export const DeliveryDateTime: FunctionComponent<
  Partial<DeliveryDateTimeProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
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

  const b = bem('delivery-date-time')

  const [timeDate, setTimeDate] = useState(activeKey);
  const [date, setDate] = useState<DateType>({ label: '', text: '' });
  const [list, setList] = useState<DateType[]>([]);

  const handleDate = (item: DateType, timeDate: string) => {
    const list = (data.find((value: DateTimeType) => value.label == timeDate)) as DateTimeType;
    setDate(item);
    onSelect?.({ ...list, children: [item] });
  }

  const handleTimeDateLeft = (item: DateTimeType, date: string) => {
    if (date === item.label) return;
    setTimeDate(item.label);
    const list = (data.find((value: DateTimeType) => value.label == item.label)?.children) as DateType[]
    setList(list);
  }

  const initData = () => {
    const list = (activeKey == ACTIVEKEY || !activeKey) ? data[0] : data.find((item: DateTimeType) => item.label == activeKey);
    let date = list?.children?.find((item: DateType) => item.selected);
    date = date ? date : (list?.children as DateType[])[0];
    setList(list?.children as DateType[]);
    setDate(date);
  }

  useEffect(() => {
    if(data && data.length) {
      initData();
    }
  }, [data]);

  return (
    <div className={`${b('')} ${className || ''}`} style={style}>
      <div className={`${b('pannel')}`}>
        {
          data && data.map((item: DateTimeType) => (
            <div
              className={classNames([
                `${b('pannel-title')}`,
                `${item.label === timeDate ? b('pannel-title--current') : ''}`,
              ])}
              key={item.label}
              onClick={() => { handleTimeDateLeft(item, timeDate as string) }}
            >{(item as DateTimeType).title}</div>
          ))
        }
      </div>
      <div className={`${b('detail')}`}>
        {
          list && list.map((item: DateType) => (
            <div
              className={classNames([
                `${b('detail-item')}`,
                `${(item.text === date.text && item.label === date.label) ? b('detail-item--current') : ''}`,
              ])}
              key={item.label}
              onClick={() => { handleDate(item, timeDate as string) }}
            >{item.text}</div>
          ))
        }
      </div>
    </div>
  )
}

DeliveryDateTime.defaultProps = defaultProps
DeliveryDateTime.displayName = 'NutDeliveryDateTime'
