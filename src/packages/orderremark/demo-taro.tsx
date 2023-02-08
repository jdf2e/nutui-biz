import React, { useState } from 'react';
import { useTranslate } from '../../sites/assets/locale';
import { OrderRemark } from './orderremark.taro';
import { Cell } from '@nutui/nutui-react-taro';

const OrderRemarkDemo = () => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState('');
  const tagArr = ['test1', 'test2', 'test3', 'test122333asdfasdfsadf'];
  const onChange = (val: string) => {
    console.log('onChange');
    console.log(val);
  };
  const onClickTag = (val: string) => {
    console.log('onClickTag');
    console.log(val);
  };
  const onCloseMask = (val: string) => {
    console.log('onCloseMask');
    console.log(val);
  };
  return (
    <div className="demo">
      <Cell onClick={(e) => setShow(true)} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
      <OrderRemark
        visible={show}
        closeOnClickOverlay={true}
        maxLength={50}
        remark={mark}
        recommendTags={tagArr}
        submitText={'提交'}
        onOpen={() => {
          console.log('onOpen');
        }}
        onClose={(e) => {
          console.log('onClose');
          setShow(false);
        }}
        onCloseMask={onCloseMask}
        onChange={onChange}
        onClickTag={onClickTag}
        onSubmit={(e) => {
          console.log('onSubmit', e);
          setMark(e);
        }}></OrderRemark>
    </div>
  );
};

export default OrderRemarkDemo;
