import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Login from "./screens/login";
import Home from "./screens/home2";
import InboundStaging from "./components/InboundStaging"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <switch>
              <Route  path="/home" component={Home} />
              <Route exact path="/" component={Login} />
              {/* <Route  path="/InboundStaging" component={InboundStaging} /> */}
            </switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
