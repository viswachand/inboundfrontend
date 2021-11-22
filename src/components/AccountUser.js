import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function AccountUser() {
  const [openuser, setOpenuser] = React.useState(false);

  const submitHandler = (e) => {
    setOpenuser(true);
    console.log("LOGIN");
  };
 const buttonclick = () =>{
    setOpenuser((prevOpen) => !prevOpen);
  }
  return (
    <div>
      <form onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Account Selection"
          autoFocus
          InputProps={{
            endAdornment: (
              <Button    onClick={buttonclick}>
                <InputAdornment position="end">
                  {openuser ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </InputAdornment>
              </Button>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default AccountUser;
