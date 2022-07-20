import React, { useState } from "react";
import "../index.css";
function InputForm(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitForm =(event) =>{
      event.preventDefault();
      const listItems ={
          title: inputValue
      }
      props.onSaveInputValue(listItems)
      setInputValue('');
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          value={inputValue}
          className="form__input"
          type="text"
          placeholder="Enter your item"
          onChange={handleInputValue}
        />
      </form>
    </>
  );
}

export default InputForm;
