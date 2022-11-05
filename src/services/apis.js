import { publicRequest } from "./axiosConfig";

export const getUsers = async (page = 1, result = 10) => {
  const response = await publicRequest.get(`/?page=${page}&results=${result}`);
  return response.data;
};
