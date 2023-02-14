import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderRemark } from '../orderremark';

const tagArr = ['京东快递', '轻拿轻放', '周末配送', '配送前，需提前电话联系', '如家中无人，可电话后，放置于门口'];

test('Show Orderremark', async () => {
  const show = true;
  const mark = '';
  const { container } = render(<OrderRemark visible={show} remark={mark} />);
  const orderRemarkContainer = container.querySelectorAll('.nut-orderRemark');
  expect(orderRemarkContainer.length).toBe(1);
});

test('Show Tags', async () => {
  const show = true;
  const mark = '';
  const { container } = render(<OrderRemark visible={show} remark={mark} maxLength={100} recommendTags={tagArr} />);
  const tagContainer = container.querySelectorAll('.nut-orderRemark__tag');
  expect(tagContainer.length).toBe(tagArr.length);
});

test('Limit text length when set maxlength', async () => {
  const show = true;
  const mark = '123456789123';
  const { container } = render(<OrderRemark visible={show} remark={mark} maxLength={10} recommendTags={tagArr} />);
  const textareaWrap = container.querySelectorAll('.nut-textarea__textarea')[0];
  expect(textareaWrap.textContent).toEqual('1234567891');
});

test('Custom Copywriting', async () => {
  const show = true;
  const mark = '';
  const { container } = render(
    <OrderRemark
      visible={show}
      remark={mark}
      recommendTags={tagArr}
      submitText={'提交'}
      placeholderText={'请填写备注信息'}
      title={'备注信息'}
      tagTitle={'快捷选择'}
    />
  );
  const orderRemark__title = container.querySelector('.nut-orderRemark__title');
  const textarea__textarea = container.querySelector('.nut-textarea__textarea');
  const orderRemark__tag_title = container.querySelector('.nut-orderRemark__tag-title');
  const button__warp = container.querySelector('.nut-button__warp');
  expect(orderRemark__title).toHaveTextContent('备注信息');
  expect(orderRemark__tag_title).toHaveTextContent('快捷选择');
  expect(button__warp).toHaveTextContent('提交');
  expect(textarea__textarea).toHaveAttribute('placeholder', '请填写备注信息');
});
test('The corresponding event should be triggered when the tag or button is clicked', async () => {
  const show = true;
  const mark = '123456789123';
  const clickTag = jest.fn();
  const onChange = jest.fn();
  const onBtnSubmit = jest.fn();
  const { container } = render(
    <OrderRemark
      visible={show}
      remark={mark}
      maxLength={10}
      recommendTags={tagArr}
      onClickTag={clickTag}
      onSubmit={onBtnSubmit}
      onChange={onChange}
    />
  );
  const tagContainer = container.querySelectorAll('.nut-orderRemark__tag');
  fireEvent.click(tagContainer[1]);
  expect(clickTag).toBeCalled();
  expect(onChange).toBeCalled();
  const button__warp = container.querySelector('.nut-button__warp');
  if (button__warp) {
    fireEvent.click(button__warp);
    expect(onBtnSubmit).toBeCalled();
  }
});
