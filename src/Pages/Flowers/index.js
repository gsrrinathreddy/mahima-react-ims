import {
  ordered,
  restocked,
  cancelled,
} from "../../features/flower/flowerSlice";
import * as React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../../components/ItemCard";
import BakingoCake from "../../assets/flowers/flo1.jpg";
import CakeSquare from "../../assets/flowers/flo2.jpg";
import ChocolateFunfetti from "../../assets/flowers/flo3.jpg";
import Chocolate from "../../assets/flowers/flo4.jpg";
import CocomelonCake from "../../assets/flowers/flo5.jpg";
import EgglessChocolate from "../../assets/flowers/flo6.jpg";
import FondantWedding from "../../assets/flowers/flo7.jpg";
import FunfettiCupcakes from "../../assets/flowers/flo8.jpg";
import Grapeberry from "../../assets/flowers/flo9.jpg";
import NumberCakes from "../../assets/flowers/flo10.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Feedback from "../../components/Feedback";
import Box from "@mui/material/Box";
import { favs as wished } from "../../features/flower/flowerSlice";

export default function Flowers() {
  let [cakes, setCakes] = useState([]);
  let noOfCakes = useSelector((state) => state.cake.numOfCakes);
  let initialcakes = useSelector((state) => state.cake.numOfcakes);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const flowersList = [
    {
      title: "Orange Blossom",
      subheader: "Powered by Nature",
      cardMedia: BakingoCake,
      actualPrice: 100,
      discountedPrice: 75,
      rating: 4.2,
      sellingStatus: "Best Seller",
    },
    {
      title: "Stramonium",
      subheader: "April showers bring May flowers",
      cardMedia: CakeSquare,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.3,
      sellingStatus: "Premium",
    },
    {
      title: "Star Jasmine",
      subheader: "Let love grow",
      cardMedia: ChocolateFunfetti,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
    },
    {
      title: "Primrose",
      subheader: "Be nice or leaf",
      cardMedia: Chocolate,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Glory Lily",
      subheader: "Life is better with flowers",
      cardMedia: CocomelonCake,
      actualPrice: 135,
      discountedPrice: 95,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Peacock Flower",
      subheader: "Soul speaks in flowers",
      cardMedia: EgglessChocolate,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Pansy",
      subheader: "Wall flower",
      cardMedia: FondantWedding,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },

    {
      title: "Oleander",
      subheader: "Flowers bloom after rain falls",
      cardMedia: FunfettiCupcakes,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
    },
    {
      title: "Narcissus",
      subheader: "The Earth laughs in flowers",
      cardMedia: Grapeberry,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Magnolia",
      subheader: "Life is too short not to buy flowers",
      cardMedia: NumberCakes,
      actualPrice: 180,
      discountedPrice: 145,
      rating: 4.4,
      sellingStatus: "Best Seller",
    },
  ];
  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Popularity",
    "New Arrival",
    "Fast Delivery",
    "High-Low",
    "Low-High",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#FA8072" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  let ordername = "flower";
  return (
    <>
      <Box>
        <FormControl
          sx={{ m: 1, width: 300, display: "flex", justifyContent: "flex-end" }}
        >
          <InputLabel id="demo-multiple-name-label">Sort By</InputLabel>
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
      </Box>

      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {flowersList.map((flower, index) => {
          return (
            <Grid
              display="flex"
              justifyContent="center"
              xs={4}
              sm={4}
              md={4}
              pt={4}
            >
              <ItemCard
                title={flower.title}
                subheader={flower.subheader}
                cardMedia={flower.cardMedia}
                actualPrice={flower.actualPrice}
                discountedPrice={flower.discountedPrice}
                rating={flower.rating}
                sellingStatus={flower.sellingStatus}
                ordername={ordername}
                order={ordered}
                favs={wished}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{ backgroundColor: "#FF4E84" }}
        display="flex"
        justifyContent="space-between"
        pt={5}
      >
        <h4>Connect with Us</h4>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </Box>
      <Box
        sx={{ backgroundColor: "#FF4E84" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt={5}
        pb={10}
      >
        <img
          height="70px"
          width="160px"
          src="https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/hygenic.jpg"
          alt="safety"
        ></img>
        <img
          height="70px"
          width="160px"
          src="https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/purchaseprotection.jpg"
          alt="safety"
        ></img>
        <Feedback />
      </Box>
    </>
  );
}
