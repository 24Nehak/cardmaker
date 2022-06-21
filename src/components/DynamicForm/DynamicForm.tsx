import React, { useState } from 'react'

const DynamicForm = () => {
    const [studName, setStudName] = useState();
    const handleChange = (e: any) =>{
        console.log(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div>
        <form>
            <input type="number" value="" name="" onChange={handleChange}/>
        </form>
    </div>
  )
}

export default DynamicForm