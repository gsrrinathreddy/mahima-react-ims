import { Box } from '@mui/system';
import * as React from 'react';
import {useSelector} from 'react-redux';
import ItemCard from '../../components/ItemCard';
import BakingoCake from '../../assets/chocolates/choco8.jpg'
import CakeSquare from '../../assets/chocolates/choco13.jpg'
import ChocolateFunfetti from '../../assets/chocolates/choco9.jpg'
import ChocolateDear from '../../assets/chocolates/choco14.jpg'
import CocomelonCake from '../../assets/chocolates/choco15.jpg'
import EgglessChocolate from '../../assets/chocolates/choco16.png'
import FondantWedding from '../../assets/chocolates/choco5.png'
import FunfettiCupcakes from '../../assets/chocolates/choco7.jpg'
import Grapeberry from '../../assets/chocolates/choco3.png'
import NumberCakes from '../../assets/chocolates/choco2.png'
import RainbowCake from '../../assets/chocolates/choco6.png'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Feedback from '../../components/Feedback';



export default function Chocolate(){
    
    let [cakes, setCakes] = useState([])
    let noOfCakes = useSelector((state)=> state.cake.numOfCakes)
    let initialcakes=useSelector((state)=>state.cake.numOfcakes);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const chocolatesList = [
        {
            title:"Bakingo Cake",
            subheader:"Super Chocolate",
            cardMedia:BakingoCake,
            actualPrice:100,
            discountedPrice:75,
            rating:4.2,
            sellingStatus:"Best Seller"

        },
        {
            title:"Cake Square",
            subheader:"Made from Heart",
            cardMedia:CakeSquare,
            actualPrice:145,
            discountedPrice:125,
            rating:4.3,
            sellingStatus:"Premium"

        },
        {
            title:"Chocolate Funfetti",
            subheader:"Have Fun of Chocolate Flavor",
            cardMedia:ChocolateFunfetti,
            actualPrice:200,
            discountedPrice:155,
            rating:4.5,
            sellingStatus:"Out of Stock"

        },
        {
            title:"Chocolate Cake",
            subheader:"Chocolate of Desire",
            cardMedia:ChocolateDear,
            actualPrice:145,
            discountedPrice:125,
            rating:4.8,
            sellingStatus:"Best Seller"
        },
        {
            title:"Cocomelon Cake",
            subheader:"Chocolate of Dreams",
            cardMedia:CocomelonCake,
            actualPrice:135,
            discountedPrice:95,
            rating:4.8,
            sellingStatus:"Best Seller"

        },
        {
            title:"Eggless Chocolate Cake",
            subheader:"Chocolicious",
            cardMedia:EgglessChocolate,
            actualPrice:120,
            discountedPrice:105,
            rating:3.8,
            sellingStatus:"Best Seller"

        },
        {
            title:"Eggless Chocolate Cake",
            subheader:"Guilty Pleasure",
            cardMedia:FondantWedding,
            actualPrice:120,
            discountedPrice:105,
            rating:3.8,
            sellingStatus:"Best Seller"

        },

        {
            title:"Chocolate Funfetti",
            subheader:"Have Fun Filled with Chocolate",
            cardMedia:FunfettiCupcakes,
            actualPrice:200,
            discountedPrice:155,
            rating:4.5,
            sellingStatus:"Out of Stock"

        },
        {
            title:"Chocolate Cake",
            subheader:"Choco Feast",
            cardMedia:Grapeberry,
            actualPrice:120,
            discountedPrice:105,
            rating:3.8,
            sellingStatus:"Best Seller"

        },
        {
            title:"Fondent Wedding Cake",
            subheader:"Feel Heavenly",
            cardMedia:NumberCakes,
            actualPrice:180,
            discountedPrice:145,
            rating:4.4,
            sellingStatus:"Best Seller"

        },
        {
            title:"Fondent Wedding Cake",
            subheader:"Chocolate Arise",
            cardMedia:RainbowCake,
            actualPrice:180,
            discountedPrice:145,
            rating:4.4,
            sellingStatus:"Best Seller"

        },
        {
            title:"Number Cakes Recipe",
            subheader:"Chocolate Fountain",
            cardMedia:NumberCakes,
            actualPrice:230,
            discountedPrice:205,
            rating:4.1,
            sellingStatus:"Best Seller"

        }
        
    ]
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
    'Popularity',
    'New Arrival',
    'Fast Delivery',
    'High-Low',
    'Low-High'
    
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
        backgroundColor: theme.palette.mode === 'dark' ? '#FA8072' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    let ordername="chocolate";  
    return(
        <>
         <Box>
      <FormControl sx={{ m: 1, width: 300, display:'flex', justifyContent:'flex-end'}}>
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
  
        <br/>
        <Grid container  spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            chocolatesList.map((choco,index)=>{
                return(
                    <Grid display="flex" justifyContent="center" xs={4} sm={4} md={4} pt={4}>
                    <ItemCard title={choco.title}
                              subheader={choco.subheader}
                                cardMedia={choco.cardMedia}
                                actualPrice={choco.actualPrice}
                                discountedPrice={choco.discountedPrice}
                                rating={choco.rating}
                                sellingStatus={choco.sellingStatus}
                                ordername={ordername}
                    />
                    </Grid>
                    
                )
            })
        }
        </Grid>
        <Box sx={{backgroundColor:'#FF4E84'}} display='flex' justifyContent='space-between'pt={5}>
        <h4>Connect with Us</h4>
        <FacebookIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
        </Box>
        <Box sx={{backgroundColor:'#FF4E84'}} display='flex' alignItems='center'justifyContent='space-between' pt={5} pb={10}>
        <img height='70px' width='160px'src='https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/hygenic.jpg' alt="safety"></img>
        <img height='70px' width='160px'src='https://assets.winni.in/groot/2022/06/27/productdetailpage/desktop/purchaseprotection.jpg' alt="safety"></img>
        <Feedback/>
        </Box>
        </>
    )
       

}