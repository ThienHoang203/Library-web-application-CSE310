import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { UserContext } from "../global-states/UserContext";

export default function App() {
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            dispatch({ type: "authenticated", user: JSON.parse(storedUser) });
        }
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            dispatch({ type: "login", token: storedToken });
        }
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <Outlet />
        </>
    );
}
