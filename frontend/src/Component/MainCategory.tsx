export default function Category() {
  return (
    <>
      <div className="pt-5 pb-10 border-b-3 text-center">
        <div className="max-w-screen-xl px-4 mx-auto flex flex-wrap">
          <div className="w-full">
            <h2 className="text-[26px] uppercase font-bold relative pb-5 after:content-[''] after:absolute after:w-20 after:h-[3px] after:bg-[#ccb552] after:left-146 after:bottom-3 after:rounded">
              Top
            </h2>
          </div>
          <div className="w-[295px] p-4 m-2 ">
            <div className=" hover:shadow-[0px_0px_20px_rgba(0,0,0,1)] rounded-b-2xl border">
              <img
                src="/img/book.jpg"
                alt="Pool"
                loading="lazy"
                className="mx-auto w-fit"
              />
              <h4 className="font-bold py-3 text-[18px]">Tittle</h4>
              <p className="text-[#808080] px-3 font-medium text-[14px] h-[110px]">
                Discription
              </p>
              <div className="bg-[#7f7f7f] w-[70%] mb-5 py-2 mx-auto font-bold text-white hover:text-black hover:cursor-pointer">
                <span>
                  <a href="#">ĐỌC NGAY</a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[295px] p-4 m-2">
            <div className="shadow-lg hover:shadow-black/60 rounded-b-2xl border">
              <img
                src="/img/book.jpg"
                alt="restroom"
                loading="lazy"
                className="mx-auto  w-fit"
              />
              <h4 className="font-bold py-3 text-[18px]">Tittle</h4>
              <p className="text-[#808080] px-3 font-medium text-[14px] h-[110px]">
                Discription
              </p>
              <div className="bg-[#7f7f7f] w-[70%] mb-5 py-2 mx-auto font-bold text-white hover:text-black hover:cursor-pointer">
                <span>
                  <a href="#">ĐỌC NGAY</a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[295px] p-4 m-2">
            <div className="shadow-lg hover:shadow-black/60 rounded-b-2xl border">
              <img
                src="/img/book.jpg"
                alt="restroom"
                loading="lazy"
                className="mx-auto   w-fit"
              />
              <h4 className="font-bold py-3 text-[18px]">Tittle</h4>
              <p className="text-[#808080] px-3 font-medium text-[14px] h-[110px]">
                Discription
              </p>
              <div className="bg-[#7f7f7f] w-[70%] mb-5 py-2 mx-auto font-bold text-white hover:text-black hover:cursor-pointer">
                <span>
                  <a href="#">ĐỌC NGAY</a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[295px] p-4 m-2">
            <div className="shadow-lg hover:shadow-black/60 rounded-b-2xl border">
              <img
                src="/img/book.jpg"
                alt="Pool"
                loading="lazy"
                className="mx-auto  w-fit"
              />
              <h4 className="font-bold py-3 text-[18px]">Tittle</h4>
              <p className="text-[#808080] px-3 font-medium text-[14px] h-[110px]">
                Discription
              </p>
              <div className="bg-[#7f7f7f] w-[70%] mb-5 py-2 mx-auto font-bold text-white hover:text-black hover:cursor-pointer">
                <span>
                  <a href="#">ĐỌC NGAY</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
