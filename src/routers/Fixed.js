import React from "react"

//import react components
import Navbar from '../components/header/Navbar'
import Footer from "../components/footer/Footer"
import Sidebars from "../components/sidebar/Sidebar"
import PrivateComp from "./privateComp"
import Routes from "./Routes"

//import semantic ui elements
import { Grid } from 'semantic-ui-react'

//import connect menthod from redux
import { connect } from 'react-redux'





//make sidebar private
const SidebarComp = PrivateComp(Sidebars);



//fixed component
const Fixed = (props) => 
{
  
  
    return (
            <>
              <Navbar/>
                  <Grid stackable>
                    <Grid.Row centered columns={2}>
                        <Grid.Column width={2}>
                          <SidebarComp token={props.token}/>
                        </Grid.Column>
                        <Grid.Column width={14}>
                          <Routes/>
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
              <Footer/>
            </>
           )
}



//mapStateToProps function
const mapStateToProps = (state,ownProps) => {
   return {
     token: state.adminReducer.token
   }
 
 }


//export Fixed component 
export default connect(mapStateToProps,null)(Fixed)







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