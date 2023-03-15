import React from 'react'
import './FlistItem.css'

function FlistItem(props) {
  return (
    <div>

 <div className = 'flist'>

           <h1>Faculty and Staff:</h1>

            <ul className = 'fcontact'>
                <li>Name: {props.name}</li>
                <li>Phone: {props.phone}</li>
                <li>Activity: {props.activity}</li>
                <li>Location: {props.location}</li>
                <li>Nickname: {props.nickname}</li>
                <li>Major: {props.major}</li>
             </ul>
          

        </div>
</div>

  )
}

export default FlistItem