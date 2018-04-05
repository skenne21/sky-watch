import * as apiKeys from '../apiKeys';

export const fetchBio = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v2/info`)
    const bio = await response.json();
    return bio;
  } catch(error) {
    throw error
  }
};

export const fetchSpaceXVeidos = async () => {
  try {

    // GET {base_URL}/search?part=snippet
                     // &q=soccer
                     // &type=channel
                     // &key={YOUR_API_KEY}
    const key = apiKeys.youTubeKey
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet
                    &q=spaceXmissions
                    &key=${key}`)

    const info = await response.json();
    const veidos = await cleanVeidos(info.items)
    return veidos
  } catch(error) {
    throw error;
  }
}

const cleanVeidos = async (items) => {
  items.map(veido => {
    console.log(veido)
  })
  debugger
}