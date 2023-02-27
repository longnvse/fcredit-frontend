import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {message, Spin} from "antd";
import {verifyUser} from "../api/auth/verify-user";

const VerifyUser = props => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            verifyUser(token).then(res => {
                message.success("Kích hoạt tài khoản thành công!");
            }).finally(() => {
                navigate("/login");
            });
        } else {
            message.error("Liên kết đã hết hạn hoặc đã được sử dụng");
            navigate("/login");
        }
    }, []);


    return (
        <Spin
            spinning={true}
            className={"w-full h-full flex-col justify-center mt-10"}
            tip={"Đang xác thực tài khoản!"}>
        </Spin>
    );
};

export default VerifyUser;
