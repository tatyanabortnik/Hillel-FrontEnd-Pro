import { useState, useEffect } from "react";

import { THEME_LIGHT, THEME_STORAGE_KEY } from "../constants/theme";

export default function useTheme() {
   const key = localStorage.getItem(THEME_STORAGE_KEY) ?? THEME_LIGHT;

   console.log(THEME_LIGHT);

   const [theme, setTheme] = useState(key);

   useEffect(() => {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
   }, [theme]);

   return { theme, setTheme };
}
