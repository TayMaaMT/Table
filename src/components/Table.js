import styled from 'styled-components';
import { Table } from 'antd';
import { columns } from "./Columns";
import Footer from './Footer';
import Header from './Header';
import { useTableContext } from "../TableContext";
import {useState,useEffect} from 'react';
import firebase from '../utils/firebase'; 
const Table_ =()=>{
    const { initialState ,Items} = useTableContext();
    const [data, setData] = useState(Items);


useEffect(() => {
    firebase.child('Payment/').once('value').then((snapshot) => {
        const dataobject = snapshot.val();
        const arrayOfData = [];
        Object.keys(dataobject).forEach(function(id) {
            dataobject[id].key=id; 
            arrayOfData.push(dataobject[id]);   
        });
        console.log(arrayOfData);
            initialState(arrayOfData);    
      });
    
  }, []);
 
    return(
       
    <BorderDiv>
            <Table 
            className="table"
            columns={columns} 
            dataSource={data} 
            pagination={false}
            title={()=>Header({data, setData})}
            footer={()=>Footer({data, setData})}
    />
    </BorderDiv>

)};

const BorderDiv = styled.div`
   
 
    .table{
        border-radius:5px;
        margin:10px;
        box-shadow: 0 0 4px 0px #C6C2DE;
    }
    .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
        position: relative;
        padding: 8px 8px;
        overflow-wrap: break-word;
    }
    .ant-table-thead > tr > th {
        background: #F4F2FF;
        border-top: 1px solid #C6C2DE;
     
    }
    .ant-table-footer {
        padding: 8px 8px;
        background: #F4F2FF;
    }
    .ant-table-tbody > tr.ant-table-row:hover > td {
        background: #F4F2FF;
    }
  `;

export default Table_;

