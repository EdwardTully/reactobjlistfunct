import React,{useState} from 'react'
import './Facform.css'

function FacForm(props) {

    const [name, setName]= useState('')

    function addName(event){
        setName(()=>event.target.value)
        }

    const [phone, setPhone]= useState('')

    function addPhone(event){
        setPhone(()=>event.target.value)
    }

    const [activity, setActivity]= useState('')

    function addActivity(event){
        setActivity(()=>event.target.value)
    }

    const [nickname, setNickname]= useState('')

    function addNickname(event){
        setNickname(()=>event.target.value)
    }

    const [location, setLocation]= useState('')

    function addLocation(event){
        setLocation(()=>event.target.value)
    }

    const [major, setMajor]= useState('')

    function addMajor(event){
        setMajor(()=>event.target.value)
    }
  
    const handleSubmit=(event)=>{
      event.preventDefault()
       
        let member ={
            name: name,
            phone: phone,
            activity: activity,
            nickname: nickname,
            location: location,
            major: major
        }
        props.addMember(member)
    }
    
   

  return (
    <div>     
         <div>
    <form onSubmit={handleSubmit}>
          <label> Name: </label>
          <input  onChange={addName} type='text'/><br/><br/>
          <label> Phone: </label>
          <input  onChange={addPhone} type='text'/><br/><br/>
          <label> Activity: </label>
          <input  onChange={addActivity} type='text'/><br/><br/>
          <label> Nickname: </label>
          <input  onChange={addNickname} type='text'/><br/><br/>
          <label> Location: </label>
          <input  onChange={addLocation} type='text'/><br/><br/>
          <label> Major: </label>
          <input  onChange={addMajor} type='text'/><br/><br/>
          
          <br/>
          <br/>
          <button type='submit' >ENTER</button>
    </form>
    </div>
    </div>
  )
}

export default FacForm