import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black">
      <div className=" max-w-screen-xl mx-auto p-5  flex">
        <div className="w-[440px] p-4 text-center my-4">
          <img
            src="/img/logo.png"
            alt="library"
            loading="lazy"
            onClick={() => navigate(`/`)}
            className="flex w-[200px] h-[120px] mt-1 cursor-pointer mb-3"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.812762827727!2d106.66393477427512!3d11.052660454039328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1d7df763eaf%3A0xf4323e44f2867057!2zxJDhuqFpIGjhu41jIFF14buRYyB04bq_IE1p4buBbiDEkMO0bmc!5e0!3m2!1svi!2s!4v1740326038531!5m2!1svi!2s"
            width="300"
            height="210"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-[440px] p-4 my-4">
          <div className="text-[#acacac]">
            <h2 className="text-[16px] uppercase font-bold relative pb-5 text-left after:content-[''] after:absolute after:w-20 after:h-[3px] after:bg-[#ccb552] after:left-0 after:bottom-[10px] after:rounded">
              công ty
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 font-bold"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 font-bold"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 font-bold"
                >
                  Trang chủ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[440px] p-4 my-4">
          <div className="text-[#acacac]">
            <h2 className="text-[16px] uppercase font-bold relative pb-5 text-left after:content-[''] after:absolute after:w-20 after:h-[3px] after:bg-[#ccb552] after:left-0 after:bottom-[10px] after:rounded">
              công ty
            </h2>

            <div className="flex flex-wrap my-3">
              <div className="w-[150px] ">
                <p>
                  <b>Địa chỉ</b>
                </p>
              </div>
              <div className="w-[100px] ">
                <p>Bình Dương</p>
              </div>
            </div>
            <div className="flex flex-wrap my-3">
              <div className="w-[150px] ">
                <p>
                  <b>Điện thoại</b>
                </p>
              </div>
              <div className="w-[150px] ">
                <p>032 8982 605</p>
              </div>
              <div />
            </div>
            <div className="flex flex-wrap my-3">
              <div className="w-[150px] ">
                <p>
                  <b>Hotline</b>
                </p>
              </div>
              <div className="w-[150px] ">
                <p>1111111111</p>
              </div>
            </div>
            <div className="my-3">
              <div className="w-[250px] ">
                <p>
                  <b>Mọi ý kiến xin vui lòng gửi về </b>
                </p>
              </div>
              <div className="w-[150px] ">
                <p>support@gmail.com</p>
              </div>
            </div>
            <div className="text-[#acacac]">
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 hover:font-bold"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              &nbsp;
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 hover:font-bold"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              &nbsp;
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 hover:font-bold"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              &nbsp;
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 hover:font-bold"
              >
                <i className="fa-brands fa-glide"></i>
              </a>
              &nbsp;
              <a
                href="#"
                className="inline-block transition-transform duration-200 hover:text-[#ccb552] hover:scale-125 hover:font-bold"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2b3137] text-[#acacac] py-1 text-center">
        <p>Bottom</p>
      </div>
    </footer>
  );
}
