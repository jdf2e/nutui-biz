import React, { useState } from 'react';
import { useTranslate } from '../../sites/assets/locale';
import { OrderRemark } from './orderremark';
import { Cell, Toast } from '@nutui/nutui-react';
import "./demo.scss"
interface tarnslatedOption {
  basic: string;
  title: string;
  title2: string;
  title3: string;
  submitText: string;
  placeholderText: string;
  topTitle: string;
  tagTitle: string;
  cellTitle: string;
  emptyText: string;
  tagArr: string[];
}
const OrderRemarkDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      title: '带有标签',
      title2: '自定义文案',
      title3: '事件演示',
      submitText: '提交',
      placeholderText: '请填写备注信息',
      topTitle: '备注信息',
      tagTitle: '快捷选择',
      cellTitle: '订单备注',
      emptyText: '请输入备注信息',
      tagArr: [
        '京东快递',
        '轻拿轻放',
        '周末配送',
        '配送前，需提前电话联系',
        '如家中无人，可电话后，放置于门口',
      ]
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'With Tag',
      title2: 'Custom Copywriting',
      title3: 'Event Demonstration',
      submitText: 'Submit',
      placeholderText: 'Please fill in the remarks',
      topTitle: 'Remarks',
      tagTitle: 'Quick Selection',
      cellTitle: 'Order Remarks',
      emptyText: 'Please enter remarks',
      tagArr: [
        'JD Express',
        'Handle with care',
        'weekend delivery',
        'Before delivery, you need to call in advance',
        'If there is no one at home, you can call and place it at the door'
      ]
    }
  });
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [mark, setMark] = useState('轻拿轻放');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [mark4, setMark4] = useState('');

  const onChange = (val: string) => {
    console.log('onChange', val);
  };
  const onOpen = () => {
    Toast.text('onOpen');
  };
  const onClickTag = (val: string, index: number, str: string) => {
    console.log('onClickTag', val, index, str);
    Toast.text(`onClickTag:${val}`);
  };
  const onClickOverlay = (val: string) => {
    console.log('onClickOverlay', val);
  };
  return (
    <div className="demo orderremarkDemo">
      <h2>{translated.basic}</h2>
      <Cell
        onClick={(e) => setShow(true)}
        title={translated.cellTitle}
        desc={mark ? mark : translated.emptyText}></Cell>
      <OrderRemark
        visible={show}
        remark={mark}
        onClose={(e) => {
          setShow(false);
        }}
        onSubmit={(e) => {
          setMark(e);
        }}></OrderRemark>

      <h2>{translated.title}</h2>
      <Cell
        onClick={(e) => setShow2(true)}
        title={translated.cellTitle}
        desc={mark2 ? mark2 : translated.emptyText}></Cell>
      <OrderRemark
        visible={show2}
        maxLength={100}
        remark={mark2}
        recommendTags={translated.tagArr}
        onClose={(e) => {
          setShow2(false);
        }}
        onSubmit={(e) => {
          setMark2(e);
        }}></OrderRemark>
      <h2>{translated.title2}</h2>
      <Cell
        onClick={(e) => setShow3(true)}
        title={translated.cellTitle}
        desc={mark3 ? mark3 : translated.emptyText}></Cell>
      <OrderRemark
        visible={show3}
        remark={mark3}
        recommendTags={translated.tagArr}
        submitText={translated.submitText}
        placeholderText={translated.placeholderText}
        title={translated.topTitle}
        tagTitle={translated.tagTitle}
        onClose={(e) => {
          setShow3(false);
        }}
        onSubmit={(e) => {
          setMark3(e);
        }}></OrderRemark>
      <h2>{translated.title3}</h2>
      <Cell
        onClick={(e) => setShow4(true)}
        title={translated.cellTitle}
        desc={mark4 ? mark4 : translated.emptyText}></Cell>
      <OrderRemark
        visible={show4}
        remark={mark4}
        recommendTags={translated.tagArr}
        onOpen={onOpen}
        onClose={(e) => {
          console.log('onClose');
          Toast.text(`onClose:${e}`);
          setShow4(false);
        }}
        onClickOverlay={onClickOverlay}
        onClickTag={onClickTag}
        onChange={onChange}
        onSubmit={(e) => {
          console.log('onSubmit', e);
          Toast.text(`onSubmit:${e}`);
          setMark4(e);
        }}></OrderRemark>
    </div>
  );
};

export default OrderRemarkDemo;
