import {message} from "antd";

export const message_error = (error) => {
    message.error(error.response?.data ||
        "Đã có lỗi xảy ra vui lòng thử lại sau ít phút!");

}
export const ADD = "add";
export const UPDATE = "update";