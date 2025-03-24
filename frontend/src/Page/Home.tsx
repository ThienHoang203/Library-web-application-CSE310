import Category from "../Component/MainCategory";
import MainHeader from "../Component/MainHeader";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { getUser } from "../Data/Api";
import { toast } from "react-toastify";

export default function Home() {
    const navigate = useNavigate();

    function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search") as string;
        navigate(`/search?search=${search}`);
    }
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token)
            getUser("/user/profile", token).then((result) => {
                console.log({ result });

                if (!result) {
                    toast.error("dang nhap khong thanh cong");
                    return;
                }
                toast.success("dang nhap  thanh cong");
                localStorage.setItem("user", JSON.stringify(result.data));
            });
    }, [token]);

