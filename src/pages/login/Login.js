import React,{useState} from "react"
import './login.css';
import { Button, Header, Form } from 'semantic-ui-react'
import { login } from "../../actions/index"
import { connect } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Login = (props) => {



  const [credentials,setCredentials]= useState({
                                     userName: "",
                                     password:""
                                    })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({...credentials,[name]: value})
  }

  const handleSubmit = (event) => {
    if(credentials.userName === "h@gmail.com" && credentials.password === "123")
    {
      toast("Login successfull")
      event.preventDefault()
      props.login(credentials)
      
    } else{
      toast("Login failed, invalid Id/Password")
    }
    
  }

    return (
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

export default connect(null,{login})(Login)