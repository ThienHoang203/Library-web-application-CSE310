import { useContext, useEffect, useState } from "react";
import { viewBook } from "../Data/Api";
import { UserContext } from "../global-states/UserContext";
import { useCurrentRoute } from "../hooks/useCurrentRoute";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function PDFViewer() {
    const { path } = useCurrentRoute();
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const { accessToken } = useContext(UserContext);
    const [arrPageNum, setArrPageNum] = useState<number[]>([]);
    const navigate = useNavigate();

    async function fetchPDF(fileName: string) {
        const blob = await viewBook(decodeURIComponent(fileName), accessToken?.token ?? "");

        if (blob) {
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        } else {
            toast.error("Can not found this file!");
            navigate("/search", { replace: true });
        }
    }

    useEffect(() => {
        const arr = path.trim().split("/");

        if (arr.length < 3) {
            return;
        }
        const fileName = arr[2];
        console.log({ fileName: decodeURIComponent(fileName) });

        if (!fileName) return;

        fetchPDF(fileName);

        // Cleanup: Hủy URL khi component unmount
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, []);

    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        const temp = new Array<number>(numPages);
        for (let index = 0; index < temp.length; ) {
            temp[index] = ++index;
        }
        setArrPageNum(temp);
    };

    return (
        <div className="">
            {pdfUrl ? (
                <div className="pdf-container mx-auto w-screen py-10 ">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onLoadSuccess}
                        onLoadError={(error) => console.error("PDF load error:", error)}
                        renderMode="canvas"
                        className="flex flex-col items-center gap-5 justify-center"
                    >
                        {arrPageNum.map((val) => (
                            <Page
                                key={val}
                                className={`page ${val} border border-amber-200`}
                                pageNumber={val}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                scale={1.2}
                            />
                        ))}
                    </Document>

                    {/* <div className="pagination">
                        <button onClick={() => setPageNumber(Math.max(1, pageNumber - 1))} disabled={pageNumber <= 1}>
                            Previous
                        </button>

                        <span>
                            Page {pageNumber} of {numPages || "--"}
                        </span>

                        <button
                            onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                            disabled={pageNumber >= (numPages || 0)}
                        >
                            Next
                        </button>
                    </div> */}
                </div>
            ) : (
                <div className="mx-auto text-center">Loading PDF...</div>
            )}
        </div>
    );
}
