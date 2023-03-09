import React, { useState } from "react";
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
      handleMoney: "自定义函数处理总面值",
      discountText: '100以内打九折,超过100打八折!',
      row: '自定义一行展示电子卡数量'
    },
    "en-US": {
      basic: "Basic Usage",
      handleMoney: "A custom function to deal with the total price",
      discountText: '100 of less than ninety percent, more than 100 eighty percent discount! ',
      row: 'Custom line number display an e-card '
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
  const onChangeInput = (val: number, money: number) => {
    console.log('onChangeInput', { val, money });
  };
  const onChange = (item: DataListItem, money: number) => {
    console.log('onChange', { item, money });
  };
  const onChangeStep = (num: number, price: number, money: number) => {
    console.log('onChangeStep', { num, price, money });
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
        <h2>{translated.handleMoney}</h2>
        <Cell>
          <Ecard
            chooseText={<span>{translated.discountText}</span>}
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
        <h2>{translated.row}</h2>
        <Cell>
          <Ecard
            chooseText={<span>请选择电子卡面值</span>}
            rowNum={3}
            dataList={[{
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
            }, {
              price: 50,
            },
            {
              price: 60
            }]}
          ></Ecard>
        </Cell>
      </div>
    </>
  );
};

export default EcardDemo;
