import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ReceiveInvoiceList } from '../receiveinvoicelist'


test('test props && event', async () => {
  const state = {
    defaultValue: 2,
    list: [
      {
        id: 1,
        name: '张三',
        tel: '15088888888',
        addres: '北京市大兴京东大厦1号楼',
        isDefault: true,
      },
      {
        id: 2,
        name: '李四',
        tel: '15088888888',
        addres: '北京市大兴京东大厦2号楼',
        isDefault: false,
        extends: [
          { label: '扩展1', value: '扩展信息展示' },
          { label: '扩展2', value: '扩展信息展示' }
        ]
      }
    ]
  };
  const clickEditHandel = jest.fn(i => i);
  const clickSelectHandel = jest.fn(i => i);
  const event = {
    onEdit: clickEditHandel,
    onSelected: clickSelectHandel
  }
  const { container } = render(
    <ReceiveInvoiceList list={state.list} defaultValue={state.defaultValue} onSelected={event.onSelected} onEdit={event.onEdit} />
  )
  const comp = container.querySelector('.nb-receive-invoice-list') as HTMLElement;
  let el = expect(comp);
  el.toBeTruthy();

  // 测试 edit 事件

  let testEidtIndex = 1;
  const editEl = container.querySelectorAll('.nut-icon-edit')[testEidtIndex];
  editEl && fireEvent.click(editEl);
  expect(clickEditHandel.mock.lastCall[0]).toBe(state.list[testEidtIndex]);

  // 测试 select 事件
  let testSelectIndex = 0;
  const selectEl = container.querySelectorAll('.nb-receive-invoice-list__item-header')[testSelectIndex];
  selectEl && fireEvent.click(selectEl);
  expect(clickSelectHandel.mock.lastCall[0]).toBe(state.list[testSelectIndex]);

  const selectFooterEl = container.querySelectorAll('.nb-receive-invoice-list__item-footer')[testSelectIndex];
  selectFooterEl && fireEvent.click(selectFooterEl);
  expect(clickSelectHandel.mock.lastCall[0]).toBe(state.list[testSelectIndex]);

  // 快照生成
  expect(comp).toMatchSnapshot();

})

test('test delete event', async () => {
  const state = {
    defaultValue: 1,
    list: [
      {
        id: 1,
        name: '张三',
        tel: '15088888888',
        addres: '北京市大兴京东大厦1号楼',
        isDefault: true,
      },
      {
        id: 2,
        name: '李四',
        tel: '15088888888',
        addres: '北京市大兴京东大厦2号楼',
        isDefault: false,
        extends: [
          { label: '扩展1', value: '扩展信息展示' },
          { label: '扩展2', value: '扩展信息展示' }
        ]
      }
    ]
  };
  const clickDeleteHandel = jest.fn(i => i);
  const event = {
    onDelete: clickDeleteHandel,
  }
  const { container } = render(
    <ReceiveInvoiceList enableDelete={true} list={state.list} defaultValue={state.defaultValue} onDelete={event.onDelete} />
  )

  // 测试 delete 事件

  let testDeleteIndex = 1;
  const delEl = container.querySelectorAll('.nut-button')[testDeleteIndex];
  delEl && fireEvent.click(delEl);
  expect(clickDeleteHandel.mock.lastCall[0]).toBe(state.list[testDeleteIndex]);


})
