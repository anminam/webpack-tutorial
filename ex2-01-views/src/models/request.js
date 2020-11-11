import axios from "axios";

export default async function request(method, url, data) {
  try {
    const result = await axios({
      method,
      url,
      data,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}
