import React, { useState } from 'react';
import '../index.css';

function ListItemsForm({ items }) {
 

  return (
    <>
      <div className="form form__items">
        <ul className="list_items">
         {items.map(item =>{
         return <li key ={item.id} className="list_item" >{item.title}</li>
          })} 

        </ul>
      </div>
      
    </>
  );
}

export default ListItemsForm;
