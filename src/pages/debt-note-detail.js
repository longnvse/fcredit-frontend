import React , {useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button,DatePicker,Form,Input, Space,Upload,Modal,Typography,TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const { Text } = Typography;
const { TextArea } = Input;
const DebtNoteDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
       + Tạo phiếu nợ
      </Button>
      <Modal  width={800}  style={{backgroundColor:'gray',}}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
     <h2 >Chi tiết nợ</h2>
   
      <Form   labelCol={{
       span: 7,
     }}
     wrapperCol={{
       span: 20,
     }}
     layout="horizontal"
     
     style={{
       maxWidth: 700,
     }}>
    
     <Form.Item label="Ghi chú" style={{fontWeight: '700'}}>
       <TextArea rows={4} />
     </Form.Item>
     <Form.Item  label="Loại nợ (*)"  style={{fontWeight: '700'}}>
     <Space wrap>
     <Button type="primary"style={{
     width: '240px',
   }}>-</Button>
     <Button type="primary"style={{
     width: '240px',
   }}>+</Button>
     </Space>
   </Form.Item>
  
   <Form.Item label="Số tiền (*)"  style={{fontWeight: '700'}}>
   <Input placeholder="0" />
     </Form.Item>
     <Form.Item label="Ngày lập phiếu" style={{fontWeight: '700'}}>
      <DatePicker status="error"
   style={{
     width: '30%',
   }} placeholder=" DD/MM/YYYY "/>
   <Space wrap>
    
    <TimePicker use12Hours format="h:mm a" onChange={onChange} placeholder=" HH:mm "v />
  </Space>
     </Form.Item>
     <Form.Item label="Hình ảnh chứng minh"  style={{fontWeight: '700'}} valuePropName="fileList">
       <Upload action="/upload.do" listType="picture-card">
         <div>
           <PlusOutlined />
           <div style={{ marginTop: 8 }}>
           <Space direction="vertical"><Text type="secondary">Image</Text></Space></div>
         </div>
       </Upload>
     </Form.Item>
  
   </Form>
      </Modal>
    
        
     
 </>
  );
   
};
export default DebtNoteDetail;
