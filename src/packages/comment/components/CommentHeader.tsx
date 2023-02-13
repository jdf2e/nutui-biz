import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { IComponent } from "@/utils/typings";
import { Rate } from "@nutui/nutui-react";

export interface CommentHeaderProps extends IComponent {
  type: "default" | "complex";
  info: any;
  commentLabels: ReactNode;
  onHandleClick: () => void;
}

const defaultProps = {
  type: "default",
} as CommentHeaderProps;

export const CommentHeader: FunctionComponent<
  Partial<CommentHeaderProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { type, info, commentLabels, onHandleClick } = {
    ...defaultProps,
    ...props,
  };

  return (
    <div>
      {info && (
        <div className="nut-comment-header" onClick={onHandleClick}>
          <div className="nut-comment-header__user">
            <div className="nut-comment-header__user-avter">
              {info.avatar && <img src={info.avatar} />}
            </div>
            {type === "default" ? (
              <div className={`nut-comment-header__user-${type}`}>
                <div className={`nut-comment-header__user-${type}-name`}>
                  {info.nickName && <span>{info.nickName}</span>}
                  {commentLabels}
                </div>

                <div className="nut-comment-header__user-score">
                  <Rate
                    modelValue={info.score}
                    iconSize={12}
                    spacing={5}
                    readonly
                  />
                </div>
              </div>
            ) : (
              <div className={`nut-comment-header__user-${type}`}>
                <span className={`nut-comment-header__user-${type}-name`}>
                  {info.nickName}
                </span>
                {commentLabels}
              </div>
            )}
          </div>
          {info.time && (
            <div className="nut-comment-header__time">{info.time}</div>
          )}
        </div>
      )}
      {type === "complex" && (
        <div className={`nut-comment-header__${type}-score`}>
          <Rate modelValue={info?.score} iconSize={12} spacing={3} readonly />
          <i className={`nut-comment-header__${type}-score-i`}></i>
          <div className={`nut-comment-header__${type}-score-size`}>
            {info?.size}
          </div>
        </div>
      )}
    </div>
  );
};

CommentHeader.defaultProps = defaultProps;
CommentHeader.displayName = "NutCommentHeader";
