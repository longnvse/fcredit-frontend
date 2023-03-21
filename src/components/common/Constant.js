import {message} from "antd";

export const message_error = (error) => {
    message.error(error.response?.data ||
        "Đã có lỗi xảy ra vui lòng thử lại sau ít phút!");

}
export const ADD = "add";
export const UPDATE = "update";

export const formatMoney = (value) => {
    if (typeof value === 'number') {
        value = `${value}`;
    }
    const regex = /^\d+\.?\d{1,2}/;
    const valueExec = regex.exec(value)?.[0] || value;
    return valueExec?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}