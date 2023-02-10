import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { IComponent } from "@/utils/typings";
import { CommentHeader } from "./components/CommentHeader";
import { CommentBottom } from "./components/CommentBottom";
import { CommentImages } from "./components/CommentImages";
import { VideosType, ImagesType } from "./components/CommentImages";
import bem from "@/utils/bem";
import { Icon } from "@nutui/nutui-react";

export interface CommentProps extends IComponent {
  type: "default" | "complex";
  imagesRows: "one" | "multi";
  ellipsis: string | number;
  videos: Array<VideosType>;
  images: Array<ImagesType>;
  info: any;
  follow: any;
  operation: Array<any>;
  commentLabels: ReactNode;
  commentShopReply: ReactNode;
  onClickOperate: (type: string) => void;
  onClick: (info: any) => void;
  onClickImages: (imgs: {
    type: string;
    index: string | number;
    value: any;
  }) => void;
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

  const b = bem("comment");

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
          className="nut-comment__main"
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
        <div className="nut-comment__follow" onClick={onHandleClick}>
          <div className="nut-comment__follow-title">
            购买 {follow.days} 天后追评
          </div>
          <div className="nut-comment__follow-com">{follow.content}</div>
          {follow.images && follow.images.length > 0 && (
            <div className="nut-comment__follow-img">
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
