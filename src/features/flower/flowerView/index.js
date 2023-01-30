import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered,restocked,cancelled } from "../flowerSlice";

export default function FlowerView(){
    const dispatch = useDispatch();
    const initial = useSelector((state)=>(state.flower.numOfFlowers))
    const total = useSelector((state)=>(state.flower.orderedflowers))
    
    return(
        <>
        <Box sx={{backgroundColor:'#FFFF8F', height:'100vh'}}>
        <h3>Bloom with Flowers and Kindness</h3>
         <img height='300px' width='300px'src='https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-elegant-rose-bouquet-139330-m.jpg' alt='flow'></img>
         <img height='300px' width='300px'src='https://5.imimg.com/data5/YQ/IQ/MY-65929370/anthurium-flowers-500x500.jpg' alt='flow'></img>
         <img height='300px' width='300px'src='https://www.oyegifts.com/media/catalog/product/cache/b2648f2711918eacfea461bab3f4d4be/g/i/gifts-online-120.jpg' alt='flow'></img>
         <br/>
         <Button onClick={()=>{
            dispatch(ordered(10))
         }}>order</Button>
         <Button onClick={()=>{
            dispatch(restocked(10))
         }}>restock</Button>
         <Button onClick={()=>{
            dispatch(cancelled(5))
         }}>cancel</Button>
         <br/>
            Flowers in store: {initial}
            <br/>
            Ordered Flowers: {total}
         </Box>
        </>
    )
}