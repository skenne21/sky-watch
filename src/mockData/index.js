export const rawVideo = {
  items: [{
    id:{
      kind: "youtube#video", videoId: "XcVpMJp9Th4"
    },
    snippet: {
      channelId:"UC3OhT2ErtjLhvvkULJCCBlw",
      description:"Elon Musk gives...",
      publishedAt:"2017-09-29T06:05:03.000Z",
      thumbnails: {
        high: {
          url:"https://i.ytimg.com/vi/XcVpMJp9Th4/hqdefault.jpg",
          width: 480
        }, 
        medium: {
          url:"https://i.ytimg.com/vi/XcVpMJp9Th4/mqdefault.jpg",
          width: 320
        }
      },
      title:"Elon Musk Gives..."
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
  summary:"SpaceX designs, manufactures...",
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

export const bio = [{
  name: "SpaceX",
  founder: "Elon Musk",
  founded: 2002,
  summary: "SpaceX designs, manufactures and launches advanced...",
  headquarters:{
    address: "Rocket Road",
    city: "Hawthorne",
    state: "California"
  }
}];

export const rawRockets = [{
  active:false,
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
  active:false,
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

export const rockets = [
  {
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
  }, {
    active:true,
    costLaunch:61200000,
    country:"United States",
    fristFight:"06, 04, 2010",
    name:"Falcon 9",
    stats: {
      boosters:0,
      diameter:12,
      height:229.6,
      mass:1207920
    },
    summary:"Falcon 9 is a two-stage rocket designed..."
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
    payload_mass:  {
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
    payload_mass:  {
      kg: 3000,
      lb: 6614
    },
  }
];

export const capsules = [
  {
    crew:0,
    diameter:12,
    heatShield:3000,
    height:23.6,
    mass:6000,
    name:"Dragon 1",
    yearInOrbit:2,
  }, {
    crew:0,
    diameter:12,
    heatShield:3000,
    height:23.6,
    mass:6000,
    name:"Dragon 2",
    yearInOrbit:2
  }
];

export const capsule = {
  crew:0,
  diameter:12,
  heatShield:3000,
  height:23.6,
  mass:6000,
  name:"Dragon 1",
  yearInOrbit:2,
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
  }
];

export const launchpads = [
  {
    details:"SpaceX original launch site..", 
    location:"Marshall Islands: Omelek Island",
    name:"Kwajalein Atoll Omelek Island",
    status:"retired",
    vehicles:["Falcon 1"]
  }, {
    details:"SpaceX east coast landing...", 
    location:"Florida: Cape Canaveral",
    name:"Cape Canaveral Air Force Station, Space Launch Complex 13",
    status:"active",
    vehicles:["Falcon 9"]
  } 
];

export const launchpad = {
  details:"SpaceX east coast landing...", 
  location:"Florida: Cape Canaveral",
  name:"Cape Canaveral Air Force Station, Space Launch Complex 13",
  status:"active",
  vehicles:["Falcon 9"]
}
