import React, { useState } from "react";
import { Ecard } from "@/packages/nutui.react.taro";
import { Cell } from '@nutui/nutui-react-taro';

interface IDataList {
  price: number;
}
interface T {
  [props: string]: string;
}

const EcardDemo = () => {
  const [money, setMoney] = useState(10);
  const [dataList] = useState<IDataList[]>([
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
      price: 40,
    },
  ]);
  const onChangeInput = (val: number) => {
    console.log(val);
  };
  const onChange = (item: IDataList) => {
    console.log(item);
  };
  const onChangeStep = (num: number, price: number) => {
    console.log(price, num);
  };
  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <Cell>
          <Ecard
            money={money}
            onChangeInput={onChangeInput}
            onChange={onChange}
            onChangeStep={onChangeStep}
            dataList={dataList}
          ></Ecard>
        </Cell>
      </div>
    </>
  );
};

export default EcardDemo;
