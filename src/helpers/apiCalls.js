import * as apiKeys from '../apiKeys';
import * as cleaners from './cleaners';

export const fetchBio = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v2/info`)
    const info = await response.json();
    const bio = await cleaners.cleanBios(info);
    return bio;
  } catch(error) {
    throw error
  }
};

export const fetchSpaceXVeidos = async () => {
  try {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const condtions = 'part=snippet&order=viewCount';
    const veidoInfo = 'q=spaceX+missions&type=video&videoDefinition=high';
    const key = apiKeys.youTubeKey;
    const response = await fetch(`${baseUrl}?${condtions}&${veidoInfo}&key=${key}`);
    const info = await response.json();
    const videos = await cleaners.cleanVeidos(info.items);
    return videos
  } catch(error) {
    throw error;
  }
}

