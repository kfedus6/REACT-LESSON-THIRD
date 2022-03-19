import React, { useState } from 'react'
import FormAddUsers from './components/FormAddUsers';
import UsersList from './components/UsersList';

const App = () => {

   const [name, setName] = useState('');
   const [surename, setSureName] = useState([]);

   const [users, setUsers] = useState([]);

   const addUser = () => {
      setUsers([...users, { 'name': name, 'surename': surename }])
   }

   const changeName = (e) => {
      setName(e.target.value)
   }

   const changeSurename = (e) => {
      setSureName(e.target.value)
   }

   return (
      <>
         <FormAddUsers addUser={addUser} changeName={changeName} changeSurename={changeSurename} />
         <UsersList users={users} name={name} surename={surename} />
      </>
   )
}

export default App

