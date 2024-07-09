import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        showGPTmenu: false,
    },
    reducers: {
        toggleGPTmenu: (state, action) => {
            state.showGPTmenu = !state.showGPTmenu;
        },
    }
});

export const { toggleGPTmenu } = gptSlice.actions;
export default gptSlice.reducer;