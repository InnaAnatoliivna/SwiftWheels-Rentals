import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { advertsReducer } from './reducers/advertsSlice'
import { filtersReducer } from './reducers/filterSlice'
import { favoritiesReducer } from './reducers/favoritiesSlice'
import paginationReducer from './reducers/paginationSlice'

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        favorities: favoritiesReducer,
        filter: filtersReducer,
        pagination: paginationReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development'
});