import React from 'react'

export default function TableInput({name, value, setChangedContact}) {
   const handleInput = e => setChangedContact(prevState => ({...prevState, [name]: e.target.value}))

   return (
   <input type="text" defaultValue={value} onBlur={handleInput}/>
  )
}

//[`${event.target.id}`]: