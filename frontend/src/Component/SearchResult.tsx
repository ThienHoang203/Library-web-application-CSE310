import {  useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";




export default function SearchResult() {



  const [data, setData] = useState([{ name: "Quản trị kinh doanh", discription: "Discription " },
    { name: "Điều dưỡng", discription: "Discription" },
    { name: "Kỹ thuật Phần mềm", discription: "Discription" },
    { name: "Mạng máy tính và Truyền thông dữ", discription: "Discription" },
    { name: "Kỹ thuật Cơ điện tử", discription: "Discription" },
    { name: "Kỹ thuật Điện", discription: "Discription" },
    { name: "Kỹ thuật Điều khiển và Tự động hóa", discription: "Discription" },]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  
  // useEffect(() => {
  //   getAll("/book").then((result) => setData(result));
  //   console.log(data);
  // }, [data]);


  function getFilteredProduct() {
    const search = searchParams.get("search");
    if (search === null || search === "") {
      return data;
    } 
    else {
      return data.filter(
        (item) =>
          item.name.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      );
    }
  }



  return (
    <div className="mx-3 flex flex-wrap">
      {getFilteredProduct().map((post) => (
        <div className="w-[250px] m-2 p-4">
          <div
            className="hover:shadow-[0px_0px_20px_rgba(0,0,0,1)] rounded-b-2xl border hover:cursor-pointer bg-white"
            onClick={() => navigate(`/search/single`)}
          >
            <img
              src="/img/book.jpg"
              alt="Pool"
              loading="lazy"
              className="w-fit"
            />
            <div className="px-3 py-3">
              <h5 className="line-clamp-2 h-[50px] font-medium">{post.name}</h5>
              <p className="line-clamp-3 h-[70px] ">{post.discription} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
