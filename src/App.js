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
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'William Tully',
      phone: 'Unlisted',
      activity: 'Hunting, Fishing, Cars',
      nickname: 'Willy',
      location: 'Squad Bay 2',
      major: 'Criminal Justice'
    },
    {
      name: 'Jessic Tully',
      phone: '804-555-5555',
      activity: 'Soccer, Beachgoing',
      nickname: 'Jess',
      location: 'Room 4',
      major: 'OT'
    },
    {
      name: 'Jessic Tully',
      phone: '804-555-5555',
      activity: 'Soccer, Beachgoing',
      nickname: 'Jess',
      location: 'Room 4',
      major: 'OT'
    },
    {
      name: 'Jessic Tully',
      phone: '804-555-5555',
      activity: 'Soccer, Beachgoing',
      nickname: 'Jess',
      location: 'Room 4',
      major: 'OT'
    },
    {
      name: 'Jessic Tully',
      phone: '804-555-5555',
      activity: 'Soccer, Beachgoing',
      nickname: 'Jess',
      location: 'Room 4',
      major: 'OT'
    },{
      name: 'Natalie Tully',
      phone: 'Unlisted',
      activity: 'Tennis, Soccer',
      nickname: 'NatBat',
      location: 'Thrasher',
      major: 'Primary Education'
    },{
      name: 'Natalie Tully',
      phone: 'Unlisted',
      activity: 'Tennis, Soccer',
      nickname: 'NatBat',
      location: 'Thrasher',
      major: 'Primary Education'
    },{
      name: 'Natalie Tully',
      phone: 'Unlisted',
      activity: 'Tennis, Soccer',
      nickname: 'NatBat',
      location: 'Thrasher',
      major: 'Primary Education'
    },{
      name: 'Natalie Tully',
      phone: 'Unlisted',
      activity: 'Tennis, Soccer',
      nickname: 'NatBat',
      location: 'Thrasher',
      major: 'Primary Education'
    }
  ])

  const addMember = (member)=>{
    setMembers(prev => [member, ...prev])
  }

  return (
    <div className="App">
        <h1>Club Member Information</h1>
       <ListContainer members = {members}/>
       <FacForm addMember = {addMember}/>
    
    </div>
  );
}

export default App;
