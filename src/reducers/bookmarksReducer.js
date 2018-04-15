export const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_BOOKMARK':
    return [...state, action.bookmark];
  case 'REMOVE_BOOKMARK':
    return state.filter( bookmark => bookmark.name !== action.bookmark.name);
  default:
    return state;
  }
};