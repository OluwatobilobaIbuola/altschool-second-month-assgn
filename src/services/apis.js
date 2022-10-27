import { publicRequest } from "./axiosConfig";

export const getUsers = async (page = 1) => {
  const response = await publicRequest.get(`/?page=${page}&results=10`);
  return response.data;
};
