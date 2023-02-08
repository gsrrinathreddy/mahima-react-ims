import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { useState } from "react";

export default function FavoritesPage() {
  let [active, setActive] = useState();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  console.log(favoriteList);
  const navigate = useNavigate();

  const like = () => {
    setActive(active);
  };

  return (
    <>
      <h1 style={{ fontFamily: "cursive" }}>Favorites</h1>
      <span
        style={{
          height: "4px",
          width: "55px",
          display: "block",
          margin: "8px auto 0",
          backgroundColor: "#ff3366",
        }}
      ></span>
      <Card>
        <Grid container>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ backgroundColor: "#FADBD8" }}
          >
            {favoriteList.map((item) => {
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
                    title={item.title}
                    cardMedia={item.cardMedia}
                    subheader={item.subheader}
                    discountedPrice={item.discountedPrice}
                    actualPrice={item.actualPrice}
                    sellingStatus={item.sellingStatus}
                  ></ItemCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
