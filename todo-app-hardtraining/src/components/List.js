import React from 'react';

const List = (props) => {

  const onDelete = (id) => {
    props.setTodoList(props.todoList.filter(todoItem=>
      todoItem.id !== props.id
    ));
  };

  const checkedToggle = (id) => {
    props.setTodoList(props.todoList.map(todoItem=>
      todoItem.id===props.id ? {...todoItem, checked: !todoItem.checked} : todoItem
    ))
  };

  return (
    <div className='list' key={props.id}>
      <input 
        onClick={()=>checkedToggle(props.id)} 
        className="checkbox" 
        type='checkbox'
      />
      {/* <span className={`listContent &{ todoItem.checked ? 'checked' : '' }`}>{todoItem.text}</span> */}
      <span className={ "listContent" + (props.checked ? " checked" : '')}>{props.text}</span>
      <button 
        type='button' 
        className='deleteBtn'
        onClick={() => onDelete(props.id)}
      >X</button>
    </div>
  );
};

export default List;