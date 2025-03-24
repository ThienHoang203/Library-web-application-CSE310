import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { BookGerne } from "../types/book.type";

export default function SideMenu() {
    const category = Object.values(BookGerne);
    console.log(category);

    return (
        <>
            <Header />
            <div className="overflow-hidden text-center">
                <div className="w-screen flex flex-wrap">
                    <form className="max-w-screen-xl mx-auto p-5 my-4 ">
                        <input
                            type="text"
                            className="w-[600px] p-2 border-3 border-[#ccb552] rounded-2xl text-[20px] outline-none"
                        />
                        <button
                            type="button"
                            className="ml-5 w-[180px] hover:cursor-pointer border-3 border-[#ccb552] rounded-2xl text-[20px] font-bold pb-1 hover:border-[black] hover:bg-black hover:text-[#ccb552]"
                        >
                            <i className="fa fa-solid fa-magnifying-glass pr-3"></i>
                            Search
                        </button>
                    </form>
                    <div className="w-screen flex">
                        <div className="w-[25%] sidebar bg-gradient-to-b from-[black] to-[#305da0] text-white font-medium px-5 py-5">
                            <ul className="">
                                {category.map((post) => (
                                    <li className="flex hover:cursor-pointer px-6 py-4 hover:bg-[#305da0] rounded-2xl">
                                        {post}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-[72%] mx-auto bg-gray-200">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
