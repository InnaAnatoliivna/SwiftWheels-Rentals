//contactsSlice

export const selectAdverts = state => state.adverts.items;
export const selectError = state => state.adverts.error;
export const selectLoading = state => state.adverts.isLoading;

//filterSlice

export const selectFilter = state => state.filter;