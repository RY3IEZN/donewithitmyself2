/** @format */

import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.68.100:9001/api",
});

export default apiClient;
