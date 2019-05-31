import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TodoList from './Todo/containers/TodoList';
import PlayGround from './playground/playground';
import 'antd/dist/antd.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/todo-list" component={TodoList} />
      <Route path="/" exact component={TodoList} />
      <Route path="/playground" component={PlayGround} />
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
