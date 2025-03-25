import axios, { HttpStatusCode } from "axios";
import { AppContext } from "../Component/App";
import { useContext } from "react";
import { Book, CreateBookType } from "../types/book.type";
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

export const searchBooks = async (endpoint: string, params: Record<string, string>): Promise<Book[] | null> => {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
    );
    console.log({ params, endpoint });
    const response = await api.get(endpoint, {
        params: filteredParams
    });

    if (response.status !== HttpStatusCode.Ok || !response.data) return null;
    console.log(response);

    return response.data.data.books;
};

export async function fetchCreateBook(endPoint: string, data: CreateBookType, token: string) {
    const formData = new FormData();

    formData.append("author", data.author);
    formData.append("title", data.title);
    formData.append("format", data.format);

    if (data.genre) formData.append("genre", data.genre);
    if (data.description) formData.append("description", data.description);
    if (data.stock) formData.append("stock", data.stock.toString());
    if (data.publishedDate) formData.append("publishedDate", data.publishedDate.toISOString());
    if (data.version) formData.append("version", data.version.toString());

    if (data.ebookFile && data.ebookFile[0]) {
        formData.append("ebookFile", data.ebookFile[0]);
    }

    if (data.coverImageFile && data.coverImageFile[0]) {
        formData.append("coverImageFile", data.coverImageFile[0]);
    }

    console.log(formData);

    const response = await api.post(endPoint, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
    });
    console.log({ response: response.data });

    if (response.status !== HttpStatusCode.Created || typeof response.data === "undefined") {
        console.log({ response });
        return null;
    }

    return response.data.data;
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

export const LoginNormal = async (
    endpoint: string,
    data: LoginType
): Promise<{ token: string; exprires_in: string } | undefined> => {
    const response = await api.post(endpoint, data);

    if (!response.data || !response.data.data || !response.data.data.token) throw new Error("Lỗi");

    return { token: response.data.data.token, exprires_in: response.data.data.expries_in };
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
