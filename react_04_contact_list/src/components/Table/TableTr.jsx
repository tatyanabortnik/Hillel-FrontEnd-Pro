import React from "react";

import TableInput from "./TableInput";
import TableMarried from "./TableMarried";
import TableSaveBtn from "./TableSaveBtn";
import TableDeleteBtn from "./TableDeleteBtn";
import { useState } from "react";

export default function TableTr({
   item,
   deleteListItem,
   saveChangedContact,
}) {
   const [changedContact, setChangedContact] = useState({
      id: item.id,
      name: item.name,
      surname: item.surname,
      married: item.married
   });

   return (
      <tr>
         <td>
            <TableInput
               name="name"
               value={item.name}
               setChangedContact={setChangedContact}
            />
         </td>
         <td>
            <TableInput
               name="surname"
               value={item.surname}
               setChangedContact={setChangedContact}
            />
         </td>
         <td>
            <TableMarried
               item={item}
               setChangedContact={setChangedContact}
               
            />
         </td>
         <td>
            <TableSaveBtn
               saveChangedContact={saveChangedContact}
               changedContact={changedContact}
            />
            <TableDeleteBtn item={item} deleteListItem={deleteListItem} />
         </td>
      </tr>
   );
}
