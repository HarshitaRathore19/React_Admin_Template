//import react hooks
import React, {useEffect} from "react"

//import connect method form redux
import { connect } from "react-redux"

//import semantic ui elements
import { Header, Image, Table } from 'semantic-ui-react'

//import action to get employee data
import {getEmp} from "../../../actions/index"

//import css
import "./employee.css"



//rmployee component
const Employee = (props) => 
{
     useEffect(()=>
      {
        props.getEmp()
      },[])

  return(
        <div className="tbl">
              <Header size='large'>Employees</Header>
              <table>
                
                <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Email id</th>
                      <th>Email id</th>
                      <th>Email id</th>
                    </tr>
                </thead>

                <tbody>
                   {props.employee&&props.employee.map((item) => {
                     return <tr key={item.id}>
                        <td>
                         <td><img src={item.avatar}/></td>
                         <td>{item.first_name} {item.last_name}</td>
                        </td>
                        <td as='td'>{item.email}</td>
                        <td as='td'>{item.email}</td>
                        <td as='td'>{item.email}</td>
                      </tr>
                    })}  
                </tbody>
              
              </table>
        </div>
    )
}



//mapStateToProps function
const mapStateToProps = (state,ownProps) => 
{
    return{
            employee: state.empReducer.employee
          }
}


//export Employee component
export default connect(mapStateToProps,{getEmp})(Employee)