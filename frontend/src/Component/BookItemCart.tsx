import { Link } from "react-router-dom";
import { Book } from "../types/book.type";
import { useEffect, useState } from "react";
import { viewBook } from "../Data/Api";
import defaultCoverImage from "/default-book-cover-image.jpg";

type Props = {
    data: Book;
};

export default function BookItemCart({ data }: Props) {
    const [coverImageLink, setCoverImageLink] = useState("");
    useEffect(() => {
        viewBook(decodeURIComponent(data.coverImageFilename), "").then((blob) => {
            if (blob) {
                const url = URL.createObjectURL(blob);
                setCoverImageLink(url);
            }
        });

        // Cleanup: Hủy URL khi component unmount
        return () => {
            if (coverImageLink) URL.revokeObjectURL(coverImageLink);
        };
    }, []);

    return (
        <div className="w-[250px] m-2 p-4" key={data.id}>
            <Link to={`${data.id}`}>
                <div className="hover:shadow-[0px_0px_20px_rgba(0,0,0,1)] rounded-b-2xl border hover:cursor-pointer bg-white">
                    <img
                        src={coverImageLink === "" ? defaultCoverImage : coverImageLink}
                        alt="Pool"
                        loading="lazy"
                        className="w-fit"
                    />
                    <div className="px-3 py-3">
                        <h5 className="line-clamp-2 h-[50px] font-medium">{data.title}</h5>
                        <p className="line-clamp-3 h-[70px] ">{data.description} </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
