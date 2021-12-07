import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Loader from "../components/loading";
import Paper from "@mui/material/Paper";
import Account from "../components/AccountUser";

const theme = createTheme();

export default function SignIn({ location, history }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const run = () => {
    if (userInfo) {
      console.log(userInfo);
      setPage((page) => page + 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    run();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ paddingTop: "100px" }}>
        <Paper
          sx={{
            padding: "5px 25px 5px 25px",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "ash" }}>
              {loading ? <Loader /> : <LockOutlinedIcon />}
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {page === 1 && (
              <form noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  error={error}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  error={error}
                  helperText={error ? "Invalid UserName and Password" : " "}
                />

                <Button
                  onClick={submitHandler}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Next
                </Button>
              </form>
            )}
            {page === 2 && <Account />}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
