import React from 'react'

const FormAddUsers = ({ addUser, changeName, changeSurename }) => {
   return (
      <>
         <input onChange={changeName} type="text" />
         <input onChange={changeSurename} type="text" />
         <button onClick={addUser}>add</button>
      </>
   )
}

export default FormAddUsers