import React from 'react'
import Button from './Button'

export default function ShowOrder({index,price,tableName,dish,onDelete}) {
  return (
    <ul>
        <li key={index} >{`${price}-${tableName}-${dish}`}</li>
         <Button onClick={()=>onDelete(index)}>Delete Order</Button>
             
        </ul>
  )
}
