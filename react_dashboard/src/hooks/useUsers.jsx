import React, { useState, useEffect } from "react";

import { getUsers, deleteUser } from "../services/userService";

export default function useUsers() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      (async () => {
         setUsers(await getUsers());
      })();
   }, []);

   const deleteUserHook = async (id) => {
      await deleteUser(id);
      setUsers((prevState) => prevState.filter((user) => user.id !== id));
   };

   return { users, deleteUserHook };
}
