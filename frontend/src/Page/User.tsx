import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../global-states/UserContext";
import UpdateUser from "../Component/UpdateUser";
import { useForm } from "react-hook-form";
import { ChangePasswordType } from "../types/auth.type";
import ErrorFormMessage from "../Component/ErrorFormMessage";
import { fetchChangePassword } from "../Data/Api";
import { toast } from "react-toastify";

export default function User() {
  const navigate = useNavigate();

  const [showUser, setShowUser] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { accessToken, user } = useContext(UserContext);

  function onSubmit(data: ChangePasswordType) {
    fetchChangePassword(data, accessToken?.token ?? "").then(() => {
      toast.success("Updated");
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordType>({
    mode: "onBlur",
  });
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex">
      <div className="bg-gray-900 text-white rounded-lg w-[440px] p-4 text-center my-4">
        <img
          src="/img/book.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <h2 className="text-lg font-bold">{user?.name}</h2>
        {/* <p className="italic text-gray-400">{diffYears}</p> */}
        <div className="mt-4 p-4 text-left border-b-3">
          {/* <p className="p-3">
                        <strong>ĐÁNH DẤU</strong> <span className="float-right font-medium">0</span>
                    </p>
                    <p className="p-3">
                        <strong>ĐÁNH 
                        GIÁ</strong> <span className="float-right font-medium">0</span>
                    </p> */}
          <p className="p-3">
            <strong>Email</strong>{" "}
            <span className="float-right font-medium">{user?.email}</span>
          </p>
          <p className="p-3">
            <strong>Membership Level</strong>{" "}
            <span className="float-right font-medium">
              {user?.membershipLevel}
            </span>
          </p>
          <p className="p-3">
            <strong>Phone Number</strong>{" "}
            <span className="float-right font-medium">{user?.phoneNumber}</span>
          </p>
        </div>
        <div className="p-4 flex flex-wrap">
          <button
            onClick={() => setShowUser(true)}
            className="w-full cursor-pointer border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white"
          >
            Change User Information
          </button>
          <button
            onClick={() => setShowPass(true)}
            className="w-full cursor-pointer border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white"
          >
            Change Password
          </button>
          <button className="w-full cursor-pointer border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Rented Book
          </button>
          <button className="w-full cursor-pointer border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Posted Book
          </button>
          <button className="w-full cursor-pointer border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Storage
          </button>
          {user && user?.role === "admin" && (
            <button
              className="w-full border-blue-400 cursor-pointer border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white"
              onClick={() => navigate(`/admin`)}
            >
              Admin Page
            </button>
          )}
        </div>
      </div>
      <div className="bg-gray-200 text-white rounded-lg w-[700px] p-2 text-center my-4 ml-1">
        <div></div>
      </div>

      {showPass && (
        <div className="text-center fixed top-40 right-[30%] items-center justify-center  mx-auto my-5  w-xl border-2 bg-white border-black rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,1)]">
          <button
            onClick={() => setShowPass(false)}
            className="absolute right-[50px] top-[10px] text-black font-bold px-3 py-1.5 rounded-md border border-black  hover:cursor-pointer hover:text-white hover:bg-black  transform:hover  duration-300 ease"
          >
            X
          </button>
          <h2 className="font-medium text-[25px] pt-3 pb-1">
            Change User Information
          </h2>
          <form
            noValidate
            action="#"
            className="pb-5 px-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative w-full h-[50px] border-b-2 my-[20px]">
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
                {...register("oldPassword", {
                  required: "You must enter your password",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu phải có ít nhất 8 kí tự",
                  },
                })}
              />
              {errors.oldPassword && (
                <ErrorFormMessage message={errors.oldPassword.message} />
              )}

              <label
                htmlFor="password"
                className="absolute left-2 font-medium -translate-y-1/3 top-[-2px] "
              >
                Old Password
              </label>
            </div>

            <div className="relative w-full h-[50px] border-b-2 my-[20px]">
              <span className=" icon absolute right-2 text-xl leading-[50px]">
                {showConfirmPassword ? (
                  <i
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="fa-solid fa-eye-slash"
                  ></i>
                )}
              </span>
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                className=" w-full h-full outline-none pr-11 pl-2 font-medium"
                {...register("newPassword", {
                  required: "You must enter your password again",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu phải có ít nhất 8 kí tự",
                  },
                })}
              />
              {errors.newPassword && (
                <ErrorFormMessage message={errors.newPassword.message} />
              )}
              <label
                htmlFor="password"
                className="absolute left-2 font-medium -translate-y-1/3 top-[-2px] "
              >
                New Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] text-white text-xl font-medium bg-black rounded-lg hover:cursor-pointer"
            >
              Change
            </button>
          </form>
        </div>
      )}
      {showUser && (
        <UpdateUser
          setClose={() => {
            setShowUser(false);
          }}
        />
      )}
    </div>
  );
}
