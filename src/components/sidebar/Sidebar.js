//import react hooks
import React,{useState} from "react"

//import semantic ui 
import { Menu,Sidebar,Segment,Icon,Image,Header } from 'semantic-ui-react'

//import Link from react-router-dom
import { Link } from "react-router-dom"

//import css
import "./sidebar.css"



//Sidebar component
const Sidebars = () => 
{
    const [activeItem,setActiveItem] = useState("Dashboard")

    const handleItemClick = (e, { name }) => setActiveItem(name)

  return(
        
        <div className="sidebar">
          <Sidebar
            direction="left"
            as={Menu}
            animation='slide out'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
            className="cls"
          >
            <Menu.Item 
              className="sidebar"
              as={Link}
              to="/dashboard"
              name='Dashboard'
              active={activeItem === 'Dashboard'}
              onClick={handleItemClick}
            >
              <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item 
              as={Link}
              to="/about"
              name='About us'
              active={activeItem === 'About us'}
              onClick={handleItemClick}
            >
              <Icon name='info' />
               About us
            </Menu.Item>
            <Menu.Item 
              as={Link}
              to="/settings"
              name='Settings'
              active={activeItem === 'Settings'}
              onClick={handleItemClick}
            >
              <Icon name='setting' />
                Settings
            </Menu.Item>
          </Sidebar>
        </div>
    )
}


//export sidebar
export default Sidebars













//  <Menu pointing vertical color="teal" size="tiny">
//           <Menu.Item
//             as={Link}
//             to="/dashboard"
//             name='Dashboard'
//             active={activeItem === 'Dashboard'}
//             onClick={handleItemClick}
//           />
//           <Menu.Item
//             as={Link}
//             to="/about"
//             name='About us'
//             active={activeItem === 'About us'}
//             onClick={handleItemClick}
//           />
//           <Menu.Item
//             as={Link}
//             to="/settings"
//             name='Settings'
//             active={activeItem === 'Settings'}
//             onClick={handleItemClick}
//           />
          
          

//         </Menu> 








  //  <Sidebar.Pushable as={Segment}>
  //   <Sidebar
  //     as={Menu}
  //     animation='overlay'
  //     icon='labeled'
  //     inverted
  //     vertical
  //     visible
  //     width='thin'
  //   >
  //     <Menu.Item 
  //       as={Link}
  //       to="/dashboard"
  //       name='Dashboard'
  //       active={activeItem === 'Dashboard'}
  //       onClick={handleItemClick}
  //     >
  //       <Icon name='home' />
  //       Home
  //     </Menu.Item>
  //     <Menu.Item 
  //       as={Link}
  //       to="/about"
  //       name='About us'
  //       active={activeItem === 'About us'}
  //       onClick={handleItemClick}
  //     >
  //       <Icon name='gamepad' />
  //       Games
  //     </Menu.Item>
  //     <Menu.Item 
  //       as={Link}
  //       to="/settings"
  //       name='Settings'
  //       active={activeItem === 'Settings'}
  //       onClick={handleItemClick}
  //     >
  //       <Icon name='camera' />
  //       Channels
  //     </Menu.Item>
  //   </Sidebar>

  //   <Sidebar.Pusher>
  //     <Segment basic as={Link}>
  //     </Segment>
  //   </Sidebar.Pusher>
  // </Sidebar.Pushable>



  