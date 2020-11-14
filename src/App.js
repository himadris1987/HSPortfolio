import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App (){
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {About}/>
        <Route exact path = "/About" component = {About}/>
        <Route exact path = "/Portfolio" component = {Portfolio}/>
        <Route exact path = "/Contact" component = {Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
