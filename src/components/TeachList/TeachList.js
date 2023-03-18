import React from 'react'
import './TeachList.css'

function TeachList(props) {
  return (
    <div>

 <div className = 'tlist'>

           <h1 id='tnameHead'>{`Member ${props.name}`}</h1>

            <ul className = 'tinfoList'>
                <li>Name: {props.name}</li>
                <li>Phone: {props.phone}</li>
                <li>Hours: {props.hours}</li>
                <li>Department: {props.department}</li>
                <li>Hobby: {props.hobby}</li>
                <li>almaMater: {props.almaMater}</li>
             </ul>
          

        </div>
</div>

  )
}

export default TeachList