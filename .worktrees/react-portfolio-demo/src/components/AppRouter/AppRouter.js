import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import NotFoundPage from './Components/NotFoundPage';

const AppRouter = () => {
    return (
    <BrowserRouter>
      <div>
      <Header />  
      <Switch> 
              <Route path="/" component={Home} exact={true} />
              <Route path="/Portfolio" component={Portfolio} exact={true} />
              <Route path="/Contact" component={Contact} />
              <Route component={NotFoundPage} />    
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
  export default AppRouter;