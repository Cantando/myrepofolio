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
       
        <Route exact path="/myrepofolio" component={Home} />
        <Route exact path="/myrepofolio/about" component={About} />
        <Route exact path="/myrepofolio/projects" component={Projects} />
        <Route exact path="/myrepofolio/contact" component={Contact} />
        <Route exact path="/myrepofolio/technology" component={Technology} />
        <Route exact path="/myrepofolio/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
