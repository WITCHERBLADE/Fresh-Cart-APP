import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEM } from "../components/item";



const itemSlice = createSlice({
  name:"items",
  initialState:DEFAULT_ITEM,
  reducers:{
    addINITPost:(state,action)=>{
       return state;
    }
  }
});


export const itemActions = itemSlice.actions;

export default itemSlice;