import request from "./request";
export default {
  async get() {
    const data = await request("get", "/api/keywords");
    return data;
  },
};
