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
}, {
  title: 'Insoluble',
  dataIndex: 'insoluble',
}, {
  title: 'Total',
  dataIndex: 'total',
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