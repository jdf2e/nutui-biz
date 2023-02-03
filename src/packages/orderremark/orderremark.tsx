import React, { FunctionComponent, useEffect, useState } from 'react';

import { Popup, TextArea, Button } from '@nutui/nutui-react';
import bem from '@/utils/bem';
import { useConfig } from '@/packages/configprovider';
import { IComponent } from '@/utils/typings';

import './orderremark.scss';
export interface OrderRemarkProps extends IComponent {
  visible: boolean;
  closeOnClickOverlay: boolean;
  maxLength: number;
  placeholderText: string;
  title: string;
  tagTitle: string;
  remark: string;
  submitText: string;
  recommendTags: string[];
  onCloseMask?: (val: string) => void;
  onClose?: (val: string) => void;
  onOpen?: () => void;
  onChange?: (val: string) => void;
  onClickTag?: (tag: string) => void;
  onSubmit?: (val: string) => void;
}

const defaultProps = {
  visible: false,
  closeOnClickOverlay: true,
  maxLength: 50,
  placeholderText: '',
  title: '',
  tagTitle: '',
  remark: '',
  submitText: '',
  recommendTags: []
} as OrderRemarkProps;

export const OrderRemark: FunctionComponent<Partial<OrderRemarkProps>> = (props) => {
  const { locale } = useConfig();
  const {
    visible,
    closeOnClickOverlay,
    maxLength,
    placeholderText,
    title,
    tagTitle,
    remark,
    submitText,
    recommendTags,
    style,
    className,
    onCloseMask,
    onClose,
    onOpen,
    onChange,
    onClickTag,
    onSubmit,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };
  const [innerVisible, setInnerVisible] = useState(visible);
  const [innerMark, setInnerMark] = useState(remark);

  const b = bem('orderRemark');

  const clickOverlay = () => {
    onCloseMask && onCloseMask(innerMark);
  };
  const closeFun = () => {
    onClose && onClose(innerMark);
  };
  const onOpenFun = () => {
    setInnerMark(remark);
    onOpen && onOpen();
  };

  const clickTag = (tag: string) => {
    setInnerMark(tag);
    onClickTag && onClickTag(tag);
    onChange && onChange(tag);
  };
  const textareaChange = (val: any) => {
    setInnerMark(val);
    onChange && onChange(val);
  };
  const onBtnSubmit = () => {
    onSubmit && onSubmit(innerMark);
    setInnerVisible(false);
  };
  useEffect(() => {
    visible && setInnerVisible(visible);
    !visible && setInnerVisible(visible);
  }, [visible]);

  useEffect(() => {
    setInnerMark(remark);
  }, [remark]);
  return (
    <Popup
      visible={innerVisible}
      position="bottom"
      popClass={`${b('popup')}`}
      closeable
      overlay={true}
      closeOnClickOverlay={closeOnClickOverlay}
      onClickOverlay={clickOverlay}
      onClose={() => {
        closeFun();
      }}
      onOpen={() => {
        onOpenFun();
      }}>
      <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
        <div className={b('title')}>{title || locale.orderRemark.title}</div>
        <div className={b('textarea-container')}>
          <TextArea
            placeholder={placeholderText || locale.orderRemark.placeholderText}
            maxlength={maxLength}
            limitshow
            defaultValue={innerMark}
            onChange={textareaChange}></TextArea>
        </div>
        {recommendTags?.length > 0 && (
          <div className={b('tag-container')}>
            <div className={b('tag-title')}>{tagTitle || locale.orderRemark.tagTitle}</div>
            <div className={b('tag-content')}>
              {recommendTags.map((item: string, index: number) => {
                return (
                  <div key={index} className={b('tag')} onClick={(e) => clickTag(item)}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className={b('opt-container')}>
          <Button onClick={(e) => onBtnSubmit()} type="primary">
            {submitText || locale.orderRemark.submitText}
          </Button>
        </div>
      </div>
    </Popup>
  );
};

OrderRemark.defaultProps = defaultProps;
OrderRemark.displayName = 'NutOrderRemark';
