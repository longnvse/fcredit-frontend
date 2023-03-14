import React , {useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button,DatePicker,Form,Input, Space,Upload,Modal,Typography,TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const { Text } = Typography;
const { TextArea } = Input;

const Adddebtor = props => {
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
         + Thêm người nợ
        </Button>
        <Modal  width={800}  style={{backgroundColor:'gray',}}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
       <h2 >Thông tin người nợ</h2>
     
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
      
       <Form.Item label="Họ và tên" style={{fontWeight: '700'}}>
         <Input/>
       </Form.Item>
       <Form.Item label="Địa chỉ" style={{fontWeight: '700'}}>
         <TextArea rows={4}/>
       </Form.Item>
       <Form.Item label="Sđt" style={{fontWeight: '700'}}>
         <Input/>
       </Form.Item>
       <Form.Item label="Email" style={{fontWeight: '700'}}>
         <Input/>
       </Form.Item>
  
     <Form.Item label="Tổng nợ" style={{fontWeight: '700'}}>
     <Input placeholder="0" style={{backgroundColor:'lightgray',}} />
       </Form.Item>   
     </Form>
        </Modal>
   </>
    );
};
export default Adddebtor;