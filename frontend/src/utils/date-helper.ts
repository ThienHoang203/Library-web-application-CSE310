export function calculateJoinTime(joinDate: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - joinDate.getTime();

    const diffInDays = diffInMs / (1000 * 3600 * 24);
    const diffInYears = diffInDays / 365;

    if (diffInYears < 1) {
        return `${Math.floor(diffInDays)} ${diffInDays > 1 ? "ngày" : "ngày"}`;
    } else {
        const remainingDays = Math.floor(diffInDays - 365);
        return `${diffInYears} ${diffInYears > 1 ? "năm" : "năm"} ${remainingDays} ${
            remainingDays > 1 ? "ngày" : "ngày"
        }`;
    }
}
