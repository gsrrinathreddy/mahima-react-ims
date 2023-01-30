import { ordered, restocked,cancelled } from "../../cake/cakeSlice"
import { Box, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import Sbar from "../../../components/snack_bar";

export default function ChocolateView(){
    let button1="order"
    const dispatch = useDispatch();
    //const no = useSelector((state)=>state.chocolate.noOfCakes)
    return(
        <>
        <Box sx={{backgroundColor:'#f86c40', width:'100%', height:'100vh'}}>
        <h3>A Guilt-free Sin</h3>
        <img width='250px' height='180px'src='https://media.istockphoto.com/id/1148258027/photo/assortment-of-fine-chocolate-candies-white-dark-and-milk-chocolate-sweets-background.jpg?s=612x612&w=is&k=20&c=6cZOjcrraHzXlvEeAfuJEfIkJu1O5YnlziftYvMb-yY=' alt=''></img>
        <br/>
        <Button onClick={()=>{
            dispatch(ordered(3))
        }}>
        <Sbar button1={button1} severity='success'msg={"Your order is success!"}/>
        </Button>
        <Button variant='contained'onClick={()=>{
            dispatch(restocked(5))
        }}>restock</Button>
        <Button variant='contained' onClick={()=>{
            dispatch(cancelled(10))
        }}>cancel</Button>
        </Box>
        </>
    )
}
