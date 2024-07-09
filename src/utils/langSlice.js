import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
    name: 'langSlice',
    initialState: {
        lang: 'en',
        isChangeLangVisible: false

    },
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        },
        changeLangToggle: (state) => {
            state.isChangeLangVisible = !state.isChangeLangVisible;
        } 
    }
});


export const { changeLang , changeLangToggle} = langSlice.actions;
export default langSlice.reducer;
