import React, {useEffect} from 'react';
import {Form, Input, message} from 'antd';
import {addDebtor, getDebtor, updateDebtor} from '../../api/debtor';
import FormItem from "antd/es/form/FormItem";

const {TextArea} = Input;

const DebtorForm = ({id}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (id) {
            getDebtor(id).then(res => {
                form.setFieldsValue(res.data);
            })
        }
    }, [id])

    const onFinish = (values) => {
        if (!id) {
            addDebtor(values).then(() => {
                message.success("Thêm con nợ  thành công!");
            })
        } else {
            updateDebtor(id, values).then(() => {
                message.success("Sửa con nợ  thành công!");
            })
        }

    }

    return (
        <>
            <Form
                onFinish={onFinish}
                form={form}
                id={"debtor-form"}
                colon={false}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                layout="horizontal"
            >

                <FormItem
                    name={"name"}
                    label="Họ và tên"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập họ và tên!"
                        }
                    ]}

                >
                    <Input placeholder={"Nguyễn Văn A"}/>
                </FormItem>
                <FormItem
                    name={"address"}
                    label="Địa chỉ">
                    <TextArea placeholder={"Địa chỉ"} rows={4}/>
                </FormItem>
                <FormItem
                    name={"phoneNumber"}
                    label="Sđt">
                    <Input placeholder={"0123456789"}/>
                </FormItem>
                <FormItem
                    name={"email"}
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            message: "Sai định dạng email!"
                        }
                    ]}
                >
                    <Input placeholder={"abc@gmail.com"}/>
                </FormItem>

                <FormItem
                    label="Tổng nợ"
                    style={{fontWeight: '700'}}>
                    <Input placeholder="0" readOnly disabled/>
                </FormItem>
            </Form>

        </>
    );
};
export default DebtorForm;
