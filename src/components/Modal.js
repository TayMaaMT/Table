
import { Modal,Button,Form,Input,InputNumber,Radio,Select} from 'antd';
import {useState} from 'react';
import styled from 'styled-components';

const { Option } = Select;
const getInitialForm = () => {
  return {
    name: '',
    email: '',
    userStatus: '',
    amount:100,
    paymentStatus: '',
  };
};
const Modals = ({visible,handleOk,confirmLoading,handleCancel,modalText}) => {
  const [form, setForm] = useState(getInitialForm);
  const handleFormOk = () => {
    handleOk(form)
    setForm(getInitialForm());
  };
  const handleChange = (event) => {
     const {name, value}= event.target
     setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 const handleNumberChange = (value)=>{
      setForm((prev) => ({
        ...prev,
        amount: value
      }));
  }
  const handleSelectChange = (value)=>{
    setForm((prev) => ({
      ...prev,
      paymentStatus: value
    }));
  }
  return (
      <Modal
        title="ADD NEW"
        visible={visible}
        onOk={handleFormOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              cancel
            </Button>,
            <Button key="submit" type="primary" loading={confirmLoading} onClick={handleFormOk}>
              Add
            </Button>,
          ]}
      >
      <ModalDiv>
      <Form
       labelCol={{
        span: 12,
      }}
      layout="vertical"
    
      >
      <Form.Item
        label="NAME" 
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            
          },
        ]}
      >
        <Input
        onChange={handleChange} 
        name="name"
        value={form.name} />
      </Form.Item>

      <Form.Item
        label="EMAIL" 
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input onChange={handleChange} name="email" value={form.email} />
      </Form.Item>
      <Form.Item
          label="PAYMENT STATUS"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            name="paymentStatus"
            onChange={handleSelectChange}
            placeholder="Select a option and change input text above"

          >
            <Option value="Paid">Paid</Option>
            <Option value="Unpaid">Unpaid</Option>
            <Option value="Overdue">Overdue</Option>
          </Select>
        </Form.Item>

      <Form.Item
        label="AMOUNT"
       
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <InputNumber onChange={handleNumberChange}  name="amount" value={form.amount} />
      </Form.Item>
      <Form.Item
      label="USER STATUS"
      name="userStatus"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
      >
    <Radio.Group onChange={handleChange} name="userStatus" defaultValue=''>
    <Radio value='Active'>Active</Radio>
    <Radio value='Inactive'>Inactive</Radio>
    </Radio.Group>
  </Form.Item>
    </Form>
    </ModalDiv>  
      </Modal>
      
  );
};

const ModalDiv = styled.div`
.ant-input-affix-wrapper {
  color: #25213B;
  background-color: #F4F2FF;

  border-radius: 5px;
  padding:5px 11px;

}
.ant-input{
  border-radius: 5px;
  border: 1px solid #C6C2DE;
  margin:0px;
    }
`;


export default Modals;