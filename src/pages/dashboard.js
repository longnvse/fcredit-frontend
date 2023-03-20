import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setHeader} from "../redux/actions/common/actions";

const Dashboard = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("Thống kê"));
    }, [])

    return (
        <div>

        </div>
    );
};

Dashboard.propTypes = {};

export default Dashboard;