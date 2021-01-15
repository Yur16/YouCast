import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';
import Player from './pages/Player';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/watch' component={Player} />
    </BrowserRouter>
  );
}

export default Routes;