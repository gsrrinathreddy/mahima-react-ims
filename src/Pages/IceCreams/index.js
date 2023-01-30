import IcecreamView from "../../features/icecream/icecreamView";
import CartComponent from "../../components/CartComponent";
import { useSelector } from "react-redux";
import {useState, useEffect} from 'react'
import { Button } from "@mui/material";
export default function Icecreams(){


    // let ordericecreams = useSelector((state)=>state.icecream.orderedicecreams)
    // return(
    //     <>
    //     <CartComponent badgeContent={ordericecreams}/>        
    //     <IcecreamView/>
    //     </>
    // )


    const [state, setState] = useState(true)
    useEffect(()=>{
        console.log("I am mahima")
        console.log("This is 1st useEffect")
        

    },[])

const handleClick =()=>{
    setState(!state)
}
return(
    <>
    <Button onClick={handleClick}>button</Button>
    
    </>
)
}