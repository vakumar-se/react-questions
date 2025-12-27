import React, { useState } from 'react';
import './index.css';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const addTodoList = e => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newTodo = {
        id: todos?.length + 1,
        name: inputText,
        completed: false,
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputText('');
    }
  };

  const hanldeItemClick = id => {
    setTodos(prevTodos => {
      return prevTodos?.map(item => {
        if (item?.id === id) {
          return {
            ...item,
            completed: !item?.completed,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleDelete = id => {
    console.log('id', id);
    setTodos(prevTodos => {
      return prevTodos.filter(item => item?.id !== id);
    });
  };
  console.log(todos);

  return (
    <div className="td-container">
      <h1 className="td-head"> ToDo list </h1>
      <input type="text" onChange={handleInputChange} value={inputText} onKeyDown={addTodoList} />
      <div className="td-sec">
        {todos?.map(item => {
          console.log('item comp', item?.completed);
          return (
            <div key={item?.id} className="td-item">
              <input
                type="checkbox"
                checked={item?.completed}
                onChange={() => hanldeItemClick(item?.id)}
              />
              <div className={`td-text ${item?.completed ? 'td-text-completed' : ''}`}>
                {item?.name}
              </div>
              <button className="td-delete" onClick={() => handleDelete(item?.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
