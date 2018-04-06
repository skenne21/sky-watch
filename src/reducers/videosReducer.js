export const videosReducer = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case'ADD_VIDEOS':
      return [...state, ...action.videos]
    default:
      return state;
  }
}