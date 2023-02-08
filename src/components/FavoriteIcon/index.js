import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function FavoriteIcon(props) {
  let badgeContent = props.badgeContent;

  return (
    <IconButton aria-label="favorites">
      <StyledBadge badgeContent={badgeContent} color="secondary">
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}
