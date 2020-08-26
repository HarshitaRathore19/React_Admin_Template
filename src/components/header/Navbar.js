//import react hooks
import React,{useState, useEffect} from 'react';

//import semantic ui elements
import { Menu,Icon } from 'semantic-ui-react'

//impor Link from react-router-dom
import { Link } from "react-router-dom"

//import logout action
import {logout} from "../../actions/index"

//import connect method from redux
import { connect } from 'react-redux'

//import css file
import "./navbar.css"

//import Private component for conditional rendering
import PrivateComp from "../../routers/privateComp"




//make Menu.Item private
const MenuItem = PrivateComp(Menu.Item);



//Navbar component
const Navbar = (props) => 
{


  return (
          <div className="nav"> 
            <Menu pointing stackable size="huge" fixed="top" className="body.pushable>.pusher">
              <Menu.Item 
                header
                color="teal"
                position="left"
                name='Admin App'
              />
              <MenuItem 
                position="right"
                as={Link}
                to="/"
                name='Logout'
                onClick={props.logout}
                token={props.token}
              >logout
                <Icon name="sign-out"/>
              </MenuItem>
            </Menu>
          </div>
    )
}




//mapStateToProps function
const mapStateToProps = (state,ownProps) => 
{
  return {
           token: state.adminReducer.token
         }
}



//export Navbar Component
export default connect(mapStateToProps,{logout})(Navbar)