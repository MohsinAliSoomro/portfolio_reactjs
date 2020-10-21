import React from 'react';
import './App.css';
import HomePage from './container/HomePage'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Project from './container/Project';
import EmailPage from './container/email' 
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/email" component={EmailPage} />
      <Route path="/project" component={Project} />
    </Router>
  );
}

export default App;
