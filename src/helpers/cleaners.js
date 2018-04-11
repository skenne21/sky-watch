export const cleanVideos = async (videoInfo) => {
  const videos = videoInfo.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    date: video.snippet.publishedAt,
    image: video.snippet.thumbnails.high
  }));
  return videos;
};

export const cleanBios = async (bioInfo) => {
  return {
    name: bioInfo.name,
    founder: bioInfo.founder,
    founded: bioInfo.founded,
    summary: bioInfo.summary,
    headquarters: bioInfo.headquarters
  };
};

export const cleanRockets = (rockets) => {
  return rockets.map(rocket => ({
    name:`Name: ${rocket.name}`,
    type: 'rocket',
    stats: {
      fristFlight:`Frist Flight: ${cleanDate(rocket.first_flight)}`,
      active:`Active: ${rocket.active}`,
      costLaunch:`Cost To Launch:${rocket.cost_per_launch}`,
      country:`Launch From: ${rocket.country}`,
      diameter:`Diameter ${rocket.diameter.feet} ft`,
      mass:`Mass: ${rocket.mass.lb} lb`,
      height:`Height: ${rocket.height.feet} ft`,
      boosters:`Boosters: ${rocket.boosters}`,
      description:`Description: ${rocket.description}`,
    } 
  }));
};


export const cleanDate = (date) => {
  const spiltDate = date.split('-');
  const year = spiltDate.shift();
  spiltDate.push(year);
  const recombined = spiltDate.join(', ');
  return recombined;
};


export const cleanCapsules = capsules => {
  return capsules.map( capsule => ({
    name: `Name: ${capsule.name}`,
    type: 'capsule',
    stats : {
      crew:`Crew Capacity: ${capsule.crew_capacity}`,
      yearInOrbit:` Years in Orbit: ${capsule.orbit_duration_yr}`,
      diameter:`Diameter: ${capsule.diameter.feet} ft`,
      height:`Height: ${capsule.height_w_trunk.feet} ft`,
      mass:`Mass: ${capsule.launch_payload_mass.kg} kg`,
      heatShield:`Heat Shield Capacity: ${capsule.heat_shield.temp_degrees} deg`,
    }
  }));
};

export const cleanLaunchpads = launchpads => {
  return launchpads.map(launchpad => ({
    name:`Name: ${launchpad.full_name}`,
    type: 'launchpad',
    stats: {
      location:`Location: ${launchpad.location.region},${launchpad.location.name}`,
      details:`${launchpad.details}`,
      status:`Status: ${launchpad.status}`,
      vehicles:`Vehicles Launched: ${launchpad.vehicles_launched.join(', ')}`
    }
  }));
};