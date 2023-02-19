import React, { useContext } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import ThemeContext from "../../context/ThemeContext";

import "../style.sass";

import { Link } from "react-router-dom";

import useUsers from "../../hooks/useUsers.jsx";

export default function UserTable({ theme }) {
   const { users, deleteUserHook } = useUsers();

   const { color } = useContext(ThemeContext);

   const handleDelete = async (id) => {
      await deleteUserHook(id);
      console.log(`Deleted user ${id}`);
   };

   return (
      <TableContainer>
         <Table style={{ color }}>
            <TableBody>
               {users.map((user, index) => (
                  <TableRow key={user.id} style={{ color }}>
                     <TableCell style={{ color }}>{index + 1}</TableCell>
                     <TableCell style={{ color }}>{user.name}</TableCell>
                     <TableCell style={{ color }}>
                        <Button
                           component={Link}
                           variant="contained"
                           endIcon={<EditIcon />}
                           to={`/edit/${user.id}`}
                           sx={{ mr: 1 }}
                        >
                           Edit
                        </Button>
                        <Button
                           endIcon={<DeleteIcon />}
                           variant="contained"
                           onClick={() => handleDelete(user.id)}
                        >
                           Delete
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
