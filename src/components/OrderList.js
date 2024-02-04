import React from 'react';
import Order from './Order';

export default function OrderList(props) {
  return (
    <div>
      {props.orderList.map((element) => (
        <Order
          key={element.id} 
          index={element.id} 
          price={element.price}
          dish={element.dish}
          tableName={element.table}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}
