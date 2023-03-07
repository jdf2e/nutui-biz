import * as React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Delivery } from '../delivery'
import { DeliveryTypes, DeliveryData, DateTimesType, DateType, DateTimeType } from '../type';
import DeliveryDate from './../../deliverydate';
import DeliveryDateTime from './../../deliverydatetime'
import DeliveryDateTimeAccurate from './../../deliverydatetimeaccurate'

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

test('props test', () => {
    const { container } = render(
        <Delivery
            visible
            deliveryTypes={deliveryTypes1}
            deliveryTimeTitle={<div>送货时间</div>}
            deliveryDateData={deliveryDateData1}
            buttonText={'ok'}
            title={'自定义标题'}
            className="delivery-class"
        ></Delivery>
    )

    const delivery_title = container.querySelector('.nut-delivery__title');
    expect(delivery_title?.textContent).toEqual('自定义标题');

    const content_delivery_title = container.querySelector('.nut-delivery__content-deliverytime-title');
    expect(content_delivery_title?.textContent).toContain('送货时间');

    const delivery_btn = container.querySelector('.nut-delivery__btn');
    expect(delivery_btn?.innerHTML).toContain('ok')
})

test('onsure click test', async () => {
    const onHandleSure = jest.fn()
    const { container } = render(
        <Delivery
            visible
            deliveryTypes={deliveryTypes1}
            deliveryTimeTitle={<div>送货时间</div>}
            deliveryDateData={deliveryDateData1}
            onSure={onHandleSure}
        ></Delivery>
    )

    const delivery_btn = container.querySelector('.nut-delivery__btn .nut-button');
    if (delivery_btn) {
        fireEvent.click(delivery_btn);
        expect(onHandleSure).toBeCalled();
    }
});

test('click date item', async () => {
    const { container } = render(
        <Delivery
            visible
            deliveryTypes={deliveryTypes1}
            deliveryTimeTitle={<div>送货时间</div>}
            deliveryDateData={deliveryDateData1}
        ></Delivery>
    )
    const dateItem = container.querySelectorAll('.nut-delivery__select .nut-delivery-date .nut-delivery-date__item')[1] as Element;
    dateItem && fireEvent.click(dateItem);

    await waitFor(() => {
        expect(dateItem.className).toContain("nut-delivery-date__item--current")
    })
});

test('show date time list', () => {
    const { container } = render(
        <Delivery
            visible
            deliveryDateData={deliveryDateData2}
        ></Delivery>
    )
    const time_tabs = container.querySelector('.nut-delivery__select .nut-delivery-date-time .nut-delivery-date-time__detail');
    const detail = time_tabs?.querySelectorAll('.nut-delivery-date-time__detail-item') as NodeListOf<Element>;
    expect(detail[0].className).toContain('nut-delivery-date-time__detail-item--current');
    fireEvent.click(detail[1]);
    expect(detail[1].className).toContain('nut-delivery-date-time__detail-item--current');
});