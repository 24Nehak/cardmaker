import React, { useState } from 'react';
import ActionBox from '../ActionBox/ActionBox';
import DynamicForm from '../DynamicForm/DynamicForm';
import Preview from '../Preview/Preview';


const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
    <div style={{flex: 1, margin: '10px' , }}>
        <DynamicForm/>
    </div>
    <div style={{flex: 1}}>
        Preview
        <Preview ></Preview>
    </div>
    <div>
    <ActionBox />
    </div>
    </div>
  )
}

export default Home