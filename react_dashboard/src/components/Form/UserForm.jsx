import { useParams, useNavigate } from "react-router-dom";
import { editUser, createUser } from "../../services/userService";

import useUser from "./../../hooks/useUser";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UserForm({ createForm }) {
   const navigation = useNavigate();
   const { userId } = useParams();

   const { user, modifyUser } = useUser(userId, createForm);

   const handleSubmit = async (e) => {
      e.preventDefault();
      createForm ? await createUser(user) : await editUser(user.id, user);
      navigation(`/`);
   };
   const handleInputChange = (e) => modifyUser(e);
   const handleCancel = () => navigation(`/`);

   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
         }}
         onSubmit={handleSubmit}
      >
         <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={user !== null ? user.name : ""}
            onChange={handleInputChange}
            required
         />
         <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            name="username"
            value={user !== null ? user.username : ""}
            onChange={handleInputChange}
            required
         />
         <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={user !== null ? user.email : ""}
            onChange={handleInputChange}
            required
         />
         <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            name="city"
            value={user !== null ? user.address?.city : ""}
            onChange={handleInputChange}
            inputProps={{ "data-address": "address" }}
         />
         <TextField
            id="standard-basic"
            label="Street"
            variant="standard"
            name="street"
            value={user !== null ? user.address?.street : ""}
            onChange={handleInputChange}
            inputProps={{ "data-address": "address" }}
         />

         <div
            style={{
               display: "flex",
               justifyContent: "center",
               gap: "10px",
               marginTop: "20px",
            }}
         >
            <Button type="submit" variant="contained">
               {createForm ? `Create user` : `Save changes`}
            </Button>
            <Button variant="contained" onClick={handleCancel}>
               Cancel
            </Button>
         </div>
      </Box>
   );
}
