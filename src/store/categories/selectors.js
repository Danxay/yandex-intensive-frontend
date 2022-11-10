export const selectCategoriesModule = (state) => state.categories;

export const selectCategories = (state) => Object.values(selectCategoriesModule(state).entities);
export const selectActiveCategoryId = (state) => selectCategoriesModule(state).activeCategoryId;
export const selectStatus = (state) => selectCategoriesModule(state).status;
