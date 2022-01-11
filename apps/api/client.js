/** @format */

import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.106.81:9000/api",
});

export default apiClient;
