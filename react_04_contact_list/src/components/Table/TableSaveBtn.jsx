import React from "react";

export default function TableSaveBtn({saveChangedContact, changedContact}) {
   const handleSave = () => saveChangedContact(changedContact);

   return <button onClick={handleSave}>Save</button>;
}
