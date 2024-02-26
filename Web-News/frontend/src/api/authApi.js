import { configHeader } from "@/utils/settingSystem";
import axiosClient from "../utils/axiosClient";

export const authApi = {
  login: async (data) => {
    // data = {email: "",password:""}
    const { results } = await axiosClient.post("/auth/login", data);
    return results;
  },
  register: async (data) => {
    // data = {fullName: "Tran van teo", phone: "0123456789", address: "Can Tho", email: "teo@gmail.com", password: "12345678"}
    const { results } = await axiosClient.post("/auth/register", data);
    return results;
  },

  updateProfile: async (data) => {
    // data ={address:""} || ...

    // Config header
    const config = configHeader();

    const { results } = await axiosClient.post(`/auth`, data, config);
    return results;
  },
};
