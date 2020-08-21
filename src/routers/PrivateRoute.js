import React from "react"
import { Route,Redirect } from "react-router-dom"



const PrivateRoute = ({component: Component, ...rest}) => {
   
    const token = sessionStorage.getItem("token")
   
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


export default PrivateRoute