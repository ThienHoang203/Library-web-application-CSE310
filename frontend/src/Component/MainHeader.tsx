import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";

export default function MainHeader() {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        console.log({ storedUser });

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleHome = () => {
        navigate("/");
        window.location.reload();
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    const handleProfile = () => {
        navigate("/loginPage/user");
        window.location.reload();
    };

    return (
        <>
            <div className="bg-[#2b3137] h-[30px] leading-[30px]">
                <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
                    <img src="" alt="" />
                    {user ? (
                        <div className="group">
                            <p className=" inline-block text-white font-semibold hover:cursor-pointer hover:text-[#ccb552] ">
                                {user.name}
                            </p>
                            <div className="z-2000 absolute rounded-xl bg-[#2b3137] border-2 border-white text-white  top-7 right-32 w-40  p-2 hidden group-hover:block text-center">
                                <ul>
                                    <li
                                        className="my-1 py-1 rounded font-medium hover:bg-white hover:text-black cursor-pointer"
                                        onClick={handleProfile}
                                    >
                                        Profile
                                    </li>
                                    <li
                                        className="my-1 py-1 rounded font-medium hover:bg-white hover:text-black cursor-pointer"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p
                            className="inline-block text-white font-semibold hover:cursor-pointer hover:scale-110 hover:font-bold transition-transform"
                            onClick={() => navigate("/loginPage")}
                        >
                            LOG IN
                        </p>
                    )}
                </div>
            </div>
            <header className="sticky -top-1 z-1000">
                <nav className="bg-black h-[90px]">
                    <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
                        <div className="flex w-[110px] h-[70px] mt-1 cursor-pointer " onClick={handleHome}>
                            <img src="img/logo.png" alt="library" loading="lazy" className="w-full h-full mt-2" />
                            <h2 className="text-[#acacac] mt-4 text-3xl font-medium hover:text-[#ccb552]">MyLibrary</h2>
                        </div>
                        <ul className=" mt-7">
                            <li className="inline-block relative ">
                                <a href="#" className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">
                                    TRANG CHỦ
                                </a>
                            </li>
                            <li className="inline-block relative ">
                                <a href="#" className="px-5 text-[#acacac] font-bold hover:text-[#ccb552]">
                                    GIỚI THIỆU
                                </a>
                            </li>
                            <li className="inline-block relative ">
                                <a href="#" className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">
                                    DỊCH VỤ
                                </a>
                            </li>
                            <li className="inline-block relative ">
                                <a href="#" className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">
                                    TIN TỨC
                                </a>
                            </li>
                            <li className="inline-block relative ">
                                <a href="#" className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]">
                                    LIÊN HỆ
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
