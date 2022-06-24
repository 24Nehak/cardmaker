import React, { useContext } from 'react'
import cardContext from '../../context/cardContext';
// import idCard from "../../assets/images/IdCard.jpg";
const Preview = ({}) => {
    const {photo, setPhoto,imagePath,setImagePath,columnValue, setColumnValue, column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    console.log("column",column);


  return (
   <div style={{ width:'500px', height: '600px', border: '1px solid black'}}>
        <div style={{backgroundImage:"url("+photo+")",backgroundPosition:"center",backgroundSize:"contain",height: "100%",width:"100%",backgroundRepeat: "no-repeat"}}>
            <div>{fileName}</div>
            {/* <img src={photo} style={{height:"500px",width:"300px",resize:"both"}}/> */}
            <div>
            {/* {photo && photo.map((item:any, index:number)=>{
                console.log('photoooo', item.url);
                setImagePath(item.url);
                return (
                    <div key={index}>
                        <img src={item.url}/>
                    </div>
    )
   })} */}
            </div>
            {/* <div>{column.map((ele: any, index: number)=>(
                <div key={index} id={`${ele}index`} style={{marginLeft:`${parseInt(fieldValue.marginLeft)}px`, marginTop:`${parseInt(fieldValue.marginTop)}px`, position: 'absolute', zIndex: 2}}>
                    {ele}
                </div>
                // <span key={index} style={{marginLeft:`${parseInt(fieldValue.marginLeft)}px`, marginTop:`${parseInt(fieldValue.marginTop)}px`, background:'green', position: 'absolute'}}>{ele}</span>
            ))}</div> */}
            {/* {columnValue?.map((ele:any)=>{
                return (
                    <div>{ele}</div>
                )
            })} */}
            <img src={column[4]} style={{width:`${parseInt(imageValue.width)}px`, height:`${parseInt(imageValue.height)}px`, marginTop: `${parseInt(imageValue.marginTop)}px`, marginLeft:`${parseInt(imageValue.marginLeft)}px`}} />
        </div>
   </div>
  )
}

export default Preview