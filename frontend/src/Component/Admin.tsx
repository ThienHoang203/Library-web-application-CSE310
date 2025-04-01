import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { RegisterType } from "../Data/Api";
import { useForm } from "react-hook-form";

export default function Admin() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
  });

  const onSubmit = (user: RegisterType) => {
    console.log("Register Success:", typeof user.phoneNumber);
    //  RegisterNormal("/auth/signup", user).then((result) => {
    //    console.log(result);
    //  });
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="bg-blue-500 w-[380px] h-screen">
        <div className="w-full px-6">
          <p className="text-3xl font-medium h-[80px] text-white text-center border-b-3 p-5 border-[rgba(255,255,255,0.3)]" 
          onClick={() =>navigate("/")}>
            MyLibrary
          </p>
        </div>
        <div className="w-full px-16">
          <p className="text-2xl font-medium h-[80px] text-[rgba(255,255,255,0.8)] text-center border-b-3 p-5 border-[rgba(255,255,255,0.3)]">
            DashBoard
          </p>
          <p
            className="text-center p-2 mt-3 hover:bg-blue-400 rounded text-[18px] font-medium text-[rgba(255,255,255,0.8)]"
            onClick={() => navigate("/admin/user")}
          >
            User
          </p>
          <p
            className="text-center p-2 mt-3 hover:bg-blue-400 rounded text-[18px] font-medium text-[rgba(255,255,255,0.8)]"
            onClick={() => navigate("/admin/book")}
          >
            Book
          </p>
        </div>
      </div>

      <div className="bg-white w-full h-screen flex flex-col px-5">
        <div className="w-full h-[80px] bg-white border-b-3 border-[rgba(0,0,0,0.4)] flex justify-between">
          <div className="h-[70px] w-[440px]">
            <button className="px-3 bg-blue-500 mt-4 ml-10 p-2 rounded border-2 cursor-pointer text-white hover:text-blue-500 hover:bg-white hover:boder-blue-500">
              Add Book
            </button>
            <button
              className="px-3 bg-blue-500 mt-4 ml-10 p-2 rounded border-2 cursor-pointer text-white hover:text-blue-500 hover:bg-white hover:boder-blue-500"
              onClick={() => setShowForm(!showForm)}
            >
              Add New Admin
            </button>
          </div>
          <div
            className=" h-[70px] w-[440px] flex-row-reverse pt-5   flex p-2 text-black font-medium text-2xl hover:cursor-pointer hover:text-[#ccb552]"
            onClick={() => navigate(`/loginPage/user`)}
          >
            <img
              src="/img/book.jpg"
              alt="User Avatar"
              className="w-11 h-11 rounded-full ml-2"
            />

            <p className=" pt-1">Name</p>
          </div>
        </div>
        <div className=" w-full overflow-auto bg-white shadow-lg rounded-lg mt-5">
          <Outlet />
        </div>
      </div>

      <div>
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] bg-opacity-50 text-center">
           
            <form
              action="#"
              className="pb-12 px-12 bg-gray-400 w-120 relative"
              onSubmit={handleSubmit(onSubmit)}
            >
              
               <div className="absolute top-1 right-1 cursor-pointer bg-red-500 pb-1 px-3 text-xl rounded text-white border-2 border-red-500 hover:text-red-500 hover:bg-white"
               onClick={()=> setShowForm(!showForm)}>x</div>
              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className="absolute right-2 text-xl leading-[50px]">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  required
                  className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                  {...register("name", {
                    required: "You must enter your name",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.name.message}
                  </p>
                )}
                <label
                  htmlFor="name"
                  className="absolute left-2 font-medium -translate-y-1/2  top-[-2px] "
                >
                  Full Name
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className=" absolute right-2 text-xl leading-[50px]">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  id="username"
                  type="text"
                  required
                  className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                  {...register("username", {
                    required: "You must enter your username",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.username.message}
                  </p>
                )}
                <label
                  htmlFor="username"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  User name
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className=" icon absolute right-2 text-xl leading-[50px]">
                  {showPassword ? (
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className="fa-solid fa-eye"
                    ></i>
                  ) : (
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  )}
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                  {...register("password", {
                    required: "You must enter your password",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.password.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  Password
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className=" icon absolute right-2 text-xl leading-[50px]">
                  {showConfirmPassword ? (
                    <i
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="fa-solid fa-eye"
                    ></i>
                  ) : (
                    <i
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="fa-solid fa-eye-slash"
                    ></i>
                  )}
                </span>
                <input
                  id="password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                />

                <label
                  htmlFor="password"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  Confirm Password
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className=" absolute right-2 text-xl leading-[50px]">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  required
                  className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                  {...register("email", {
                    required: "You must enter your email",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.email.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  Email
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <span className="absolute right-2 text-xl leading-[50px]">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <input
                  type="text"
                  id="phone"
                  required
                  className="peer w-full h-full outline-none pr-11 pl-2 font-medium"
                  {...register("phoneNumber", {
                    required: "You must enter your phone",
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.phoneNumber.message}
                  </p>
                )}
                <label
                  htmlFor="phone"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  Phone Number
                </label>
              </div>

              <div className="relative w-full h-[50px] border-b-2 my-[30px]">
                <input
                  type="date"
                  id="birthDate"
                  required
                  className="peer w-full h-full outline-none pr-2 pl-2 font-medium"
                  {...register("birthDate", {
                    required: "You must enter your phone",
                  })}
                />
                {errors.birthDate && (
                  <p className="text-red-500 m-2 font-medium text-right">
                    {errors.birthDate.message}
                  </p>
                )}
                <label
                  htmlFor="phone"
                  className="absolute left-2 font-medium -translate-y-1/2 top-[-2px] "
                >
                  Birth Date
                </label>
              </div>

              <div className="font-medium m-5 flex justify-between">
                <label htmlFor="">
                  <input type="checkbox" className="accent-black mr-2 h-3" />{" "}
                  Agree something
                </label>
              </div>
              <button
                type="submit"
                className="w-full h-[45px] text-white text-xl font-medium bg-black rounded-lg hover:cursor-pointer"
              >
                Add Admin Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
