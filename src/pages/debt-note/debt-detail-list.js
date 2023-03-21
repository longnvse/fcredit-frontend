import React, {useCallback} from 'react';
import ButtonModal from "../../components/common/button/ButtonModal";
import CommonList from "../../components/common/list";
import {getDebtNotes} from "../../api/debt-note";
import {ExclamationCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {columns} from "./columns";
import dayjs from "dayjs";
import {ADD, formatMoney, UPDATE} from "../../components/common/Constant";
import DebtNoteForm from "./debt-note-form";

const DebtNoteList = ({debtorId}) => {

    const load = useCallback((params) => {
        return getDebtNotes(debtorId, params);
    }, [debtorId])


    const mapData = (item) => {
        return {
            key: item.id,
            ...item,
            debtType: item.isDebt ? "Ghi nợ" : "Trả nợ",
            money: formatMoney(item.money),
            debtDate: item.debtDate && dayjs(item.debtDate).format("DD/MM/YYYY HH:mm:ss"),
            createDate: item.createDate && dayjs(item.createDate).format("DD/MM/YYYY HH:mm:ss"),
            action: <div className={"flex justify-evenly"}>
                <ButtonModal
                    mode={ADD}
                    title={"Thêm phiếu nợ"}
                    formId={"debt-note-form"}
                    buttonProps={{
                        icon: <PlusOutlined/>,
                        type: "text",
                        disabled: !item.isDebt
                    }}
                    modalProps={{
                        width: "50%",
                    }}
                >
                    <DebtNoteForm payFor={item} debtorId={debtorId}/>
                </ButtonModal>
                <ButtonModal
                    mode={ADD}
                    title={"Thông tin phiếu nợ"}
                    buttonProps={{
                        icon: <ExclamationCircleOutlined/>,
                        type: "text"
                    }}
                    modalProps={{
                        width: "50%",
                        footer: null
                    }}
                >
                    <DebtNoteForm id={item.id}/>
                </ButtonModal>
            </div>
        }
    }


    return (
        <>
            <ButtonModal
                autoCLose={false}
                buttonProps={{
                    icon: <ExclamationCircleOutlined/>,
                    type: "link"
                }}
                modalProps={{
                    width: "70%",
                    footer: null
                }}
            >
                <div className={"mt-8"}>
                    <div className={"flex justify-end mb-4"}>
                        <ButtonModal
                            formId={"debt-note-form"}
                            mode={ADD}
                            title={"Thêm phiếu nợ"}
                            buttonProps={{
                                icon: <PlusOutlined/>,
                                value: "Thêm phiếu nợ",
                                type: "primary",
                                size: "large",

                            }}
                            modalProps={{
                                width: "50%",
                            }}
                        >
                            <DebtNoteForm debtorId={debtorId}/>
                        </ButtonModal>
                    </div>
                    <CommonList
                        maxHeight={500}
                        mapData={mapData}
                        load={load}
                        columns={columns}
                        tableProps={{
                            onRow: ({isDebt}) => {
                                if (isDebt) {
                                    return ({
                                        style: {
                                            color: "red"
                                        }
                                    })
                                }
                            }
                        }}
                    />
                </div>
            </ButtonModal>
        </>
    )
};

DebtNoteList.propTypes = {};

export default DebtNoteList;