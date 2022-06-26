import React, { useContext, useRef } from 'react'
import cardContext from '../../context/cardContext';
import ActionBox from '../ActionBox/ActionBox';
const Preview = ({}) => {
    const imgDiv = useRef<any>(null);
    const {photo, setPhoto,imagePath,setImagePath,columnValue, setColumnValue, column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    console.log("column",column);
    // const [] =useState();


    const allowDrop = (ev:any) => {
        ev.preventDefault();
      }
      
      
      const drop=(ev:any)=> {
        ev.preventDefault();
         const data = ev.dataTransfer.getData("text");
         console.log("data",data);
        console.log("ev.clientX", ev.clientX);
        console.log("ev.clientY", ev.clientY);

        // ev.target.appendChild(document.getElementById(data));
        // imgDiv.current = data;
        const postNode = document.createElement("div");
        postNode.style.left = (ev.clientX + parseInt(data[0],10)) + 'px';
        postNode.style.top = (ev.clientY + parseInt(data[1],10)) + 'px';
        postNode.innerText = data ;
        console.log(" postNode.style.left",  postNode.style);
        imgDiv.current.appendChild(postNode);
        console.log("imgDiv", postNode);
      }


  return (
   <div  onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)} style={{ width:'500px', height: '600px', border: '1px solid black'}}>
        <div id="div1" ref={imgDiv} style={{backgroundImage:"url("+photo+")",backgroundPosition:"center",backgroundSize:"contain",height: "100%",width:"100%",backgroundRepeat: "no-repeat"}}>  
            {/* <img src={photo} style={{height:"500px",width:"300px",resize:"both"}}/> */}
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
            {/* <img src={column[4]} style={{width:`${parseInt(imageValue.width)}px`, height:`${parseInt(imageValue.height)}px`, marginTop: `${parseInt(imageValue.marginTop)}px`, marginLeft:`${parseInt(imageValue.marginLeft)}px`}} /> */}
        
        </div>
       
   </div>
  )
}

export default Preview