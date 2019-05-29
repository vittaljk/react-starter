import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import TodoList from './containers/TodoList';

function App() {
  let routes = (
    <Switch>
      <Route path="/todo-list" component={TodoList} />
      <Route path="/" exact component={TodoList} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
