import React, { useState, useEffect } from "react";

import Table from "./components/Table/Table";
import {
   getData,
   changeItem,
   deleteItem,
   addItem,
} from "./services/contactListService";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import {FILTER_ALL} from './constants/filter'

export default function App() {
   const [table, setTable] = useState([]);
   const [filter, setFilter] = useState(localStorage.getItem('filter') ? localStorage.getItem('filter') : FILTER_ALL);

   useEffect(() => {
     localStorage.setItem('filter', filter);
   }, [filter])
   

   const getTable = async () => {
      setTable(await getData());
   };

   const saveChangedContact = async (item) => {
      let changedItem = await changeItem(item.id, item);
      setTable((prevState) =>
         prevState.map((elem) => {
            if (elem.id === item.id) elem = changedItem;
            return elem;
         })
      );
   };

   const deleteListItem = async (id) => {
      await deleteItem(id);

      setTable((prevState) => prevState.filter((elem) => elem.id !== id));
   };

   const addNewContact = async (obj) => {
      let addedContact = await addItem(obj);

      setTable((prevState) => [...prevState, addedContact]);
   };

   return (
      <>
         <Form addNewContact={addNewContact} />
         <Filter filter={filter} setFilter={setFilter}/>
         <Table
            filter={filter}
            table={table}
            getTable={getTable}
            deleteListItem={deleteListItem}
            saveChangedContact={saveChangedContact}
         />
      </>
   );
}
