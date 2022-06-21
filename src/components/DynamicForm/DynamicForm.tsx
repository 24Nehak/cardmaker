import { url } from 'inspector';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import idCard from '../../assets/images/IdCard.jpg';

const DynamicForm = () => {
    const [fileName, setfileName] = useState(null);
    const [column, setColumn] = useState<any>([]);
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

    const generateImageInputFields = () => {
        return (
            <>
            <input type="number" placeholder='height' />
            <input type="number" placeholder='width'/>
            <input type="number" placeholder='margin top'/> 
            <input type="number" placeholder='margin left'/>
            </>
        )
    } 

    const generateTextInputFields = () => {
        return (
            <>
            <input type="number" />  <input type="number"/>  <input type="number"/>  <button>I</button>
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
            // <div style={{backgroundImage:`url(${idCard})`, width: '820px', height: '1600px'}}>
                <div>{ele}{ele && ele === 'image' ? generateImageInputFields(): generateTextInputFields() }
                 </div>
                // {/* <div style={{position: 'absolute',marginTop: 700, marginLeft:200}}>{ele[0]}</div>
                // <div style={{position: 'absolute',marginTop: 800, marginLeft:200}}>{ele[1]}</div>
                // <div style={{position: 'absolute',marginTop: 900, marginLeft:200}}>{ele[2]}</div> */}
            // </div>
        ))}</div>
        </div>
    )}
    </div>
  )
}

export default DynamicForm