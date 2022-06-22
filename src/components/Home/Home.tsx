import React, { useState } from 'react';
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
    </div>
  )
}

export default Home