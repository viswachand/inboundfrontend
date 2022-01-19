import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignIn({ formData, setFormData , error}) {
  return (
    <ThemeProvider theme={theme}>
      <form noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
          error={error}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
          id="password"
          error={error}
          helperText={error ? "Invalid UserName and Password" : " "}
        />
      </form>
    </ThemeProvider>
  );
}
