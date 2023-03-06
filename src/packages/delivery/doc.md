#  Delivery 配送

### 介绍

支持配送方式和配送时间选择。

### 安装

```javascript
import { Delivery } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```tsx
import React, { useState } from 'react';
import { Delivery } from './delivery';
import { DeliveryTypes, DeliveryData, DateTimesType, DateType } from './type';
import { Cell, Toast } from '@nutui/nutui-react';
const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [desc1, setDesc1] = useState<any>("");
  const deliveryTypes1: DeliveryTypes[] = [
    {
        label: 'jd',
        text: '京东快递',
        disabled: false,
        desc: '若社区村镇人员出入管控，京东快递可送货上门',
    },
    {
        label: 'jc',
        text: '无接触配送',
        disabled: false,
        desc: '无接触配送，自定义',
        children: <div style={{ 'padding': '0 20px', 'fontSize': '12px' }}>可选择无接触配送点</div>
    }
  ];
  const deliveryDateData1: DeliveryData[] = [
    {
        label: '1',
        text: '时间配送',
        desc: '可按照具体时间配送',
        type: 'date',
        times: [
            {
                label: '1',
                text: '2月28日(周二)',
                selected: true,
            },
            {
                label: '2',
                text: '3月1日(周三)'
            },
            {
                label: '3',
                text: '3月2日(周四)'
            },
            {
                label: '4',
                text: '3月3日(周五)'
            },
            {
                label: '5',
                text: '3月4日(周六)'
            },
            {
                label: '6',
                text: '3月5日(周日)'
            },
            {
                label: '7',
                text: '3月6日(周一)'
            },
            {
                label: '8',
                text: '3月7日(周二)'
            },
            {
                label: '9',
                text: '3月8日(周三)'
            },
            {
                label: '10',
                text: '3月9日(周四)'
            }
        ]
    }
  ];

  const show1 = (param: boolean) => {
        setVisible1(param);
  }

  const sure1 = (item: DateTimesType | null, type: string) => {
    const deliveryType = deliveryTypes1.find((value: DeliveryTypes) => value.label === type);
    setDesc1(deliveryType?.text);
    if(item) {
        setDesc1([deliveryType?.text, (item as DateType).text].join());
    }
  }
  return (
    <>
        <Cell
            title="请选择"
            desc={desc1}
            onClick={() => { show1(true) }}
        />
        <Delivery
            visible={visible1}
            deliveryTypes={deliveryTypes1}
            deliveryTimeTitle={<div>送货时间</div>}
            deliveryDateData={deliveryDateData1}
            onCloseMask={() => { show1(false) }}
            onClose={() => show1(false)}
            onSure={sure1}
        ></Delivery>
    </>
  );
};
```

:::




