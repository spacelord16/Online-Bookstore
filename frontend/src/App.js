import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookFilter from './components/BookFilter';
import BookItem from './components/BookItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/filter" element={<BookFilter />} />
      </Routes>
    </Router>
  );
}

export default App;