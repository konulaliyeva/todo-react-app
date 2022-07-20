import React, {useState} from 'react';
import "./index.css";
import ListItemsForm from './components/ListItemsForm';
import InputForm from './components/InputForm';

 
function App(props){

  const saveToDoItems = (inputItems) =>{
    const listData = {...inputItems,
    id: Math.random()
    }
   props.onAddItem(listData);
  }
  
  return (
    <>
    <InputForm onSaveInputValue = {saveToDoItems}/>
    <ListItemsForm />
 
    </>
  );
   
  

}

export default App;