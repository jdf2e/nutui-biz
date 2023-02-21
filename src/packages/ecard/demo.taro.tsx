import React, { useState } from "react";
import { Ecard } from "@/packages/nutui.react.taro";
import { Cell } from '@nutui/nutui-react-taro';
import { useTranslate } from '@/sites/assets/locale/taro'

interface IDataList {
  price: number;
}
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
  const [money, setModelValue] = useState(10);
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
