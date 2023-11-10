import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './reducers/advertsSlice';
import { filtersReducer } from './reducers/filterSlice';

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        filter: filtersReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);