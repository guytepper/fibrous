import React from 'react';
import { Table } from 'antd';
import foods from '../data/foods.json';

const columns = [{
  title: 'Name',
  dataIndex: 'title',
}, {
  title: 'Amount',
  dataIndex: 'amount',
}, {
  title: 'Soluble',
  dataIndex: 'soluble',
  sorter: (a, b) => a.soluble - b.soluble
}, {
  title: 'Insoluble',
  dataIndex: 'insoluble',
  sorter: (a, b) => a.insoluble - b.insoluble
}, {
  title: 'Total',
  dataIndex: 'total',
  sorter: (a, b) => a.total - b.total
}];

function FoodsTable () {
  return (
    <Table
      columns={columns}
      dataSource={foods}
    />
  )
}

export default FoodsTable;