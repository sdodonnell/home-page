import axios from 'axios';

export const parseNYT = async () => {
  const apiKey = "UdXZQ4gJgtiVIJyyLCqNlXPm7SearKKa";
  let topStories = []
  await axios
    .get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then(result => {
      topStories.push(...result.data.results)
    })
  
  return topStories
}