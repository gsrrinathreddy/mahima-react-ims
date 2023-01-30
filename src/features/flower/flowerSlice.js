import {createSlice} from '@reduxjs/toolkit';

const initialState={
    numOfFlowers : 100,
    orderedflowers:0,
    cancelledflowers:0
}

const flowerSlice=createSlice({
    name: 'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload > state.numOfFlowers){
                console.log('out of stock')
            }else{
                state.numOfFlowers-=action.payload
                state.orderedflowers +=parseInt(action.payload)

            }
             
        },
        restocked:(state,action)=>{
            state.numOfFlowers+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderedflowers-=action.payload
        }
    },    
    extraReducers:{
        ['icecream/ordered'] : (state,action)=>{
            if(action.payload >= 4){
                state.numOfFlowers--;
                state.orderedflowers++;
            }
        }    
    }    
})
export default flowerSlice.reducer;
export const {ordered, restocked, cancelled} = flowerSlice.actions;

