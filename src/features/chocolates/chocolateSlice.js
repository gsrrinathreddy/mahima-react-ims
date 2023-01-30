import {createSlice} from '@reduxjs/toolkit';

const initialState={
    numOfChocolates : 90,
    orderedchocolates:0,
    cancelledchocolates:0
}

const chocolateSlice=createSlice({
    name: 'chocolate',
    initialState,
    reducers:{
        ordered:(state,action)=>{
             state.numOfChocolates-=action.payload
             state.orderedchocolates +=parseInt(action.payload)
        },
        restocked:(state,action)=>{
            state.numOfChocolates+=action.payload
        },
        cancelled:(state,action)=>{
            state.orderedchocolates-=action.payload
        }
        
    
    }    
    

})
export default chocolateSlice.reducer;
export const {ordered, restocked, cancelled} = chocolateSlice.actions;

