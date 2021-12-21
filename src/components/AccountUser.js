import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { AccountSelection } from "../actions/AccountActions";

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
    minWidth: "21.5rem",
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
  const open = Boolean(anchorEl);

  var data;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.accountInfo);

  const { AccountData } = userLogin;

  if (AccountData != null && AccountData.length > 0) {
    for (let i = 0; i < AccountData.length; i++) {
      data = AccountData[i].EONAME;
      var store = AccountData[i].EOSTOR;
      console.log(data);
    }
  }

  // EOUSER, EONAME, EOSTOR, EOSSFX, EOBLDG, EOSTAT

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(AccountSelection());
   
  };
  const handleClose = () => {
    document.location.href = "/home";
    setAnchorEl(null);
  };

  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        value={options}
        label="Account Selection"
        autoComplete="Account Selection"
        autoFocus
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // endIcon={<ArrowDropDownIcon />}
        InputProps={{
          endAdornment: (
            <Button>
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
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          {` ${data} --- store : ${store}`}
        </MenuItem>
      </StyledMenu>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        SUBMIT
      </Button>
    </div>
  );
}
