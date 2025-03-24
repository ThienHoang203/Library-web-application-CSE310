import { Link, useNavigate } from "react-router-dom";

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#2b3137] h-[30px] leading-[30px]">
        <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
          <img src="" alt="" />
          <p>
            <Link to="/loginPage">
              <span className="inline-block text-white font-semibold hover:cursor-pointer hover:scale-110 hover:font-bold transition-transform">
                LOG IN
              </span>
            </Link>
          </p>
        </div>
      </div>
      <header className="sticky -top-1 z-1000">
        <nav className="bg-black h-[90px]">
          <div className="max-w-screen-xl px-5 mx-auto flex justify-between">
            <div
              className="flex w-[110px] h-[70px] mt-1 cursor-pointer "
              onClick={() => navigate(`/`)}
            >
              <img
                src="img/logo.png"
                alt="library"
                loading="lazy"
                className="w-full h-full mt-2"
              />
              <h2 className="text-[#acacac] mt-4 text-3xl font-medium hover:text-[#ccb552]">
                MyLibrary
              </h2>
            </div>
            <ul className=" mt-7">
              <li className="inline-block relative ">
                <a
                  href="#"
                  className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]"
                >
                  TRANG CHỦ
                </a>
              </li>
              <li className="inline-block relative ">
                <a
                  href="#"
                  className="px-5 text-[#acacac] font-bold hover:text-[#ccb552]"
                >
                  GIỚI THIỆU
                </a>
              </li>
              <li className="inline-block relative ">
                <a
                  href="#"
                  className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]"
                >
                  DỊCH VỤ
                </a>
              </li>
              <li className="inline-block relative ">
                <a
                  href="#"
                  className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]"
                >
                  TIN TỨC
                </a>
              </li>
              <li className="inline-block relative ">
                <a
                  href="#"
                  className=" px-5 text-[#acacac] font-bold hover:text-[#ccb552]"
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
