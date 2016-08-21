import React from 'react';
import { render } from 'react-dom';

class Contact extends React.Component {
  render(){
    return (
        <div className="card card-block">
        <h4 className="card-title">{this.props.contact.name}</h4>
        <p className="card-text">{this.props.contact.phone}</p>
        <p className="card-text">{this.props.contact.email}</p>
        </div>
    )
  }
}

export default Contact;
// Stateless components or consider pure
// By using the {contact} you now can use the props that are being pass down from the parent components
// and we no longer need this.props
//The great thing about stateless function compnonet that you can pass additional items when calling the components
//<Contact contact={contactElement} key={contactElement.id}/>
//example item="hello". Now you can pass it as item
// const Contact = ({contact,item}) =>
//     <li>
//        {item}
//       {contact.name}<br />
//       {contact.phone}<br />
//       {contact.email}<br />
//     </li>
// export default Contact;
