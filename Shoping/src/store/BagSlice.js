import {createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addPostToBag:(state,action)=>{
      state.push(action.payload);
    },
    RemoveFromBag:(state,action)=>{
   return state.filter(itemId => itemId != action.payload);
   }
    }
  
});


export const bagActions = bagSlice.actions;
export default bagSlice;

