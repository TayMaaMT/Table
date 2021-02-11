import {useState,useEffect} from 'react';
import { Row, Col,Input,Button ,Dropdown} from 'antd';
import { SearchOutlined, FilterFilled,PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Modal from './Modal';
import DropdownButton from './Menu';
import { useTableContext } from "../TableContext";
import firebase from '../utils/firebase';  
const Header =({ setData})=>{
 
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [searchTerm, setSearchTerm] = useState("");
  const { addItem,Items} = useTableContext();

  const showModal = () => {
    setVisible(true);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    
  };
  // firebase.child('Payment/').once('value').then((snapshot) => {
  //   console.log("val")
  //   console.log(snapshot.val());
  //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //   // ...
  // });
  useEffect(() => {
    const results = !searchTerm?[...Items]: Items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setData(results);
  }, [searchTerm,Items]);
  
  const handleOk = async (data) => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    console.log(data);
    const result =await firebase.child('Payment').push(data).key
    console.log(result);
    data.key=result
    addItem(data);
    setVisible(false);
    setConfirmLoading(false);
    // setTimeout(() => {
    //   
    //   
    //   
    // }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  }; 

  return(
  <HeaderDiv>
    <Row justify="start">
      <Col span={3}>
      <DropdownButton filterData={setData} search={searchTerm}/>  
      </Col>
      <Col span={8}>
      <Input placeholder="default size" value={searchTerm} onChange={handleChange}   prefix={<SearchOutlined />} />
      </Col>
      <Col span={10}></Col>
      <Col span={3} align-self="end"> <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
      NEW
    </Button></Col>
    </Row>
    <Modal 
    visible={visible} 
    handleOk={handleOk}
    confirmLoading={confirmLoading}
    handleCancel={handleCancel}
    modalText={modalText}
    />
    </HeaderDiv>
)}
const HeaderDiv = styled.div`
.ant-input-affix-wrapper {
  color: #25213B;
  background-color: #F4F2FF;
  border: none;
  border-radius: 5px;
  padding:5px 11px;

}
.ant-input{
  border-radius: 0;
  background-color: #F4F2FF;
  margin:0px;
    }
`;
export default Header;
