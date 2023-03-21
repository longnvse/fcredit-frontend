import { Table } from 'antd';
import React from 'react';
import { getDebtList } from '../../api/auth/debtor/debtor';

export const ListDebtor = props => {
    useEffect(() => {
        getDebtList().then(res => {
            console.log(res.data);
        })
    }, [])
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Tên',
            dataIndex: 'tên',
            filters: [
                {
                    text: 'Mike',
                    value: 'Jack',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value),
            width: '30%',
        },

        {
            title: 'Địa chỉ',
            dataIndex: 'địa_chỉ',
            filters: [
            ],
            onFilter: (value, record) => record.địa_chỉ.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'SĐT',
            dataIndex: 'sđt',
            filters: [
                {
                    text: '129389123',
                    value: 'Lon123123don',
                },
            ],
            onFilter: (value, record) => record.sđt.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
            ],
            onFilter: (value, record) => record.email.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Tổng nợ',
            dataIndex: 'tổng_nợ',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
            ],
            onFilter: (value, record) => record.tổng_nợ.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'ngày_tạo',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
            ],
            onFilter: (value, record) => record.ngày_tạo.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Cập nhật',
            dataIndex: 'cập_nhật',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
            ],
            onFilter: (value, record) => record.cập_nhật.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        }
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div>
            <div>
                <Table columns={columns} onChange={onChange} />
            </div>
        </div>
    )

};


export default ListDebtor;
