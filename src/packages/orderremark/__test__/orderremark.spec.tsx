import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderRemark } from '../orderremark';

const tagArr = ['京东快递', '轻拿轻放', '周末配送', '配送前，需提前电话联系', '如家中无人，可电话后，放置于门口'];

test('Show Address', async () => {
  const { container } = render(<OrderRemark />);
  const regionItem = container.querySelectorAll('.nut-address__region-item');
  expect(regionItem.length).toBe(5);
});
