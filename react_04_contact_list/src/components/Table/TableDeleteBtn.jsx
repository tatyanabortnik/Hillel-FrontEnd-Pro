import React from "react";

export default function TableDeleteBtn({ item, deleteListItem }) {
   const handleDelete = () => deleteListItem(item.id);
   return <button onClick={handleDelete}>Delete</button>;
}
