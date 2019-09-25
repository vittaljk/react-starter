import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DrawCity from './DrawCity/DrawCity';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={DrawCity} />
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
