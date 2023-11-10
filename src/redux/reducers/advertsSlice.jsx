import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, fetchAdverts } from '../operations';

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdverts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addFavorite.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteFavorite.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(fetchAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
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

export const advertsReducer = advertsSlice.reducer;