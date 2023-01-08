import React from "react";
import {
   FILTER_ALL,
   FILTER_MARRIED,
   FILTER_NOT_MARRIED,
   FILTER_CHOOSE,
} from "../../constants/filter";

export default function Filter({ filter, setFilter }) {
   const handleFilter = (e) => setFilter(e.target.value);

   return (
      <label>
         {FILTER_CHOOSE} {": "}
         <select defaultValue={filter} onChange={handleFilter}>
            <option value={FILTER_ALL}>{FILTER_ALL}</option>
            <option value={FILTER_MARRIED}>{FILTER_MARRIED}</option>
            <option value={FILTER_NOT_MARRIED}>{FILTER_NOT_MARRIED}</option>
         </select>
      </label>
   );
}
