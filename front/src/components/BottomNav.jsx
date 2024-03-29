import React, { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import HomeIcon from "./icons/HomeIcon";
import DocIcon from "./icons/DocIcon";
import QuestIcon from "./icons/QuestIcon";
import NewsIcon from "./icons/NewsIcon";
import ChatIcon from "./icons/ChatIcon";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LabelBottomNavigation() {
  const theme = useTheme();
  const pathname = useLocation().pathname;
  const [value, setValue] = useState(pathname);
  console.log("navValue", value);
  console.log("path", pathname);

  // GET CLI ID FROM STORE
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);

  useEffect(() => {
    if (pathname !== value) {
      setValue("");
    }
    setValue(pathname);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        sx={{
          bgcolor: theme.palette.primary.main,
          width: "100%",
          "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
            color: "white",
          },
          "& .Mui-selected": {
            color: value === pathname ? theme.palette.orange.main : "white",
          },
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          sx={styles.buttonAction}
          label="Accueil"
          value="/layout/ptf"
          icon={
            <HomeIcon
              fill={
                value === "/layout/ptf" ? theme.palette.orange.main : "white"
              }
            />
          }
          component={NavLink}
          to="/layout/ptf"
        />
        <BottomNavigationAction
          sx={styles.buttonAction}
          label="Documents"
          value="/layout/doc"
          icon={
            <DocIcon
              fill={
                value === "/layout/doc" ? theme.palette.orange.main : "white"
              }
            />
          }
          component={NavLink}
          to="/layout/doc"
        />
        <BottomNavigationAction
          sx={styles.buttonAction}
          label="Questions"
          value="/layout/quest"
          icon={
            <QuestIcon
              fill={
                value === "/layout/quest" ? theme.palette.orange.main : "white"
              }
            />
          }
          component={NavLink}
          to="/layout/quest"
        />
        <BottomNavigationAction
          sx={styles.buttonAction}
          label="News"
          value="/layout/news"
          icon={
            <NewsIcon
              fill={
                value === "/layout/news" ? theme.palette.orange.main : "white"
              }
            />
          }
          component={NavLink}
          to="/layout/news"
        />
        <BottomNavigationAction
          sx={styles.buttonAction}
          label="Chat"
          value={`/layout/chat/${IdCtraCli}`}
          icon={
            <ChatIcon
              fill={
                value === `/layout/chat/${IdCtraCli}`
                  ? theme.palette.orange.main
                  : "white"
              }
            />
          }
          component={NavLink}
          to={`/layout/chat/${IdCtraCli}`}
        />
      </BottomNavigation>
    </Paper>
  );
}

/**@type {import("@mui/material".SxProps)} */
const styles = {
  navBar: {
    bgcolor: "primary.main",
    width: "100%",

    "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
      color: "white",
    },
  },
  buttonAction: {
    minWidth: "50px",
  },
};
