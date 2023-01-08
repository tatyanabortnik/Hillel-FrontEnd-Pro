import React, { useState, useEffect } from "react";
import TableTr from "./TableTr";

import "./Table.sass";
import {
   FILTER_ALL,
   FILTER_MARRIED,
   FILTER_NOT_MARRIED,
} from "../../constants/filter";

export default function Table({
   table,
   getTable,
   deleteListItem,
   saveChangedContact,
   filter,
}) {
   const [tableFiltered, setTableFiltered] = useState(table);

   useEffect(() => {
      getTable();
   }, []);

   useEffect(() => {
      setTableFiltered(
         table.filter((item) => {
            if (filter === FILTER_MARRIED) return item.married;
            if (filter === FILTER_NOT_MARRIED) return !item.married;
            if (filter === FILTER_ALL || "") return item;
         })
      );
   }, [table, filter]);

   return tableFiltered.length ? (
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Surname</th>
               <th>Married</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            {tableFiltered.map((item) => (
               <TableTr
                  key={item.id}
                  item={item}
                  deleteListItem={deleteListItem}
                  saveChangedContact={saveChangedContact}
               />
            ))}
         </tbody>
      </table>
   ) : undefined;
}
