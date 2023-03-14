import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import classNames from "classnames";
import { cn2 } from '@/utils/bem'

import { IComponent } from '@/utils/typings'
import { numericProp } from '@/utils/props';

import { DateType, ACTIVEKEY } from '../delivery/type';

export interface DeliveryDateProps extends IComponent {
  data: DateType[];
  activeKey?: numericProp;
  onSelect?: (item: DateType) => void;
}

const defaultProps = {
  data: [],
  activeKey: ACTIVEKEY,
  onSelect: (item: DateType) => { }
} as DeliveryDateProps

export const DeliveryDate: FunctionComponent<
  Partial<DeliveryDateProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>
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

  const b = cn2('delivery-date')

  const [date, setDate] = useState<DateType>({ label: activeKey as string, text: '' });

  const handleDate = (item: DateType) => {
    if(item.disabled) return;
    setDate(item);
    onSelect?.(item);
  }

  useEffect(() => {
    if (data && data.length) {
      const item = data.find((item: DateType) => item.label == activeKey);
      const currentItem = (activeKey == ACTIVEKEY || !item) ? data[0] : { ...item };
      setDate(currentItem);
    }
  }, [data]);

  return (
    <div className={classNames([b(''), className])} style={style}>
      {
        data
          ?
          data.map((item: DateType) => (
            <div
              className={classNames([
                `${b('item')}`,
                `${item.label === date.label ? b('item--current') : ''}`,
                `${item.disabled ? b('item--disable') : ''}`
              ])}
              key={item.label}
              onClick={() => { handleDate(item) }}
            >{item.text}</div>
          ))
          : null
      }
    </div>
  )
}

DeliveryDate.defaultProps = defaultProps
DeliveryDate.displayName = 'NutDeliveryDate'
