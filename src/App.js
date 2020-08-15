import React from 'react';
// import './App.css';

import NavTabs from "./components/pages/navtabs";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Technology from "./components/pages/technology";
import Resume from "./components/pages/resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
      <NavTabs />
        <Switch>
       
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
