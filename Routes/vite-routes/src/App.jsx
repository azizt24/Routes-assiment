import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './Products';
import Header from './Header';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
