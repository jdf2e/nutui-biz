import React, { useState } from "react";
import { Delivery, DeliveryTypes, DeliveryData } from './delivery'
import { Cell } from '@nutui/nutui-react'

interface T {
    basic: string;
}

const DeliveryDemo = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const deliveryTypes1: DeliveryTypes[] = [
        {
            label: 'jd',
            text: '京东快递',
            disabled: false,
            desc: '若社区村镇人员出入管控，京东快递可送货上门'
        },
        {
            label: 'jc',
            text: '无接触配送',
            disabled: false,
            desc: '无接触配送，自定义'
        }
    ];
    const deliveryTypes2: DeliveryTypes[] = [
        {
            label: 'jd',
            text: '京东快递',
            disabled: false,
            desc: '若社区村镇人员出入管控，京东快递可送货上门'
        }
    ];
    const deliveryDateData1: DeliveryData[] = [
        {
            label: '1',
            text: '按时间',
            desc: '根据时间配送',
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
                }
            ]
        },
        {
            label: '2',
            text: '标准达',
            desc: '标准达配送时间',
            type: 'date',
            times: [
                {
                    label: '1',
                    text: '3月2日(周四)'
                },
                {
                    label: '2',
                    text: '3月2日(周五)'
                }
            ]
        }
    ];
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
                                    selected: true,
                                },
                                {
                                    label: '444',
                                    text: '10:00-11:00'
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

    const show1 = (param: boolean) => {
        setVisible1(param);
    }

    const show2 = (param: boolean) => {
        setVisible2(param);
    }

    return (
        <>
            <div className="demo">
                <h2>基本用法</h2>
                <Cell
                    title="请选择"
                    desc=""
                    onClick={() => { show1(true) }}
                />
                <Delivery
                    visible={visible1}
                    deliveryTypes={deliveryTypes1}
                    deliveryDateData={deliveryDateData1}
                    onCloseMask={() => { show1(false) }}
                ></Delivery>
                <h2>基本用法</h2>
                <Cell
                    title="请选择"
                    desc=""
                    onClick={() => { show2(true) }}
                />
                <Delivery
                    visible={visible2}
                    deliveryTypes={deliveryTypes2}
                    deliveryDateData={deliveryDateData2}
                    onCloseMask={() => { show2(false) }}
                ></Delivery>
            </div>
        </>
    );
};

export default DeliveryDemo;
