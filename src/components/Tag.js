import { Tag } from 'antd';
const Tag_= (props)=>{
    const {tags}=props
    let color = '';
    if(tags==='Paid'){
        color = 'green';
    }
    else if (tags==='Overdue'){
        color = 'red';
    }
    else if(tags==='Unpaid'){
        color = 'gold';
    }
    else if(tags==='Active'){
        color = 'geekblue'
    }
    else {
        color = 'default';
    }
    return (
        <Tag color={color} key={tags}>
          {tags}
        </Tag>
      );
}
export default Tag_;