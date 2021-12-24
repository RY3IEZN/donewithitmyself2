/** @format */

import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.68.100:9001/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
