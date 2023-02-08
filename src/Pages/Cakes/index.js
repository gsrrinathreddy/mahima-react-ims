import { ordered, restocked, cancelled } from "../../features/cake/cakeSlice";
import * as React from "react";
import { Box, Button } from "@mui/material";
import CakeView from "../../features/cake/cakeView";
import { useSelector } from "react-redux";
import ItemCard from "../../components/ItemCard";
import BakingoCake from "../../assets/cakes/cake21.jpg";
import CakeSquare from "../../assets/cakes/cake22.jpg";
import ChocolateFunfetti from "../../assets/cakes/cake28.jpg";
import Chocolate from "../../assets/cakes/cake24.jpg";
import CocomelonCake from "../../assets/cakes/cake25.jpg";
import EgglessChocolate from "../../assets/cakes/cake26.jpg";
import FondantWedding from "../../assets/cakes/cake27.jpg";
import FunfettiCupcakes from "../../assets/cakes/cake8.webp";
import Grapeberry from "../../assets/cakes/cake9.jpg";
import NumberCakes from "../../assets/cakes/cake10.jpg";
import RainbowCake from "../../assets/cakes/cake11.jpg";
import SnickerFuse from "../../assets/cakes/cake12.jpg";
import SpecialValsad from "../../assets/cakes/cake19.jpg";
import VeganStrawberry from "../../assets/cakes/cake14.jpg";
import WeddingCakes from "../../assets/cakes/cake15.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { favs as wished } from "../../features/cake/cakeSlice";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Feedback from "../../components/Feedback";
import StepperIcon from "../../components/Stepper";

export default function Cakes() {
  let [cakes, setCakes] = useState([]);
  let noOfCakes = useSelector((state) => state.cake.numOfCakes);
  let initialcakes = useSelector((state) => state.cake.numOfcakes);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const favlist = useSelector((state) => state.favorite.favoriteList);
  console.log("favlist in cake", favlist);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const cakesList = [
    {
      title: "Bakingo Cake",
      subheader: "Super Cake",
      cardMedia: BakingoCake,
      actualPrice: 100,
      discountedPrice: 75,
      rating: 4.2,
      sellingStatus: "Best Seller",
      genre: "Eggless Cake",
    },
    {
      title: "Cake Square",
      subheader: "Made from Heart",
      cardMedia: CakeSquare,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.3,
      sellingStatus: "Premium",
      genre: "Sugar Free",
    },
    {
      title: "Chocolate Funfetti",
      subheader: "Have Fun of Chocolate Flavor",
      cardMedia: ChocolateFunfetti,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
      genre: "Customized",
    },
    {
      title: "Chocolate Cake",
      subheader: "Chocolate in Cake",
      cardMedia: Chocolate,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Cocomelon Cake",
      subheader: "Super melon cake",
      cardMedia: CocomelonCake,
      actualPrice: 135,
      discountedPrice: 95,
      rating: 4.8,
      sellingStatus: "Best Seller",
      genre: "Cheese Cake",
    },
    {
      title: "Eggless Chocolate Cake",
      subheader: "Pure Vegeterian Cake",
      cardMedia: EgglessChocolate,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
      genre: "Fruit Cake",
    },
    {
      title: "Eggless Chocolate Cake",
      subheader: "Pure Vegeterian Cake",
      cardMedia: FondantWedding,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },

    {
      title: "Chocolate Funfetti",
      subheader: "Have Fun Filled with Chocolate",
      cardMedia: FunfettiCupcakes,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
      genre: "Eggless Cake",
    },
    {
      title: "Chocolate Cake",
      subheader: "Pure Vegeterian Cake",
      cardMedia: Grapeberry,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Fondent Wedding Cake",
      subheader: "Have the Fun Cup Cakes",
      cardMedia: NumberCakes,
      actualPrice: 180,
      discountedPrice: 145,
      rating: 4.4,
      sellingStatus: "Best Seller",
      genre: "Sugar Free",
    },
    {
      title: "Fondent Wedding Cake",
      subheader: "Have the Fun Cup Cakes",
      cardMedia: RainbowCake,
      actualPrice: 180,
      discountedPrice: 145,
      rating: 4.4,
      sellingStatus: "Best Seller",
    },
    {
      title: "Number Cakes Recipe",
      subheader: "Keep Counting the numbers",
      cardMedia: NumberCakes,
      actualPrice: 230,
      discountedPrice: 205,
      rating: 4.1,
      sellingStatus: "Best Seller",
    },

    {
      title: "Snicker Fuse Chocolate Cake",
      subheader:
        "Now you have your Favourite snicker chocolate in the cake form",
      cardMedia: SnickerFuse,
      actualPrice: 120,
      discountedPrice: 85,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Special Valsad Cake",
      subheader: "Gift it to your Loved ones",
      cardMedia: SpecialValsad,
      actualPrice: 200,
      discountedPrice: 175,
      rating: 4.9,
      sellingStatus: "Best Seller",
    },
    {
      title: "Vegan Strawberry Cake",
      subheader: "Now its Time for Strawberries",
      cardMedia: VeganStrawberry,
      actualPrice: 230,
      discountedPrice: 215,
      rating: 4.2,
      sellingStatus: "Best Seller",
    },
    {
      title: "Wedding Cake",
      subheader: "Wedding.... with the cakes",
      cardMedia: WeddingCakes,
      actualPrice: 100,
      discountedPrice: 85,
      rating: 4.7,
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

  let ordername = "cake";

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
        {cakesList.map((cake, index) => {
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
                title={cake.title}
                subheader={cake.subheader}
                cardMedia={cake.cardMedia}
                actualPrice={cake.actualPrice}
                discountedPrice={cake.discountedPrice}
                rating={cake.rating}
                sellingStatus={cake.sellingStatus}
                order={ordered}
                color1={cake.color1}
                favs={wished}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{ backgroundColor: "#FF4E84" }}
        direction="row"
        display="flex"
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
