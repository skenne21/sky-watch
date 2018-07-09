import * as apiKeys from '../apiKeys';
import * as cleaners from './cleaners';
import { manageLaunches } from './launches';

export const fetchBio = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v2/info`);
    const info = await response.json();
    const bio = await cleaners.cleanBios(info);
    return bio;
  } catch (error) {
    throw error;
  }
};

export const fetchSpaceXVideos = async () => {
  try {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const condtions = 'part=snippet&order=viewCount';
    const videoInfo = 'q=spaceX+launches&type=video&videoDefinition=high';
    const key = apiKeys.youTubeKey;
    const response = await fetch(
      `${baseUrl}?${condtions}&${videoInfo}&key=${key}`
    );
    const info = await response.json();
    const videos = await cleaners.cleanVideos(info.items);
    return videos;
  } catch (error) {
    throw error;
  }
};

export const fetchRockets = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v2/rockets');
    const info = await response.json();
    const rockets = await cleaners.cleanRockets(info);
    return rockets;
  } catch (error) {
    throw error;
  }
};

export const fetchCapsules = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v2/capsules');
    const info = await response.json();
    const capsules = await cleaners.cleanCapsules(info);
    return capsules;
  } catch (error) {
    throw error;
  }
};

export const fetchLaunchpads = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v2/launchpads');
    const info = await response.json();
    const launchpads = await cleaners.cleanLaunchpads(info);
    return launchpads;
  } catch (error) {
    throw error;
  }
};

export const fetchLaunches = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v2/launches/all');
    const info = await response.json();
    const launches = manageLaunches(info);
    return launches;
  } catch (error) {
    throw error;
  }
};

