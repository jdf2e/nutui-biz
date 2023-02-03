import React, { FunctionComponent, useEffect, useState } from "react";
import { IComponent } from "@/utils/typings";
import { Icon } from "@nutui/nutui-react";

export interface CommentBottomProps extends IComponent {
  type: "default" | "complex";
  info: any;
  operation: Array<string>;
  onHandleClick: () => void;
  onClickOperate: (type: string) => void;
}

const defaultProps = {
  type: "default",
  operation: ["reply", "like", "more"],
} as CommentBottomProps;

export const CommentBottom: FunctionComponent<
  Partial<CommentBottomProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
> = (props) => {
  const { type, info, operation, onHandleClick, onClickOperate } = {
    ...defaultProps,
    ...props,
  };

  const [showPopver, setShowPopover] = useState(false);

  const [mergeOp, setMergeOp] = useState([] as Array<string>);

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
    const deOp = ["reply", "like", "more"];
    if (operation) {
      const Op = [] as Array<string>;
      operation.forEach((name: string) => {
        if (deOp.includes(name)) {
          Op.push(name);
        }
      });
      setMergeOp(Op);
    }
  }, []);

  return (
    <div className="nut-comment-bottom">
      <div className="nut-comment-bottom__lable" onClick={handleClick}>
        {type !== "complex" && <span>{info?.size}</span>}
      </div>
      <div className="nut-comment-bottom__cpx">
        {mergeOp.map((name, i) => {
          return (
            <div
              className={
                "nut-comment-bottom__cpx-item" +
                ` nut-comment-bottom__cpx-item--${name}`
              }
              onClick={() => operate(name)}
              key={i}
            >
              {name !== "more" ? (
                <>
                  <span>{info?.[name]}</span>
                  {name === "like" ? (
                    <Icon name="fabulous"></Icon>
                  ) : (
                    <Icon name="comment"></Icon>
                  )}
                </>
              ) : (
                <>
                  <Icon name="more-x"></Icon>
                  {showPopver && (
                    <div
                      className="nut-comment-bottom__cpx-item-popover"
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
