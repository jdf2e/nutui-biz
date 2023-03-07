# Comment

### Intro

Used to display the comment list

### Install

```javascript
import { Comment } from '@nutui/nutui-biz';
```

## Demo

### Single Line Image

By default, images of reviews for individual items are displayed in a single slide

:::demo
```js
import React, { useState } from 'react';
import { Comment } from '@nutui/nutui-biz';

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
  );
};
export default App;
```
:::

### Multi Line Image

The value of `type` allows you to set the image to be displayed in multiple lines

:::demo 
```js
import React from 'react';
import { Comment } from '@nutui/nutui-biz';

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
  );
};
export default App;
```
:::

### Additional Review

:::demo 
```js
import React from 'react';
import { Comment } from '@nutui/nutui-biz';

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
    <Comment
      imagesRows="multi"
      images={cmt.images}
      videos={cmt.videos}
      info={cmt.info}
      follow={cmt.follow}
      onClickImages={onClickImages}
    ></Comment>
  );
};
export default App;
```
:::
## API

### Props

| Attribute            | Description               | Type   | Default  |
|--------------|----------------------------------|--------|------------------|
| type         | Header type      | string | `default`               |
| imagesRows         | Comment picture shows type of lines    | string | `one`               |
| ellipsis        | Ellipsis number       | string \| number | `2`               |
| videos         | Videos data | Array | `[]`              |
| images | Images data    | Array | `[]` |
| info     | Comment data                      | object | `{}`             |
| follow     | Additional review data                      | object | `{}`             |
| operation | Bottom button   | Array | `["reply", "like", "more"]` |
| comment-labels  | Comment user label | ReactNode | - |
| comment-shop-reply  | At the bottom of the comment is the display of the merchant's response | ReactNode | - |


### Events

| Event            | Description               | Arguments   |
|--------|----------------|--------------|
| onClickOperate  | Emitted when to click bottom button | `type`, like `operation`  |
| onClick  | Emitted when to click comment | The `info` parameter is passed in |
| onClickImages | Emitted when to click images or videos | `{type,index,value}` |

### images data

```javascript
const images = [
  {
    id: "", // key
    smallImgUrl: "", // Small picture, used for table presentation
    bigImgUrl: "", // Big picture, big picture display use
    imgUrl: "", // Out figure
  }
]
```

### videos data

```javascript
const videos = [
  {
    id: "", // key
    mainUrl: "", // Video mask image
    videoUrl: "", // Video url
  }
]
```

### info data

```javascript
const info = {
  content: "",  // Comment on the details
  nickName: "", // The name of the reviewer
  score: 5, // Number of comment stars
  avatar: "",  // The avatar of the reviewer
  time: "", // Comment time
  size: "", // Comment good size
  reply:23, // Number of replies to this comment
  like:1, // Number of likes for this comment
}
```

### follow data

Information related to review.

```javascript
const follow = {
  days: 0, // Review how many days after purchase
  content: "", // Review content
  images: [] // Review images
}
```
