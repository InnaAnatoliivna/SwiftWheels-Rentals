import { createSlice } from '@reduxjs/toolkit';
import { getNextPageAdverts } from '../operations';

const initialState = {
    currentPage: 1,
    perPage: 12,
    nextItems: [],
    isLoading: false,
    error: null
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNextPageAdverts.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(getNextPageAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(getNextPageAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.nextItems = action.payload;
            })
    }
});

export const { setCurrentPage, setPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;