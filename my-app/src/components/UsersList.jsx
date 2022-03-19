import React from 'react'

const UsersList = ({ users }) => {
   return (
      <div>{
         users.map((item, index) => {
            return (
               <div key={index}>{item.name}<br />{item.surename}</div>
            )
         })
      }</div>
   )
}

export default UsersList