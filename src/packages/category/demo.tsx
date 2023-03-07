import React, { useState, useEffect } from "react";
import { Category } from "./category";
import { useTranslate } from "../../sites/assets/locale";
import { Tabbar, TabbarItem } from '@nutui/nutui-react';

interface T {
  [props: string]: string;
}

const CommentDemo = () => {
  const [translated] = useTranslate<T>({
    "zh-CN": {
      basic: "经典分类",
      hideImage: "隐藏图片",
      quicknav: "横向快捷导航",
    },
    "en-US": {
      basic: "Basic Usage",
      hideImage: "Hide Image",
      quicknav: "Quick Nav",
    },
  });

  const [category, setCategory] = useState();
  const [switchIdx,setSwitchIdx] = useState(0)


  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        setCategory(res.categoryInfo.category)
      })
      .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);


  const onTabSwitch = (child:any, idx:any) => { setSwitchIdx(idx) }


  const onClassifyClick = (index:any)=>{
    console.log('一级分类',index)
  }

  const onPanelThirdClick = (sku:any)=>{
    console.log('三级分类跳转', sku)
  }
  return (
    <>

      { switchIdx == 0 && (
        <div className="demo nut-category-demo" style={{padding:'57px 0 0'}}>
          <Category category={category} isLazy={false} onClick={onClassifyClick} onPanelThirdClick={onPanelThirdClick}></Category>
        </div>
      )}

      {
         switchIdx == 1 && (
          <div className="demo nut-category-demo"  style={{padding:'57px 0 0'}}>
            <Category category={category} showSkuImg={false}></Category>
          </div>
         )
      }

     {   
         switchIdx == 2 && (
          <div className="demo nut-category-demo"  style={{padding:'57px 0 0'}}>
            <Category category={category} showSecondLevelQuickNav={true} ></Category>
          </div>
         )
      }

      <Tabbar onSwitch={((child, idx) => onTabSwitch(child, idx))}>
        <TabbarItem tabTitle={translated.basic} icon="category" />
        <TabbarItem tabTitle={translated.hideImage} icon="image" />
        <TabbarItem tabTitle={translated.quicknav} icon="horizontal" />
      </Tabbar>

    </>
  );
};

export default CommentDemo;
