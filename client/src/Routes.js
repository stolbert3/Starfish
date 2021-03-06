import  React from "react";
import { Route, Router } from "react-router-dom";
import Home from './Home';
import Callback from './Callback';
import Auth from './auth';
import history from './history';
import ParentComponent from './components/ParentComponent/ParentComponent.js';
import ChildComponent from './components/ChildComponent/ChildComponent.js';
import RolesComponent from "./components/RolePage/RolePage";
import TaskDetails from "./components/TaskDetails.js";
import ChildProgressView from "./components/ChildProgressView/ChildProgressView";
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div style={{width:"100%"}}>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/parent/:email" component={ParentComponent} /> 
      <Route path="/child/:email" component={ChildComponent} /> 
   
      <Route path="/progress/:email" component={ChildProgressView} /> 
      <Route path="/roles/:email" component={RolesComponent} /> 
      <Route path="/TaskDetails" component={TaskDetails} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
    </div>
  </Router>
);

export default Routes;