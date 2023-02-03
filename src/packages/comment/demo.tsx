import React, { useState, useEffect } from "react";
import { Comment } from "./comment";
import { Cell, Tag } from "@nutui/nutui-react";
import { useTranslate } from "../../sites/assets/locale";

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

  const [cmt, setCmt] = useState({} as any);

  const getData = () => {
    fetch("//storage.360buyimg.com/nutui/3x/comment_data.json")
      .then((response) => response.json())
      .then((res) => {
        res.Comment.info.avatar =
          "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png";
        setCmt(res.Comment);
      })
      .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const onClickImages = (imgs: any) => {
    console.log("进行图片展示", imgs);
  };

  const onHandleClick = (info: any) => {
    console.log("进行跳转", info);
  };

  return (
    <>
      <div className="demo">
        <h2>{translated.single}</h2>
        <Cell>
          <Comment
            images={cmt.images}
            videos={cmt.videos}
            info={cmt.info}
            onClick={onHandleClick}
            onClickImages={onClickImages}
            onClickOperate={(type: string) => {
              console.log(type);
            }}
            operation={["reply"]}
            commentLabels={
              <img
                style={{
                  height: "20px",
                }}
                src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
              />
            }
          ></Comment>
        </Cell>

        <h2>{translated.multiRow}</h2>
        <Cell>
          <Comment
            type="complex"
            imagesRows="multi"
            images={cmt.images}
            videos={cmt.videos}
            info={cmt.info}
            ellipsis="6"
            onClickImages={onClickImages}
            commentLabels={
              <img
                src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
                style={{ height: "12px" }}
              />
            }
            commentShopReply={
              <div className="nut-comment-shop">
                <span>京东美妆国际：</span>
                尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
              </div>
            }
          ></Comment>
        </Cell>

        <h2>{translated.additionalReviewd}</h2>
        <Cell>
          <Comment
            imagesRows="multi"
            images={cmt.images}
            videos={cmt.videos}
            info={cmt.info}
            follow={cmt.follow}
            onClickImages={onClickImages}
          ></Comment>
        </Cell>
      </div>
    </>
  );
};

export default CommentDemo;
