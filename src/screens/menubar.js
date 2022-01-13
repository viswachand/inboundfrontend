import React, { useState } from "react";
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
import Divider from "@mui/material/Divider";
<<<<<<< HEAD

=======
>>>>>>> vineeth
import { menu } from "../components/menu";
import { hasChildren } from "../components/util";

const useStyles = makeStyles((theme) => ({
  secondarytext: {
    backgroundColor: "#2F407B",
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

<<<<<<< HEAD
export default function Nav({ formData, setFormData }) {
  return menu.map((item, key) => (
    <>
      <MenuItem
        formData={formData}
        setFormData={setFormData}
        key={key}
        item={item}
      />
=======
export default function Nav() {
  return menu.map((item, key) => (
    <>
      <MenuItem key={key} item={item} />
>>>>>>> 8ef3d86760e3ceee90c48ef82c27fc5159637473
    </>
  ));
}

const MenuItem = ({ item, formData, setFormData }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
<<<<<<< HEAD
  return (
    <Component formData={formData} setFormData={setFormData} item={item} />
  );
=======
  return <Component item={item} />;
>>>>>>> 8ef3d86760e3ceee90c48ef82c27fc5159637473
};

const SingleLevel = ({ item, formData, setFormData }) => {
  const classes = useStyles();

  // const close = () => {
  //   setFormData({ ...formData, draweron: "yes" });
  // };

  return (
    <>
      <ListItem
        // onClick={close}
        button
        component={Link}
        to={item.to || "/home"}
        className={classes.buttons}
      >
        <ListItemIcon
          style={{
            color: "rgb(238, 238, 238)",
            opacity: "0.5",
            minWidth: "39px",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
        <Divider />
      </ListItem>
    </>
  );
};

const MultiLevel = ({ item, formData, setFormData }) => {
  const classes = useStyles();
  const { items: children } = item;
  const [openlist, setOpenlist] = useState(false);

  const handleClick = () => {
    setOpenlist((prev) => !prev);
  };

  const handleclickclose = () => {
    setFormData({ ...formData, draweron: "yes" });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <List>
        <ListItem button onClick={handleClick} className={classes.buttons}>
          <ListItemIcon
            style={{
              color: "rgb(238, 238, 238)",
              opacity: "0.5",
              minWidth: "39px",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            style={{ fontFamily: "Open Sans" }}
            primary={item.title}
          />
          {openlist ? (
            <ExpandLessIcon
              style={{ color: "rgb(238, 238, 238)", opacity: "0.5" }}
            />
          ) : (
            <ExpandMoreIcon
              style={{ color: "rgb(238, 238, 238)", opacity: "0.5" }}
            />
          )}
        </ListItem>
        <Collapse in={openlist} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className={classes.secondarytext}
          >
            {children.map((child, key) => (
              <MenuItem  key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </List>
    </React.Fragment>
  );
};
