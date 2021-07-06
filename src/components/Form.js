import React from "react";

const Form = ({ setStatus, setinputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setinputText(e.target.value);
  };
  const submitToHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button onClick={submitToHandler} className="todo-button" type="submit">
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
