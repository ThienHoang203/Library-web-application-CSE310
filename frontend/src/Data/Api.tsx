import axios, { HttpStatusCode } from "axios";
import { AppContext } from "../Component/App";
import { useContext } from "react";
import { Book } from "../types/book.type";
import { LoginType, RegisterType } from "../types/auth.type";
import { User } from "../types/user.type";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:5050/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export async function fetchGetBooks(endpoint: string): Promise<Book[] | null> {
    const response = await api.get(endpoint);

    if (response.status !== HttpStatusCode.Ok || typeof response.data === "undefined") {
        console.log({ response });
        return null;
    }

    return response.data.data.books;
}

export async function fetchGetUsers(endpoint: string, token: string): Promise<User[] | null> {
    try {
        const response = await api.get(endpoint, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);

        return response.data.data.users;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            console.log({
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
            });
            return null;
        }

        return null;
    }
}

export const getUser = async (endpoint: string, token: string) => {
    try {
        const response = await api.get(endpoint, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
            };
        }
        return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
    }
};

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
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
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
            userId: 1
        };
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
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
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
            };
        }
        return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
    }
};

export async function fetchRegisterUser(endpoint: string, data: RegisterType) {
    const response = await api.post(endpoint, data);
    console.log(response);
    toast.success("Đăng kí thành công!");
    return response.data;
}

export const deleteById = async (endpoint: string, id: string | number) => {
    try {
        const response = await api.delete(`${endpoint}/${id}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
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
            console.error("Lỗi API:", error.response?.status, error.response?.data?.message);
            return {
                statusCode: error.response?.status || 500,
                status: "error",
                message: error.response?.data?.message || "Lỗi không xác định"
            };
        }
        return { statusCode: 500, status: "error", message: "Lỗi không xác định" };
    }
};
