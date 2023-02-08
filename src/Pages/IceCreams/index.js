import { ordered, restocked, cancelled } from "../../features/cake/cakeSlice";
import * as React from "react";
import { Box, Button } from "@mui/material";
import CakeView from "../../features/cake/cakeView";
import { useSelector } from "react-redux";
import ItemCard from "../../components/ItemCard";
import BakingoCake from "../../assets/icecreams/ice1.jpg";
import CakeSquare from "../../assets/icecreams/ice2.jpg";
import ChocolateFunfetti from "../../assets/icecreams/ice3.jpg";
import Chocolate from "../../assets/icecreams/ice4.jpg";
import CocomelonCake from "../../assets/icecreams/ice5.jpg";
import EgglessChocolate from "../../assets/icecreams/ice6.jpg";
import FondantWedding from "../../assets/icecreams/ice7.jpg";
import FunfettiCupcakes from "../../assets/icecreams/ice8.jpg";
import Grapeberry from "../../assets/icecreams/ice9.jpg";
import NumberCakes from "../../assets/icecreams/ice10.jpg";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Feedback from "../../components/Feedback";
import { favs as wished } from "../../features/icecream/icecreamSlice";

export default function Cakes() {
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
  const cakesList = [
    {
      title: "Gelato",
      subheader: "Ice cream is worth melting for",
      cardMedia: BakingoCake,
      actualPrice: 100,
      discountedPrice: 75,
      rating: 4.2,
      sellingStatus: "Best Seller",
    },
    {
      title: "Kulfi",
      subheader: "All you need is ice cream",
      cardMedia: CakeSquare,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.3,
      sellingStatus: "Premium",
    },
    {
      title: "Sherbet",
      subheader: "Brain freeze!",
      cardMedia: ChocolateFunfetti,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
    },
    {
      title: "Sorbet",
      subheader: "Here’s the scoop!",
      cardMedia: Chocolate,
      actualPrice: 145,
      discountedPrice: 125,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Frozen Yogurt",
      subheader: "It’s Ice cream time",
      cardMedia: CocomelonCake,
      actualPrice: 135,
      discountedPrice: 95,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Soft Serve",
      subheader: "Life without ice cream would be darkness and chaos",
      cardMedia: EgglessChocolate,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Philadelphia Ice Cream",
      subheader: " It’s all about the flavor",
      cardMedia: FondantWedding,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },

    {
      title: "Rolled Ice Cream",
      subheader: " Scream for ice cream",
      cardMedia: FunfettiCupcakes,
      actualPrice: 200,
      discountedPrice: 155,
      rating: 4.5,
      sellingStatus: "Out of Stock",
    },
    {
      title: "Snow Cream",
      subheader: "Follow me to the ice cream",
      cardMedia: Grapeberry,
      actualPrice: 120,
      discountedPrice: 105,
      rating: 3.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Italian Ice",
      subheader: "Cone-gratulations",
      cardMedia: NumberCakes,
      actualPrice: 180,
      discountedPrice: 145,
      rating: 4.4,
      sellingStatus: "Best Seller",
    },

    {
      title: "Dondurma",
      subheader: "Enjoy the chilly, little things",
      cardMedia: NumberCakes,
      actualPrice: 230,
      discountedPrice: 205,
      rating: 4.1,
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
