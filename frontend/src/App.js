import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' Component={BookList} />
        <Route path='/books/:id' Component={BookDetails} />
      </Switch>
    </Router>
  );
}

export default App;
