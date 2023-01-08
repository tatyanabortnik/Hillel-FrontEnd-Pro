import React from "react";

export default function TableMarried({ item, setChangedContact }) {
   const handleChange = (e) => setChangedContact(prevState => ({...prevState, married: e.target.checked}))

   return (
      <input
         type="checkbox"
         defaultChecked={item.married}
         onChange={handleChange}
      />
   );
}
