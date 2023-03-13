import React from "react";
import { Table } from "antd";

const Tables = (props) => {
  const dataSource = [
    {
      key: "1",
      id: "1",
      ngày_tạo: "11/1/1111",
      cập_nhật: "12/1/1111",
    },
    {
      key: "2",
      id: "2",
      ngày_tạo: "12/1/1111",
      cập_nhật: "13/1/1111",
    },
  ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Ghi chú",
      dataIndex: "ghi_chú",
      filters: [
        {
          text: "Mike",
          value: "Jack",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
      ],
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },

    {
      title: "Loại nợ",
      dataIndex: "Loại_nợ",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.địa_chỉ.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Số tiền",
      dataIndex: "Số_tiền",
      filters: [
        {
          text: "129389123",
          value: "Lon123123don",
        },
      ],
      onFilter: (value, record) => record.sđt.startsWith(value),
      filterSearch: true,
      width: "40%",
    },

    {
      title: "Ngày tạo",
      dataIndex: "ngày_tạo",
      filters: [
        {
          text: "London",
          value: "London",
        },
      ],
      onFilter: (value, record) => record.ngày_tạo.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Cập nhật",
      dataIndex: "cập_nhật",
      filters: [
        {
          text: "London",
          value: "London",
        },
      ],
      onFilter: (value, record) => record.cập_nhật.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Action",
      dataIndex: "action",
      filters: [
        {
          text: "London",
          value: "London",
        },
      ],
      onFilter: (value, record) => record.action.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <div>
        <Table columns={columns} dataSource={dataSource} onChange={onChange} />
      </div>
    </div>
  );
};

export default Tables;
