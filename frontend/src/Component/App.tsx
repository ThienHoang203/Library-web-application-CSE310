import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import { useAxiosInterceptor } from "../Data/Api";
import { Slide, ToastContainer } from "react-toastify";
import { User } from "../types/user.type";
type State = {
    token: string;
    user: undefined | User;
};
const initialState: State = {
    token: "",
    user: undefined
};

type Action =
    | {
          type: "login";
          token: string;
      }
    | {
          type: "getUser";
          user: User;
      };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "login":
            return { ...state, token: action.token };
        case "getUser":
            return { ...state, user: action.user };
        default:
            return state;
    }
}

type AppContextType = State & { dispatch: React.Dispatch<Action> };

export const AppContext = createContext<AppContextType>({
    token: "",
    user: undefined,
    dispatch: () => {}
});
export default function App() {
    useAxiosInterceptor();
    const [{ token, user }, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{
                token,
                user,
                dispatch
            }}
        >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <Outlet />
        </AppContext.Provider>
    );
}
