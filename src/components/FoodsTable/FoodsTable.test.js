import React from 'react';
import { mount } from 'enzyme';
import FoodsTable from './FoodsTable';
import data from '../../data/foods.json';

it('renders first row correctly', () => {
  const wrapper    = mount(<FoodsTable />);
  const firstRow   = wrapper.find('.ant-table-row').at(0);
  const firstFood  = data[0];

  const foodName   = firstRow.childAt(0).text();
  const foodAmount = firstRow.childAt(1).text();
  const foodSol    = firstRow.childAt(2).text();
  const foodInsol  = firstRow.childAt(3).text();
  const foodTotal  = firstRow.childAt(4).text();

  expect(foodName).toEqual(firstFood.title);
  expect(foodAmount).toEqual(firstFood.amount);
  expect(foodSol).toEqual(firstFood.soluble);
  expect(foodInsol).toEqual(firstFood.insoluble);
  expect(foodTotal).toEqual(firstFood.total);
});
