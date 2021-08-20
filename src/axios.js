import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// this is the access url tokenn
// https://api.themoviedb.org/3/trending/all/week?api_key=b121aaf640101253ac097ec790655f99&language=en-US
