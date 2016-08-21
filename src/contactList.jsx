import React from 'react';
import { render } from 'react-dom';
import Contact from './contact';

class ContactList extends React.Component {
//There is only one reason when one needs to pass props to super():
//When you want to access this.props in constructor.
  constructor(props){
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    }
  }
  updateSearch(event){
    this.setState({
      search: event.target.value.substring(0,20)
    })
  }
  addContact(event){
    event.preventDefault();
    let id = Math.floor((Math.random()*100)+ 1)
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let email = this.refs.email.value;
    this.setState({
      contacts: this.state.contacts.concat({id,name,phone,email})
    })
    console.log("print this"+ this.state.contacts)
    this.refs.name.value = '';
    this.refs.phone.value = '';
    this.refs.email.value = '';
  }
  render(){
    //Filtering the contacts base on the  the search index number. if it doesnt find anything it will
    //Not return anything
    // Using This.state.contact rather than this.props.contact is because in this componet we chang ethe state of
    //the contact taht is why I kept only seeing 4 elements displaying even though it was addint the additional ones. I was
    //looping over the this.props that was passed from the app.js file.
    let filteredContacts = this.state.contacts.filter(
      (contact) =>{
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    console.log("filter"+filteredContacts)
    return (
      <div>
        <div className="col-md-3">
          <input className="form-control"
           type="text"
            placeholder="Search"
            // Value is set at the top with the contructor
            value={this.state.search}
            // on Change event is using a function everytime the text changes.
            // We use bind(this) to this updateSearch function because this is not refering to the constructor
            // and does not recognize the state anymore
            onChange={this.updateSearch.bind(this)}
            />
            {/* we loop through the contacts array and send pass it to the contact Component */}
            {/* We Must attach a key to the component inorder for react to keep track */}
            {filteredContacts.map((contactElement)=>{
              return <Contact contact={contactElement} key={contactElement.id}/>
            })}
        </div>
          <div className="col-md-9">
            <form className="form-inline pull-xs-left" onSubmit={this.addContact.bind(this)}>
              <input className="form-control" placeholder="Name" type="text" ref="name"/>
              <input className="form-control" type="text" placeholder="Phone" ref="phone"/>
              <input className="form-control" type="text" placeholder="Email" ref="email"/>
              <button className="btn btn-outline-success" type="submit">Add new Contact</button>
            </form>
          </div>
      </div>
    )
  }
}

export default ContactList;
