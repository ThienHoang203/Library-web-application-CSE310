import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
export default function Header() {
  const navigate = useNavigate();

  const { token } = useContext(AppContext);
  useEffect(() => {
    console.log(token);
  }, [token]);

  
  return (
    <div className="bg-black p-2">
      <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
        <div
          className="flex w-[110px] h-[70px] mt-1 cursor-pointer "
          onClick={() => navigate(`/`)}
        >
          <img
            src="img/logo.png"
            alt="library"
            loading="lazy"
            className="w-full h-full "
          />
          <p className="text-[#acacac] mt-3 text-3xl font-medium hover:text-[#ccb552]">
            MyLibrary
          </p>
        </div>

        <div className="">
          <div
            className=" flex-row-reverse flex p-5 text-white font-medium text-2xl hover:cursor-pointer hover:text-[#ccb552]"
            onClick={() => navigate(`/loginPage/user`)}
          >
            <i className="fa-solid fa-user ml-3 pt-1"></i>

            <p className="">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
