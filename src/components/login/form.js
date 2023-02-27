import React from 'react';
import {Button, Form, Input, message} from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "../title";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import Captcha from "../captcha/Captcha";
import {useNavigate} from "react-router-dom";
import {login} from "../../api/auth/login";
import {updateLocalAccessToken} from "../../axios";

const LoginForm = props => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values)
        login(values).then(res => {
            updateLocalAccessToken(res.data.token);
            navigate("/");
        }).catch(err => {
            console.log({err});
        })
    }

    return (
        <>
            <Title content={"Đăng nhập"}/>
            <Form
                onFinish={onFinish}
                layout={"vertical"}
                className={"w-[40%] mt-8"}
            >
                <FormItem
                    name={"username"}
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập tên người dùng!"
                    }]}
                >
                    <Input
                        size={"large"}
                        prefix={<UserOutlined/>}
                        placeholder={"Tên người dùng"}
                    />
                </FormItem>
                <FormItem
                    name={"password"}
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập mật khẩu!"
                    }]}
                >
                    <Input.Password
                        size={"large"}
                        prefix={<LockOutlined/>}
                        placeholder={"Mật khẩu"}
                    />
                </FormItem>
                <FormItem
                    name={"captchaResponse"}
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập captcha!"
                        }
                    ]}
                >
                    <Captcha/>
                </FormItem>

                <FormItem>
                    <Button
                        className={"w-full"}
                        size={"large"}
                        type={"primary"}
                        htmlType={"submit"}
                    >Đăng nhập</Button>
                </FormItem>
            </Form>
        </>
    );
};
export default LoginForm;