# Comment 商品评论

### 介绍

用于进行评论列表的展示。

### 安装

```javascript
import { Comment } from "@nutui/nutui-biz";
```

## 代码演示

### 评论图片单行展示

默认情况下，单个商品的评论的图片是按照单行滑动进行展示的。

:::demo

```js
import React, { useState,useEffect } from 'react';
import { Comment } from '@nutui/nutui-biz';
import { Cell } from "@nutui/nutui-react";

const App = () => {

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
      />
    </Cell>
  );
};
export default App;
```

:::

### 评论图片多行展示

通过 `type` 的值可以设置图片多行展示。

:::demo

```js
import React,{useEffect,useState} from 'react';
import { Comment } from '@nutui/nutui-biz';
import { Cell } from "@nutui/nutui-react";

const App = () => {

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
      />
    </Cell>
  );
};
export default App;
```

:::

### 追评展示

:::demo

```js
import React,{useEffect,useState} from 'react';
import { Comment } from '@nutui/nutui-biz';
import { Cell } from "@nutui/nutui-react";

const App = () => {

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

  return (
    <Cell>
      <Comment
        imagesRows="multi"
        images={cmt.images}
        videos={cmt.videos}
        info={cmt.info}
        follow={cmt.follow}
        onClickImages={onClickImages}
      />
    </Cell>
  );
};
export default App;
```

:::

## API

### Props

| 参数        | 说明                                          | 类型             | 默认值                      |
| ----------- | --------------------------------------------- | ---------------- | --------------------------- |
| type | 头部样式展示类型，可选： `default`，`complex` | string           | `default`                   |
| imagesRows | 评论图片展示行数，可选： `one`，`multi`       | string           | `one`                       |
| ellipsis    | 设置评论内容省略行数                          | string \| number | `2`                         |
| videos      | 视频信息                                      | Array            | `[]`                        |
| images      | 图片信息                                      | Array            | `[]`                        |
| info        | 评论详情                                      | object           | `{}`                        |
| follow      | 追评内容                                      | object           | `{}`                        |
| operation   | 配置底部按钮                                  | Array            | `["reply", "like", "more"]` |
| commentLabels | 评论用户的标签 | ReactNode | - |
| commentShopReply | 评论最底部，用于展示商家回复 | ReactNode | - |

### Events

| 事件名        | 说明                     | 回调参数             |
| ------------- | ------------------------ | -------------------- |
| onClickOperate | 点击底部操作按钮回调函数 | `type` 底部按钮类型，同 `operation`             |
| onClick         | 点击评论内容回调函数     | 传入的 `info` 参数            |
| onClickImages  | 点击图片或视频触发       | `{type,index,value}` |

### images 数组

images 数组中存放的是图片对象。

```javascript
const images = [
  {
    id: "", // key
    smallImgUrl: "", // 小图，列表展示时使用
    bigImgUrl: "", // 大图，大图展示使用
    imgUrl: "", // 兜底图
  },
];
```

### videos 数组

```javascript
const videos = [
  {
    id: "", // key
    mainUrl: "", // 视频遮罩图片
    videoUrl: "", // 视频链接
  },
];
```

### info 对象

用于存放评论相关的信息。

```javascript
const info = {
  content: "", // 评论详情
  nickName: "", // 评论人的姓名
  score: 5, // 评论星星数
  avatar: "", // 评论人头像
  time: "", // 评论时间
  size: "", // 评论人购买的商品规格
  reply: 23, // 此评论的回复数
  like: 1, // 此评论的点赞数
};
```

### follow 对象

用于存放追评相关的信息。

```javascript
const follow = {
  days: 0, // 购买多少天后进行追评
  content: "", // 追评内容
  images: [], // 追评图片
};
```
