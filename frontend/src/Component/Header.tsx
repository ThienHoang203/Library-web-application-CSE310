import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user.type";

export default function Header() {
    const navigate = useNavigate();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    };
    const handleProfile = () => {
        navigate("/loginPage/user");
        window.location.reload();
    };
    const handleHome = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="bg-black p-2">
            <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
                <div className="flex w-[110px] h-[70px] mt-1 cursor-pointer " onClick={handleHome}>
                    <img src="img/logo.png" alt="library" loading="lazy" className="w-full h-full " />
                    <p className="text-[#acacac] mt-3 text-3xl font-medium hover:text-[#ccb552]">MyLibrary</p>
                </div>

                <div className="">
                    {user ? (
                        <div className="group">
                            <div
                                className="group flex-row-reverse flex p-5 text-white font-medium text-2xl hover:cursor-pointer hover:text-[#ccb552]"
                                onClick={() => navigate(`/loginPage/user`)}
                            >
                                <i className="fa-solid fa-user ml-3 pt-1"></i>

                                <p className="">{user.name}</p>
                            </div>
                            <div className="z-2000 absolute rounded-xl bg-[#2b3137] border-2 border-white text-white  top-18 right-39 w-40  p-2 hidden group-hover:block text-center">
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
                            className=" flex p-5 text-white font-medium text-2xl hover:cursor-pointer hover:text-[#ccb552]"
                            onClick={() => navigate("/loginPage")}
                        >
                            LOG IN
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
