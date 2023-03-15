import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { IComponent } from "@/utils/typings";
import { CommentHeader } from "./components/CommentHeader";
import { CommentBottom } from "./components/CommentBottom";
import { CommentImages } from "./components/CommentImages";
import { VideosType, ImagesType, GoodsClickParams } from "./components/CommentImages";
import bem from '@/utils/bem'
import { Icon } from "@nutui/nutui-react";

export interface CommentInfo {
  content: string, // 评论详情
  nickName: string, // 评论人的姓名
  score: number, // 评论星星数
  avatar: string, // 评论人头像
  time: string, // 评论时间
  size?: string, // 评论人购买的商品规格
  reply?: number, // 此评论的回复数
  like?: number, // 此评论的点赞数
}
export interface CommentFollow {
  days: number, // 购买多少天后进行追评
  content: string, // 追评内容
  images?: string[], // 追评图片
}
export interface CommentProps extends IComponent {
  type: "default" | "complex";
  imagesRows: "one" | "multi";
  ellipsis: string | number;
  videos: Array<VideosType>;
  images: Array<ImagesType>;
  info: CommentInfo;
  follow: CommentFollow;
  operation: Array<string>;
  commentLabels: ReactNode;
  commentShopReply: ReactNode;
  onClickOperate: (type: string) => void;
  onClick: (info: any) => void;
  onClickImages: (imgs: GoodsClickParams) => void;
}

const defaultProps = {
  type: "default",
  imagesRows: "one",
  ellipsis: 2,
  videos: new Array(),
} as CommentProps;

export const Comment: FunctionComponent<
  Partial<CommentProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    type,
    imagesRows,
    ellipsis,
    videos,
    images,
    info,
    follow,
    operation,
    commentLabels,
    commentShopReply,
    onClickOperate,
    onClick,
    onClickImages,
  } = {
    ...defaultProps,
    ...props,
  };

  const b = bem('comment')

  const onHandleClick = () => {
    onClick && onClick(info);
  };

  const conEllipsis = () => {
    if (ellipsis) return ellipsis;
    return type === "complex" ? 6 : 2;
  };

  return (
    <div className={b()}>
      <CommentHeader
        type={type}
        info={info}
        onHandleClick={onHandleClick}
        commentLabels={commentLabels}
      ></CommentHeader>

      {info && info.content && (
        <div
          className={b('main')}
          style={{
            WebkitLineClamp: conEllipsis(),
          }}
          onClick={onHandleClick}
        >
          {" "}
          {info.content}{" "}
        </div>
      )}

      <CommentImages
        images={images}
        videos={videos}
        type={imagesRows}
        onClickImages={onClickImages}
      ></CommentImages>

      {follow && follow.days > 0 && (
        <div className={b("follow")} onClick={onHandleClick}>
          <div className={b("follow-title")}>
            购买 {follow.days} 天后追评
          </div>
          <div className={b("follow-com")}>{follow.content}</div>
          {follow.images && follow.images.length > 0 && (
            <div className={b("follow-img")}>
              {follow.images.length} 张追评图片
              <Icon name="right" width="12px"></Icon>
            </div>
          )}
        </div>
      )}

      <CommentBottom
        type={type}
        info={info}
        operation={operation}
        onClickOperate={onClickOperate}
        onHandleClick={onHandleClick}
      ></CommentBottom>

      {commentShopReply}
    </div>
  );
};

Comment.defaultProps = defaultProps;
Comment.displayName = "NutComment";
