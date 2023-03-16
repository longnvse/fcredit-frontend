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
      title: "ID",
      dataIndex: "ID",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Ghi chú",
      dataIndex: "ghi_chú",
      filters: [
        {
          text: "Vay",
          value: "Vay",
        },
        {
          text: "Trả",
          value: "Trả",
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
          text: "+",
          value: "+",
        },
        {
          text: "-",
          value: "-",
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
          text: "From...To",
          value: "",
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
          text: "Date",
          value: "Date",
        },
      ],
      onFilter: (value, record) => record.ngày_tạo.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Thời gian tạo",
      dataIndex: "cập_nhật",
      filters: [
        {
          text: "Time",
          value: "Time",
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
          text: "",
          value: "",
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
