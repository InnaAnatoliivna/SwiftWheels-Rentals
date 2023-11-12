import { createSlice } from '@reduxjs/toolkit'
import { addFavorite, deleteFavorite } from '../operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

export const favoritiesSlice = createSlice({
    name: 'favorities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addFavorite.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteFavorite.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(addFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(({ id }) => id !== action.payload);
            })
    }
});

export const favoritiesReducer = favoritiesSlice.reducer;