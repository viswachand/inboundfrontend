import * as React from "react";
import { styled } from "@mui/material/styles";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch} from "react-redux";
>>>>>>> vineeth
import { Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "../components/AccountAvatar";
import Menubar from "./menubar";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { logout } from "../actions/userActions";
import Popper from "@mui/core/Popper";
import InboundStaging from "../components/InboundStaging";
import Inbound1step from "../components/inbound1step";
import { useSelector } from "react-redux";

import {
  Grow,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import Companylogo from "../assests/logo.svg";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
  },

  icon: {
    color: "#4B5861",
  },

  username: {
    "&:hover": {
      background: "transparent",
    },
  },
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "white",
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
<<<<<<< HEAD
=======

>>>>>>> vineeth
  const [open, setOpen] = React.useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  

  // const mediaquary = useMediaQuery(theme.breakpoints.down("xs"));

  const [openuser, setOpenuser] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenuser((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenuser(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }



  

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

<<<<<<< HEAD
=======

>>>>>>> vineeth
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ bgcolor: "#FFFFFF" }}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }), color: "#4B5861" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {""}
            </Typography>
            <div>
              <Avatar />
            </div>
            <Button
              color="inherit"
              ref={anchorRef}
              aria-controls={openuser ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              className={classes.username}
              onClick={handleToggle}
            >
              <ListItemText
                primaryTypographyProps={{
                  color: "#1C2B57",
                  fontFamily: "Open Sans Bold",

                  fontSize: "16px",
                }}
                secondaryTypographyProps={{
                  color: "#4B5861",
                  fontFamily: "Open Sans Regular",

                  fontSize: "10px",
                }}
                primary={userInfo}
                secondary="THE SHIPPERS GROUP"
              />
              {openuser ? (
                <ArrowDropDownIcon className={classes.icon} />
              ) : (
                <ArrowDropUpIcon className={classes.icon} />
              )}
            </Button>
            <Popper
              open={openuser}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openuser}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem style={{color: "black"}} onClick={logoutHandler}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: " #1C2B57",
              // backgroundColor: "#2f4d7b",
              borderRight: "none",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <img src={Companylogo} alt="Companylogo"></img>
          </DrawerHeader>
          <Divider />
          <Typography variant="h6">WDLS Dashboard</Typography>
          <Menubar />
        </Drawer>
        <Main open={open}>
          <Route exact path="/home/InboundStaging" component={InboundStaging} />
          <Route exact path="/home/InboundInbound1step" component={Inbound1step} />
        </Main>
      </Box>
    </React.Fragment>
  );
}
