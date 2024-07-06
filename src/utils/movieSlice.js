import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        NewMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
           state.nowPlayingMovies = action.payload;
        },
        addNewMovies: (state, action) => {
            state.NewMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
    },
});


export const { addNowPlayingMovies,
               addNewMovies,
               addUpComingMovies, 
               addPopularMovies, 
               addTopRatedMovies } = movieSlice.actions
export default movieSlice.reducer;