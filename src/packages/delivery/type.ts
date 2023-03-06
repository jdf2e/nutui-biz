import React, { ReactNode } from 'react'

export interface DeliveryBaseType {
    label: string;
    text: ReactNode;
    selected?: boolean;
}

export type DeliveryDateType = 'date' | 'date-time' | 'date-time-accurate'

export interface DateType extends DeliveryBaseType { }

export interface DateTimeType {
    label: string;
    title: ReactNode;
    children: Array<DateType>;
}

export interface DateTimeAccurateType {
    label: string;
    title: ReactNode;
    children: DateTimeType[]
}

export type DateTimesType = DateType | DateTimeType | DateTimeAccurateType;

export interface DeliveryTypes extends DeliveryBaseType {
    disabled?: boolean;
    desc?: ReactNode;
    children?: ReactNode;
}

export interface DeliveryData extends DeliveryTypes {
    type: DeliveryDateType;
    times: DateTimesType[];
}

export const ACTIVEKEY = 9999;