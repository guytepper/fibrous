import React from 'react';
import { Table } from 'antd';
import foods from '../../data/foods.json';
import './FoodsTable.css';

const columns = [{
  title: 'Name',
  dataIndex: 'title',
  width: 320,
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
      className="foods-table"
      columns={columns}
      dataSource={foods}
      bordered={true}
      size={'medium'}
    />
  )
}

export default FoodsTable;