//import react hooks
import React,{useEffect} from 'react';

//import components
import Navbar from '../components/header/Navbar'
import Routes from './Routes';
import Fixed from "./Fixed"

//import Router 
import { Router } from 'react-router-dom';

//import history
import  history  from '../common/history'



//Main comp
const Main = (props) => 
{
    return (
             <Router history={history} >
                <Fixed />
             </Router>
           )
}


//export main comp
export default Main