import React, { useState } from "react";
import { QuickEnter } from "./quickenter";
import { useTranslate } from "../../sites/assets/locale";
import { Icon, Toast } from "@nutui/nutui-react";
import { quickEnterData } from "./data";

interface T {}
const QuickEnterDemo = () => {
  const basicData = quickEnterData.slice(0, 10);
  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <QuickEnter data={basicData} />

        <h2>轮播展示</h2>
        <QuickEnter data={quickEnterData} indicatorVisible={true} />

        <h2>单行</h2>
        <QuickEnter data={quickEnterData} rows={1} indicatorVisible={true} />

        <h2>滑动展示</h2>
        <QuickEnter slideMode={"slide"} data={quickEnterData} rows={2} />
      </div>
    </>
  );
};

export default QuickEnterDemo;
