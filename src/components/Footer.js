import { Row, Col,Select,Button } from 'antd';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import {useEffect, useState} from 'react'
import { useTableContext } from "../TableContext";
const { Option } = Select;
const Footer =({ setData})=>{
  const getInitialPagination = () => {
    return {
      steps:1,
      lastIndex:0,
    };
  };
  const { Items} = useTableContext();
  const [pagination,setPagination]=useState(getInitialPagination);
  const handlePagination = (value)=>{
    console.log(pagination.lastIndex+value);
    if(pagination.lastIndex+value>Items.length){
      const over = pagination.lastIndex+value-Items.length
      setPagination((prev) => ({
        ...prev,
        lastIndex: prev.lastIndex-over,
      }));
    }
    setPagination((prev) => ({
      ...prev,
      steps: value,
    }));
  }
  const handlePrev = (value)=>{
    if(pagination.lastIndex-pagination.steps<0){
      // const over = pagination.lastIndex+value-Items.length
      setPagination((prev) => ({
        ...prev,
        lastIndex: 0,
      }));
    }else{
      setPagination((prev) => ({
        ...prev,
        lastIndex: prev.lastIndex-prev.steps
      }));
    }
     

  }
  const handleNext = (value)=>{

      setPagination((prev) => ({
        ...prev,
        lastIndex: prev.lastIndex+prev.steps
      }));

  }
  useEffect(()=>{
    console.log(pagination);
    const results = !pagination?[...Items]: Items.filter((item ,index)=>index>=pagination.lastIndex&&index<pagination.lastIndex+pagination.steps)
    setData(results);
  },[pagination,Items])
  return (   
  <Row justify="end" align="middle">
  <Col span={5}>
  <span>Rows per page:</span>
  <Select onChange={handlePagination} defaultValue={1} style={{ width: 60 }} bordered={false}>
  <Option value={1}>1</Option>
  <Option value={2}>2</Option>
  <Option value={3}>3</Option>
  </Select>

</Col>
  <Col span={3}><div>{pagination.lastIndex+1}-{pagination.lastIndex+pagination.steps} of {Items.length}</div></Col>
  <Col span={3}>
  <Button onClick={handlePrev} type="text" icon={<LeftOutlined />} disabled={pagination.lastIndex===0} size={'small'} />
  <Button onClick={handleNext} type="text" icon={<RightOutlined/>} disabled={pagination.lastIndex+pagination.steps>=Items.length} size={'small'} />
  </Col>
</Row>
)
}


export default Footer;
