import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../global-states/UserContext";
import { calculateJoinTime } from "../utils/date-helper";
import UpdateUserInfor from "../Component/UpdateUserInfor";
import ChangePassword from "../Component/ChangePassword";

export default function User() {
    const navigate = useNavigate();
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

    const { user } = useContext(UserContext);

    function Button({
        children,
        redirectTo,
        onClick,
        ...props
    }: ComponentPropsWithoutRef<"button"> & { children?: React.ReactNode; redirectTo?: string }) {
        return (
            <button
                {...props}
                onClick={!redirectTo ? onClick : () => navigate(redirectTo)}
                className="w-full border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white"
            >
                {children}
            </button>
        );
    }

    return !user ? (
        <div className="flex w-screen h-screen justify-center items-center">
            <Link to={"/loginPage"} replace>
                <button className="font-semibold text-xl border-2 rounded-md py-2 px-3 hover:text-white hover:bg-black transition:color ease duration-200">
                    To login Page
                </button>
            </Link>
        </div>
    ) : (
        <div className="max-w-screen-xl mx-auto px-4 flex">
            {showUpdateForm && <UpdateUserInfor user={user} closeForm={() => setShowUpdateForm(false)} />}
            {showChangePasswordForm && <ChangePassword closeForm={() => setShowChangePasswordForm(false)} />}
            <div className="bg-gray-900 text-white rounded-lg w-[440px] p-4 text-center my-4">
                <img src="/img/book.jpg" alt="User Avatar" className="w-20 h-20 rounded-full mx-auto mb-2" />
                <h2 className="text-lg font-bold">{user && user.name}</h2>
                <p className="italic text-gray-400">Tham gia {user && calculateJoinTime(user.created_at)}</p>
                <div className="mt-4 p-4 text-left border-b-3">
                    <p className="p-3">
                        <strong>ĐÁNH DẤU</strong> <span className="float-right font-medium">189</span>
                    </p>
                    <p className="p-3">
                        <strong>ĐÁNH GIÁ</strong> <span className="float-right font-medium">1</span>
                    </p>
                </div>
                <div className="p-4 flex flex-wrap">
                    {user && (
                        <Button
                            onClick={() => {
                                setShowUpdateForm(true);
                                setShowChangePasswordForm(false);
                            }}
                        >
                            Thay đổi thông tin
                        </Button>
                    )}
                    {user && (
                        <Button
                            onClick={() => {
                                setShowChangePasswordForm(true);
                                setShowUpdateForm(false);
                            }}
                        >
                            Đổi mật khẩu
                        </Button>
                    )}
                    <Button>Sách đã mượn</Button>
                    <Button>Sách đã đăng</Button>
                    <Button>Tủ truyện</Button>
                    {user && user.role === "admin" && <Button redirectTo="/admin">Trang Admin</Button>}
                </div>
            </div>
            <div className="bg-gray-200 text-white rounded-lg w-[700px] p-2 text-center my-4 ml-1">
                <div></div>
            </div>
        </div>
    );
}
