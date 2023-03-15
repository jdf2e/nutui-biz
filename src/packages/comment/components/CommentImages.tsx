import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import { IComponent } from "@/utils/typings";
import { Icon } from "@nutui/nutui-react";
import classNames from 'classnames';
import bem from '@/utils/bem'

export interface GoodsClickParams {
  type: string;
  index: string | number;
  value: VideosType | ImagesType;
}

export interface VideosType {
  id?: number | string;
  mainUrl?: string;
  videoUrl?: string;
}

export interface ImagesType {
  id?: number | string;
  smallImgUrl?: string;
  bigImgUrl?: string;
  imgUrl?: string;
}
export interface CommentImagesProps extends IComponent {
  type: "one" | "multi";
  videos: Array<VideosType>;
  images: Array<ImagesType>;
  onClickImages: (imgs: GoodsClickParams) => void;
}



const defaultProps = {
  type: "one",
} as CommentImagesProps;

export const CommentImages: FunctionComponent<
  Partial<CommentImagesProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { type, videos, images, onClickImages } = {
    ...defaultProps,
    ...props,
  };
  const b = bem('comment-images')

  const [totalImages, setTotalImages] = useState(
    [] as Array<VideosType | ImagesType>
  );

  const showImages = (type: string, index: number) => {
    const i = type === "img" ? (index) - videos.length : index;
    onClickImages &&
      onClickImages({
        type,
        index: i,
        value: type == "img" ? images[i] : videos[i],
      });
  };

  useEffect(() => {
    if (videos && images) setTotalImages([...videos, ...images]);
  }, [videos, images]);

  return (
    <div className={classNames([b(),b(`${type}`)]) }>
      {/* videos */}
      {videos &&
        videos.map((itV, index) => {
          return (
            <div
              className={classNames([b('item'),b(`item-video`)])}
              key={index}
              onClick={() => showImages("video", index)}
            >
              <img src={itV.mainUrl} />
              <div className={b('play')}></div>
            </div>
          );
        })}
      {/* images */}
      {images &&
        images.map((itI, index) => {
          return (type === "multi" && videos.length + index < 9) ||
            type != "multi" ? (
            <div
              className={classNames([b('item'),b(`item--imgbox`)])}
              key={index}
              onClick={() => showImages("img", index + videos.length)}
            >
              <img src={itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl} />
              {type === "multi" &&
                totalImages.length > 9 &&
                videos.length + index > 7 && (
                  <div
                    className={b('mask')}
                    onClick={() => showImages("more", index + videos.length)}
                  >
                    <span>共 {totalImages.length} 张</span>
                    <Icon name="right" size={12}></Icon>
                  </div>
                )}
            </div>
          ) : (
            ""
          );
        })}
    </div>
  );
};

CommentImages.defaultProps = defaultProps;
CommentImages.displayName = "NutCommentImages";
