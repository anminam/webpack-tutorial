import request from "./request";
export default {
  async get() {
    const result = await request("get", "api/history");
    return result;
  },
};
