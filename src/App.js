import React, { useState } from 'react';
import './index.css';
import ListItemsForm from './components/ListItemsForm';
import InputForm from './components/InputForm';

const dummyListItems = [
  {
    id: 'e1',
    title: 'Do homework',
    date: new Date()
  },
  {
    id: 'e2',
    title: 'Wash dishes',
    date: new Date()
  }
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(dummyListItems);
  const [itemId, setItemId] = useState(null);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (itemId) {
      let index = items.findIndex((item) => item.id === itemId);
      items[index].title = inputValue;
    } else {
      const listItem = {
        title: inputValue,
        id: Math.random(),
        date: new Date()
      };
      // if(inputValue ===""){
      //   setItems('');
      //   document.querySelector('.form__input').classList.add('border');

      // }
      setItems((prevItems) => {
        return [listItem, ...prevItems];
      });
    }
    setInputValue('');
  };

  const handleDeleteButton = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditButton = ({ title, id }) => {
    setItemId(id);
    setInputValue(title);
  };

  return (
    <div className="container">
      <h1>Tu .. du ..</h1>
      <InputForm
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        handleSubmitForm={handleSubmitForm}
      />
      <ListItemsForm
        items={items}
        inputValue={inputValue}
        handleDeleteButton={handleDeleteButton}
        handleEditButton={handleEditButton}
      />
    </div>
  );
}

export default App;