import React , {useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button,DatePicker,Form,Input, Space,Upload,Modal} from 'antd';

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
       Chi tiết
      </Button>
      <Modal title="Chi tiết nợ" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
      <Form   labelCol={{
       span: 10,
     }}
     wrapperCol={{
       span: 20,
     }}
     layout="horizontal"
     
     style={{
       maxWidth: 700,
     }}>
    
     <Form.Item label="Ghi chú">
       <TextArea rows={4} />
     </Form.Item>
     <Form.Item  label="Loại nợ (*)">
     <Space wrap>
     <Button type="primary"style={{
     width: '200px',
   }}>-</Button>
     <Button type="primary"style={{
     width: '200px',
   }}>+</Button>
     </Space>
   </Form.Item>
  
   <Form.Item label="Số tiền (*)">
   <Input placeholder="0" />
     </Form.Item>
     <Form.Item label="Ngày lập phiếu">
      <DatePicker status="error"
   style={{
     width: '100%',
   }} placeholder=" DD/MM/YYYY HH:mm" />
     </Form.Item>
     <Form.Item label="Hình ảnh chứng minh" valuePropName="fileList">
       <Upload action="/upload.do" listType="picture-card">
         <div>
           <PlusOutlined />
           <div style={{ marginTop: 8 }}>Image</div>
         </div>
       </Upload>
     </Form.Item>
  
   </Form>
      </Modal>
    
        
     
 </>
  );
   
};
export default DebtNoteDetail;
