import React from 'react'
const cardContext = React.createContext<any>(null);


// const cardContext = (props:any) => {
//     const data = {
//        fields:[], 
//     };
//   return (
//     <Store.Provider value={data}>{props.children}</Store.Provider>
//   )
// }

export default cardContext;
