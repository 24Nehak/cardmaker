import React, { useContext } from 'react'
import cardContext from '../../context/cardContext';
const ActionBox = ({}) => {
    const {updatedSheet, setUpdatedSheet, photo, setPhoto,imagePath,setImagePath,columnValue, setColumnValue, column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    console.log("column",column);

    const showfieldvalues = () => {
        const getkeys = Object.keys(updatedSheet[0])
        const getvalues = Object.values(updatedSheet[0])
        const fields:any = { }
        getkeys.map((item:any, index)=>{
          fields[item] = {
            "fieldName":item,
            "fieldValue":fields[index],
            "resolution":{
              // "x": ,
              // "y":,
            },
          }
        })
        return 0;
   
        return false;
    }

    const drag = (ev:any) => {
        console.log("ondrag fun*****************", ev);
        ev.dataTransfer.setData("text", ev.target.innerText);
      }
    return (
       <div style={{ width:'300px', height: '100%', border: '1px solid black', padding:"30px"}}>
           {
              updatedSheet ? Object.keys(updatedSheet[0]).map((item:any, index:any)=>{
                 return (
                   <div id="drag1" draggable onDragStart={(event)=> drag(event)}  key={index}> { item +" - "+ Object.values(updatedSheet[0])[index]}</div>
                 )
              })
              : ""
           }
       </div>
    )
}

export default ActionBox;