import React from "react"
import { List } from 'semantic-ui-react'
import { Feed,Header } from 'semantic-ui-react'
import "./feed.css"



const Feeds = () => {


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

export default Feeds



const NewFeed = () => {
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