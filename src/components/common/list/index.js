import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {message_error} from "../Constant";

function CommonList({
                        mapData,
                        load,
                        columns = [],
                        maxHeight = 650,
                        tableProps = {}
                    }) {
    const [params, setParams] = useState({page: 0, size: 10});
    const [totalCount, setTotalCount] = useState();
    const [data, setData] = useState([]);
    const {reload} = useSelector(state => state.commonReducer);
    const [sort, setSort] = useState({});

    useEffect(() => {
        fetchData(params)
    }, [params]);

    useEffect(() => {
        if (reload) {
            fetchData(params)
        }
    }, [reload]);

    // useEffect(() => {
    //     setParams(prevState => {
    //         const newSort = Object.keys(sort).map(item => `${item}:${sort[item]}`)
    //         return {
    //             ...prevState,
    //             sort: newSort.join(",")
    //         }
    //     })
    // }, [sort])

    const fetchData = (params) => {
        load(params).then(response => {
            setData(response.data?.items?.map((item, index) => ({
                ...mapData(item), index: params.page * 10 + index + 1,
            })));
            setTotalCount(response.data?.totalCount);
        }).catch(message_error);
    }

    const changeSort = (sorter) => {
        if (Object.keys(sorter).length === 0) {
            return;
        }
        const {field, order} = sorter;
        setSort(prevState => ({
            ...prevState,
            [field]: order === "ascend" ? "asc" : "desc"
        }))
    }

    const onChangeTable = ({current, pageSize}, filters, {field, order}, extra) => {
        // changeSort(sorter)
        setParams(prevState => ({
            ...prevState,
            page: current - 1,
            // sort: field && order && `${field}:${order === "ascend" ? "asc" : "desc"}`
        }))
    }

    return (<div>
        <Table
            columns={columns}
            dataSource={data}
            onChange={onChangeTable}
            scroll={{
                y: maxHeight
            }}
            pagination={{
                defaultCurrent: 1, defaultPageSize: 10, total: totalCount, showTotal: (total) => `${total} kết quả`,
            }}
            {...tableProps}
        />
    </div>);
}

CommonList.propTypes = {
    mapData: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    load: PropTypes.func.isRequired
};


export default CommonList;
