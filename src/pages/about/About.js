import React from "react"

//import css
import "./about.css"

//import semantic ui elements
import { Header } from 'semantic-ui-react'



//about component
const About = (props) => 
{
    return(
            <div className="about">
              <div className="head">
                 <Header as="h1">About us</Header>
              </div>
              <div className="head2">
               <Header as="h3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Header>
              </div>
            </div>
          )
}


//export About component
export default About