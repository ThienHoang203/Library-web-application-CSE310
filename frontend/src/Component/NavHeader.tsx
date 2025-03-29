import { NavLink } from "react-router-dom";

export default function NavHeader() {
    return (
        <div className="bg-black h-[60px] w-screen absolute left-0">
            <nav className="max-w-screen-xl px-3 pt-5  mt-0 flex items-center justify-center uppercase mx-auto">
                <NavLink
                    to={"/"}
                    className={({ isActive }) => `inline-block relative ${isActive ? "[&>span]:text-[#ccb552]" : ""}`}
                >
                    <span className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">Trang chủ</span>
                </NavLink>

                <NavLink
                    to={"/category"}
                    className={({ isActive }) => `inline-block relative ${isActive ? "[&>span]:text-[#ccb552]" : ""}`}
                >
                    <span className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">Thể loại</span>
                </NavLink>

                <NavLink
                    to={"/search"}
                    className={({ isActive }) => `inline-block relative ${isActive ? "[&>span]:text-[#ccb552]" : ""}`}
                >
                    <span className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">Đọc nhiều nhất</span>
                </NavLink>

                <NavLink
                    to={"/search"}
                    className={({ isActive }) => `inline-block relative ${isActive ? "[&>span]:text-[#ccb552]" : ""}`}
                >
                    <span className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">Bình luận</span>
                </NavLink>
            </nav>
        </div>
    );
}
