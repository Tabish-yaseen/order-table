import React from 'react'
import ShowOrder from '../UI/ShowOrder'

export default function order({ index,price,dish,tableName,onDelete}) {
  return (
    <div>
        <p>Table 1</p>
        {tableName==='Table 1' && <ShowOrder tableName={tableName} index={index} price={price} onDelete={onDelete} dish={dish}/>}
            
        <p>Table 2</p>
        {tableName==='Table 2' && <ShowOrder tableName={tableName} index={index} price={price} onDelete={onDelete} dish={dish}/>}
        
        <p>Table 3</p>
        {tableName==='Table 3' && <ShowOrder tableName={tableName} index={index} price={price} onDelete={onDelete} dish={dish}/>}
    
      
    </div>
  )
}
