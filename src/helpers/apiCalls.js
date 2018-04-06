import * as apiKeys from '../apiKeys';

export const fetchBio = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v2/info`)
    const info = await response.json();
    const bio = await cleanBios(info);
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
    const videos = await cleanVeidos(info.items);
    return videos
  } catch(error) {
    throw error;
  }
}

const cleanVeidos = async (videoInfo) => {
  const videos = videoInfo.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    date: video.snippet.publishedAt,
    image: video.snippet.thumbnails.high
  }))
  return videos
}

const cleanBios = async (info) => {
  return {
    name: info.name,
    founder: info.founder,
    founded: info.founded,
    summary: info.summary,
    headquarters: info.headquarters
  }
}