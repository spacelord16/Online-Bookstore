import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/books/${id}/`);
      setBook(response.data);
    } catch (error) {
      console.log('Failed to fetch book details:', error);
    }
  };

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <p>Cover Image: <img src={book.cover_image} alt={book.title} /></p>
          <p>Price: {book.price}</p>
          <p>Rating: {book.rating}</p>
          <p>Genre: {book.genre}</p>
          <p>Publication Date: {book.publication_date}</p>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;
