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
    details:`${rocket.description}`,
    stats: {
      fristFlight:`First Flight: ${cleanDate(rocket.first_flight)}`,
      active:`Active: ${rocket.active}`,
      costLaunch:`Cost To Launch:${rocket.cost_per_launch}`,
      country:`Launch From: ${rocket.country}`,
      diameter:`Diameter ${rocket.diameter.feet} ft`,
      mass:`Mass: ${rocket.mass.lb} lb`,
      height:`Height: ${rocket.height.feet} ft`,
      boosters:`Boosters: ${rocket.boosters}`,
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
      /* eslint-disable max-len */
      heatShield:`Heat Shield Capacity: ${capsule.heat_shield.temp_degrees} deg`
      /* eslint-enable max-len */
    }
  }));
};

export const cleanLaunchpads = launchpads => {
  return launchpads.map(launchpad => ({
    name:`Name: ${launchpad.full_name}`,
    type: 'launchpad',
    details:`${launchpad.details}`,
    stats: {
      /* eslint-disable max-len */
      location:`Location: ${launchpad.location.region},${launchpad.location.name}`,
      /* eslint-enable max-len */
      status:`Status: ${launchpad.status}`,
      vehicles:`Vehicles Launched: ${launchpad.vehicles_launched.join(', ')}`
    }
  }));
};

export const cleanLaunches = launches => {
  return launches.map(launch => ({
    name: `Flight Number: ${launch.flight_number}`,
    type: 'launches',
    details:`${launch.details}`,
    stats: {
      site:`${launch.launch_site.site_name}`,
      sucessful:`Launch Sucess: ${launch.launch_success}`,
      capsule:`Reuseable Capsule: ${launch.reuse.capsule}`,
      core:`Reuseable Core: ${launch.reuse.core}`,
      sideCores: `Reusable Sidecores: ${launch.reuse.side_core1}`,
      fairings:`Reusable Fairings: ${launch.reuse.fairings}`
    }
  }));
};

export const combineLaunches = (falcon1, falcon9, falconHeavy) => {
  return {
    falcon1,
    falcon9,
    falconHeavy
  };
};

export const filterLaunches = (launches, id) => {
  return launches.filter(launch => launch.rocket.rocket_id === id);
};