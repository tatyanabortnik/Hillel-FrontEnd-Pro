import { useState, useEffect } from "react";

import { THEME_LIGHT, THEME_STORAGE_KEY } from "../constants/theme";

export default function useTheme() {
   const [theme, setTheme] = useState(
      localStorage.getItem(THEME_STORAGE_KEY)
         ? localStorage.getItem(THEME_STORAGE_KEY)
         : THEME_LIGHT
   );

   useEffect(() => {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
   }, [theme]);

   return { theme, setTheme };
}
