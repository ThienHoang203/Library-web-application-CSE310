import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book } from "../types/book.type";
import { searchBooks } from "../Data/Api";

export default function SearchResult() {
    const navigate = useNavigate();
    const [books, setBooks] = useState<Book[]>([]);
    const location = useLocation();
    const searchData = location.state;

    useEffect(() => {
        searchBooks("/book/search", searchData).then((d) => {
            if (d !== null) setBooks(d);
            console.log(d);
        });
    }, [searchData]);

    return (
        <div className="mx-3 flex flex-wrap">
            {books.map((post) => (
                <div className="w-[250px] m-2 p-4" key={post.id}>
                    <div
                        className="hover:shadow-[0px_0px_20px_rgba(0,0,0,1)] rounded-b-2xl border hover:cursor-pointer bg-white"
                        onClick={() => navigate(`/search/single`)}
                    >
                        <img src="/img/book.jpg" alt="Pool" loading="lazy" className="w-fit" />
                        <div className="px-3 py-3">
                            <h5 className="line-clamp-2 h-[50px] font-medium">{post.title}</h5>
                            <p className="line-clamp-3 h-[70px] ">{post.description} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
