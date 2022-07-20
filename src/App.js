import React, { useState } from 'react';
import './index.css';
import ListItemsForm from './components/ListItemsForm';
import InputForm from './components/InputForm';

const dummyListItems = [
  {
    id: 'e1',
    title: 'Do homework'
  },
  {
    id: 'e2',
    title: 'Wash dishes'
  }
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(dummyListItems);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const listItem = {
      title: inputValue,
      id: Math.random()
    };
    setItems((prevItems) => {
      return [listItem, ...prevItems];
    });
    setInputValue('');
  };

  return (
   <div className='container'>
     <h1>Tu .. du ..</h1>
      <InputForm
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        handleSubmitForm={handleSubmitForm}
      />
      <ListItemsForm items={items} />
   </div>
  );
}

export default App;