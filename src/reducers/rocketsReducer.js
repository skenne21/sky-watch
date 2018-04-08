export const rocketsReducer = (state =[], action) => {
  switch (action.type) {
  case 'ADD_ROCKETS':
    return [...state, ...action.rockets];
  default:
    return state;
  }
};