import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
             //Vanilla(older) redux => DON'T MUTATE STATE,returning was mandatory
             // const newState = [...state];
             //newState.items.push(action.payload);
             //return newState
             
             //Redux Tool Kit uses immer behind the scenes (We have to mutate the state here)
            // mutating the state here
           state.items.push(action.payload); 
        },
        removeItem:(state)=>{
            state.items.pop();
         },

         //Original State = {items:["pizza"]}
         clearCart:(state,action)=>{
            // console.log(state);
            //  console.log(current(state));
            //  state = [];
            //  console.log(state);

            //RTK - either mutate the existing state or return new state
            state.items.length = 0;
            //return {items:[]};
         },
    },
}); 

export const  {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;