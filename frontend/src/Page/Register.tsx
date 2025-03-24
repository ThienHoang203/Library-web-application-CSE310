import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterNormal, RegisterType } from "../Data/Api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
  });

  const onSubmit = (user: RegisterType) => {
    
    console.log("Register Success:",typeof user.phoneNumber);
    RegisterNormal("/auth/signup", user).then((result) => {
      console.log(result);
    });
    navigate("/");
  };

  return (
    <div className="text-center wrapper-login mx-auto my-5 relative w-xl border-2 border-black rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,1)]">
      <h2 className="font-medium text-[35px] pt-10">Register</h2>

      <form
        action="#"
        className="pb-12 px-12"
        onSubmit={handleSubmit(onSubmit)}
      >


        <div className="relative w-full h-[50px] border-b-2 my-[30px]">
          <span className="absolute right-2 text-xl leading-[50px]">
            <i className="fa-solid fa-user"></i>
          </span>
          <input
            type="text"
            id="name"
            required
            className=" w-full h-full outline-none pr-11 pl-2 font-medium"
            {...register("name", { required: "You must enter your name" })}
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
            <input type="checkbox" className="accent-black mr-2 h-3" /> Agree
            something
          </label>
        </div>
        <button
          type="submit"
          className="w-full h-[45px] text-white text-xl font-medium bg-black rounded-lg hover:cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}
