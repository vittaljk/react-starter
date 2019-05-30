import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TodoList from './Todo/containers/TodoList';

function App() {
  let routes = (
    <Switch>
      <Route path="/todo-list" component={TodoList} />
      <Route path="/" exact component={TodoList} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="center">
      {routes}
    </div>
  );
}

export default App;
