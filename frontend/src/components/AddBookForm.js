import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/books/create/', {
        title,
        author,
        description,
      });

      // Clear the form after successful submission
      setTitle('');
      setAuthor('');
      setDescription('');
    } catch (error) {
      console.log('Failed to add book:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add Book</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
