import React, {useEffect} from 'react';
import {Form, Input, message} from "antd";
import FormItem from "antd/es/form/FormItem";
import {getProfile, updateProfile} from "../../../../api/auth/user";

const ProfileForm = (props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        getProfile().then(res => {
            form.setFieldsValue(res.data);
        })
    }, [])

    const onFinish = (values) => {
        updateProfile(values).then(res => {
            message.success("Thành công!");
        })
    }

    return (
        <Form
            form={form}
            id={"profile-form"}
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
                name={"id"}
                label={"Mã số tài khoản"}>
                <Input disabled={true}/>
            </FormItem>

            <FormItem
                name={"fullName"}
                label={"Họ và Tên"}>
                <Input/>
            </FormItem>

            <FormItem
                name={"phoneNumber"}
                label={"Số điện thoại"}>
                <Input/>
            </FormItem>

            <FormItem
                name={"email"}
                label={"Email"}>
                <Input disabled={true}/>
            </FormItem>

            <FormItem
                name={"description"}
                label={"Mô tả"}>
                <Input.TextArea rows={4}/>
            </FormItem>


        </Form>
    );
};

ProfileForm.propTypes = {};

export default ProfileForm;