import React from 'react';
import {Button, Form, Input, message} from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "../title";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import Captcha from "../captcha/Captcha";
import {registerUser} from "../../api/auth/register";
import {useNavigate} from "react-router-dom";

const RegisterForm = props => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values)
        registerUser(values).then(res => {
            message.success(res.data).then(value => {
                message.success("Vui lòng kiểm tra hòm mail để kích hoạt tài khoản!");
            });
            navigate("/login");
        }).catch(err => {
            console.log({err});
        })
    }

    return (
        <>
            <Title content={"Tạo tài khoản"}/>
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
                    name={"email"}
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập email!"
                    }]}
                >
                    <Input
                        size={"large"}
                        prefix={<MailOutlined/>}
                        placeholder={"Email"}
                    />
                </FormItem>
                <FormItem
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!"
                        },
                        {
                            type: "string",
                            min: 8,
                            max: 16,
                            message: "Mật khẩu có độ dài 8-16 kí tự!"
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
                    >Đăng ký</Button>
                </FormItem>
            </Form>
        </>
    );
};

RegisterForm.propTypes = {};

export default RegisterForm;