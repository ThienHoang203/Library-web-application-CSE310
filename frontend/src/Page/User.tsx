import { useNavigate } from "react-router-dom";




export default function User() {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex">
      <div className="bg-gray-900 text-white rounded-lg w-[440px] p-4 text-center my-4">
        <img
          src="/img/book.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <h2 className="text-lg font-bold">TTrungH</h2>
        <p className="italic text-gray-400">Tham gia x năm trước</p>
        <div className="mt-4 p-4 text-left border-b-3">
          <p className="p-3">
            <strong>ĐÁNH DẤU</strong> <span className="float-right font-medium">189</span>
          </p>
          <p className="p-3">
            <strong>ĐÁNH GIÁ</strong> <span className="float-right font-medium">1</span>
          </p>
        </div>
        <div className="p-4 flex flex-wrap">
          <button className="w-full border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Sách Đã Mượn
          </button>
          <button className="w-full border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Sách Đã Đăng
          </button>
          <button className="w-full border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white">
            Tủ Truyện
          </button>
          <button className="w-full border-blue-400 border-2 text-blue-400 text-lg font-semibold px-2 py-1 my-2 rounded hover:bg-blue-400 hover:text-white" onClick={() => navigate(`/admin`)}>
            Admin Page
          </button>
        </div>
      </div>
      <div className="bg-gray-200 text-white rounded-lg w-[700px] p-2 text-center my-4 ml-1">
        <div></div>
      </div>
    </div>
  );
}
