import React, { ReactNode, useState } from "react";
import { useTranslate } from "../../sites/assets/locale";
import { Ecard, DataListItem } from "./ecard";
import { Cell } from "@nutui/nutui-react";
import mathMethods from '@/utils/math'
const { accurateMultiply } = mathMethods
interface T {
  [props: string]: string;
}

const EcardDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "基本用法",
    },
    "zh-TW": {
      basic: "基本用法",
    },
    "en-US": {
      basic: "Basic Usage",
    },
  });
  const [dataList] = useState<Array<DataListItem>>([
    {
      price: 10,
    },
    {
      price: 20,
    },
    {
      price: 30,
    },
    {
      price: 40
    }
  ]);
  const onChangeInput = (val: number) => {
    console.log(val);
  };
  const onChange = (item: DataListItem) => {
    console.log(item);
  };
  const onChangeStep = (num: number, price: number, money: number) => {
    console.log(price, num);
  };
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Ecard
            onChangeInput={onChangeInput}
            onChange={onChange}
            onChangeStep={onChangeStep}
            dataList={dataList}
          ></Ecard>
        </Cell>
        <h2>{'自定义函数处理总面值'}</h2>
        <Cell>
          <Ecard
            chooseText={<span>100以内打九折,超过100打八折!</span>}
            onChangeInput={onChangeInput}
            onChange={onChange}
            handleMoney={(money) => {
              if (money < 100) return accurateMultiply(money, 0.9)
              if (money >= 100) return accurateMultiply(money, 0.8)
              return 0
            }}
            onChangeStep={onChangeStep}
            dataList={dataList}
          ></Ecard>
        </Cell>
      </div>
    </>
  );
};

export default EcardDemo;
