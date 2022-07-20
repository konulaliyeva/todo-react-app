import React, { useState } from "react";
import "../index.css";
import EachListItem from "./EachListItem";


const dummyListItems = [
  {
    id: "e1",
    title: "Laptop Charger",
  },
  {
    id: "e2",
    title: "Car",
  },
  
];
function ListItemsForm(props) {
  
  const [items, addedItems] = useState(dummyListItems);

  const addListItems = (item) => {
    addedItems((prevItems) => {
      return [item, ...prevItems];
    });
  };
 
  return (
    <>
     <EachListItem onAddItem={addListItems} items={items}/>
     
    </>
  );
}

export default ListItemsForm;
