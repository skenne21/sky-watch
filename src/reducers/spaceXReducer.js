export const spaceXReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMPANY_BIO':
      return [...state, action.bio];
    case 'ADD_ERROR_BIO':
      return [...state, action.message]
    default:
      return state;
  }

}