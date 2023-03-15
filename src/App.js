import React,{useState} from 'react'
import FacForm from './components/Facform/FacForm';
import ListContainer from './components/ListContainer/ListContainer'
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
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    }
  ])

  const addMember = (member)=>{
    setMembers(prev => [member, ...prev])
  }

  return (
    <div className="App">
      
       <ListContainer members = {members}/>
       <FacForm addMember = {addMember}/>
    
    </div>
  );
}

export default App;
