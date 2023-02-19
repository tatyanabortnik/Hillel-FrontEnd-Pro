import { useState } from "react";

import { TEXT_COLOR } from "../constants/theme";

export default function useColor() {
   const [color, setColor] = useState(
      localStorage.getItem("color") ? localStorage.getItem("color") : TEXT_COLOR
   );

   return { color, setColor };
}
