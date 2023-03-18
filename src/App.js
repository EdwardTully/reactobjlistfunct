import React,{useState} from 'react'
import FacForm from './components/Facform/FacForm';
import ListContainer from './components/ListContainer/ListContainer'
import TeachForm from './components/TeachForm/TeachForm'
import TeachContainer from './components/TeachContainer/TeachContainer'
import './App.css';

function App() {

  const [members, setMembers]=useState([
    {
      name: 'Natalie Tully',
      phone: 'Unlisted',
      activity: 'Tennis, Soccer',
      nickname: 'NatBat',
      location: 'Thrasher',
      major: 'Primary Education'
    }
    ])
  const [teachers, setTeachers]=useState([{
      name: 'Severious Snape',
      phone: 'Unlisted',
      hours: 'rsvp',
      hobby: 'Skiing',
      almaMater: 'Hogwarts',
      department: 'potions'
  }])

  const addMember = (member)=>{
    setMembers(prev => [member,...prev])
  }
  const addTeacher = (teacher)=>{
    setTeachers(prev => [teacher,...prev])
  }

  return (
    <div className="App">
        <h1> Member Information</h1>
       <ListContainer members = {members}/>
       <TeachContainer teachers = {teachers} />
       <div className='formcnt'>
         <FacForm addMember = {addMember}/>
      <TeachForm addTeacher = {addTeacher}/>
      </div>
     
    </div>
  );
}

export default App;
