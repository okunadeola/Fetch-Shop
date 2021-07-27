import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './container/Components/ProductListing';
import Header from './container/Components/Header';
import ProductDetails from './container/Components/ProductDetails';

const App = ()=> {
 

  return (
   <Fragment>
     <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route >
            <div className="my-5 text-center text-danger"> 404 Not Found!</div>
           </Route>
        </Switch>
     </Router>
   </Fragment>
  )
}

export default App

