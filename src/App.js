import React, { useState } from 'react';
import UserInput from './components/UserInput';
import OrderList from './components/OrderList';
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

  return (
    <React.Fragment>
      <UserInput onAdd={addOrder} />
      <OrderList orderList={updatedOrderDetails} onDelete={deleteOrder}/>
    </React.Fragment>
  );
}

export default App;
