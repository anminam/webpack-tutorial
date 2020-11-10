import axios from "axios";

const model = {
  async get() {
    const { data } = await axios.get("/api/keywords");
    return data;
  },
};

export default model;

if (module.hot) {
  console.log("핫모듈켜짐");
}
