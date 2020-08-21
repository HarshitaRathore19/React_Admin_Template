import React,{useState, useEffect} from 'react';
import { Menu,Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import "./navbar.css"
import {logout} from "../../actions/index"
import { connect } from 'react-redux'
import "./navbar.css"
//import PrivateRoute from "../../routers/PrivateRoute"



const Navbar = (props) => {

  const token = sessionStorage.getItem("token")

    
    return (
        <div className="nav"> 
        {console.log('navbar comp')}
            <Menu pointing stackable size="huge" fixed="top" className="body.pushable>.pusher">
              <Menu.Item 
                header
                color="teal"
                position="left"
                name='Admin App'
              />
              {token?<Menu.Item 
                position="right"
                as={Link}
                to="/"
                name='Logout'
                onClick={props.logout}
              >logout
                <Icon name="sign-out"/>
                </Menu.Item>:null}
            </Menu>
        </div>
    )
}




export default connect(null,{logout})(Navbar)