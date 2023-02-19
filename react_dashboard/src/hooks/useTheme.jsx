import { useState, useEffect } from "react";

import { THEME_LIGHT } from "../constants/theme";

export default function useTheme() {
   const [theme, setTheme] = useState(
      localStorage.getItem("theme")
         ? localStorage.getItem("theme")
         : THEME_LIGHT
   );

   useEffect(() => {
      localStorage.setItem(`theme`, theme);
   }, [theme]);

   return { theme, setTheme };
}
