import React from "react";
import { QuickEnter } from "./quickenter";
import { useTranslate } from "../../sites/assets/locale";
import { quickEnterData } from "./data";

interface tarnslatedOption {
  basic: string;
  title1: string;
  title2: string;
  title3: string;
}
interface T {}
const QuickEnterDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    "zh-CN": {
      basic: "基本用法",
      title1: "轮播展示",
      title2: "单行",
      title3: "滑动展示",
    },
    "zh-TW": {
      basic: "基本用法",
      title1: "輪播展示",
      title2: "單行",
      title3: "滑動展示",
    },
    "en-US": {
      basic: "Basic usage",
      title1: "carousel display",
      title2: "Single line",
      title3: "sliding display",
    },
  });
  const basicData = quickEnterData.slice(0, 10);
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <QuickEnter data={basicData} />

        <h2>{translated.title1}</h2>
        <QuickEnter data={quickEnterData} indicatorVisible={true} />

        <h2>{translated.title2}</h2>
        <QuickEnter data={quickEnterData} rows={1} indicatorVisible={true} />

        <h2>{translated.title3}</h2>
        <QuickEnter slideMode={"slide"} data={quickEnterData} rows={2} />
      </div>
    </>
  );
};

export default QuickEnterDemo;
