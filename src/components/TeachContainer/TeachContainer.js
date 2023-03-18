import React from 'react'
import TeachList from '../TeachList/TeachList'
import './TeachContainer.css'

function TeachContainer(props) {
  return (
     
    <div className = 'ttable'>

          {props.teachers && props.teachers.map((teacher)=>{
          return <TeachList  name={teacher.name} phone={teacher.phone} hobby = {teacher.hobby} hours={teacher.hours} department={teacher.department} almaMater={teacher.almaMater}
           key={teacher.name}/>          
          })}
       
     </div>
  
  )
}

export default TeachContainer