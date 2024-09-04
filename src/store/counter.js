import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter", 
    initialState: {counterVal : 0},
    reducers : {
        increment : (state) => { //changing the state directly
            state.counterVal++;
        },
        decrement : (state) => {
            state.counterVal--;
        },
        add : (state, action) => {
            state.counterVal += parseInt(action.payload)
        },
        subtract : (state, action) => {   // each reducer have a state that is the current state and action
            state.counterVal += parseInt(action.payload); // action can have a type or payload
        }                                                 // it is dispatched by the ui using useDispatch hook
    }
})

export const counterActions = counterSlice.actions;
