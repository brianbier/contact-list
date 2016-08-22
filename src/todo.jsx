import React from 'react';
import { render } from 'react-dom';

class Todo extends React.Component{
  completed(event){
    let self = this
    let task = self.props.todo.task
    let id = self.props.todo.id
    this.props.onCheckedTask({id:id,task:task})
  }
  render(){
    return(
      <div className="form-check">
        <label className="form-check-label">
          <input
          className="form-check-input"
          type="checkbox"
          ref="complete"
          onChange={this.completed.bind(this)}/>
          {this.props.todo.task}
        </label>
      </div>
    )
  }
}

export default Todo;
