import { useContext, useEffect, useState } from "react";
import { viewBook } from "../Data/Api";
import { UserContext } from "../global-states/UserContext";
import { HttpStatusCode } from "axios";
import { useCurrentRoute } from "../hooks/useCurrentRoute";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function PDFViewer() {
    const { path } = useCurrentRoute();
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { accessToken } = useContext(UserContext);
    useEffect(() => {
        const arr = path.trim().split("/");

        if (arr.length < 3) {
            return;
        }
        const fileName = arr[2];
        console.log({ fileName: decodeURIComponent(fileName) });

        if (!fileName) return;
        const fetchPDF = async () => {
            try {
                console.log("Hello");
                console.log({ accessToken });

                // Gọi API để lấy file PDF
                const response = await viewBook(decodeURIComponent(fileName), accessToken?.token ?? "");

                if (response.status !== HttpStatusCode.Ok) throw new Error("Failed to fetch PDF");

                // Chuyển response thành Blob
                const blob = new Blob([response.data], { type: "application/pdf" });

                // Tạo URL từ Blob
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPDF();

        // Cleanup: Hủy URL khi component unmount
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, []);

    const onLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            {pdfUrl ? (
                <div className="pdf-container">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onLoadSuccess}
                        onLoadError={(error) => console.error("PDF load error:", error)}
                    >
                        <Page
                            pageNumber={pageNumber}
                            width={800} // Điều chỉnh kích thước
                            renderTextLayer={false} // Tắt text layer nếu không cần
                        />
                    </Document>

                    <div className="pagination">
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
                    </div>
                </div>
            ) : (
                <div>Loading PDF...</div>
            )}
        </div>
    );
}
