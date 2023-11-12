// contactsSlice

export const selectAdverts = state => state.adverts.items;
export const selectErrorAdverts = state => state.adverts.error;
export const selectLoadingAdverts = state => state.adverts.isLoading;

// favorities

export const selectfavorities = state => state.favorities.items;
export const selectErrorFavorities = state => state.favorities.error;
export const selectLoadingFavorities = state => state.favorities.isLoading;


// filterSlice

export const selectFilter = state => state.filter;

// pagination

export const selectPagination = state => state.pagination;
export const selectCurrentPage = state => state.pagination.currentPage;
export const selectPerPage = state => state.pagination.perPage;
export const selectNextAdverts = state => state.pagination.nextItems;

