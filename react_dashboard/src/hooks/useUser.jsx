import { useState, useEffect } from "react";

import { getUser } from "../services/userService";

export default function useUser(userId, createForm) {
   const [user, setUser] = useState(
      createForm
         ? {
              name: "",
              username: "",
              email: "",
              address: { city: "", street: "" },
           }
         : null
   );

   console.log(user);

   useEffect(() => {
      if (userId) {
         (async () => {
            const userData = await getUser(userId);
            setUser(userData);
         })();
      }
   }, []);

   const modifyUser = (e) => {
      if (e.target.dataset.address) {
         setUser((u) => ({
            ...u,
            address: {
               ...u.address,
               [e.target.name]: e.target.value,
            },
         }));
      } else {
         setUser((u) => ({
            ...u,
            [e.target.name]: e.target.value,
         }));
      }
   };

   return { user, modifyUser };
}
