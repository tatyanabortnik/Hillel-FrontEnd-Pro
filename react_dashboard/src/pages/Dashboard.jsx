import React, { Fragment } from "react";

import UserTable from "../components/Table/UserTable";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ThemeContext from "../context/ThemeContext";

import useColor from "../hooks/useColor";
import useTheme from "../hooks/useTheme";

export default function Dashboard() {
   const { color, setColor } = useColor();
   const { theme, setTheme } = useTheme();

   return (
      <Fragment>
         <div style={{ backgroundColor: theme }}>
            <Button
               component={Link}
               variant="contained"
               to="/create"
               endIcon={<AddCircleIcon />}
               sx={{ mb: 1 }}
            >
               Create user
            </Button>
            <ThemeContext.Provider value={{ color, setColor }}>
               <ColorPicker />
               <ThemeSwitcher theme={theme} setTheme={setTheme} />
               <UserTable />
            </ThemeContext.Provider>
         </div>
      </Fragment>
   );
}
