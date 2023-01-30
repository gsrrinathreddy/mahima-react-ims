import {createSlice} from '@reduxjs/toolkit';
import cakesList from '../../Pages/Cakes';

const initialState={
     numOfcakes : 90,
     orderedcakes:0,
     cancelledcakes:0,
     cakesList:{
        name:'',
        qty:0,
        actualPrice:null,
        discountedPrice:null
     }
}

const cakeSlice=createSlice({
    name: 'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            console.log("action order placed",action.payload)
             state.numOfcakes-=action.payload.qty
             state.orderedcakes +=parseInt(action.payload.qty)
             
             //state.discountedPrice = state.cakesList.discountedPrice
              state.cakesList.qty = action.payload.qty
              state.cakesList.actualPrice = action.payload.actualPrice
              state.cakesList.discountedPrice = action.payload.discountedPrice
              state.cakesList.name = action.payload.title   
             
                   
        },
        restocked:(state,action)=>{
            state.numOfcakes+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderedcakes-=action.payload
        },
    }

})
export default cakeSlice.reducer;
export const {ordered, restocked, cancelled} = cakeSlice.actions;

