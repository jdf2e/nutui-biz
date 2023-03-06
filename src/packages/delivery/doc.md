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
import { Cell } from '@nutui/nutui-react';
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

### 标准达、京准达

:::demo

```tsx
import React, { useState } from 'react';
import { Delivery } from './delivery';
import { DeliveryTypes, DeliveryData, DateTimesType, DateType } from './type';
import { Cell } from '@nutui/nutui-react';
const App = () => {
  const [visible2, setVisible2] = useState(false);
  const [desc2, setDesc2] = useState<any>("");
  const deliveryDateData2: DeliveryData[] = [
    {
        label: '1',
        text: '标准达',
        desc: '标准达配送时间',
        type: 'date-time',
        times: [
            {
                label: '1',
                title: '2月28日(周二)',
                children: [
                    {
                        label: '11',
                        text: '09:00-15:00',
                        selected: true,
                    },
                    {
                        label: '22',
                        text: '15:00-18:00',

                    }
                ]
            },
            {
                label: '2',
                title: '3月1日(周三)',
                children: [
                    {
                        label: '33',
                        text: '09:00-15:00'
                    },
                    {
                        label: '44',
                        text: '16:00-18:00'
                    }
                ]
            }
        ]
    },
    {
        label: '2',
        text: '京准达',
        desc: '京准达配送时间',
        type: 'date-time-accurate',
        times: [
            {
                label: '1',
                title: '3月1日(周三)',
                children: [
                    {
                        label: '11',
                        title: '上午',
                        children: [
                            {
                                label: '333',
                                text: '09:00-10:00',

                            },
                            {
                                label: '444',
                                text: '10:00-11:00',
                            }
                        ]
                    },
                    {
                        label: '22',
                        title: '晚间',
                        children: [
                            {
                                label: '333',
                                text: '15:00-18:00',
                            }
                        ]
                    }
                ]
            },
            {
                label: '2',
                title: '3月2日(周四)',
                children: [
                    {
                        label: '22',
                        title: '中午',
                        children: [
                            {
                                label: '333',
                                text: '12:00-14:00',
                            }
                        ]
                    },
                    {
                        label: '23',
                        title: '下午',
                        children: [
                            {
                                label: '333',
                                text: '16:00-17:00'
                            }
                        ]
                    },
                    {
                        label: '24',
                        title: '晚间',
                        children: [
                            {
                                label: '231',
                                text: '19:00-21:00'
                            }
                        ]
                    }
                ]
            }
        ]
    }
  ];
  const show2 = (param: boolean) => {
    setVisible2(param);
  }

  const sure2 = (item: DateTimesType | null, type: string) => {
    const children = ((item as DateTimeType).children) as any[];
    if ((children[0])?.children) {
        setDesc2(['京东快递', (item as DateTimeType).title, (item as any).children[0]?.title, (item as any).children[0]?.children[0].text].join(','));
    } else {
        setDesc2(['京东快递', (item as DateTimeType).title, (item as DateTimeType).children[0].text].join(','));
    }
  }

  return (
    <>
        <Cell
            title="请选择"
            desc={desc2}
            onClick={() => { show2(true) }}
        />
        <Delivery
            visible={visible2}
            deliveryDateData={deliveryDateData2}
            onCloseMask={() => { show2(false) }}
            onClose={() => show2(false)}
            onSure={sure2}
        ></Delivery>
    </>
  );
};
```
:::

### 自定义内容1

:::demo
```tsx
import React, { useState } from 'react';
import { Delivery } from './delivery';
import DeliveryDate from './../deliverydate';
import { DeliveryTypes, DeliveryData, DateTimesType, DateType } from './type';
import { Cell } from '@nutui/nutui-react';
const App = () => {
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [desc3, setDesc3] = useState<any>("");
  const deliveryDateData3 = [
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
  const [activeKey3, setActiveKey3] = useState('1');

  const show3 = (param: boolean) => {
    setVisible3(param);
  }

  const sure3 = (item: DateTimesType) => {
    console.log(item)
  }

  const handleDeliveryDate3 = (item: DateType) => {
    setActiveKey3(item.label);
    setVisible4(false);
    setDesc3(item.text);
  }
  return (
    <>
        <Cell
            title="请选择"
            desc={desc3}
            onClick={() => { show3(true) }}
        />
        <Delivery
            visible={visible3}
            onCloseMask={() => { show3(false) }}
            onClose={() => show3(false)}
            onSure={() => { sure3(desc3); }}
        >
            <div className="custom-content" onClick={() => { setVisible4(true) }}>
                <div className="left">请选择送货时间</div>
                <div className="right">{desc3}</div>
            </div>
        </Delivery>
        <Popup
            visible={visible4}
            position="bottom"
            style={{ 'height': '80%' }}
            closeable
            round
            onClickOverlay={() => { setVisible4(false) }}
            onClickCloseIcon={() => { setVisible4(false) }}
            onClose={() => { setVisible4(false) }}
        >
            <DeliveryDate
                className="delivery-date3"
                activeKey={activeKey3}
                data={deliveryDateData3}
                onSelect={(item: DateType) => { handleDeliveryDate3(item) }}
            ></DeliveryDate>
        </Popup>
    </>
  );
};
```
:::


### 自定义内容2

:::demo

```tsx
import React, { useState } from 'react';
import { Delivery } from './delivery';
import { DeliveryTypes, DeliveryData, DateTimesType, DateType } from './type';
import { Cell } from '@nutui/nutui-react';
const App = () => {
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [desc4, setDesc4] = useState<any>("");
  const [activeKey4, setActiveKey4] = useState('1');
  const deliveryDateData4 = [
    {
        label: '1',
        title: '2月28日(周二)',
        children: [
            {
                label: '11',
                text: '09:00-15:00',
                selected: true,
            },
            {
                label: '22',
                text: '15:00-18:00',

            }
        ]
    },
    {
        label: '2',
        title: '3月1日(周三)',
        children: [
            {
                label: '33',
                text: '09:00-15:00'
            },
            {
                label: '44',
                text: '16:00-18:00'
            }
        ]
    }
  ];

  const show5 = (param: boolean) => {
    setVisible5(param);
  }

  const sure5 = (item: DateTimesType) => {
    console.log(item)
  }

  const handleDeliveryDate4 = (item: DateTimeType) => {
    setActiveKey4(item.label);
    setVisible6(false);
    setDesc4(`${item.title},${item.children[0].text}`);
  }
  return (
    <>
        <Cell
            title="请选择"
            desc={desc4}
            onClick={() => { show5(true) }}
        />
        <Delivery
            visible={visible5}
            onCloseMask={() => { show5(false) }}
            onClose={() => show5(false)}
            onSure={() => { sure5(desc4); }}
        >
            <div className="custom-content" onClick={() => { setVisible6(true) }}>
                <div className="left">请选择送货时间</div>
                <div className="right">{desc4}</div>
            </div>
        </Delivery>
        <Popup
            visible={visible6}
            position="bottom"
            style={{ 'height': '80%' }}
            closeable
            round
            onClickOverlay={() => { setVisible6(false) }}
            onClickCloseIcon={() => { setVisible6(false) }}
            onClose={() => { setVisible6(false) }}
        >
            <DeliveryDateTime
                className="delivery-date4"
                activeKey={activeKey4}
                data={deliveryDateData4}
                onSelect={(item: DateTimeType) => { handleDeliveryDate4(item) }}
            ></DeliveryDateTime>
        </Popup>
    </>
  );
};
```
:::


## API

### Delivery Props

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | -----  |
| visible | 组件的显示/隐藏 | boolean | `false` |
| title | 组件的标题 | string | `配送` |
| deliveryTypes | 配送方式,最多支持三种 | Array<DeliveryTypes> | `[{ label: 'jd', text: '京东快递', disabled: false, desc: '' }]` |
| deliveryTimeTitle | 配送时间的标题 | ReactNode | `送货时间` |
| deliveryDateType | 配送时间类型，可选值：`date`,`date-time`,`date-time-accurate` | DeliveryDateType | `date` |
| deliveryDateData | 配送时间的数据, 最多支持三个 | Array<DeliveryData> | `[]` |
| buttonText | 确定按钮文案 | ReactNode | `确定` |
| popStyle | 遮罩层样式 | CSSProperties | `{ "height": '80%' }` |
| popClassName | 遮罩层类名 | string | - |

### Delivery Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onCloseMask | 点击遮罩层事件 |  - |
| onClose | 点击遮罩层关闭按钮事件 |  - |
| onSure | 点击确定按钮事件 | (item: 当前点击的时间对象 `DateTimesType`, type: 配送方式的label `string`) |

### DeliveryDate Props

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | -----  |
| data | 配送时间的数据 | Array<DateType> | `[]` |
| activeKey | 当前已选的key | string \| number | `9999` |

### DeliveryDate Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelect | 选中某段时间之后的事件 | (item: 当前点击的时间对象 `DateType`) |

### DeliveryDateTime Props

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | -----  |
| data | 配送时间的数据 | Array<DateTimeType> | `[]` |
| activeKey | 当前已选的key | string \| number | `9999` |

### DeliveryDateTime Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelect | 选中某段时间之后的事件 | (item: 当前点击的时间对象 `DateTimeType`) |

### DeliveryDateTimeAccurate Props

| 字段 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | -----  |
| data | 配送时间的数据 | Array<DateTimeAccurateType> | `[]` |
| activeKey | 当前已选的key | string \| number | `9999` |

### DeliveryDateTimeAccurate Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onSelect | 选中某段时间之后的事件 | (item: 当前点击的时间对象 `DateTimeAccurateType`) |

### 数据结构
### DeliveryDateType 配送时间可选值
> type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

### DateType (deliveryDateType ='date')
| 字段    | 说明                 | 类型    |
|---------|-----------------------|---------|
| label | 唯一标识 | string |
| text | 内容 | ReactNode |
| selected | 是否默认选中 | boolean |

### DateTimeType (deliveryDateType ='date-time')
| 字段    | 说明                 | 类型    |
|---------|-----------------------|---------|
| label | 唯一标识 | string |
| title | 左侧时间内容 | ReactNode |
| children | 右侧展示list | Array<DateType> |

### DateTimeAccurateType (deliveryDateType ='date-time-accurate')
| 字段    | 说明                 | 类型    |
|---------|-----------------------|---------|
| label | 唯一标识 | string |
| title | 左侧时间内容 | ReactNode |
| children | 右侧展示list | Array<DateTimeType> |


### DateTimesType 时间类型整合
> type DateTimesType = DateType | DateTimeType | DateTimeAccurateType


### DeliveryTypes 配送方式
| 字段    | 说明                 | 类型    |
|---------|-----------------------|---------|
| label | 唯一标识 | string |
| text | 内容 | ReactNode |
| selected | 是否默认选中 | boolean |
| disabled | 是否可选择 | boolean |
| desc | 具体描述信息 | ReactNode |
| children | 支持自定义扩展该方式下的内容 | ReactNode |

### DeliveryData 配送时间数据,继承 DeliveryTypes
| 字段    | 说明                 | 类型    |
|---------|-----------------------|---------|
| label | 唯一标识 | string |
| text | 内容 | ReactNode |
| selected | 是否默认选中 | boolean |
| disabled | 是否可选择 | boolean |
| desc | 具体描述信息 | ReactNode |
| children | 支持自定义扩展该方式下的内容 | ReactNode |
| type | 配送时间类型 | DeliveryDateType |
| times | 具体的时间内容 | DateTimesType[] |
