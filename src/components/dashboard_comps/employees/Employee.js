import React, {useEffect} from "react"
import { connect } from "react-redux"
import { Header, Image, Table } from 'semantic-ui-react'
import {getEmp} from "../../../actions/index"
import "./employee.css"

const Employee = (props) => {


  useEffect(()=>{
      props.getEmp()
  },[])

    return (
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


const mapStateToProps = (state,ownProps) => {
  return{
      employee: state.empReducer.employee
  }
}

export default connect(mapStateToProps,{getEmp})(Employee)