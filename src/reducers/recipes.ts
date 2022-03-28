import data from 'src/data';

export const initialState = {
  list: data,
};

const reducer = (state: RecipeState = initialState, action: RecipeAction = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
