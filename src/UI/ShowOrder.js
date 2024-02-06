import React from 'react';
import Button from './Button';

export default function ShowOrder({ index, price, tableName, dish, onDelete }) {
  return (
      <li key={index}>
        {price}-{dish}-{tableName}
        <Button onClick={() => onDelete(index)}>Delete Order</Button>
      </li>
    
  );
}
