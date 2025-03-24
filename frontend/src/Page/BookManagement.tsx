import { useEffect, useState } from "react";
import { Book, BOOK_HEADERS } from "../types/book.type";
import { fetchGetBooks } from "../Data/Api";

export default function BookManagement() {
    const [books, setBooks] = useState<Book[]>([]);
    const [bookHeaders] = useState(Object.values(BOOK_HEADERS));
    const [displayedBookProperties] = useState(Object.keys(BOOK_HEADERS));
    useEffect(() => {
        fetchGetBooks("/book").then((d) => {
            if (d !== null) setBooks(d);
        });
    }, []);

    return (
        <table className="w-full border-collapse">
            <thead className="bg-gray-800 text-white">
                <tr className="text-left [&>th]:p-4 [&>th]:border [&>th]:border-gray-700">
                    <th>#</th>
                    {bookHeaders.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="[&>tr]:even:bg-gray-300 [&>tr]:odd:bg-gray-100 [&>tr>*]:p-4  [&>tr>*]:border  [&>tr>*]:border-gray-300">
                {books &&
                    books.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            {displayedBookProperties.map((val, index) => (
                                <td key={index}>{(item as never)[val]}</td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
