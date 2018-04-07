export const capsulesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CAPSULES':
      return [...state, ...action.capsules];
    default:
      return state;
  }
}