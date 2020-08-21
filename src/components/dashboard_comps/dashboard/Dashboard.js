import React from "react"
import { Button } from 'semantic-ui-react'
import Sidebar from "../../sidebar/Sidebar"
import Chart from "../charts/Chart"
import Feeds from "../feeds/Feed"
import Employee from "../employees/Employee"
import Cards from "../cards/Card"
import { Grid,Image } from 'semantic-ui-react'
import "./dashboard.css"




const Dashboard = () => {
    return (
        <div className="dashboard">
           <Grid centered padded="horizontaly"  stackable>
              <Grid.Row centered>
                 <Grid.Column width={8}>
                   <Chart/>
                 </Grid.Column>
                 <Grid.Column width={8}>
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
        </div>
    )
}

export default Dashboard



