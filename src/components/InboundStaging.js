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
import { Tally, Location, Save } from "../actions/inboundActions";
import Snackbar from "../components/snackbar";

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
  const [Tallyerror, setTallyerror] = useState(false);
  const [Itemerror, setItemerror] = useState(false);
  const [Qtyerror, setQtyerror] = useState(false);
  const [Loterror, setLoterror] = useState(false);
  const [Locerror, setLocerror] = useState(false);
  const [ErrorMsg, setErrorMSG] = useState(false);
  const [values, setValues] = React.useState({
    name: "",
  });

 

  const dispatch = useDispatch();

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
      ).then((resp) => {
        const [ArrayData] = resp || [];
        const { data } = ArrayData || {};


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
        ] = data;

        const { value: errorValue } = errorMSG2 || "";

        if (errorValue == "Tally Not Found.") {
          setTallyerror((prevOpen) => !prevOpen);
        } else {
          setTallyerror(false);
        }

        if (errorValue == "Item Not Valid.") {
          setItemerror((prevOpen) => !prevOpen);
        } else {
          setItemerror(false);
        }

        if (errorValue == "Quantity Not Valid.") {
          setQtyerror((prevOpen) => !prevOpen);
        } else {
          setQtyerror(false);
        }

        if (
          errorValue !== "Quantity Not Valid." &&
          errorValue !== "Item Not Valid." &&
          errorValue !== "Tally Not Found."
        ) {
          setOpen((prevOpen) => !prevOpen);
        }
      });
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
      ).then((resp) => {
        const [ArrayData] = resp;

        const { data } = ArrayData || {};

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
        ] = data;

        const { value: errorValue } = errorMSG2 || "";

        if (errorValue === "Lot Not Valid.") {
          setLoterror((prevOpen) => !prevOpen);
        } else {
          setLoterror(false);
        }

        if (
          errorValue !== "Quantity Not Valid." &&
          errorValue !== "Item Not Valid." &&
          errorValue !== "Tally Not Found." &&
          errorValue !== "Lot Not Valid."
        ) {
          setLocOpen((prevOpen) => !prevOpen);
        }
      });
    }
  };

  const TypLoc = () => {
    dispatch(Location(tallyNumber, location)).then((resp) => {
      const [ArrayData] = resp;

      const { data } = ArrayData || {};

      const [username, tallyNumbers, itemNumber, errorMSG, errorMSG2] = data;

      const { value: errorValue } = errorMSG2 || "";

      if (errorValue === "Location Not Valid.") {
        setLocerror((prevOpen) => !prevOpen);
      } else {
        setLocerror(false);
      }

      if (errorValue !== "Location Not Valid.") {
        dispatch(
          Save(
            tallyNumber,
            item,
            lot1,
            lot2,
            lot3,
            location,
            LotUnitWeight,
            Quantity,
            InventoryType
          )
        ).then((resp) => {
          const [ArrayData] = resp;

          const { data } = ArrayData || {};

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
          ] = data;

          const { value: errorValue } = errorMSG2 || "";

         

          if (Locerror) {
            setErrorMSG((prevOpen) => !prevOpen);
          } else {
            setErrorMSG(false);
          }
        });
      }
    });
  };

  return (
    <Box sx={{ pt: "4em" }}>
      <Grid container>
        <Grid item md={5} sm={5} xs={1}></Grid>
        <Grid item md={3} sm={5} xs={10}>
          <Card>
            <CardHeader title="Inbound Staging" className={classes.title} />
            <CardContent>
              <div>
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
                        error={Tallyerror}
                        helperText={
                          Tallyerror ? "Tally Number not available" : ""
                        }
                        onChange={(e) => settally(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        focused={false}
                        variant="standard"
                        label="Item:"
                        error={Itemerror}
                        helperText={
                          Itemerror ? "Item Number not available" : ""
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
                        error={Qtyerror}
                        helperText={Qtyerror ? "Enter Quantity" : ""}
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

              <div>
                <form onKeyUp={TypLot}>
                  {Open ? (
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
                          error={Loterror}
                          helperText={Loterror ? "Lot Not Valid." : ""}
                          onChange={(e) => setLot(e.target.value)}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          onChange={(e) => setLot2(e.target.value)}
                          error={Loterror}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          onChange={(e) => setLot3(e.target.value)}
                          error={Loterror}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                </form>
              </div>

              <div style={{ marginTop: "9px", marginBottom: "9px" }}>
                {LocOpen ? (
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
                        error={Locerror}
                        helperText={Locerror ? "Location Not Valid" : ""}
                        label="Location:"
                        onChange={(e) => setLoc(e.target.value)}
                        onKeyDown={() => TypLoc()}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
              </div>

              <Snackbar ErrorMsg={ErrorMsg}></Snackbar>

              <CardActions className={classes.options}>
                <Options />
                <br />
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={2} xs={1}></Grid>
      </Grid>
    </Box>
  );
}
