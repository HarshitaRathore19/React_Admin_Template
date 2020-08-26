import React, { useEffect } from "react"

//import semantic ui elements
import { Button ,Grid,Image} from 'semantic-ui-react'

//import dashboard components
import Sidebar from "../../sidebar/Sidebar"
import Chart from "../charts/Chart"
import Feeds from "../feeds/Feed"
import Employee from "../employees/Employee"
import Cards from "../cards/Card"

//import css
import "./dashboard.css"


//import react toastify components and css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Dashboard = () => 
{


   
   useEffect(()=>{
      toast("Login successfull")
     },[])


    return (
         <div className="dashboard">
            <Grid centered padded="horizontaly"  stackable>
               <Grid.Row centered>
                  <Grid.Column width={11}>
                     <Chart/>
                  </Grid.Column>
                  <Grid.Column width={5}>
                     <Feeds/>
                  </Grid.Column>
               </Grid.Row>

               <Grid.Row centered>
                  <Grid.Column width={16}>
                     <Employee />
                  </Grid.Column>
               </Grid.Row>

               <Grid.Row centered>
                  <Grid.Column width={16}>
                     <Cards />
                  </Grid.Column>
               </Grid.Row>
            </Grid>
            <ToastContainer/>
         </div>
    )
}


//export dashboard component
export default Dashboard



