import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Error from "./Page/Error";
import OutletLogin from "./Component/OutletLogin";
import SideMenu from "./Component/SideMenu";
import SearchResult from "./Component/SearchResult";
import Single from "./Page/Single";
import User from "./Page/User";
import App from "./Component/App";
import UserManagement from "./Page/UserManagement";
import BookManagement from "./Page/BookManagement";
import CreateAdminPage from "./Page/CreateAdminPage";
import Admin from "./Page/Admin";
import Register from "./Page/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/loginPage",
                element: <OutletLogin />,
                children: [
                    {
                        index: true,
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Register redirectPage="/" />
                    },

                    {
                        path: "user",
                        element: <User />
                    }
                ]
            },
            {
                path: "/search",
                element: <SideMenu />,
                children: [
                    {
                        index: true,
                        element: <SearchResult />
                    },
                    {
                        path: "single",
                        element: <Single />
                    }
                ]
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        path: "user",
                        element: <UserManagement />
                    },
                    {
                        path: "book",
                        element: <BookManagement />
                    },
                    {
                        path: "add-new-admin",
                        element: <CreateAdminPage />
                    }
                ]
            }
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
