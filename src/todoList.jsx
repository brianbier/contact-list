import React from 'react';
import { render } from 'react-dom';
import Todo from './todo';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      todosTask: props.todos
    }
    this.handleCheckedTask = this.handleCheckedTask.bind(this);
  }
  addTask(event){
    event.preventDefault();
    let id = Math.floor((Math.random()*100)+ 1)
    let task = this.refs.task.value

    if(task === ''){
      return;
    }
    this.setState({
      todosTask: this.state.todosTask.concat({id,task})
    })
    this.refs.task.value = '';
  }
  handleCheckedTask(task){
    let newTodos = this.state.todosTask.slice();
    let key = Object.keys(task);
    newTodos.splice(newTodos.findIndex(function(obj){
      return key.every(function(k){
        return task[k] === obj[k]
      })
    }),1);
    this.setState({
      todosTask: newTodos
    })
  }
  render(){
    return(
        <div className="col-md-4">
          <form className="form-inline pull-xs-left" onSubmit={this.addTask.bind(this)} >
          <input className="form-control" placeholder="Add Task" type="text" ref="task"/>
          <button className="btn btn-outline-info" type="submit">Add new Task</button>
          </form><br /><br />
          <h4>Task To Complete</h4>
          {this.state.todosTask.map((todoElement)=>{
                return <Todo todo={todoElement} key={todoElement.id} onCheckedTask={this.handleCheckedTask}/>
          })}

      </div>
    )
  }
}

export default TodoList;
