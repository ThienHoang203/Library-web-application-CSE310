export function getMimeTypeByExtension(extension: string) {
    switch (extension.toLowerCase()) {
        case "jpg":
        case "jpeg":
            return "image/jpeg";
        case "png":
            return "image/png";
        case "gif":
            return "image/gif";
        default:
            return "application/octet-stream"; // MIME type mặc định
    }
}
