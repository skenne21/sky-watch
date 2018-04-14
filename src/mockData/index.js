export const rawVideo = {
  items: [{
    id:{
      kind: "youtube#video", videoId: "XcVpMJp9Th4"
    },
    snippet: {
      channelId:"UC3OhT2ErtjLhvvkULJCCBlw",
      description:"Elon Musk gives new details, about SpaceX Mission...",
      publishedAt:"2017-09-29T06:05:03.000Z",
      thumbnails: {
        high: {
          url:"https://i.ytimg.com/vi/XcVpMJp9Th4/hqdefault.jpg",
          width: 480,
          height: 360
        }, 
        medium: {
          url:"https://i.ytimg.com/vi/XcVpMJp9Th4/mqdefault.jpg",
          width: 320,
          height: 360

        }
      },
      title:"Elon Musk"
    }
  }]
};

export const video = {
  id: "XcVpMJp9Th4",
  title: "Elon Musk",
  description: "Elon Musk gives new details, about SpaceX Mission...",
  date: "2017-09-29T06:05:03.000Z",
  image:{
    url: "https://i.ytimg.com/vi/XcVpMJp9Th4/hqdefault.jpg",
    width: 480,
    height: 360
  } 
};


export const videos = [{
  id: "XcVpMJp9Th4",
  title: "Elon Musk",
  description: "Elon Musk gives new details, about SpaceX Mission...",
  date: "2017-09-29T06:05:03.000Z",
  image:{
    url: "https://i.ytimg.com/vi/XcVpMJp9Th4/hqdefault.jpg",
    width: 480,
    height: 360
  } 
}, {
  id: "0PWu3BRxn60",
  title: "ZUMA Mission",
  description: "SpaceX is targeting launch...",
  date: "2018-01-08T01:19:10.000Z", 
  image: {
    url: "https://i.ytimg.com/vi/0PWu3BRxn60/hqdefault.jpg",
    width: 480,
    height: 360
  } 
}];

export const rawBio = {
  ceo:"Elon Musk",
  coo:"Gwynne Shotwell",
  cto:"Elon Musk",
  cto_propulsion:"Tom Mueller",
  employees:7000,
  founded:2002,
  founder:"Elon Musk",
  headquarters: {
    address: "Rocket Road",
    city: "Hawthorne",
    state: "California"
  },
  launch_sites:3,
  name:"SpaceX",
  summary:"SpaceX designs, manufactures and launches advanced...",
  test_sites:1,
  valuation:15000000000,
  vehicles:3
};

export const cleanBip = {
  name: "SpaceX",
  founder: "Elon Musk",
  founded: 2002,
  summary: "SpaceX designs, manufactures and launches advanced...",
  headquarters:{
    address: "Rocket Road",
    city: "Hawthorne",
    state: "California"
  }
};

export const bio = {
  name: "SpaceX",
  founder: "Elon Musk",
  founded: 2002,
  summary: "SpaceX designs, manufactures and launches advanced...",
  headquarters:{
    address: "Rocket Road",
    city: "Hawthorne",
    state: "California"
  }
};

export const rawRockets = [{
  active:false,
  first_flight: '2006-03-24',
  name:"Falcon 1",
  boosters:0,
  company:"SpaceX",
  cost_per_launch:6700000,
  country:"Republic of the Marshall Islands",
  description:"The Falcon 1 was an expendable launch system privately",
  diameter: {
    feet:5.5
  },
  engines: {
    engine_loss_max:0,
    layout:"single",
    number:1,
    propellant_1:"liquid oxygen",
    propellant_2:"RP-1 kerosene",
    thrust_sea_level: {
      kN:420,
      lbf:94000
    },
    thrust_vacuum: {
      kN:480,
      lbf:110000
    },
    type:"merlin"
  },
  height: {
    feet:73
  },
  mass: {
    lb:66460
  },
  payload_weights: [{id:1}]
}, {
  active:true,
  first_flight: '2006-03-24',
  name:"Falcon 9",
  boosters:0,
  company:"SpaceX",
  cost_per_launch:6700000,
  country:"United States",
  description:"The Falcon 1 was an expendable launch system privately",
  diameter: {
    feet:5.5
  },
  engines: {
    engine_loss_max:0,
    layout:"single",
    number:1,
    propellant_1:"liquid oxygen",
    propellant_2:"RP-1 kerosene",
    thrust_sea_level: {
      kN:420,
      lbf:94000
    },
    thrust_vacuum: {
      kN:480,
      lbf:110000
    },
    type:"merlin"
  },
  height: {
    feet:73
  },
  mass: {
    lb:1207920
  },
  payload_weights: [{id:1}]
}];

export const cleanRocket = {
  active:false,
  costLaunch:6700000,
  country:"Republic of the Marshall Islands",
  fristFight:"03, 24, 2006",
  name:"Falcon 1",
  stats: {
    boosters:0,
    diameter:5.5,
    height:73,
    mass:66460
  },
  summary:"The Falcon 1 was an expendable ..."
};

export const rockets =  [
  {
  "name": "Name: Falcon 1", 
    "stats": {
      "active": "Active: false",
      "boosters": "Boosters: 0",
      "costLaunch": "Cost To Launch:6700000", 
      "country": "Launch From: Republic of the Marshall Islands", 
      "description": "Description: The Falcon 1 was an expendable launch system privately", 
      "diameter": "Diameter 5.5 ft", "fristFlight": "Frist Flight: 03, 24, 2006", "height": 
      "Height: 73 ft", 
      "mass": "Mass: 66460 lb"
    }, "type": "rocket"
  }, {
    "name": "Name: Falcon 9", 
    "stats": {
      "active": "Active: true",
      "boosters": "Boosters: 0",
      "costLaunch": "Cost To Launch:6700000", 
      "country": "Launch From: United States", 
      "description": "Description: The Falcon 1 was an expendable launch system privately", 
      "diameter": "Diameter 5.5 ft",
      "fristFlight": "Frist Flight: 03, 24, 2006", 
      "height": "Height: 73 ft", 
      "mass": "Mass: 1207920 lb"
    }, 
    "type": "rocket"
  }
];

export const rawCapsules = [
  {
    active:true,
    crew_capacity:0,
    diameter: {
      feet:12,
      meters:3.7
    },
    heat_shield: {
      material:"PICA-X",
      size_meters:3.6,
      temp_degrees:3000
    },
    height_w_trunk: {
      feet:23.6,
      meters:7.2
    },
    name:"Dragon 1",
    orbit_duration_yr: 2,
    launch_payload_mass:  {
      kg: 3000,
      lb: 6614
    },
  }, {
    active:true,
    crew_capacity:0,
    diameter: {
      feet:12,
      meters:3.7
    },
    heat_shield: {
      material:"PICA-X",
      size_meters:3.6,
      temp_degrees:3000
    },
    height_w_trunk: {
      feet:23.6,
      meters:7.2
    },
    name:"Dragon 1",
    orbit_duration_yr: 2,
    launch_payload_mass:  {
      kg: 3000,
      lb: 6614
    },
  }
];

export const capsules = [
  {
    "name": "Name: Dragon 1",
    "stats": {
      "crew": "Crew Capacity: 0", 
      "diameter": "Diameter: 12 ft", 
      "heatShield": "Heat Shield Capacity: 3000 deg", 
      "height": "Height: 23.6 ft", 
      "mass": "Mass: 3000 kg", 
      "yearInOrbit": " Years in Orbit: 2"
    }, 
    "type": "capsule"
  }, {
    "name": "Name: Dragon 1", 
    "stats": {
      "crew": "Crew Capacity: 0", 
      "diameter": "Diameter: 12 ft", 
      "heatShield": "Heat Shield Capacity: 3000 deg", 
      "height": "Height: 23.6 ft", 
      "mass": "Mass: 3000 kg", 
      "yearInOrbit": " Years in Orbit: 2"
    }, 
    "type": "capsule"
  }
];

export const capsule = {
  "name": "Name: Dragon 1", 
  "stats": {
    "crew": "Crew Capacity: 0", 
    "diameter": "Diameter: 12 ft", 
    "heatShield": "Heat Shield Capacity: 3000 deg", 
    "height": "Height: 23.6 ft", 
    "mass": "Mass: 3000 kg", 
    "yearInOrbit": " Years in Orbit: 2"
  }, 
  "type": "capsule"
};

export const rawLaunchpads = [
  {
    details:"SpaceX original launch site...",
    full_name:"Kwajalein Atoll Omelek Island",
    id:"kwajalein_atoll",
    location: {
      latitude:9.0477206,
      longitude:167.7431292,
      name:"Omelek Island",
      region:"Marshall Islands"
    },
    status:"retired",
    vehicles_launched: ['Falcon 1']
  }, {
    details:"SpaceX east coast landing...",
    full_name:"Cape Canaveral Air Force Station, Space Launch Complex 13",
    id:"kwajalein_atoll",
    location: {
      latitude:9.0477206,
      longitude:167.7431292,
      name:"Cape Canaveral",
      region:"Florida"
    },
    status:"active",
    vehicles_launched: ['Falcon 9']
  }
];

export const launchpads = [
  {
    "name": "Name: Kwajalein Atoll Omelek Island", 
    "stats": {
      "details": "SpaceX original launch site...", 
      "location": "Location: Marshall Islands,Omelek Island", 
      "status": "Status: retired", 
      "vehicles": "Vehicles Launched: Falcon 1"
    }, 
    "type": "launchpad"
  }, {
    "name": "Name: Cape Canaveral Air Force Station, Space Launch Complex 13", 
    "stats": {
      "details": "SpaceX east coast landing...",
      "location": "Location: Florida,Cape Canaveral", 
      "status": "Status: active", 
      "vehicles": "Vehicles Launched: Falcon 9"
    }, 
    "type": "launchpad"
  }
];

export const launchpad = {
  details:"SpaceX east coast landing...", 
  location:"Florida: Cape Canaveral",
  name:"Cape Canaveral Air Force Station, Space Launch Complex 13",
  status:"active",
  vehicles:["Falcon 9"]
}

export const launches = {
  falcon1:[
  {
    name: "Flight Number: 1",
    type: "launches",
    image: "https://www.spacexnow.com/patches/falcon1-1.png",
    video: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    stats : {
      site: "Kwajalein Atoll",
      sucessful: "Launch Sucess: false",
      details: "Details: Engine failure at 33 seconds and loss of vehicle",
      capsule: "Reuseable Capsule: false",
      core: "Reuseable Core: false",
      sideCores: "Reusable Sidecores: false",
      fairings: "Reusable Fairings: false",
    } 
  }, {
    name: "Flight Number: 2",
    type: "launches",
    image: "https://www.spacexnow.com/patches/falcon1-1.png",
    video: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    stats : {
      site: "Kwajalein Atoll",
      sucessful: "Launch Sucess: false",
      details: "Details: Engine failure at 33 seconds and loss of vehicle",
      capsule: "Reuseable Capsule: false",
      core: "Reuseable Core: false",
      sideCores: "Reusable Sidecores: false",
      fairings: "Reusable Fairings: false",
    }
  }],
  falcon9:[
  {
    name: "Flight Number: 1",
    type: "launches",
    image: "https://www.spacexnow.com/patches/falcon1-1.png",
    video: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    stats : {
      site: "Kwajalein Atoll",
      sucessful: "Launch Sucess: false",
      details: "Details: Engine failure at 33 seconds and loss of vehicle",
      capsule: "Reuseable Capsule: false",
      core: "Reuseable Core: false",
      sideCores: "Reusable Sidecores: false",
      fairings: "Reusable Fairings: false",
    } 
  }, {
    name: "Flight Number: 2",
    type: "launches",
    image: "https://www.spacexnow.com/patches/falcon1-1.png",
    video: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    stats : {
      site: "Kwajalein Atoll",
      sucessful: "Launch Sucess: false",
      details: "Details: Engine failure at 33 seconds and loss of vehicle",
      capsule: "Reuseable Capsule: false",
      core: "Reuseable Core: false",
      sideCores: "Reusable Sidecores: false",
      fairings: "Reusable Fairings: false",
    }
  }],
  falconHeavy: [
  {
    name: "Flight Number: 2",
    type: "launches",
    image: "https://www.spacexnow.com/patches/falcon1-1.png",
    video: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    stats : {
      site: "Kwajalein Atoll",
      sucessful: "Launch Sucess: false",
      details: "Details: Engine failure at 33 seconds and loss of vehicle",
      capsule: "Reuseable Capsule: false",
      core: "Reuseable Core: false",
      sideCores: "Reusable Sidecores: false",
      fairings: "Reusable Fairings: false",
    }
  }] 
}
