import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
