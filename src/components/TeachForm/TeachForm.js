import React,{useState} from 'react'
import './TeachForm.css'

function TeachForm(props) {

    const [name, setName]= useState('')

    function addName(event){
        setName(()=>event.target.value)
        }

    const [phone, setPhone]= useState('')

    function addPhone(event){
        setPhone(()=>event.target.value)
    }

    const [hours, setHours]= useState('')

    function addHours(event){
        setHours(()=>event.target.value)
    }

    const [department, setDepartment]= useState('')

    function addDepartment(event){
        setDepartment(()=>event.target.value)
    }

    const [hobby, setHobby]= useState('')

    function addHobby(event){
        setHobby(()=>event.target.value)
    }

    const [almaMater, setAlmaMater]= useState('')

    function addAlmaMater(event){
        setAlmaMater(()=>event.target.value)
    }
  
    const handleSubmit=(event)=>{
      event.preventDefault()
        
        let teacher = {
            name: name,
            phone: phone,
            department: department,
            hours: hours,
            hobby: hobby,
            almaMater: almaMater
        }

        name ? props.addTeacher(teacher):alert('Add Member Name To Submit')
    } 
  
   

  return (
         
         <div id='formContainerT'>
    <form className='teachForm' onSubmit={handleSubmit}>
          <label> Name: </label>
          <input  onChange={addName} type='text'/><br/>
          <label> Phone: </label>
          <input  onChange={addPhone} type='text'/><br/>
          <label> Department: </label>
          <input  onChange={addDepartment} type='text'/><br/>
          <label> Hours: </label>
          <input  onChange={addHours} type='text'/><br/>
          <label> Hobby: </label>
          <input  onChange={addHobby} type='text'/><br/>
          <label> Alma-Mater: </label>
          <input  onChange={addAlmaMater} type='text'/><br/>
          
          <br/>
          
          <button type='submit' >ENTER</button>
    </form>
    </div>
    
  )
}

export default TeachForm