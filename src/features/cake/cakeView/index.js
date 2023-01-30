import {useDispatch, useSelector} from 'react-redux';
import {ordered, restocked, cancelled} from '../cakeSlice';
import { Button } from '@mui/material';
import * as React from 'react';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function CakeView(){
    const dispatch = useDispatch();
    let initialcakes=useSelector((state)=>state.cake.numOfcakes);
    

    let order = 9
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(ordered(order))
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
         <h3>CAKE SHOP</h3>
        <Button variant="outlined" onClick={handleClick}>
        Ordercakes
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        your order is successful!
        </Alert>
      </Snackbar>

        <Button variant='contained'onClick={()=>{
            dispatch(restocked(10))
        }}
        >
            Restock Cakes
        </Button>
        <Button variant='contained'onClick={()=>{
            dispatch(cancelled(3))
        }}
        >
            Cancel Cake
        </Button>
        
        </>
    )

}