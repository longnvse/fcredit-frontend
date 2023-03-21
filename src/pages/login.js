import React from 'react';
import {Col, Row, Space} from "antd";
import {Link} from "react-router-dom";
import background from "../assets/login-bg.svg";
import LoginForm from "../components/login/form";

const Login = () => {
    return (
        <>
            <Row className={"h-[100vh]"}>
                <Col span={11}>
                    <Space direction={"vertical"} size={200} className={"flex"}>
                        <Row className={"flex justify-end"}>
                            <div className={"mt-5 mr-5"}>Bạn đã có tài khoản?
                                <Link className={"underline ml-1"} to={"/register"}>Đăng ký</Link></div>
                        </Row>
                        <Space direction={"vertical"} size={350} className={"flex"}>
                            <Row className={"flex-col items-center"}>
                                <LoginForm/>
                            </Row>
                        </Space>
                    </Space>
                </Col>
                <Col
                    span={13}
                    style={{
                        backgroundColor: "#DF5173FF"
                    }}
                    className={"flex justify-center items-center"}
                >
                    <img
                        src={background}
                        className={"max-w-full max-h-full w-[65%]"}
                        alt={""}/>
                </Col>
            </Row>
        </>

    );
};

Login.propTypes = {};

export default Login;