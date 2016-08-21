import React from 'react';
import { render } from 'react-dom';
import Todo from './todo';

class TodoList extends React.Component{
  render(){
    return(
      <div>
        <h4>Todo List</h4>
        <div className="form-check">
        <label className="form-check-label">
          {this.props.todos.map((todoElement)=>{
                return <Todo todo={todoElement} key={todoElement.id} />
          })}
        </label>
        </div>
      </div>
    )
  }
}

export default TodoList;
