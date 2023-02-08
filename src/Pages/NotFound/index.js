import { Button } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Container from "@mui/material/Container";

export default function NotFound() {
  return (
    <>
      <Container>
        <h1 style={{ fontFamily: "cursive" }}>
          404: The page you are looking for isn't there
        </h1>
        <p>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using some navigation.
        </p>
        <img
          style={{
            marginTop: "50px",
            display: "inline-block",
            maxWidth: "100%",
            width: "560px",
          }}
          src="https://material-kit-react.devias.io/static/images/undraw_page_not_found_su7k.svg"
          alt="not found page"
        ></img>
      </Container>
      <Button style={{ fontFamily: "fantasy" }}>
        <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
        Go back to Home
      </Button>
    </>
  );
}
