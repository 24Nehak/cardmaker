import { url } from 'inspector';
import React, { useState, useContext } from 'react';
import * as XLSX from 'xlsx';
import idCard from '../../assets/images/IdCard.jpg';
import cardContext from '../../context/cardContext';

const DynamicForm = () => {
   const {setColumn , setfileName, column,fileName, imageValue, setImageValue, fieldValue, setFieldValue} = useContext(cardContext);
    
    const handleFile = async(e:any) => {
        const file = e.target.files[0];
        setfileName(file.name);
        const data = await file.arrayBuffer();
        const workBook = XLSX.readFile(data, {sheetRows:5});
        // console.log("workbook", workBook);
        const workSheet = workBook.Sheets[workBook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(workSheet, {header:1,defval: '',});
        console.log("jsonData", jsonData[0]);
        setColumn(jsonData[0]);
    }

    const handleInputImage = (e:any) =>{
        console.log(e.target.value);
        const name =  e.target.name;
        const value = e.target.value;
        setImageValue({...imageValue, [name]: value});
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
         
    }

    const handleInputField = (e:any) =>{
        const name =  e.target.name;
        const value = e.target.value;
        setFieldValue({...fieldValue, [name]: value});
    }
   

    const generateImageInputFields = () => {
        return (
            <>
            <form onSubmit={handleSubmit}>
            <input type="number"  value={imageValue.width} name="width" placeholder='width'onChange={handleInputImage}/>
            <input type="number"  value={imageValue.height} name="height" placeholder='height' onChange={handleInputImage} />
            <input type="number" value={imageValue.marginTop} name="marginTop" placeholder='margin top' onChange={handleInputImage}/> 
            <input type="number"  value={imageValue.marginLeft} name="marginLeft" placeholder='margin left' onChange={handleInputImage}/>
            </form>
            </>
        )
    } 

    const generateTextInputFields = () => {
        return (
            <>
            <input type="number"  value={fieldValue.marginTop} name="marginTop" placeholder='marginTop'onChange={handleInputField} />
            <input type="number"  value={fieldValue.marginLeft} name="marginLeft" placeholder='marginLeft'onChange={handleInputField}/>
            {/* <input type="number"  value={fieldValue.width} name="width" placeholder='width'onChange={handleInputImage}/> */}
            <button>I</button>
            <button>B</button>
            </>
        )
    }
  return (
    <div>
    <input type='file' onChange={(e:any)=>handleFile(e)} />
    {fileName && (
        <div>
        <p>FileName:<span> {fileName} </span> </p>
        <div  style={{width: '800px',height: '500px',  border: '1px solid black'}}>{column.map((ele:any)=>(
                <div>{ele}{ele && ele === 'image' ? generateImageInputFields(): generateTextInputFields() }
                 </div>
                
        ))}</div>
        </div>
    )}
    </div>
  )
}

export default DynamicForm