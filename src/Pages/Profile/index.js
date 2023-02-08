import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import * as React from "react";

const profiles = ["Software Developer", "React", "Smart-IMS"];
const names = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Kelly Snyder",
  "Burma",
  "Burundi",
  "India",
  "Indonesia",
  "Iran",
  "Japan",
  "Malaysia",
  "Myanmar",
  "Nepal",
  "New York",
  "New Zealand",
  "USA",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Profile() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <h2 style={{ fontFamily: "cursive" }}>Account</h2>
      <Container maxWidth="sm">
        {/* <Skeleton variant="rectangular"></Skeleton> */}
        <Card
          style={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "cornsilk",
            margin: "18px",
          }}
        >
          <Avatar
            src=""
            sx={{
              m: 4,
              bgcolor: "purple",
              justifyContent: "center",
            }}
          >
            <InsertEmoticonIcon />
          </Avatar>
          <h4>Mahima Runda</h4>
          <span
            style={{
              height: "4px",
              width: "55px",
              display: "block",
              margin: "8px auto 0",
              backgroundColor: "#ff3366",
            }}
          ></span>
          <Typography gutterBottom>{profiles.join(", ")}</Typography>
          <hr
            style={{
              height: "2px",
              borderWidth: 0,
              color: "cornflowerblue",
              backgroundColor: "cornflowerblue",
            }}
          />
          <Button variant="text">Upload picture</Button>
        </Card>
        <Container maxWidth="md">
          <Card
            style={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "ghostwhite",
              margin: "18px",
            }}
          >
            <h4>Profile</h4>
            <Typography gutterBottom>The information can be added</Typography>
            <hr></hr>
            <TextField
              label="First Name*"
              variant="filled"
              helperText="Please specify the first name"
              color="success"
              focused
            />
            <TextField
              label="Last Name*"
              variant="filled"
              color="success"
              focused
            />
            <FormControl variant="standard">
              <InputLabel
                style={{ margin: "9px" }}
                shrink
                htmlFor="bootstrap-input"
              >
                E-mail*
              </InputLabel>
              <br />
              <BootstrapInput placeholder="Write your email address" />
            </FormControl>
            <TextField
              label="Phone Number"
              variant="filled"
              color="success"
              focused
            />
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Country</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>
          <Button
            style={{ margin: "18px", fontFamily: "cursive" }}
            variant="contained"
          >
            save details
          </Button>
        </Container>
      </Container>
    </>
  );
}
