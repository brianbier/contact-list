import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';
import React from 'react';
import { render } from 'react-dom';
import ContactList from './contactList';

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
},{
  id: 3,
  name: 'Joey',
  phone: '444-444-4444',
  email: 'briansbier@gmail.com'
},{
  id:4,
  name: 'Mark',
  phone: '444-444-4444',
  email: 'briansbier@gmail.com'
}]

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Contacts List </h1>
          <ContactList contacts={this.props.contacts} />
      </div>

    )
  }
}

render(<App contacts={contacts} />,document.getElementById('app'))
