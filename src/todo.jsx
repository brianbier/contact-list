import React from 'react';
import { render } from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoElement: props.todo
    }
  }
  completed(event){
    let todos = this.state.todoElement
    let index = todos.id
    console.log(this.refs.complete)
    this.setState({
      todoElement: ''
    })
  }
  render(){

    return(
      <div>
        <input
        className="form-check-input"
        type="checkbox"
        ref="complete"
        onChange={this.completed.bind(this)}/>
        {this.state.todoElement.task}
      </div>
    )
  }
}

export default Todo;
