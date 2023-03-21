import React from 'react';
import {Form, Input, message} from "antd";
import {changePassword, getMe} from "../../../../api/auth/user";
import FormItem from "antd/es/form/FormItem";

const ChangePasswordForm = props => {
    const [form] = Form.useForm();


    const onFinish = (values) => {
        changePassword(values).then(res => {
            message.success("Thành công!");
        })
    }

    return (
        <Form
            form={form}
            id={"change-password-form"}
            layout={"horizontal"}
            colon={false}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 20,
            }}
            onFinish={onFinish}
        >

            <FormItem
                initialValue={getMe().sub}
                label={"Tên người dùng"}>
                <Input disabled={true}/>
            </FormItem>

            <FormItem
                name={"oldPassword"}
                label={"Mật khẩu cũ"}
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu cũ!"
                    }
                ]}
            >
                <Input.Password/>
            </FormItem>

            <FormItem
                name={"newPassword"}
                label={"Mật khẩu mới"}
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu mới!"
                    },
                    {
                        type: "string",
                        min: 8,
                        max: 16,
                        message: "Mật khẩu có độ dài 8-16 kí tự!"
                    }
                ]}
            >
                <Input.Password/>
            </FormItem>

            <FormItem
                name={"reNewPassword"}
                label={"Nhập lại mật khẩu mới"}
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập lại mật khẩu mới!",
                    },
                    {
                        type: "string",
                        min: 8,
                        max: 16,
                        message: "Mật khẩu có độ dài 8-16 kí tự!"
                    }
                ]}
            >
                <Input.Password/>
            </FormItem>

        </Form>
    );

};

ChangePasswordForm.propTypes = {};

export default ChangePasswordForm;