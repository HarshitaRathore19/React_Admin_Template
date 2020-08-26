import React from "react"

//import components
import Dashboard from "../components/dashboard_comps/dashboard/Dashboard"
import Login from "../pages/login/Login"
import About from "../pages/about/About"
import Settings from "../pages/setting/Settings"
import PrivateRoute from "./PrivateRoute"
import Error from "../pages/404/Error"

//import react-router-doms components
import { Route, Switch,withRouter, Redirect } from 'react-router-dom';



const Routes = (props) => 
{

  const token = sessionStorage.getItem("token")

    return (
            <Switch>
              {token?null:<Route exact path="/" component={Login} />}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Route path="" component={Error}/>
            </Switch>
          )
}

export default withRouter(Routes)