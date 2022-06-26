import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import CardContext from './context/cardContext';

function App() {
  const [fileName, setfileName] = useState(null);
  const [freeze, setFreeze] = useState(null);
  const [column, setColumn] = useState<any>([]);
  const [updatedSheet, setUpdatedSheet] = useState();
  const [columnValue, setColumnValue] = useState();
  const [firstRow, setFirstRow] = useState([]);
  const [photo, setPhoto] = useState();
  const [imagePath,setImagePath] = useState();
  const [photoLocation, setPhotoLocation] = useState();
  const [imageValue, setImageValue] = useState({
    width:'0',
    height:'0',
    marginTop:"0",
    marginLeft:"0"
  });

  const [fieldValue, setFieldValue] = useState();
  const storeValue = {
    freeze, 
    setFreeze,
    updatedSheet, 
    setUpdatedSheet, 
    photoLocation, 
    setPhotoLocation, 
    imagePath,
    setImagePath, 
    photo, 
    setPhoto,
    columnValue, 
    setColumnValue, 
    firstRow, 
    setFirstRow,
    setfileName,
    setColumn, 
    column, 
    fileName, 
    setImageValue, 
    imageValue,
    fieldValue, 
    setFieldValue 
  }

  return (
    <div className="App">
      <CardContext.Provider value={storeValue}>
      <Home />
      </CardContext.Provider>
    </div>
  );

}

export default App;
