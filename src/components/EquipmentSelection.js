import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AccountSelection, AccountUpdation } from "../actions/AccountActions";
import { USER_LOGIN_REQUEST } from "../constants/userConstants";

const theme = createTheme();

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: "18rem",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setoptions] = React.useState("");
  const [personName, setPersonName] = React.useState([]);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.accountInfo);

  const { loading, error, userInfo } = userLogin;


  console.log(personName)

  // const Arraydata = userLogin.AccountData ;

  // var Arraydata = [];

  // Arraydata.push(userLogin && userLogin.AccountData);

  // console.log(Arraydata);

  // const { E1USER, E1NAME, E1STOR, E1SSFX, E1BLDG, E1STAT } = DemoData || [];

  // console.log(DemoData);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(AccountSelection());
  };
  const handleClose = () => {
    dispatch(AccountUpdation());

    setAnchorEl(null);
  };

  const onTargetIdentityChange = (event) => {
    setPersonName(event.target.value); // its undefined always
    console.log("work")
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <form noValidate sx={{ mt: 1 }}>
          <br />
          <TextField
            margin="normal"
            required
            fullWidth
            value={personName}
            label="Equipment Selection"
            autoComplete="Equipment Selection"
            autoFocus
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // endIcon={<ArrowDropDownIcon />}
            InputProps={{
              endAdornment: (
                <Button  onClick={handleClose}>
                  <InputAdornment position="end">
                    <ArrowDropDownIcon />
                  </InputAdornment>
                </Button>
              ),
            }}
          ></TextField>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onChange={onTargetIdentityChange}
            value={personName}
          >
            {userLogin.AccountData?.length > 0
              ? userLogin.AccountData.map((item, key) => (
                  <MenuItem   
                    
                    disableRipple
                  >
                    {item.E1NAME}
                  </MenuItem>
                ))
              : " "}
          </StyledMenu>
        </form>
      </ThemeProvider>
    </div>
  );
}
