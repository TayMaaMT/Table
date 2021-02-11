import React from 'react';
import { Radio } from 'antd';

const radio =({})=> {

    const value = 1;


    return (
      <Radio.Group  value={value}>
        <Radio  value={1}>
          Option A
        </Radio>
        <Radio  value={2}>
          Option B
        </Radio>
        <Radio  value={3}>
          Option C
        </Radio>
      </Radio.Group>
    );
  }

export default radio;
