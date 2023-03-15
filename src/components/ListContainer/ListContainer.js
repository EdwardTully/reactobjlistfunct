import React from 'react'
import FlistItem from '../FlistItem/FlistItem'
import './ListContainer.css'

function ListContainer(props) {
  return (
     
    <div className = 'table'>

          {props.members && props.members.map((member)=>{
          return <FlistItem  name={member.name} phone={member.phone} activity = {member.activity} nickname={member.nickname} location={member.location} major={member.major}
           key={member}/>          
          })}
       
     </div>
  
  )
}

export default ListContainer