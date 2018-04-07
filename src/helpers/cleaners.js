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

//  not tested
export const cleanRockets = (rockets) => {
  return rockets.map(rocket => ({
    name: rocket.name,
    active: rocket.active,
    fristFight: cleanDate(rocket.first_flight),
    costLaunch: rocket.cost_per_launch,
    stages: rocket.stages,
    country: rocket.country,
    summary: rocket.description,
    stats: {
      diameter: rocket.diameter.feet,
      engines: cleanEngines(rocket.engines),
      mass: rocket.mass.lb,
      payload: rocket.payload_weights[0],
      height: rocket.height.feet,
      boosters: rocket.boosters,
      // secondStage: rocket.second_stage,
    }

  }));
}

// not tested
export const cleanDate = (date) => {
  const spiltDate = date.split('-');
  const year = spiltDate.shift();
  spiltDate.push(year);
  const recombined = spiltDate.join(', ')
  return recombined;
}

export const cleanEngines = engine => {
  return {
    type: engine.type,
    propellant1: engine.propellant_1,
    propellant2: engine.propellant_2,
    thrustAtSea: engine.thrust_sea_level.lbf,
    thrustVaccum: engine.thrust_vacuum.lbf,
  }
}