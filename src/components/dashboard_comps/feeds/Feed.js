import React from "react"

//import semantic ui elements
import { Feed,Header,List } from 'semantic-ui-react'

//import css file
import "./feed.css"



//Feeds component
const Feeds = () => 
{

    return (
        <div className="feed">
           <Header size='large'>Feeds</Header>
           <NewFeed/>
           <NewFeed/>
           <NewFeed/>
           <NewFeed/>
        </div>
    )
}


//export Feeds component
export default Feeds



//Child component for single feed
const NewFeed = () => 
{
    return(
      <div >
        <Feed>
            <Feed.Event>
                <Feed.Label>
                 <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Feed>
      </div>
    )
}