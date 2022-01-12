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
import { Tally, Location } from "../actions/inboundActions";

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
  const [tallyNumber, settally] = useState("");
  const [item, setitem] = useState("");
  const [Quantity, setQty] = useState("");
  const [Typ, setType] = useState("");
  const [lot1, setLot] = useState("");
  const [lot2, setLot2] = useState("");
  const [lot3, setLot3] = useState("");
  const [LotUnitWeight, setLotUnitWeight] = useState("");
  const [InventoryType, setInventoryType] = useState("");
  const [location, setLoc] = useState("");
  const [Open, setOpen] = useState(false);
  const [LocOpen, setLocOpen] = useState(false);
  const [values, setValues] = React.useState({
    name: "",
  });

  const dispatch = useDispatch();

  const inboundData = useSelector((state) => state.inboundStaging);

  const { TallyNumber } = inboundData;

  const [ArrayData] = TallyNumber || [];

  const { data } = ArrayData ?? "";

  const [
    username,
    tallyNumbers,
    itemNumber,
    Lot1Num,
    Lot2Num,
    Lot3Num,
    LUW,
    QuantityNum,
    InventoryNum,
    errorMSG,
    errorMSG2,
  ] = data || [];

  console.log(
    username,
    tallyNumbers,
    itemNumber,
    Lot1Num,
    Lot2Num,
    Lot3Num,
    LUW,
    QuantityNum,
    InventoryNum,
    errorMSG,
    errorMSG2
  );

  const TypSubmit = (event) => {
    if (event.keyCode === 13) {
      dispatch(
        Tally(
          tallyNumber,
          item,
          lot1,
          lot2,
          lot3,
          LotUnitWeight,
          Quantity,
          InventoryType
        )
      );
      setOpen((prevOpen) => !prevOpen);
    }
  };
  const TypLot = (event) => {
    if (event.keyCode === 13) {
      dispatch(
        Tally(
          tallyNumber,
          item,
          lot1,
          lot2,
          lot3,
          LotUnitWeight,
          Quantity,
          InventoryType
        )
      );
      setLocOpen((prevOpen) => !prevOpen);
    }
  };
  const TypLoc = (event) => {
    // event.preventDefault();
    // event.stopPropagation();

    dispatch(Location(tallyNumber, location));
  };

  const { value: errorValue, type } = errorMSG2 || "";

  console.log(errorValue);

  return (
    <Box sx={{ pt: "4em" }}>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={3}>
          <Card>
            <CardHeader title="Inbound Staging" className={classes.title} />
            <CardContent>
              <div id="tallyNumber">
                <form onKeyUp={TypSubmit}>
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
                        error={errorValue == "Tally Not Found."}
                        helperText={
                          errorValue == "Tally Not Found."
                            ? "Tally Number not available"
                            : ""
                        }
                        onChange={(e) => settally(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        focused={false}
                        variant="standard"
                        label="Item:"
                        error={errorValue == "Item Not Valid."}
                        helperText={
                          errorValue == "Item Not Valid."
                            ? "Item Number not available"
                            : ""
                        }
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
                        error={errorValue == "Quantity Not Valid."}
                        helperText={
                          errorValue == "Quantity Not Valid."
                            ? "Enter Quantity"
                            : ""
                        }
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
                </form>
              </div>

              <div id="lot">
                <form onKeyUp={TypLot}>
                  {errorValue !== "Quantity Not Valid." &&
                  errorValue !== "Item Not Valid." &&
                  errorValue !== "Tally Not Found." &&
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
                          error={errorValue == "Lot Not Valid."}
                          helperText={
                            errorValue == "Lot Not Valid."
                              ? "Enter The Lot Number"
                              : ""
                          }
                          onChange={(e) => setLot(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          onChange={(e) => setLot2(e.target.value)}
                          error
                          variant="standard"
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          onChange={(e) => setLot3(e.target.value)}
                          error
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                </form>
              </div>

              <div id="location" style={{ marginTop: "9px" }}>
                <form onClick={TypLoc}>
                  {errorValue !== "Lot Not Valid." && LocOpen ? (
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
                          label="Location:"
                          onChange={(e) => setLoc(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                </form>
              </div>

              <CardActions className={classes.options}>
                <Options />
                <br />
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
}
