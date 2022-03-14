import React from 'react';

function ContactCard(props) {
  let { selectedContact } = props;
  return (
    <React.Fragment>
      {
        // Object.keys(props.selectedContact).length > 0
        Object.keys(selectedContact).length > 0 && (
          <div className="card shadow-lg sticky-top">
            <img src={selectedContact.Image} alt="" width={300} height={300} />

            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{selectedContact.name}</li>
                <li className="list-group-item">{selectedContact.location}</li>
              </ul>
            </div>
          </div>
        )
      }
    </React.Fragment>
  );
}

export default ContactCard;
