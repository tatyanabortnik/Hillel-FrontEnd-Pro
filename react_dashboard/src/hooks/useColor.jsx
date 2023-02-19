import { useEffect, useState } from "react";

import { TEXT_COLOR } from "../constants/theme";

export default function useColor() {
   const [color, setColor] = useState(
      localStorage.getItem("color") ? localStorage.getItem("color") : TEXT_COLOR
   );

   useEffect(() => {
      localStorage.setItem("color", color);
   }, [color]);

   return { color, setColor };
}
