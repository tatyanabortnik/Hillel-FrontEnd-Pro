import { useEffect, useState } from "react";

import { TEXT_COLOR } from "../constants/theme";

export default function useColor() {
   const persistentColor = localStorage.getItem("color") ?? TEXT_COLOR;

   const [color, setColor] = useState(persistentColor);

   useEffect(() => {
      localStorage.setItem("color", color);
   }, [color]);

   return { color, setColor };
}
