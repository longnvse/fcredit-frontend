import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setHeader} from "../redux/actions/common/actions";
import ListDebtor from "./debtor";

const Debt = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("Danh sách người nợ"));
    }, [])

    return (
        <ListDebtor/>
    );
};

export default Debt;