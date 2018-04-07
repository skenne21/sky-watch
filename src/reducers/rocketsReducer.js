export const rocketReducer = (state =[], action) => {
  switch(action.type) {
    case 'ADD_ROCKETS':
      return [...state, action.rockets]
    case default:
      return state;
  }
}