export const launchpadsReducers = (state = [], action) => {
  switch (action.type) {
  case 'ADD_LAUNCHPADS':
    return [...state, ...action.launchpads];
  default:
    return state;
  }
};