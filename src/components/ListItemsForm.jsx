import React from 'react';
import '../index.css';

function ListItemsForm({
  items,
  handleDeleteButton,
  handleEditButton
}) {

  return (
    <>
      <div className="form form__items">
        <ul className="list_items">
          {items.map((item) => {
            return (
              <div key={item.id} className="list_item_block">
              <div className="date">
                  <div className="month">
                    {item.date.toLocaleString('en-US', { month: 'long' })}
                  </div>
                  <div className="day">
                    {item.date.toLocaleString('en-US', { day: '2-digit' })}
                  </div>
                  <div className="year">{item.date.getFullYear()}</div>
                </div>
                <li>{item.title}</li>
                <div className="buttons">
                  <button
                    onClick={() => handleEditButton(item)}
                    className="btn btn-edit"
                  >
                    <i className="fas fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDeleteButton(item.id)}
                    className="btn btn-delete"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ListItemsForm;