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
})