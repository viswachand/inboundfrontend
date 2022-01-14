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
import {
  EquipmentSelection,
  EquipmentUpdation,
  EquipmentDeletion,
} from "../actions/equipmentActions";
import Loader from "../components/loading";
import Paper from "@mui/material/Paper";
import Login from "../components/login";
import AccountSelection from "../components/AccountUser";
import EquipmentSelections from "../components/EquipmentSelection";

function Form() {
  const [page, setPage] = useState(0);
  // const [errorMSG, setErrorMSG] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = () => {
    dispatch(login(formData.username, formData.password)).then((resp) => {
      if (resp === formData.username) {
        setPage((currPage) => currPage + 1);
      }
    });
  };

  const ac = () => {
    dispatch(EquipmentSelection());
    setPage((currPage) => currPage + 1);
  };
  const eq = () => {
    document.location.href = "/home";
  };

  const FormTitles = ["Sign Up", "AccountSelection", "EquipmentSelection"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Login formData={formData} setFormData={setFormData} error={error} />
      );
    } else if (page === 1 && userInfo) {
      return <AccountSelection formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <EquipmentSelections formData={formData} setFormData={setFormData} />
      );
    }
  };

  return (
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
            {FormTitles[page]}
          </Typography>
          <div className="body">{PageDisplay()}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              if (page === 0) {
                submitHandler();
              } else if (page === 1 && userInfo) {
                ac();
              } else if (page === 2) {
                eq();
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Form;
