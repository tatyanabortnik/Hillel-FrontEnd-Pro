import React from "react";

import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import Checkbox from "@mui/material/Checkbox";
import { THEME_STORAGE_KEY } from "../../constants/theme";

export default function ThemeSwitcher({ theme, setTheme }) {
   const handleCheckbox = (e) => {
      setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
   };

   return (
      <label>
         Dark theme:
         <Checkbox
            icon={<DarkModeIcon />}
            checkedIcon={<DarkModeIcon />}
            checked={theme === THEME_DARK}
            onChange={handleCheckbox}
         />
      </label>
   );
}
