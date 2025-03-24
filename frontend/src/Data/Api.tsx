import axios from "axios";
import { AppContext } from "../Component/App";
import { useContext } from "react";

export type LoginType = {
  username: string;
  password: string;
};
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  membershipLevel: string;
  role: string;
  status: string;
  created_at: Date;
  updated_at: Date;
};
export type RegisterType = {
  name: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
};

const API_BASE_URL = "http://localhost:5050/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



export const useAxiosInterceptor = () => {
  const { token } = useContext(AppContext);

  api.interceptors.request.use(
      (config) => {
          if (token) {
              config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
      },
      (error) => Promise.reject(error)
  );
};


export const getAll = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};



export const createUser = async (endpoint: string) => {
  try {
    const data = {
      title: "Hello Axios",
      body: "Đây là nội dung bài viết",
      userId: 1,
    };
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};



export const LoginNormal = async (endpoint: string, data: LoginType) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};



export const RegisterNormal = async (endpoint: string, data: RegisterType) => {
  try {
    const response = await api.post(endpoint, data);
    console.log(response);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};




export const deleteById = async (endpoint: string, id: string | number) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};



export const getById = async (endpoint: string, id: string | number) => {
  try {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Lỗi API:",
        error.response?.status,
        error.response?.data?.message
      );
      return {
        statusCode: error.response?.status || 500,
        status: "error",
        message: error.response?.data?.message || "Lỗi không xác định",
      };
    }
    return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
  }
};
