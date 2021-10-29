import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Login from "./screens/login";
import Home from "./screens/home2";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Login} />
            </switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
