import React, { FunctionComponent, useEffect, useState } from "react";
import { IComponent } from "@/utils/typings";
import { Icon } from "@nutui/nutui-react";

export interface CommentImagesProps extends IComponent {
  type: "one" | "multi";
  videos: Array<VideosType>;
  images: Array<ImagesType>;
  onClickImages: (imgs: {
    type: string;
    index: string | number;
    value: VideosType | ImagesType;
  }) => void;
}

export interface VideosType {
  id: number | string;
  mainUrl: string;
  videoUrl: string;
}

export interface ImagesType {
  id: number | string;
  smallImgUrl: string;
  bigImgUrl: string;
  imgUrl: string;
}

const defaultProps = {
  type: "one",
} as CommentImagesProps;

export const CommentImages: FunctionComponent<
  Partial<CommentImagesProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { type, videos, images, onClickImages } = {
    ...defaultProps,
    ...props,
  };

  const [totalImages, setTotalImages] = useState(
    [] as Array<VideosType | ImagesType>
  );

  const showImages = (type: string, index: string | number) => {
    const i = type === "img" ? (index as number) - videos.length : index;
    onClickImages &&
      onClickImages({
        type,
        index: i,
        value: type == "img" ? images[i as number] : videos[i as number],
      });
  };

  useEffect(() => {
    setTotalImages(
      ([] as Array<VideosType | ImagesType>).concat(videos).concat(images)
    );
  }, [videos, images]);

  return (
    <div className={`nut-comment-images nut-comment-images--${type}`}>
      {/* videos */}
      {videos &&
        videos.map((itV, index) => {
          return (
            <div
              className="nut-comment-images__item nut-comment-images__item--video"
              key={itV.id}
              onClick={() => showImages("video", index)}
            >
              <img src={itV.mainUrl} />
              <div className="nut-comment-images__play"></div>
            </div>
          );
        })}
      {/* images */}
      {images &&
        images.map((itI, index) => {
          return (type === "multi" && videos.length + index < 9) ||
            type != "multi" ? (
            <div
              className="nut-comment-images__item nut-comment-images__item--imgbox"
              key={itI.id}
              onClick={() => showImages("img", index + videos.length)}
            >
              <img src={itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl} />
              {type === "multi" &&
                totalImages.length > 9 &&
                videos.length + index > 7 && (
                  <div
                    className="nut-comment-images__mask"
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
