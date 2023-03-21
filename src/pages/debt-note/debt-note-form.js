import React, {useEffect} from 'react';
import {DatePicker, Form, Input, message, Segmented} from 'antd';
import dayjs from "dayjs";
import InputNumberCustom from "../../components/common/input/InputNumber";
import {addDebtNote, getDebtNote} from "../../api/debt-note";
import FormItem from "antd/es/form/FormItem";

const {TextArea} = Input;
const DebtNoteForm = ({debtorId, id, payFor}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (id) {
            getDebtNote(id).then(res => {
                console.log(res.data)
                form.setFieldsValue(res.data);
            })
        }
    }, [id])

    useEffect(() => {
        console.log(payFor)
        if (payFor && Object.keys(payFor).length > 0) {
            form.setFieldsValue({
                note: `Thanh toán cho phiếu nợ số ${payFor.id}`,
                isDebt: !payFor.isDebt,
                money: payFor.money
            });
        }
    }, [payFor])

    const onFinish = (values) => {
        if (!id && debtorId) {
            addDebtNote(debtorId, values).then(() => {
                message.success("Thêm phiếu nợ thành công!");
            })
        }
    }


    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                id={"debt-note-form"}
                wrapperCol={{
                    span: 20,
                }}
                colon={false}
                layout="horizontal"
                form={form}
                onFinish={onFinish}
            >
                <FormItem name={"note"} label="Ghi chú">
                    <TextArea
                        readOnly={!!id}
                        rows={4}
                    />
                </FormItem>
                <FormItem
                    name={"isDebt"}
                    label="Loại nợ"
                    required={true}
                    initialValue={true}
                >
                    <Segmented
                        block
                        disabled={!!id}
                        options={
                            [
                                {
                                    value: true,
                                    label: "Ghi nợ"
                                },
                                {
                                    value: false,
                                    label: "Trả nợ"
                                }
                            ]
                        }
                    />
                </FormItem>

                <FormItem
                    name={"money"}
                    label="Số tiền"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập số tiền!"
                        },
                        {
                            type: "number",
                            min: 0,
                            message: "Số tiền phải lớn hơn 0!"
                        }
                    ]}
                >
                    <InputNumberCustom disabled={!!id}/>
                </FormItem>
                <FormItem
                    name={"debtDate"}
                    label="Ngày lập phiếu"
                >
                    <DatePicker
                        disabled={!!id}
                        className={"w-full"}
                        format="YYYY-MM-DD HH:mm"
                        showTime={{
                            defaultValue: dayjs('00:00', 'HH:mm'),
                        }}
                    />
                </FormItem>
                {/*<Form.Item label="Hình ảnh chứng minh" style={{fontWeight: '700'}} valuePropName="fileList">*/}
                {/*    <Upload action="/upload.do" listType="picture-card">*/}
                {/*        <div>*/}
                {/*            <PlusOutlined/>*/}
                {/*            <div style={{marginTop: 8}}>*/}
                {/*                <Space direction="vertical"><Text type="secondary">Image</Text></Space></div>*/}
                {/*        </div>*/}
                {/*    </Upload>*/}
                {/*</Form.Item>*/}
            </Form>


        </>
    );

};
export default DebtNoteForm;
