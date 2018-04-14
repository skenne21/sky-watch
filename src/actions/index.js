export const addCompanyBio = bio => ({
  type: 'ADD_COMPANY_BIO',
  bio
});

export const addError = message => ({
  type: 'ADD_ERROR',
  message
});

export const upLoadVideos = videos => ({
  type: 'ADD_VIDEOS',
  videos
});


export const addRockets = rockets => ({
  type: 'ADD_ROCKETS',
  rockets
});

export const addCapsules = capsules => ({
  type: 'ADD_CAPSULES',
  capsules
});

export const addLaunchPads = launchpads => ({
  type: 'ADD_LAUNCHPADS',
  launchpads
});

export const addBookmarks = bookmark => ({
  type: 'ADD_BOOKMARK',
  bookmark
});

export const removeBookmark = bookmark => ({
  type: 'REMOVE_BOOKMARK',
  bookmark
});

export const addUser = user => ({
  type:'ADD_USER',
  user
});

export const removeUser = user => ({
  type: 'REMOVE_USER',
  user
});

export const addLaunches = launches => ({
  type: 'ADD_LAUNCHES',
  launches
});