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
import React, { useState, ReactNode } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Delivery } from '@nutui/nutui-biz';
interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
    disabled?: boolean;
}

type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

interface DateType extends DeliveryBaseType { }

interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [desc1, setDesc1] = useState<string>("...");
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
  const [deliveryDateData1, setDeliveryDateData1] = useState<DeliveryData[]>([
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
                text: '3月1日(周三)',
                disabled: true
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
  ]);

  const show1 = (param: boolean) => {
        setVisible1(param);
  }

  const sure1 = (item: DateTimesType | null, type: string, deliveryDateData: DeliveryData[]) => {
    const deliveryType = deliveryTypes1.find((value: DeliveryTypes) => value.label === type);
    setDesc1(deliveryType?.text as string);
    if (item) {
        setDesc1([deliveryType?.text, (item as DateType).text].join());
        deliveryDateData[0].times = deliveryDateData[0].times.map((value: DateTimesType) => {
            return {
                ...value,
                selected: (value as DateType).label == item.label ? true : undefined
            }
        }).slice();

        setDeliveryDateData1([...deliveryDateData]);
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
            onSure={(item: DateTimesType | null, type: string) => { sure1(item, type, deliveryDateData1) }}
        ></Delivery>
    </>
  );
};
export default App;

```
:::

### 标准达、京准达

:::demo

```tsx
import React, { useState, ReactNode } from 'react';
import { Cell } from '@nutui/nutui-react';
import { Delivery } from '@nutui/nutui-biz';
interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
    disabled?: boolean;
}

type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

interface DateType extends DeliveryBaseType { }

interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}
const App = () => {
  const [visible2, setVisible2] = useState(false);
  const [desc2, setDesc2] = useState<string>("...");
  const [deliveryDateData2, setDeliveryDateData2] = useState<DeliveryData[]>([
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
                        text: '09:00-15:00',
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
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">09:00-10:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收3元运费</p>
                                    </>,
                                disabled: true

                            },
                            {
                                label: '444',
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">10:00-11:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收5元运费</p>
                                    </>,
                            }
                        ]
                    },
                    {
                        label: '22',
                        title: '晚间',
                        children: [
                            {
                                label: '555',
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">15:00-18:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收3元运费</p>
                                    </>,
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
                                label: '666',
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">12:00-14:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收3元运费</p>
                                    </>,
                            }
                        ]
                    },
                    {
                        label: '23',
                        title: '下午',
                        children: [
                            {
                                label: '777',
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">16:00-17:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收3元运费</p>
                                    </>,
                            }
                        ]
                    },
                    {
                        label: '24',
                        title: '晚间',
                        children: [
                            {
                                label: '888',
                                text: <>
                                        <div style={{ 'lineHeight': '2' }} className="text">19:00-21:00</div>
                                        <p style={{ 'lineHeight': '1' }}>加收10元运费</p>
                                    </>,
                            }
                        ]
                    }
                ]
            }
        ]
    }
  ]);

  const show2 = (param: boolean) => {
    setVisible2(param);
  }

  const sure2 = (item: DateTimesType | null, type: string, deliveryDateData: DeliveryData[]) => {
    const children = ((item as DateTimeType).children) as any[];
    if ((children[0])?.children) {
        deliveryDateData[1].times.forEach((value: DateTimesType) => {
            if (value.label === item?.label) {
                (value as DateTimeType).children.forEach((subValue: DateTimesType) => {
                    (subValue as DateTimeType).children = (subValue as DateTimeType).children.map((subitem: DateType) => {
                        return {
                            ...subitem,
                            selected: subitem.label === (item as any).children[0]?.children[0].label ? true : undefined
                        }
                    })
                })
            } else {
                (value as DateTimeType).children.forEach((subValue: DateTimesType) => {
                    (subValue as DateTimeType).children = (subValue as DateTimeType).children.map((subitem: DateType) => {
                        return {
                            ...subitem,
                            selected: undefined
                        }
                    })
                })
            }
        })
        setDeliveryDateData2(deliveryDateData);
        setDesc2(['京东快递', (item as DateTimeType).title, (item as any).children[0]?.title, (item as any).children[0]?.children[0].text.props.children[0].props.children].join(','));
    } else {
        deliveryDateData[0].times.forEach((value: DateTimesType) => {
            if (value.label === item?.label) {
                (value as DateTimeType).children = (value as DateTimeType).children.map((subValue: DateType) => {
                    return {
                        ...subValue,
                        selected: subValue.label === (item as DateTimeType).children[0].label ? true : undefined
                    }
                })
            } else {
                (value as DateTimeType).children = (value as DateTimeType).children.map((subValue: DateType) => {
                    return {
                        ...subValue,
                        selected: undefined
                    }
                })
            }
        });
        setDeliveryDateData2(deliveryDateData);
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
            onSure={(item: DateTimesType | null, type: string) => { sure2(item, type, deliveryDateData2) }}
        ></Delivery>
    </>
  );
};
export default App;
```
:::

### 自定义内容1

:::demo
```tsx
import React, { useState, ReactNode } from 'react';
import { Cell, Popup } from '@nutui/nutui-react';
import { Delivery, DeliveryDate } from '@nutui/nutui-biz';
interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
    disabled?: boolean;
}

type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

interface DateType extends DeliveryBaseType { }

interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}
const App = () => {
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [desc3, setDesc3] = useState<string>("...");
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
    setDesc3(item.text as string);
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
            <div className="custom-content" style={{ 'padding': '10px 20px', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'fontSize': '12px' }} onClick={() => { setVisible4(true) }}>
                <div className="left">请选择送货时间</div>
                <div className="right">{desc3}</div>
            </div>
        </Delivery>
        <Popup
            visible={visible4}
            position="bottom"
            style={{ 'height': '80%' }}
            overlayStyle={{ 'backgroundColor': 'transparent' }}
            closeable
            round
            onClickOverlay={() => { setVisible4(false) }}
            onClickCloseIcon={() => { setVisible4(false) }}
            onClose={() => { setVisible4(false) }}
        >
            <DeliveryDate
                className="delivery-date3"
                style={{ 'padding': '30px 10px' }}
                activeKey={activeKey3}
                data={deliveryDateData3}
                onSelect={(item: DateType) => { handleDeliveryDate3(item) }}
            ></DeliveryDate>
        </Popup>
    </>
  );
};
export default App;
```
:::


### 自定义内容2

:::demo

```tsx
import React, { useState, ReactNode } from 'react';
import { Cell, Popup } from '@nutui/nutui-react';
import { Delivery, DeliveryDateTime } from '@nutui/nutui-biz';

interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
    disabled?: boolean;
}

type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

interface DateType extends DeliveryBaseType { }

interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}
const App = () => {
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [desc4, setDesc4] = useState<any>("...");
  const [activeKey4, setActiveKey4] = useState('1');
  const [deliveryDateData4, setDeliveryDateData4] = useState<DateTimeType[]>([
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
  ]);

  const show5 = (param: boolean) => {
    setVisible5(param);
  }

  const sure5 = (item: DateTimesType) => {
    console.log(item)
  }

  const handleDeliveryDate4 = (item: DateTimeType, deliveryDateData: DateTimeType[]) => {
    const currentItemIndex = deliveryDateData.findIndex((value: DateTimesType) => value.label === item.label);
    deliveryDateData.forEach((subItem: DateTimesType, index: number) => {
        if (currentItemIndex === index) {
            (subItem as DateTimeType).children = (subItem as DateTimeType).children.map((value: DateType) => {
                return {
                    ...value,
                    selected: item.children[0].label === (value as DateType).label ? true : undefined
                }
            });
        } else {
            (subItem as DateTimeType).children = (subItem as DateTimeType).children.map((value: DateType) => {
                return {
                    ...value,
                    selected: undefined
                }
            });
        }
    })
    setDeliveryDateData4(deliveryDateData);
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
            <div className="custom-content" style={{ 'padding': '10px 20px', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'fontSize': '12px' }}  onClick={() => { setVisible6(true) }}>
                <div className="left">请选择送货时间</div>
                <div className="right">{desc4}</div>
            </div>
        </Delivery>
        <Popup
            visible={visible6}
            position="bottom"
            style={{ 'height': '80%' }}
            overlayStyle={{ 'backgroundColor': 'transparent' }}
            closeable
            round
            onClickOverlay={() => { setVisible6(false) }}
            onClickCloseIcon={() => { setVisible6(false) }}
            onClose={() => { setVisible6(false) }}
        >
            <DeliveryDateTime
                className="delivery-date4"
                style={{ 'padding': '30px 0' }}
                activeKey={activeKey4}
                data={deliveryDateData4}
                onSelect={(item: DateTimeType) => { handleDeliveryDate4(item, deliveryDateData4) }}
            ></DeliveryDateTime>
        </Popup>
    </>
  );
};
export default App;
```
:::


### 子组件单独使用

:::demo

```tsx
import React, { useState, ReactNode } from 'react';
import { Cell, Popup } from '@nutui/nutui-react';
import { DeliveryDate } from '@nutui/nutui-biz';

interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
    disabled?: boolean;
}

type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

interface DateType extends DeliveryBaseType { }

interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}
const App = () => {
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [desc5, setDesc5] = useState<string>("...");
  const [activeKey5, setActiveKey5] = useState('1');
  const deliveryDateData5 = [
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

  const handleDeliveryDate5 = (item: DateType) => {
    setActiveKey5(item.label);
    setVisible7(false);
    setDesc5(item.text as string);
  }

  return (
    <>
        <Cell
            title="请选择"
            desc={desc5}
            onClick={() => { setVisible7(true) }}
        />
        <Popup
            visible={visible7}
            position="bottom"
            style={{ 'height': '80%' }}
            closeable
            round
            onClickOverlay={() => { setVisible7(false) }}
            onClickCloseIcon={() => { setVisible7(false) }}
            onClose={() => { setVisible7(false) }}
        >
            <DeliveryDate
                className="delivery-date3"
                activeKey={activeKey5}
                data={deliveryDateData5}
                onSelect={(item: DateType) => { handleDeliveryDate5(item) }}
            ></DeliveryDate>
        </Popup>
    </>
  );
};
export default App;
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
| deliveryDateData | 配送时间的数据, 最多支持三个 | Array<DeliveryData> | `[]` |
| buttonText | 确定按钮文案 | ReactNode | `确定` |
| popStyle | 遮罩层样式 | CSSProperties | `{ "height": '80%' }` |
| popClassName | 遮罩层类名 | string | `''` |
| duration | 遮罩打开的时间 | number | `0.1` |

### Delivery Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onCloseMask | 点击遮罩层事件 |  - |
| onClose | 点击遮罩层关闭按钮事件 |  - |
| onSure | 点击确定按钮事件 | (item: 当前点击的时间对象 `DateTimesType`, type: 配送方式的label `string`) |
| onDeliveryTypeChange | 点击配送方式 | (label: 当前配送方式的label, `string | number | boolean`) |

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
| selected | 可选，是否默认选中 | boolean |
| disabled | 可选，是否禁用 | boolean |

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
| disabled | 是否禁用 | boolean |
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
