import React, { useState,useEffect } from 'react';
import Button from '../UI/Button';

export default function UserInput(props) {
  const [idState, setId] = useState('');
  const [priceState, setPrice] = useState('');
  const [dishState, setDish] = useState('');
  const [tableState, setTable] = useState('Table 1'); 
  const [isFormValid, setFormValid] = useState(false);
  useEffect(()=>{
    const id=setTimeout(()=>{
        if( +idState !== '' && +priceState>0 && dishState.trim().length!==0){
            setFormValid(true)
        }
    },500)
    return ()=>{
        clearTimeout(id)
    }

  },[idState,priceState,dishState])

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dishChangeHandler = (event) => {
    setDish(event.target.value);
  };

  const tableChangeHandler = (event) => {
    setTable(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
        const obj={
            id:idState,
            price:priceState,
            dish:dishState,
            table:tableState
        }
        
    props.onAdd(obj)
    setFormValid(false);
      setPrice('');
      setDish('');
      setId('');
  }
}

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>id</label>
        <input
          type="number"
          id="id"
          value={idState}
          onChange={idChangeHandler}
        />
      </div>
      <div>
        <label>Choose Price</label>
        <input
          type="number"
          id="price"
          value={priceState}
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <label>Choose Dish</label>
        <input
          type="text"
          id="dish"
          value={dishState}
          onChange={dishChangeHandler}
        />
      </div>
      <div>
        <label>Choose a Table</label>
        <select
          name="table"
          id="table"
          onChange={tableChangeHandler}
          value={tableState}
        >
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>
      </div>
      <Button type="submit">Add To Bill</Button>
    </form>
  );
}
