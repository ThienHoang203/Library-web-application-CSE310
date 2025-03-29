import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types/user.type";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import NavHeader from "./NavHeader";
import { UserContext } from "../global-states/UserContext";
import { toast } from "react-toastify";

export default function Header() {
    const navigate = useNavigate();
    const { isLoginRoute } = useCurrentRoute();

    const userContext = useContext(UserContext);
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else if (userContext.user) {
            setUser(userContext.user);
        } else {
            setUser(null);
        }
    }, [userContext.user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        userContext.dispatch({ type: "logout" });
        navigate("/", { relative: "route" });
        toast.success("Đăng xuất thành công", { autoClose: 500 });
    };

    const handleHome = () => {
        navigate("/", {});
    };

    return (
        <header className=" bg-black p-2 sticky z-1000 -top-0 h-[100px] w-screen">
            <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
                <div className="flex w-[110px] h-[70px] mt-1 cursor-pointer " onClick={handleHome}>
                    <img src="img/logo.png" alt="library" loading="lazy" className="w-full h-full " />
                    <p className="text-[#acacac] mt-3 text-3xl font-medium hover:text-[#ccb552]">MyLibrary</p>
                </div>

                <div className="">
                    {user ? (
                        <div className="group">
                            <div className="relative group flex-row-reverse flex p-5 text-white font-medium text-2xl hover:cursor-pointer hover:text-[#ccb552]">
                                <i className="fa-solid fa-user ml-3 pt-1"></i>

                                <p className="">{user.name}</p>
                                <div className="z-2000 absolute rounded-xl bg-[#2b3137] border-2 border-white text-white  top-18  w-40  p-2 hidden group-hover:block text-center">
                                    <Link to={"/user"} relative="path">
                                        <span className="my-1 py-1 rounded font-medium hover:bg-white hover:text-black cursor-pointer">
                                            Profile
                                        </span>
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="my-1 py-1 rounded font-medium hover:bg-white hover:text-black cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
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

            {isLoginRoute ? null : <NavHeader />}
        </header>
    );
}
