import Axios from "axios";

const scrapePoem = () => {
  let url = "https://poets.org/poem-a-day"
  Axios.get(url).then(res => console.log(res))
}