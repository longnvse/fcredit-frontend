import React, {useEffect} from 'react';
import {columns} from "./columns";
import CommonList from "../../components/common/list";
import {getDebtors} from "../../api/debtor";
import ButtonModal from "../../components/common/button/ButtonModal";
import {ADD, formatMoney, UPDATE} from "../../components/common/Constant";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import DebtorForm from "./debtorForm";
import dayjs from "dayjs";
import DebtNoteForm from "../debt-note/debt-note-form";
import DebtNoteList from "../debt-note/debt-detail-list";

const ListDebtor = props => {

    const load = (params) => {
        return getDebtors(params);
    }

    const mapData = (item) => {
        return {
            key: item.id,
            ...item,
            debtTotal: formatMoney(item.debtTotal),
            createDate: item.createDate && dayjs(item.createDate).format("DD/MM/YYYY HH:mm:ss"),
            updatedDate: item.updatedDate && dayjs(item.updatedDate).format("DD/MM/YYYY HH:mm:ss"),
            action: <div className={"flex justify-evenly"}>
                <DebtNoteList debtorId={item.id}/>
                <ButtonModal
                    formId={"debtor-form"}
                    mode={UPDATE}
                    title={"Sửa người nợ"}
                    buttonProps={{
                        icon: <EditOutlined/>,
                        type: "link"
                    }}
                    modalProps={{
                        width: "50%"
                    }}
                >
                    <DebtorForm id={item.id}/>
                </ButtonModal>
                <ButtonModal
                    formId={"debt-note-form"}
                    mode={ADD}
                    title={"Thêm phiếu nợ"}
                    buttonProps={{
                        icon: <PlusOutlined/>,
                        type: "link"
                    }}
                    modalProps={{
                        width: "50%"
                    }}
                >
                    <DebtNoteForm debtorId={item.id}/>
                </ButtonModal>
            </div>
        }
    }

    return (
        <div>
            <div className={"flex mb-4 justify-end"}>
                <ButtonModal
                    formId={"debtor-form"}
                    mode={ADD}
                    title={"Thêm người nợ"}
                    buttonProps={{
                        value: "Thêm người nợ",
                        icon: <PlusOutlined/>,
                        size: "large",
                        type: "primary"
                    }}
                    modalProps={{
                        width: "50%"
                    }}
                >
                    <DebtorForm/>
                </ButtonModal>
            </div>
            <CommonList columns={columns} load={load} mapData={mapData}/>
        </div>
    )

};


export default ListDebtor;
