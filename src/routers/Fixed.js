import React, {useEffect,useState} from 'react';
import Navbar from '../components/header/Navbar'
import Footer from "../components/footer/Footer"
import Sidebars from "../components/sidebar/Sidebar"
import Routes from "./Routes"
import { Grid } from 'semantic-ui-react'






const Fixed = () => {

  

  const token = sessionStorage.getItem("token")
  
  
    return (
        <>
          <Navbar/>
            <Grid stackable>
              <Grid.Row centered columns={2}>
                 <Grid.Column width={2}>
                    {token?<Sidebars/>:null}
                 </Grid.Column>
                 <Grid.Column width={14}>
                    <Routes/>
                 </Grid.Column>
              </Grid.Row>
            </Grid>
          <Footer/>
            {/* <Navbar/>
            {token?<Sidebars/>:null}
            <Routes/>
            <Footer/>  */}

        </>
    )
}

export default Fixed







{/* <Navbar/>
            <Grid stackable>
              <Grid.Row centered columns={2}>
                 <Grid.Column width={2}>
                    {token?<Sidebars/>:null}
                 </Grid.Column>
                 <Grid.Column width={14}>
                    <Routes/>
                 </Grid.Column>
              </Grid.Row>
            </Grid>
          <Footer/> */}