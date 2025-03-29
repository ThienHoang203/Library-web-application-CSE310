import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Error from "./Page/Error";
import SideMenu from "./Component/SideMenu";
import SearchResult from "./Component/SearchResult";
import Single from "./Page/Single";
import User from "./Page/User";
import App from "./Page/App";
import UserManagement from "./Page/UserManagement";
import BookManagement from "./Page/BookManagement";
import Admin from "./Page/Admin";
import Register from "./Page/Register";
import UserPage from "./Page/UserPage";
import PDFViewer from "./Component/PDFViewer";
const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <UserPage />,
                children: [
                    {
                        path: "/",
                        element: <Home />
                    },
                    {
                        path: "loginPage",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Register redirectPage="/" endPoint="auth/signup" />
                    },

                    {
                        path: "user",
                        element: <User />
                    },
                    {
                        path: "search",
                        element: <SideMenu />,
                        children: [
                            {
                                index: true,
                                element: <SearchResult />
                            },
                            {
                                path: ":bookId",
                                element: <Single />
                            }
                        ]
                    },
                    {
                        path: "view/:fileName",
                        element: <PDFViewer />
                    }
                ]
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        path: "users",
                        element: <UserManagement />
                    },
                    {
                        path: "books",
                        element: <BookManagement />
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
