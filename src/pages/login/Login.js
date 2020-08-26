//import react hooks
import React,{useState} from "react"

//import css
import './login.css';

//import semantic ui elements
import { Button, Header, Form } from 'semantic-ui-react'

//import login action
import { login } from "../../actions/index"

//import connect method from redux
import { connect } from 'react-redux'

//import react toastify components and css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




//Login component
const Login = (props) => 
{

    const [credentials,setCredentials]= useState({
                                     userName: "",
                                     password:""
                                    })


    //function to handle onChange event                                
    const handleChange = (event) => 
    {
       const { name, value } = event.target;
       setCredentials({...credentials,[name]: value})
    }

    
    
    // function to handle form onSubmit event
    const handleSubmit = (event) => 
    {
       if(credentials.userName === "h@gmail.com" && credentials.password === "123")
        {
          props.login(credentials)
        } else
        {
         event.preventDefault()
         toast("Login failed, invalid Id/Password")
        }
    }

    
    return(
          <div className="login">
              <Header 
                textAlign="center" 
                size="huge"
              >  
                 Sign in
              </Header>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                   <label>User Name</label>
                   <input 
                      type="email"
                      placeholder='User name/Email'
                      name="userName" 
                      value={credentials.userName}
                      onChange={handleChange}
                      required
                   />
                </Form.Field>
                <Form.Field>
                   <label>Password</label>
                   <input
                      type="password" 
                      placeholder='Password'
                      name="password" 
                      value={credentials.password}
                      onChange={handleChange}
                      required
                   />
                </Form.Field>
                <Button  
                  type='submit'
                  color="teal"
                >
                    Login
                </Button>
              </Form>
              <ToastContainer/>
          </div>
          )
}



//export Login component
export default connect(null,{login})(Login)