import React from 'react';
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";
import Title from "../title";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";

const LoginForm = props => {

    const onFinish = (values) => {
        console.log(values)
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

LoginForm.propTypes = {};

export default LoginForm;