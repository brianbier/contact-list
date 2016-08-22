import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';
import React from 'react';
import { render } from 'react-dom';
import ContactList from './contactList';
import TodoList from './todoList';

let contacts = [{
  id: 1,
  name: 'Brian',
  phone: '444-444-4444',
  email: 'briansbier@gmail.com'
},{
  id: 2,
  name: 'Jane',
  phone: '444-444-4444',
  email: 'briansbier@gmail.com'
}]


let todos = [{
  id: 1,
  task: 'Finish This React App'
},{
  id: 2,
  task: 'Do Another App'
},{
  id: 3,
  task: 'Pass data from the parent to the child and reverse'
}]


class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <ContactList contacts={this.props.contacts} />
          <TodoList todos={this.props.todos}/>
        </div>
      </div>

    )
  }
}

render(<App contacts={contacts} todos={todos}/>,document.getElementById('app'))
