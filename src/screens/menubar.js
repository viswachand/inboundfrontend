import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";

import { menu } from "../components/menu";
import { hasChildren } from "../components/util";

const useStyles = makeStyles((theme) => ({
  
  secondarytext: {
    opacity: "0.6",
  },
  icons: {
    color: "",
    opacity: "0.5",
    minWidth: "39px",
  },
  buttons: {
    "&:hover": {
      backgroundColor: "#1c2b57",
    },
  },
}));

export default function Nav() {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      component={Link}
      to={item.to || "/404"}
      className={classes.buttons}
    >
      <ListItemIcon style={{color:"rgb(238, 238, 238)", opacity:"0.5", minWidth:"39px"}}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <List>
        <ListItem button onClick={handleClick} className={classes.buttons}>
          <ListItemIcon style={{color:"rgb(238, 238, 238)", opacity:"0.5", minWidth:"39px"}}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? (
            <ExpandLessIcon
              style={{ color: "rgb(238, 238, 238)", opacity: "0.5" }}
            />
          ) : (
            <ExpandMoreIcon
            
              style={{ color: "rgb(238, 238, 238)", opacity: "0.5" }}
            />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className={classes.secondarytext}
          >
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </List>
    </React.Fragment>
  );
};
