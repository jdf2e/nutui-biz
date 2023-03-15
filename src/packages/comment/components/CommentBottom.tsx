import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import { IComponent } from "@/utils/typings";
import { Icon } from "@nutui/nutui-react";
import classNames from 'classnames';
import bem from '@/utils/bem'
import { CommentInfo } from "../comment";
export interface CommentBottomProps extends IComponent {
  type: "default" | "complex";
  info: CommentInfo;
  operation: Array<string>;
  onHandleClick: () => void;
  onClickOperate: (type: string) => void;
}

const defaultProps = {
  type: "default",
  operation: ["reply", "like", "more"],
} as CommentBottomProps;

export const CommentBottom: FunctionComponent<
  Partial<CommentBottomProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { type, info, operation, onHandleClick, onClickOperate } = {
    ...defaultProps,
    ...props,
  };

  const b = bem('comment-bottom')

  const [showPopver, setShowPopover] = useState(false);

  const [mergeOp, setMergeOp] = useState<Array<string>>([]);

  const operate = (type: string) => {
    if (type === "more") {
      setShowPopover(!showPopver);
    }
    onClickOperate && onClickOperate(type);
  };

  const handleClick = () => {
    onHandleClick && onHandleClick();
  };

  useEffect(() => {
    setMergeOp(operation)
  }, []);

  return (
    <div className={b()}>
      <div className={b('lable')} onClick={handleClick}>
        {type !== "complex" && <span>{info?.size}</span>}
      </div>
      <div className={b('cpx')}>
        {mergeOp.map((name, i) => {
          return (
            <div
              className={classNames([b('cpx-item'),b(`cpx-item--${name}`)])}
              onClick={() => operate(name)}
              key={i}
            >
              {
                name == 'reply' && (<><span>{info?.reply}</span><Icon name="comment"></Icon></>)
              }
              {
                name == 'like' &&  (<><span>{info?.like}</span><Icon name="fabulous"></Icon></>)
              }
              {name == "more" && (
                <>
                  <Icon name="more-x"></Icon>
                  {showPopver && (
                    <div
                      className={b('cpx-item-popover')}
                      onClick={() => operate("popover")}
                    >
                      我要投诉
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

CommentBottom.defaultProps = defaultProps;
CommentBottom.displayName = "NutCommentBottom";
