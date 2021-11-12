import { createTheme } from "@mui/material/styles";

const primary = "#2F407B";
const secondary = "#2F407B";
const common = "#2F407B,";

export default createTheme({
  shadows: Array(25).fill("none"),

  palette: {
    common: {
      blue: `${primary}`,
    },
    primary: {
      main: `${primary}`,
    },
    secondary: {
      main: `${secondary}`,
    },
  },

  typography: {
    body1: {
      // fontSize: "14px",
      // color: "#FFFFFF",
      // fontWeight: "500",
      // fontFamily: "Open Sans",
      color: "#FFFFFF",
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "14px",
    },

    h6: {
      padding: "15px 25px 5px 25px ",
      fontSize: "15px",
      color: "rgb(238, 238, 238)",
      fontWeight: "400",
      fontFamily: "Open Sans",
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          border: "1px solid #1C2B57",
          padding: 4,
          borderRadius: "4px",
        },
        input: {
          height: "1rem",
          font: "revert",
          width:"12rem"
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          transform: "none",
        },
        animated: {
          transform: "none",
        },
        shrink: {
          transform: "none",
        },
      
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color:"#3C4953",
          fontFamily: "Open Sans",
          fontWeight:"500",
          fontSize: "14px",
          paddingBottom:"10px",
          lineHeight:"10px"
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        underline: {
          "&&&:before": {
            borderBottom: "none",
          },
          "&&:after": {
            borderBottom: "none",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#AAAAAA",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: "0px",
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "transparent", //bar color
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "transparent",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "transparent",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
