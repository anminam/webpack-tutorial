import _req from "./request";

export default {
  async get() {
    return await _req("get", "/api/search");
  },
};
