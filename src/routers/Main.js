import React,{useEffect} from 'react';
import Navbar from '../components/header/Navbar'
import Routes from './Routes';
import { Router,withRouter } from 'react-router-dom';
import  history  from '../common/history'
import Fixed from "./Fixed"


const Main = () => {
    return (
        <Router history={history} >
          <Fixed />
        </Router>
    )
}

export default Main