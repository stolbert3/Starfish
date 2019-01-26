import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ParentComponent from "./components/ParentComponent/ParentComponent.js";
import RolesComponent from "./components/RolePage/RolePage.js"
import ChildComponent from "./components/ChildComponent/ChildComponent.js"
import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/role" component={RolesComponent} />
        <Route exact path="/parent" component={ParentComponent} />
        <Route exact path="/child" component={ChildComponent} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
