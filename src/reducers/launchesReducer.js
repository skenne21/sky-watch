export const launchesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_LAUNCHES':
    return [...state, action.launches];
  default:
    return state;
  }
};
