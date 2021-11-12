import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Options from "../components/optionsButton";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    backgroundColor: "#2F407B",
    color: "#FFFFFF",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    borderBottomColor: "#168900",
    borderBottomWidth: "7px",
    borderBottomStyle: "solid",
  },
  options:{
      display:"flex",
      justifyContent:"center",
  }
}));

export default function InboundStaging() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ pt: "4em" }}>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={2.5}>
            <Card>
              <CardHeader title="Inbound Staging" className={classes.title} />
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <TextField
                      focused={false}
                      variant="standard"
                      label="TallyNumber:"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      focused={false}
                      variant="standard"
                      label="Item:"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={3}
                  sx={{ p: "8px" }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <TextField
                      style={{ width: "7rem" }}
                      focused={false}
                      variant="standard"
                      label="Quantity:"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      style={{ width: "4rem" }}
                      focused={false}
                      variant="standard"
                      label="Type:"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <TextField
                      focused={false}
                      variant="standard"
                      label="Lot:"
                    />
                  </Grid>
                  <Grid item>
                    <TextField focused={false} variant="standard" />
                  </Grid>
                  <Grid item>
                    <TextField focused={false} variant="standard" />
                  </Grid>
                  <Grid item>
                    <TextField
                      focused={false}
                      variant="standard"
                      label="Location:"
                    />
                  </Grid>
                </Grid>
                
              </CardContent>
              <CardActions className={classes.options}>
                <Options />

               <br/>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
