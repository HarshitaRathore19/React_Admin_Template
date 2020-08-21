import React, { useEffect } from "react"
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { connect } from "react-redux"
import {getEmp} from "../../../actions/index"
import './cards.css';




const Cards = (props) => {

    useEffect(()=> {
      getEmp()
    },[])

    return (
     <> 
      <Grid columns={3} className="ui centered grid">
            {props.employee&&props.employee.map((item) => {
                return <div compact className="box">
                 <Grid.Column>
                   <Card>
                     <Image src={item.avatar} wrapped ui={false} />
                     <Card.Content>
                        <Card.Header>{item.first_name}</Card.Header>
                        <Card.Meta>
                           <span className='date'>{item.email}</span>
                         </Card.Meta>
                        <Card.Description>
                          {item.first_name} is a musician living in Nashville.
                        </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                        <a>
                          <Icon name='user' />
                           22 Friends
                        </a>
                     </Card.Content>
                   </Card>
                 </Grid.Column>
              </div>
        
            })}
            </Grid>
      </>     
      
    )
}

const mapStateToProps = (state,ownProps) => {
  console.log(state.empReducer.employee)
  return{
    employee: state.empReducer.employee
}
}


export default connect(mapStateToProps)(Cards)





