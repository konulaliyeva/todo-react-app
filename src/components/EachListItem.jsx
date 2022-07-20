import React from "react";
import ListItemsForm from "./ListItemsForm";
import InputForm from "./InputForm";

function EachListItem(props){
    return(
    <>
    <div className="form form__items">
        <ul className="list_items">
         {props.items.map(item =>{
         return <li key ={item.id} className="list_item" >{item.title}</li>
          })} 

        </ul>
      </div>
    </>
    )
}

export default EachListItem;