import React from "react";
import ShowOrder from "../UI/ShowOrder";

export default function order({ table1, table2, table3, onDelete }) {
  return (
    <div>
      <h1>Orders</h1>
      <p>Table 1</p>
      {table1.map((element) => {
        return (
          <ul>
            <ShowOrder
              key={element.id}
              tableName={element.tableName}
              index={element.id}
              price={element.price}
              dish={element.dish}
              onDelete={onDelete}
            />
          </ul>
        );
      })}
      <p>Table 2</p>
      {table2.map((element) => {
         return (
          <ul>
            <ShowOrder
              key={element.id}
              tableName={element.tableName}
              index={element.id}
              price={element.price}
              dish={element.dish}
              onDelete={onDelete}
            />
          </ul>
        );
      })}
      <p>Table 3</p>
      {table3.map((element) => {
         return (
          <ul>
            <ShowOrder
              key={element.id}
              tableName={element.tableName}
              index={element.id}
              price={element.price}
              dish={element.dish}
              onDelete={onDelete}
            />
          </ul>
        );
      })}
    </div>
  );
}
