import React from "react"
import Dashboard from "../components/dashboard_comps/dashboard/Dashboard"
import Login from "../pages/login/Login"
import About from "../pages/about/About"
import Settings from "../pages/setting/Settings"
import { Route, Switch,withRouter } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute"
import Error from "../pages/404/Error"


const Routes = () => {

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