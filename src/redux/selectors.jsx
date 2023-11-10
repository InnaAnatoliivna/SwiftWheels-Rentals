//contactsSlice

export const selectAdverts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

//filterSlice

export const selectFilter = state => state.filter;