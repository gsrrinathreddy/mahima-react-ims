import { useSelector,useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Button, Typography, Grid } from "@mui/material";
import { cancelled as cakeCancelled,ordered as cakeOrdered  } from "../../features/cake/cakeSlice";
import { cancelled as iceCreamCancelled , ordered as icecreamOrdered } from "../../features/icecream/icecreamSlice";
import {cancelled as flowerCancelled, ordered as flowerOrdered} from "../../features/flower/flowerSlice";
import { cancelled as chocolateCancelled,ordered as chocolateOrdered  } from "../../features/chocolates/chocolateSlice";
import cakesList from '../../Pages/Cakes'
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";


export default function ViewCart(){
    const dispatch = useDispatch();
    const cartList = useSelector((state)=>state.cart.cartList)
    console.log(cartList)
    const navigate = useNavigate();
    const orderedprice = useSelector((state)=>state.cart.cartList.discountedPrice)
    let orderedItems = useSelector((state)=>state.cake.cakesList);
    let name = useSelector((state)=>state.cake.cakesList.name);
    let qty = useSelector((state)=>state.cake.cakesList.qty);
    let actualPrice = useSelector((state)=>state.cake.cakesList.actualPrice);
    let discountedPrice = useSelector((state)=>state.cake.cakesList.discountedPrice);
    let noOfCakes = useSelector((state)=> state.cake.orderedcakes)
    let numOficecreams = useSelector((state)=> state.icecream.orderedicecreams)
    let noOfChocolates = useSelector((state)=> state.chocolate.orderedchocolates)
    let noOfFlowers = useSelector((state)=> state.flower.orderedflowers)
    let total = noOfCakes+numOficecreams+noOfChocolates+noOfFlowers
    let totalprice = useSelector((state)=>state.cake.discountedPrice)
    const cakes = useSelector((state)=>(state.cake.cakesList))

    console.log("cakeslist",orderedItems)
    let sum = 0
    
    
   
    return(
        <>
        
            <Box>
                Order Details:
                <Grid container>
                    <Grid md={2}>
                <Typography variant='h6' sx={{fontWeight:'bold'}}>Name</Typography>
                {
                    cartList.map((item)=>{
                        return(
                            <Typography>
                            {item.title}
                            </Typography>
                        )
                    })
                }
                </Grid>
                <Grid md={2}>
                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                    ActualPrice
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.discountedPrice}
                                </Typography>

                            )
                        })
                    }
                    </Grid>
                    
                    <Grid md={2}>
                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                    Quantity
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.qty}
                                </Typography>

                            )
                        })
                    }
                    </Grid>
                    
                    <Grid md={2}>
                   <Typography variant='h6' sx={{fontWeight:'bold'}}>
                    Price
                    </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.qty*item.discountedPrice}
                                    
                                </Typography>

                            )
                        })
                    }
                    </Grid>
                    </Grid>
                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                    Total
                    </Typography>
                    {
                        cartList.map((item)=>{
                            sum+=(item.qty*item.discountedPrice)
                            return(
                                <Typography>
                                  
                                
                                </Typography>

                            )
                        })
                        
                    }
                    {sum}
                    </Box>
                <Button onClick={()=>navigate('order-summary')}>Place Order</Button>
                </>
            
            // Cakes Ordered: {noOfCakes} <Button onClick={()=>{
            //     dispatch(cakeOrdered(1))
            // }}>+</Button> <Button variant='contained'>Add/Remove</Button>  <Button onClick={()=>{
            //     dispatch(cakeCancelled(1))
            // }}>-</Button>
            // <br/>
            // Icecreams Ordered:{numOficecreams} <Button onClick={()=>{
            //     dispatch(icecreamOrdered(1))
            // }}>+</Button> <Button variant='contained'>Add/Remove</Button> <Button onClick={()=>{
            //     dispatch(iceCreamCancelled(1))
            // }}>-</Button>
            // <br/>
            //   Chocolates Ordered:{noOfChocolates} <Button onClick={()=>{
            //     dispatch(chocolateOrdered(1))
            // }}>+</Button> <Button variant='contained'>Add/Remove</Button>  <Button onClick={()=>{
            //     dispatch(chocolateCancelled(1))
            // }}>-</Button>
            // <br/>  
            //   Flowers Ordered:{noOfFlowers} <Button onClick={()=>{
            //     dispatch(flowerOrdered(1))
            // }}>+</Button> <Button variant='contained'>Add/Remove</Button> <Button onClick={()=>{
            //     dispatch(flowerCancelled(1))
            // }}>-</Button>  
            // <br/>
            // Total Items:{total}
            // <br/>
            // Name: {name}
            // <br/>
            // Qty: {qty}
            // <br/>
            // ActualPrice: {actualPrice}
            // <br/>
            // DiscountedPrice: {discountedPrice}
            
            
            // </Box>
        
    )
}





