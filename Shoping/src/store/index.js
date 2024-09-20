import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import bagSlice from "./BagSlice";



const store = configureStore({
  reducer:{
    items:itemSlice.reducer,
    bag:bagSlice.reducer,
   
  }
});


export default store;