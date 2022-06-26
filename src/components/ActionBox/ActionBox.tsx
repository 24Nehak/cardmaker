import React, { useContext } from 'react'
import cardContext from '../../context/cardContext';
const Preview = ({}) => {
    const {updatedSheet, setUpdatedSheet, photo, setPhoto,imagePath,setImagePath,columnValue, setColumnValue, column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    console.log("column",column);

    const showfieldvalues = () => {
        if(updatedSheet){
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
        }
        return false;
    }
    return (
       <div style={{ width:'300px', height: '100%', border: '1px solid black', padding:"30px"}}>
           {
              updatedSheet ? Object.keys(updatedSheet[0]).map((item:any, index:any)=>{
                 return (
                     item +" - "+ Object.values(updatedSheet[0])[index]
                 )
              })
              : ""
           }
       </div>
    )
}

export default Preview