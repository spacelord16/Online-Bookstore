import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchBooks();
  }, [currentPage, pageSize]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `/api/books/?page=${currentPage}&pageSize=${pageSize}`
      );
      setBooks(response.data);
    } catch (error) {
      console.log('Failed to fetch books:', error);
    }
  };

  return (
    <div>
      <h1>Book List</h1>

      <AddBookForm />

      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}

      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default BookList;