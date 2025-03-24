import { useState } from "react";
import { Button, Slider, TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
export default function Single() {

  const [rating, setRating] = useState(3);
  const [onlyRating, setOnlyRating] = useState(false);
  const [review, setReview] = useState("");


  function handleRating() {
    console.log(rating);
    console.log(onlyRating);
    if (onlyRating) setReview("");
    console.log(review);
  }



 
  return (
    <div className="bg-gray-200 flex flex-wrap">
      <div className="w-[300px] m-4 story-img">
        <img
          src="/img/book.jpg"
          alt="Thanh Sơn"
          className="w-fit h-fit rounded"
        />
      </div>
      <div className="w-[770px] text-left p-5 ">
        <div className="mt-3 mb-7">
          <h3 className="text-2xl font-medium mb-2">Thanh Sơn</h3>
          <p className="text-gray-600">Hội Thuyết Thoại Trừu Tử</p>
        </div>
        <div className="flex flex-nowrap gap-2">
          <button className="flex items-center gap-2 bg-red-700 text-white font-medium  py-1 px-2 rounded hover:bg-[black] hover:text-[#ccb552] hover:cursor-pointer">
            <i className="fa-solid fa-book-open"></i> <p>Đọc Sách</p>
          </button>

          <button className="ml-2 flex items-center gap-2 bg-yellow-700 text-white font-medium py-1 px-2 rounded  hover:bg-[black] hover:text-[#ccb552] hover:cursor-pointer">
            <i className="far fa-bookmark"></i> <p>Đánh Dấu</p>
          </button>

          <button className="ml-2 flex items-center gap-2 bg-green-700 text-white font-medium py-1 px-2 rounded  hover:bg-[black] hover:text-[#ccb552] hover:cursor-pointer relative">
            <i className="fas fa-star"></i> <p>Đánh Giá</p>
            <span className="absolute bg-black rounded-full py-1 px-2 -right-6 -top-4 text-[12px] text-[#ccb552] ">
              4.33
            </span>
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="font-medium px-4 text-center">
            <p>79,544</p>
            <p>Lượt đọc</p>
          </span>
          <span className="font-medium px-4 border-l-2 text-center">
            <p>605</p>
            <p>Cất giữ</p>
          </span>
          <span className="font-medium  px-4 border-l-2 text-center">
            <p>1,188</p>
            <p>Đánh giá</p>
          </span>
         
        </div>
        <div className="mt-3 gap-2">
          <button className="border-2 font-medium border-green-800 text-green-800 py-1 px-2 rounded">
            Còn tiếp
          </button>
        </div>
      </div>
      <div className=" text-left w-full">
        <div className="bg-gradient-to-r from-[black] to-[#9a8686] p-2 text-white font-medium uppercase">
          <h5>Giới Thiệu</h5>
        </div>
        <div className="intro-content p-2 text-black">
          <p>đây là nội dung của phần giới thiệu </p>
        </div>
      </div>
      <div className=" text-left w-full ">
        <div className="bg-gradient-to-r from-[black] to-[#9a8686] p-2 text-white font-medium uppercase ">
          <h5>Đánh Giá</h5>
        </div>
        <div className="bg-black text-white p-6 rounded-lg m-4">
          <h2 className="text-lg font-bold mb-2">
            Chấm điểm nội dung truyện:
            <span className="text-yellow-500"> {rating} điểm</span>
          </h2>
          <Slider
            value={rating}
            onChange={(_, newValue) => setRating(newValue as number)}
            min={2}
            max={5}
            step={0.1}
            sx={{ color: "#b38b00", height: 12}}
          />
          <div className="flex items-center gap-2 mt-4">
            <Checkbox
              checked={onlyRating}
              onChange={(e) => setOnlyRating(e.target.checked)}
              sx={{ color: "#b38b00"}}
            />
            <span>Tôi chỉ muốn chấm điểm (không viết đánh giá)</span>
          </div>
          {!onlyRating && (
            <div className="space-y-3 mt-4">
              {/* <TextField
            fullWidth
            variant="outlined"
            label="Nhân vật chính như nào?"
            className="bg-gray-900 border border-gray-700 rounded"
          /> */}

              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Nội dung bài đánh giá (ít nhất 100 từ)"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="bg-white border border-gray-700 rounded"
              />
            </div>
          )}
          <Button
            variant="outlined"
            sx={{ borderColor: "#b38b00", color: "#b38b00", mt: 3 }}
            fullWidth
            onClick={handleRating}
          >
            GỬI ĐÁNH GIÁ
          </Button>
        </div>
      </div>
    </div>
  );
}
