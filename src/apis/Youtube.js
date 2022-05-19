import axios from "axios";

const KEY = "AIzaSyDteQaxvVCF4wy-mY10qoJpeAk8MoIrafo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResutls: 5,
    type: "video",
  },
});
