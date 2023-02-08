import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import CakeIcon from "@mui/icons-material/Cake";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import CartComponent from "../CartComponent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#f52530",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HOCChip1(props) {
  return <h5 style={{ backgroundColor: "#76ff03" }}>{props.label}</h5>;
}

export default function ItemCard(props) {
  let title = props.title;
  let subheader = props.subheader;
  let cardMedia = props.cardMedia;
  let actualPrice = props.actualPrice;
  let discountedPrice = props.discountedPrice;
  let rating = props.rating;
  let sellingStatus = props.sellingStatus;
  let ordername = props.ordername;
  let orderPlaced = props.order;
  let color1 = props.color1;
  let favs = props.favs;

  let [active, setActive] = useState();
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [qty, setQty] = useState(1);
  let [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [openLike, setOpenLike] = React.useState(false);
  const [openDisLike, setOpenDisLike] = React.useState(false);
  const [openFav, setOpenFav] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleFav = () => {
    setOpenFav(true);
  };

  const handleClickLike = () => {
    setOpenLike(true);
  };
  const handleClickDisLike = () => {
    setOpenDisLike(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenLike(false);
    setOpenDisLike(false);
    setOpenFav(false);
  };

  function HOC(props) {
    return <h5 style={{ backgroundColor: { color1 } }}>{props.label}</h5>;
  }

  let params = {
    title: title,
    actualPrice: actualPrice,
    discountedPrice: discountedPrice,
    qty: parseInt(qty),
  };

  let favourite = {
    title: title,
    actualPrice: actualPrice,
    discountedPrice: discountedPrice,
    cardMedia: cardMedia,
    sellingStatus: sellingStatus,
    qty: parseInt(qty),
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const like = () => {
    setActive(!active);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 360, fontFamily: "Impact" }}
        style={{ fontWeight: "bold", fontFamily: "Impact" }}
      >
        <CardHeader
          avatar={<CakeIcon />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={subheader}
        />
        <CardMedia>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              sx={{ height: "250px" }}
              component="img"
              image={cardMedia}
            />
            <Box
              sx={{
                position: "absolute",
                alignItems: "flex-end",
                color: "white",
                top: 10,
                left: "83%",
                transform: "translateX(-51%)",
              }}
            >
              <Stack spacing={2}>
                <Chip label={sellingStatus} color="success" />
              </Stack>
            </Box>
          </Box>
        </CardMedia>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textDecoration: "line-through" }}
          >
            Actual Price:{actualPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discounted Price: <CurrencyRupeeIcon />
            {discountedPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}{" "}
            <span>
              <Rating defaultValue={1} max={1} />
            </span>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              dispatch(favs(favourite));
            }}
          >
            <FavoriteIcon
              onClick={like}
              sx={{ color: active ? "red" : "grey" }}

              // onClick={like}
              // sx={{ color: active ? "red" : "grey" }}
            />
          </IconButton>
          {/* <StyledRating
            onClick={() => {
              dispatch(favs(params));
            }}
            name="customized-color"
            defaultValue={0}
            precision={1}
            icon={<FavoriteIcon />}
            max={1}
          /> */}
          <br />
          <TextField
            label="Qty"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            min="0"
            defaultValue="1"
            sx={{ width: "5ch" }}
            value={qty}
            onChange={(e) => setQty(e.currentTarget.value)}
            variant="standard"
          />
          <Button
            style={{ backgroundColor: "#262261", color: "#fff" }}
            onClick={() => {
              handleClick();
              if (qty > 0) dispatch(orderPlaced(params));

              //  dispatch(chocolateOrdered(params))

              //  dispatch(flowerOrdered(params))
            }}
          >
            Add
          </Button>
          <CartComponent badgeContent={qty} />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button
            onClick={() => navigate("/Checkout")}
            style={{ backgroundColor: "#db1c5d", color: "#fff" }}
          >
            BUY NOW
          </Button>
          <br />
          <ThumbUpAltIcon
            onClick={() => {
              handleClickLike();
            }}
          />
          <ThumbDownIcon
            onClick={() => {
              handleClickDisLike();
            }}
          />

          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {qty} items are added in your cart!!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openLike}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="primary"
              sx={{ width: "100%" }}
            >
              You liked {title}!!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openDisLike}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              You disliked {title}!!!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openFav}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              {title} is added to your Favorite List**
            </Alert>
          </Snackbar>
        </CardActions>
      </Card>
    </>
  );
}
