import axios from "axios";

const KEY = "AIzaSyAERoqR73h2onhOxaKaM1I25Gp0Zee_yMA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
