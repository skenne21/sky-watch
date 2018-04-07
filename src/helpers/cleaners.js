export const cleanVideos = async (videoInfo) => {
  const videos = videoInfo.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    date: video.snippet.publishedAt,
    image: video.snippet.thumbnails.high
  }));
  return videos;
}

export const cleanBios = async (bioInfo) => {
  return {
    name: bioInfo.name,
    founder: bioInfo.founder,
    founded: bioInfo.founded,
    summary: bioInfo.summary,
    headquarters: bioInfo.headquarters
  }
}

export const cleanRocket = async (rockets) => {
  return rockets.map(rocket => ({
    name: rocket.name,
    active: rocket.active,
    fristFight: cleanDate(rocket.first_flight),
    costLaunch: rocket.cost_per_launch,
    stages: rocket.stages,
    country: rocket.country,
    summary: rocket.description,
    stats: {
      diameter: rocket.diameter,
      engines: rocket.engines,
      mass: rocket.mass,
      payload: rocket.payload_weights[0],
      height: rocket.height,
      boosters: rocket.boosters,
      secondStage: rocket.second_stage,
    }
  }))
}

export const cleanDate = (date) => {
  const spiltDate = date.split('-');
  const year = spiltDate.shift();
  spiltDate.push(year);
  const recombined = spiltDate.join(', ')
  return recombined;
}