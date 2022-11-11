export const selectBooksModule = (state) => state.books;

export const selectBooks = (state) => Object.values(selectBooksModule(state).entities);
export const selectBookDetails = (state) => selectBooksModule(state).bookDetails;
export const selectStatus = (state) => selectBooksModule(state).status;
