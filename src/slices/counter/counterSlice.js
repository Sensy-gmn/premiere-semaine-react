import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            if (state.value >= 0) {
                state.value += 1;
            } else {
                return;
            }
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            } else {
                return;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;
