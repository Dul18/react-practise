import React, { useState } from 'react';
import ContactService from '../services/ContactService';

function ContactList(props) {
  let [state, setState] = useState({
    contacts: ContactService.getContactList(),
  });

  let { contacts } = state;

  let clickContact = (contact) => {
    props.sendContact(contact);
  };

  return (
    <React.Fragment>
      <table className="table table-hover text-center table-strppe">
        <thead className="bg-dark text-white">
          <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <tr key={contact.id} onClick={() => clickContact(contact)}>
                  <td>{contact.id}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.name}</td>
                  <td>{contact.location}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ContactList;
