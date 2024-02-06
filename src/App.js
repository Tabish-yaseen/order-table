import React, { useState } from 'react';
import UserInput from './components/UserInput';
import Order from './components/Order';
import './App.css';

function App() {
  const [updatedOrderDetails, setOrderDetails] = useState([]);

  const addOrder = (obj) => {
    localStorage.setItem(obj.id,JSON.stringify(obj))
    setOrderDetails((previousOrder) => {
      return [...previousOrder, obj];
    });
  };
  const deleteOrder=(id)=>{
    localStorage.removeItem(id)
    setOrderDetails((previousOrder)=>{
      return previousOrder.filter((element)=>{
        return element.id!==id
      })
    })
  }

  const table1=updatedOrderDetails.filter((element)=>{
    return element.tableName==='Table 1'
  })
  
  const table2=updatedOrderDetails.filter((element)=>{
    return element.tableName==='Table 2'
  })
  const table3=updatedOrderDetails.filter((element)=>{
    return element.tableName==='Table 3'
  })

  return (
    <React.Fragment>
      <UserInput onAdd={addOrder} />
      <Order table1={table1} table2={table2}  table3={table3} onDelete={deleteOrder}/>
    </React.Fragment>
  );
}

export default App