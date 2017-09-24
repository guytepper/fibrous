import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import data from '../../data/foods.json';
import './FoodsTable.css';

class FoodsTable extends Component {
  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
  };

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map(record => {
        const match = record.title.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          title: (
            <span>
              {record.title.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'title',
      width: 220,
      fixed: 'left',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput.focus());
      },
    }, {
      title: 'Amount',
      dataIndex: 'amount',
      className: 'amount-column',
      width: 100,
    }, {
      title: 'Soluble',
      dataIndex: 'soluble',
      width: 90,
      sorter: (a, b) => a.soluble - b.soluble
    }, {
      title: 'Insoluble',
      dataIndex: 'insoluble',
      width: 90,
      sorter: (a, b) => a.insoluble - b.insoluble
    }, {
      title: 'Total',
      dataIndex: 'total',
      sorter: (a, b) => a.total - b.total
    }];

    return (
      <Table
        className="foods-table"
        columns={columns}
        dataSource={this.state.data}
        bordered={true}
        scroll={{ x: 620 }}
        size={'medium'}
      />
    )
  }
}

export default FoodsTable;