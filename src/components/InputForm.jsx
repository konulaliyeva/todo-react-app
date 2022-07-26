import React from 'react';
import '../index.css';
function InputForm({ inputValue, handleInputValue, handleSubmitForm }) {
 

  return (
    <>
      <form className="form" onSubmit={handleSubmitForm}>
        <input
          value={inputValue}
          className="form__input"
          type="text"
          placeholder="Enter your item"
          onChange={handleInputValue}
          required
        />
      </form>
    </>
  );
}

export default InputForm;
