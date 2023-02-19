import React, { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

import { MuiColorInput } from "mui-color-input";

export default function ColorPicker() {
   const { color, setColor } = useContext(ThemeContext);

   const handleColor = (color) => {
      setColor(color);
      localStorage.setItem("color", color);
   };

   return (
      <label style={{ display: "flex", alignItems: "center", gap: "1ch" }}>
         Select color: <MuiColorInput value={color} onChange={handleColor} />
      </label>
   );
}
