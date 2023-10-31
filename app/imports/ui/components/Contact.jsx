import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
// eslint-disable-next-line react/prop-types
const Contact = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      {/* eslint-disable-next-line react/prop-types */}
      <Image src={contact.image} width={75} />
      {/* eslint-disable-next-line react/prop-types */}
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      {/* eslint-disable-next-line react/prop-types */}
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      {/* eslint-disable-next-line react/prop-types */}
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
