import React, { useContext } from 'react'
import cardContext from '../../context/cardContext';
import idCard from "../../assets/images/IdCard.jpg";
const Preview = ({}) => {
    const {column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    console.log("column",column);


  return (
   <div style={{ width:'500px', height: '600px', border: '1px solid black'}}>
        <div style={{backgroundImage:"inherit"}}>
            <div>{fileName}</div>
            <div>{column.map((ele: any, index: number)=>(
                <span key={index} style={{marginLeft:`${parseInt(fieldValue.marginLeft)}px`, marginTop:`${parseInt(fieldValue.marginTop)}px`, background:'green', position: 'absolute'}}>{ele}</span>
            ))}</div>
            <img src={idCard} style={{width:`${parseInt(imageValue.width)}px`, height:`${parseInt(imageValue.height)}px`, marginTop: `${parseInt(imageValue.marginTop)}px`, marginLeft:`${parseInt(imageValue.marginLeft)}px`}} />
        </div>
   </div>
  )
}

export default Preview