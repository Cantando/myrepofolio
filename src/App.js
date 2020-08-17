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

        <Switch>

          <Route exact path="/myrepofolio" component={Home} />
          <Route path="/myrepofolio/about" component={About} />
          <Route path="/myrepofolio/projects" component={Projects} />
          <Route path="/myrepofolio/contact" component={Contact} />
          <Route path="/myrepofolio/technology" component={Technology} />
          <Route path="/myrepofolio/resume" component={Resume} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
