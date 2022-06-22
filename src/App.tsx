import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import CardContext from './context/cardContext';



function App() {
  const [fileName, setfileName] = useState(null);
  const [column, setColumn] = useState<any>([]);
  const [firstRow, setFirstRow] = useState([]);
  const [imageValue, setImageValue] = useState({
    width:'0',
    height:'0',
    marginTop:"0",
    marginLeft:"0"
  });
  const [fieldValue, setFieldValue] = useState({
    marginTop:'',
    marginLeft:''
  });
  return (
    <div className="App">
      <CardContext.Provider value={{firstRow, setFirstRow,setfileName,setColumn, column, fileName, setImageValue, imageValue,fieldValue, setFieldValue }}>
      <Home />
      </CardContext.Provider>
    </div>
  );
}

export default App;
