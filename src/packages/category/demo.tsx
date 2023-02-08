import React, { useState, useEffect } from "react";
import { Category } from "./category";
import { useTranslate } from "../../sites/assets/locale";
import { categoryInfo, categoryChild, customCategory } from "./data";
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

  const [category, setCategory] = useState(categoryInfo);
  const [switchIdx,setSwitchIdx] = useState(0)


  const getData = () => {
    // fetch("//storage.360buyimg.com/nutui/3x/comment_data.json")
    //   .then((response) => response.json())
    //   .then((res) => {
    //     res.Comment.info.avatar =
    //       "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png";
    //     setCmt(res.Comment);
    //   })
    //   .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);


  const onTabSwitch = (child:any, idx:any) => { setSwitchIdx(idx) }

  

  return (
    <>

      { switchIdx == 0 && (
        <div className="demo nut-category-demo" style={{padding:'57px 0 0'}}>
          <Category category={category} ></Category>
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
            <Category category={category} ></Category>
          </div>
         )
      }

      <Tabbar tabSwitch={((child, idx) => onTabSwitch(child, idx))}>
        <TabbarItem tabTitle="经典分类" icon="category" />
        <TabbarItem tabTitle="隐藏图片" icon="find" />
        <TabbarItem tabTitle="显示横向" icon="cart" />
      </Tabbar>
      
    </>
  );
};

export default CommentDemo;
