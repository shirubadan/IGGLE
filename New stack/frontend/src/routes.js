import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
// import Register from './pages/Register';
// import Contact from './pages/Contact';
// import AboutUs from './pages/AboutUs';
// import NewAdvertise from './pages/NewAdvertise';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/new_advertise" component={NewAdvertise} /> */}
      </Switch>
    </BrowserRouter>
  )
}