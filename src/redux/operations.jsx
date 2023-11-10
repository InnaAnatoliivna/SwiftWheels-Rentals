import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654e9f03cbc3253557430564.mockapi.io';

/*
 * GET @ /adverts/fetchAll
 */
export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/adverts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
/*
 * POST @ /adverts/favorites
 * advert: { id, year, make, model, type, img, description, fuelConsumption, 
 * engineSize, accessories, functionalities, rentalPrice, rentalCompany, 
 * address, rentalConditions, mileage }
 */
export const addFavorite = createAsyncThunk('adverts/favorites', async (advert, thunkAPI) => {
    try {
        const { data } = await axios.post('/adverts', advert);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
/*
 * DELETE @ /adverts/deleteAdverts
 * idAdverts: string
 */
export const deleteFavorite = createAsyncThunk('adverts/deleteAdverts', async (idAdverts, thunkAPI) => {
    createAsyncThunk('adverts', async (_, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/adverts/${idAdverts}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
})

