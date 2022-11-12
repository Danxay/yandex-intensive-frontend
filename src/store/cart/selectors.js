export const selectCartModule = (state) => state.cart;

export const selectOrderBooksIds = (state) => Object.keys(selectCartModule(state));
export const selectCountById = (id) => (state) => selectCartModule(state)[id] || 0;
export const selectCountByIds = (ids) => (state) => ids.map((id) => selectCountById(id)(state));
