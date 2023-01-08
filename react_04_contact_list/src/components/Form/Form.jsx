import React from "react";
import { useState } from "react";

import "./Form.sass";

export default function Form({ addNewContact }) {
   const [newContact, setNewContact] = useState({
      married: false,
   });

   const handleName = (e) =>
      setNewContact((prevState) => ({ ...prevState, name: e.target.value }));

   const handleSurname = (e) =>
      setNewContact((prevState) => ({ ...prevState, surname: e.target.value }));

   const handleMarried = (e) =>
      setNewContact((prevState) => ({
         ...prevState,
         married: e.target.checked,
      }));

   const handleNewContact = (e) => {
      e.preventDefault();

      newContact.name && newContact.surname
         ? addNewContact(newContact)
         : alert("Type name and surname")
   };

   return (
      <form>
         <label>
            Name: <input type="text" onBlur={handleName} required></input>
         </label>
         <label>
            Surname: <input type="text" onBlur={handleSurname} required></input>
         </label>
         <label>
            Married: <input type="checkbox" onChange={handleMarried}></input>
         </label>
         <button onClick={handleNewContact}>Add new contact</button>
      </form>
   );
}
