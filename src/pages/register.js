import React from 'react';
import {Col, Row, Space} from "antd";
import background from "./../assets/register-bg.svg";
import {Link} from "react-router-dom";
import RegisterForm from "../components/register/form";

const Register = () => {

    return (
        <>
            <Row className={"h-[100vh]"}>
                <Col span={11}>
                    <Space direction={"vertical"} size={200} className={"flex"}>
                        <Row className={"flex justify-between"}>
                            <div>LOGO</div>
                            <div className={"mt-5 mr-5"}>Bạn đã có tài khoản?
                                <Link className={"underline ml-1"} to={"/login"}>Đăng nhập</Link></div>
                        </Row>
                        <Space direction={"vertical"} size={350} className={"flex"}>
                            <Row className={"flex-col items-center"}>
                                <RegisterForm/>
                            </Row>
                            <Row className={"flex justify-center text-[#9095A1FF]"}>
                                <div>Bằng việc đăng ký, bạn đồng ý về
                                    Điều khoản dịch vụ & <span className={"underline"}>Chính sách bảo mật</span></div>
                            </Row>
                        </Space>
                    </Space>
                </Col>
                <Col
                    span={13}
                    style={{
                        backgroundColor: "#A777D7FF"
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

Register.propTypes = {};

export default Register;