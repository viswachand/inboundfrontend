import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Options from "../components/optionsButton";
import { useDispatch, useSelector } from "react-redux";
import { Tally } from "../actions/inboundActions";

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
  options: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function InboundStaging() {
  const classes = useStyles();
  const [tally, settally] = useState("");
  const [item, setitem] = useState("");
  const [Qty, setQty] = useState("");
  const [Typ, setType] = useState("");
  const [lot, setLot] = useState("");
  const [loc, setLoc] = useState("");
  const [Open, setOpen] = useState(false);
  const [values, setValues] = React.useState({
    name: "",
  });

  const dispatch = useDispatch();

  const inboundData = useSelector((state) => state.inboundStaging);

  const { TallyNumber } = inboundData;

  const [data, demotally, ...demodata] = TallyNumber || [];

  const { value: Name } = data ?? "";



  const Submit = (event) => {
    if (event.keyCode === 13) {
      dispatch(Tally(tally, item, Qty, Typ, lot, loc));
      setOpen((prevOpen) => !prevOpen);
    }
  };

  return (
    <div>
      <Box sx={{ pt: "4em" }}>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={3}>
            <Card>
              <CardHeader title="Inbound Staging" className={classes.title} />
              <CardContent>
                <div>
                  <form onKeyDown={(e) => Submit(e)}>
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <TextField
                          fullWidth
                          focused={false}
                          variant="standard"
                          label="TallyNumber:"
                          // error
                          // helperText = "Tally Number not available"
                          onChange={(e) => settally(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          focused={false}
                          variant="standard"
                          label="Item:"
                          onChange={(e) => setitem(e.target.value)}
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
                          style={{ width: "9rem" }}
                          focused={false}
                          variant="standard"
                          label="Quantity:"
                          onChange={(e) => setQty(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          style={{ width: "3rem" }}
                          focused={false}
                          variant="standard"
                          label="Type:"
                          onChange={(e) => setType(e.target.value)}
                        />
                      </Grid>
                    </Grid>

                    {TallyNumber !== "Tally Not Found." &&
                    TallyNumber !== "Item Not Valid." &&
                    Open ? (
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
                            onChange={(e) => setLoc(e.target.value)}
                          />
                        </Grid>
                        <br />
                        <CardActions className={classes.options}>
                          <Options />

                          <br />
                        </CardActions>
                      </Grid>
                    ) : (
                      <CardActions className={classes.options}>
                        <Options />

                        <br />
                      </CardActions>
                    )}
                  </form>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} ></Grid>
        </Grid>
      </Box>
    </div>
  );
}
