import Category from "../Component/MainCategory";
import { useEffect, useState } from "react";
import { getUser } from "../Data/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState({
        title: "",
        author: "",
        stock: "",
        genre: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/search", { state: searchData });
    };

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token)
            getUser("/user/profile", token).then((result) => {
                if (!result) {
                    toast.error("dang nhap khong thanh cong");
                    return;
                }

                localStorage.setItem("user", JSON.stringify(result.data));
            });
    }, []);

    return (
        <>
            <div className="max-w-screen-xl px-4 mx-auto flex">
                <div className="w-full m-5">
                    <img src="/img/book.jpg" alt="image" className="w-[1100px] h-[500px] mx-auto" />
                </div>
            </div>
            <div className="search-section bg-black p-10 text-center mt-20">
                <div className="max-w-screen-xl px-4 mx-auto flex flex-wrap">
                    <div className="w-full">
                        <h2 className="text-[26px] text-[#acacac] font-bold relative pb-5 after:content-[''] after:absolute after:w-20 after:h-[3px] after:bg-[#ccb552] after:left-146 after:bottom-5 after:rounded">
                            Search
                        </h2>
                    </div>
                    <form className="search bg-[#acacac] p-9 mx-auto rounded-2xl" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            value={searchData.title}
                            onChange={handleChange}
                            className="w-[600px] h-10 px-2 text-[20px] border-3 border-transparent focus:border-[#ccb552] focus:outline-none rounded-md bg-white"
                        />
                        <button
                            type="submit"
                            className="ml-5 w-44 h-10 border-none rounded text-[20px] font-bold bg-gray-200 hover:bg-black hover:text-[#ccb552] hover:cursor-pointer"
                        >
                            <i className="fa fa-solid fa-magnifying-glass pr-2"></i>
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <Category />
            <Category />
        </>
    );
}
