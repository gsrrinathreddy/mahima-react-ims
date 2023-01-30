import {createSlice} from '@reduxjs/toolkit';

const initialState={
    numOficecreams : 90,
    orderedicecreams:0,
    cancelledicecreams:0
}

const icecreamSlice=createSlice({
    name: 'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload > state.numOficecreams){
                console.log('out of stock')
            }else{
                state.numOficecreams-=action.payload
                state.orderedicecreams +=action.payload

            }
             
        },
        restocked:(state,action)=>{
            state.numOficecreams+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderedicecreams-=action.payload
        }
    },    
    extraReducers:{
        ['cake/ordered'] : (state,action)=>{
            if(action.payload >= 4){
                state.numOficecreams--;
                state.orderedicecreams++;
            }
        }    
    }    
})
export default icecreamSlice.reducer;
export const {ordered, restocked, cancelled} = icecreamSlice.actions;

