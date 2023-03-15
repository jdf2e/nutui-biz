import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { IComponent } from "@/utils/typings";
import { Rate } from "@nutui/nutui-react";
import bem from '@/utils/bem'
import { CommentInfo } from "../comment";
export interface CommentHeaderProps extends IComponent {
  type: "default" | "complex";
  info: CommentInfo;
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

  const b = bem('comment-header')

  return (
    <div>
      {info && (
        <div className={b()} onClick={onHandleClick}>
          <div className={b('user')}>
            <div className={b('user-avter')}>
              {info.avatar && <img src={info.avatar} />}
            </div>
            {type === "default" ? (
              <div className={b(`user-${type}`)}>
                <div className={b(`user-${type}-name`)}>
                  {info.nickName && <span>{info.nickName}</span>}
                  {commentLabels}
                </div>

                <div className={b(`user-score`)}>
                  <Rate
                    modelValue={info.score}
                    iconSize={12}
                    spacing={5}
                    readonly
                  />
                </div>
              </div>
            ) : (
              <div className={b(`user-${type}`)}>
                <span className={b(`user-${type}-name`)}>
                  {info.nickName}
                </span>
                {commentLabels}
              </div>
            )}
          </div>
          {info.time && (
            <div className={b('time')}>{info.time}</div>
          )}
        </div>
      )}
      {type === "complex" && (
        <div className={b(`${type}-score`)}>
          <Rate modelValue={info?.score} iconSize={12} spacing={3} readonly />
          <i className={b(`${type}-score-i`)}></i>
          <div className={b(`${type}-score-size`)}>
            {info?.size}
          </div>
        </div>
      )}
    </div>
  );
};

CommentHeader.defaultProps = defaultProps;
CommentHeader.displayName = "NutCommentHeader";
