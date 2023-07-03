import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
        <Link to={`/books/${book.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default BookItem;
