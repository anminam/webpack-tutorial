import _req from "./request";

export default {
  async get() {
    try {
      return await _req("get", "/api/search");
    } catch (error) {
      throw error;
    }
  },
};
