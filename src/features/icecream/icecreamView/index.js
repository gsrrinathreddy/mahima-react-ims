import {useDispatch, useSelector} from 'react-redux';
import {ordered, restocked, cancelled} from '../icecreamSlice';
import { Box, Button } from '@mui/material';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function IcecreamView(){
    const dispatch = useDispatch();
    const icecreamsnum=useSelector((state)=>state.icecream.numOficecreams)

    const [open, setOpen] = React.useState(false);

const handleClick = () => {
    dispatch(ordered(4))
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

    return(
        <>
        <Box display='flex' flexDirection='row'>
        <h2>
            Grab your FREE ice cream {icecreamsnum} BUY 4 GET 1 FREE
        </h2>
        <img width='250px' height='220px'src='https://hips.hearstapps.com/hmg-prod/images/easiest-ever-fruit-and-coconut-ice-cream-1643120950.jpg?crop=0.990xw:0.660xh;0,0.158xh&resize=1200:*' alt='ice cream'></img>

        <Button variant="contained" onClick={handleClick}>
        Order Icecream
      </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Your order is successful!
        </Alert>
      </Snackbar>

        <Button variant='contained'onClick={()=>{
            dispatch(restocked(10))
        }}
        >
            Restock Ice cream
        </Button>
        <Button variant='contained'onClick={()=>{
            dispatch(cancelled(3))
        }}
        >
            Cancel Ice cream
        </Button>
        </Box>
        <img width='250px' height='180px' justifyContent='flex-end' alignItems='flex-end'mt={10}src='https://thumbs.dreamstime.com/z/various-varieties-ice-cream-cones-various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-158155767.jpg' alt='ice'></img>
        
        </>
    )

}