import { Container } from "@mui/system";
import { Card } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import { pink } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

export default function SettingsPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container maxWidth="sm">
        <h3>Settings</h3>
        <span
          style={{
            height: "4px",
            width: "55px",
            display: "block",
            margin: "8px auto 0",
            backgroundColor: "#ff3366",
          }}
        ></span>
        <Card style={{ padding: "10px", backgroundColor: "bisque" }}>
          <h5>
            {" "}
            <NotificationsNoneOutlinedIcon />
            Notifications
          </h5>
          <p>Manage the notifications</p>
          <hr></hr>
          <h6>Notifications</h6>
          {/* <Checkbox defaultChecked />
          <Checkbox placeholder="super" defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" /> */}
          {/* <Checkbox defaultChecked color="default" /> */}
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="secondary" />}
            label="Email"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="success" />}
            label="Push Notifications"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="default" />}
            label="Text messages"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
            }
            label="Phone Calls"
            labelPlacement="end"
          />
          <h6>Messages</h6>
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="success" />}
            label="Email"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="secondary" />}
            label="PushNotifications"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox defaultChecked color="default" />}
            label="Phone Calls"
            labelPlacement="end"
          />
          <hr></hr>
          <Button style={{ fontFamily: "cursive" }} variant="contained">
            save
          </Button>
        </Card>
        <Card
          style={{
            padding: "10px",
            backgroundColor: "ghostwhite",
            margin: "18px",
          }}
        >
          <h5>Password</h5>
          <p>Update your Password</p>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <p>Confirm your Password</p>
          <InputLabel htmlFor="filled-adornment-password"></InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <hr></hr>
          <Button style={{ fontFamily: "cursive" }} variant="contained">
            Update
          </Button>
        </Card>
      </Container>
    </>
  );
}
