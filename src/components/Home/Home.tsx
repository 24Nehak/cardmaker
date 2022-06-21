import { url } from 'inspector';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import idCard from '../../assets/images/IdCard.jpg';

const Home = () => {
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
        console.log("jsonData", jsonData);
        setColumn(jsonData);
    }

  return (
    <div>
    <input type='file' onChange={(e:any)=>handleFile(e)} />
    {fileName && (
        <div>
        <p>FileName:<span> {fileName} </span> </p>
        <div>{column.map((ele:any)=>(
            <div style={{backgroundImage:`url(${idCard})`, width: '820px', height: '1600px'}}>
                <div style={{position: 'absolute',marginTop: 700, marginLeft:200}}>{ele[0]}</div>
                <div style={{position: 'absolute',marginTop: 800, marginLeft:200}}>{ele[1]}</div>
                <div style={{position: 'absolute',marginTop: 900, marginLeft:200}}>{ele[2]}</div>
            </div>
        ))}</div>
        </div>
    )}
    </div>
  )
}

export default Home