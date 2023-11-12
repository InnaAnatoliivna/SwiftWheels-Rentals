import { createSlice } from '@reduxjs/toolkit'
import { fetchAdverts } from '../operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdverts.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(fetchAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                console.log('adverts-fullfield :', action.payload);
                state.items = action.payload;
            })
    }
});

export const advertsReducer = advertsSlice.reducer;
// export const { setItems } = advertsSlice.actions;
