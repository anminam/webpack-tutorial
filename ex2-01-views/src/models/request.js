import axios from "axios";
export default async function request(method, url, data) {
  try {
    const result = await axios({ url, method, data });
    debugger;
    return result;
  } catch (error) {
    throw error;
  }
}
