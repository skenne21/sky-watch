export const fetchBio = async () => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v2/info`)
    const bio = await response.json();
    return bio;
  } catch(error) {
    throw error
  }
};