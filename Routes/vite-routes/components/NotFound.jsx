import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Products';
import Header from './Header';
import NotFound from './NotFound';  

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products" component={Products} />
        <Route component={NotFound} /> {/* This route handles 404 */}
      </Switch>
    </Router>
  );
}

export default App;
