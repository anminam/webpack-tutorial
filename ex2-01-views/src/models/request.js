import axios from "axios";

export default async function request(method, url, data) {
  const result = await axios({
    method,
    url,
    data,
  });

  return result.data;
}
