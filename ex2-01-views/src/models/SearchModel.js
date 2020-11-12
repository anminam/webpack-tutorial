import request from "./request";
export default {
  async get() {
    try {
      const data = await request("get", "api/search");
      debugger;
    } catch (error) {
      debugger;
    }
  },
};
