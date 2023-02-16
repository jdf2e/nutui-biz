import React, { useState } from "react";
import { useTranslate } from "../../sites/assets/locale";
import { Delivery } from './delivery'
import { Cell } from '@nutui/nutui-react'

interface T {
    basic: string;
}

const DeliveryDemo = () => {
    const [translated] = useTranslate<T>({
        "zh-CN": {
            basic: "基本用法",
            select: "请选择",
        },
        "zh-TW": {
            basic: "基本用法",
            select: "请选择",
        },
        "en-US": {
            basic: "基本用法",
            select: "请选择",
        },
    });
    const [visible1, setVisible1] = useState(false);
    const show1 = (param: boolean) => {
        setVisible1(param);
    }

    return (
        <>
            <div className="demo">
                <h2>{translated.basic}</h2>
                <Cell
                    title={translated.select}
                    desc=""
                    onClick={ () => { show1(true) } }
                />
                <Delivery
                    visible={ visible1 }
                    onCloseMask={ () => { show1(false) } }
                ></Delivery>
            </div>
        </>
    );
};

export default DeliveryDemo;
