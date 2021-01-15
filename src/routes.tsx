import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Player from './pages/Player';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/watch/:id' component={Player} />
    </Switch>
  );
}

export default Routes;