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
      basic: "基础用法",
      single: "评论图片单行展示",
      multiRow: "评论图片多行展示",
      additionalReviewd: "追评展示",
    },
    "en-US": {
      basic: "Basic Usage",
      single: "Single Line Image",
      multiRow: "Multi Line Image ",
      review: "Additional Review",
    },
  });

  const [category, setCategory] = useState();
  const [switchIdx,setSwitchIdx] = useState(0)


  const getData = () => {
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json())
      .then((res) => {
        console.log(res,res.categoryInfo.category)
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
          <Category category={category} onClick={onClassifyClick} onPanelThirdClick={onPanelThirdClick}></Category>
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

      <Tabbar tabSwitch={((child, idx) => onTabSwitch(child, idx))}>
        <TabbarItem tabTitle="经典分类" icon="category" />
        <TabbarItem tabTitle="隐藏图片" icon="image" />
        <TabbarItem tabTitle="横向快捷导航" icon="horizontal" />
      </Tabbar>

    </>
  );
};

export default CommentDemo;
