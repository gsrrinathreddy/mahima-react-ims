import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ordered as cakeOrdered} from '../../features/cake/cakeSlice';
import CartComponent from '../CartComponent';
import cakeList from '../../Pages/Cakes'
import InstagramIcon from '@mui/icons-material/Instagram';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { ordered as chocolateOrdered} from '../../features/chocolates/chocolateSlice';
import {ordered as flowerOrdered} from '../../features/flower/flowerSlice';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/system';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#f52530',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  
export default function ItemCard(props) {
    let title = props.title
    let subheader = props.subheader
    let cardMedia = props.cardMedia
    let actualPrice = props.actualPrice
    let discountedPrice = props.discountedPrice
    let rating = props.rating
    let sellingStatus = props.sellingStatus
    let ordername = props.ordername
    let orderPlaced = props.order
    


  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  let [qty, setQty] = useState(0);
  let [count, setCount] = useState(0)

      
  let params = {
    title:title,
    actualPrice:actualPrice,
    discountedPrice:discountedPrice,
    qty:parseInt(qty)
    
}
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 360, fontFamily:'Impact' }} style={{fontWeight:'bold', fontFamily:'Impact'}}>
      <CardHeader
        avatar={
          <CakeIcon/>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVertIcon />
          </IconButton>
        }
        title={title} 
        subheader={subheader}
        
      />
      <CardMedia >
         <Box sx={{ position: "relative" }}>
            <CardMedia sx={{ height: "250px" }} 
            component="img" image={cardMedia}/>
             <Box sx={{position: "absolute",alignItems:'flex-end', color: "white",top: 10,left: "83%",
              transform: "translateX(-51%)",}}>
                <Stack spacing={2} >
                     <Chip label={sellingStatus}
                      color='success'/>
                     </Stack>
                     </Box>
                     </Box>
                     </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{textDecoration:'line-through'}}>
          Actual Price:{actualPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Discounted Price:  <CurrencyRupeeIcon/>{discountedPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Rating: {rating}  <span><Rating name="customized-10" defaultValue={1} max={1} /></span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites" onClick={()=>setCount(count + 1)}>
           Likes{count}
         <FavoriteIcon/>
        </IconButton> */}
        <StyledRating
        name="customized-color"
        defaultValue={0}
        precision={1}
        icon={<FavoriteIcon />}
        max={1}
      />
       <br/>
        <TextField
          label="Quantity"
          id="standard-size-normal"
          defaultValue="1"
          sx={{width:'5ch'}}
          value={qty}
          onChange={(e)=>setQty(e.currentTarget.value)}
          variant="standard"
        />
        <Button style={{backgroundColor: '#262261', color:'#fff'}} onClick={()=>{
            if(ordername == 'cake'){
                dispatch(orderPlaced(params))
            }else if(ordername == 'chocolate'){
                dispatch(chocolateOrdered(qty))
            }else if(ordername == 'flower'){
                dispatch(flowerOrdered(qty))
            }
        }}
           
            >Add</Button>
        <CartComponent badgeContent = {qty}/>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button style={{backgroundColor: '#db1c5d', color:'#fff'}}>BUY NOW</Button>
      </CardActions>

    </Card>
    </>
  );
  
}