
import './App.css';

import React, { useState } from 'react';

function TodoApp() {
  // Declare a state variable called "todos" using the useState hook.
  // The initial value of todos is an empty array.
  const [todos, setTodos] = useState([]);

  // Declare a state variable called "inputValue" using the useState hook.
  // The initial value of inputValue is an empty string.
  const [inputValue, setInputValue] = useState('');

  // Declare a function called "handleInputChange" that takes an "event" argument.
  // When called, this function updates the inputValue state to the current value of the input field.
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Declare a function called "handleFormSubmit" that takes an "event" argument.
  // When called, this function prevents the default form submission behavior,
  // checks that the input value is not empty, adds a new todo item to the "todos" state,
  // and clears the input field by setting the inputValue state to an empty string.
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
      setInputValue('');
    }
  };

  // Declare a function called "handleTodoDelete" that takes an "id" argument.
  // When called, this function filters the "todos" state to remove the item with the specified id,
  // and updates the "todos" state to the new array of todos that doesn't include the deleted item.
  const handleTodoDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Render a form with an input field and a button that calls the "handleFormSubmit" function when clicked.
  // Render an unordered list of todo items, with each item displayed as a list item
  // and a "Delete" button that calls the "handleTodoDelete" function when clicked.
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleTodoDelete(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the TodoApp component so it can be used in other parts of the application.
export default TodoApp;
