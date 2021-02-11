
import { Menu,Radio,Dropdown,Button} from 'antd';
import { FilterFilled } from '@ant-design/icons';
import {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useTableContext } from "../TableContext";
const DropdownButton = ({filterData,search}) => {
 
  const { Items} = useTableContext(); 
  const getInitialradio = () => {
    return {
      sortby:'default',
      users:'All'
    };
  };
  const [filter,setFilter]=useState(getInitialradio);
  const handleChange=(event)=>{
    const {value,name}= event.target
      if(name==='users'){
        setFilter({...filter ,users:value});
      }    
      if(name==='storby'){
        setFilter({...filter ,sortby:value});
      }
  }
  useEffect(() => {

    const results =filter.users==='All'?[...Items]: Items.filter(item =>
      item.userStatus.toLowerCase()===filter.users.toLocaleLowerCase());
    console.log(results);
    switch(filter.sortby){
      case 'default' : filterData(results);
       break;
      case 'name' : filterData(results.sort((a, b) => (a.name > b.name) ? 1 : -1))
       break;
      //  break;
      // case 4 : setData(Items);
      //  break; 
       default:filterData(results);
  }
  }, [filter]);

  // useEffect(()=>{
  //   setFilter(getInitialradio);
  // },[search])
  const Menu_ = (
    <MenuStyle>
    
       <Menu>
       <Menu.ItemGroup title="SORT BY:">
      <Radio.Group onChange={handleChange}  name="storby" defaultValue={filter.sortby}>
        <Radio  value='default'>
        <div>Default</div>
        </Radio>
        <Radio  value='name'>
        <div>First Name</div>
        </Radio>
        <Radio  value='date'>
        <div>Due Date</div>
        </Radio>
        <Radio  value='login'>
        <div>Last Login</div>
        </Radio>
      </Radio.Group>
   
      </Menu.ItemGroup>
      
      <Menu.ItemGroup title="USERS:">
     
      <Radio.Group onChange={handleChange}  name="users" defaultValue={filter.users}>
        <Radio  value='All'>
        <div>All</div>
        </Radio>
        <Radio  value='Active'>
        <div>Active</div>
        </Radio>
        <Radio  value='Inactive'>
        <div>Inactive</div>
        </Radio>
      </Radio.Group>
          </Menu.ItemGroup>
  </Menu>

    </MenuStyle>
  );

  return (
    <Dropdown trigger={['click']} overlay={Menu_} placement="bottomLeft">
        <Button  icon={<FilterFilled />}>
        Filter
        </Button>
      </Dropdown>  
  );
};
const MenuStyle = styled.div`
.ant-menu {

  list-style: none;
  background: #fff;
  outline: none;
  border: 1px solid #C6C2DE;
  border-radius: 5px;
}
.ant-radio-wrapper {
  text-align: left;
  margin:0px 6px;
  display: flex;
  // flex-direction: row-reverse;
  direction:rtl;

 
  justify-content:between;
  .ant-radio {
    box-sizing: border-box;
    margin: 0;
    padding: 5px 10px 5px 50px;
}
span div{
  width:100px;

}

}


`
export default DropdownButton;