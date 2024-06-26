export const StringToSlug = (string: string) => {
    return string
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d");
};
export const renderEpisode = (current: string, total: string) => {
    if (["Full", "Trailer"].includes(current || "")) {
        return current;
    } else {
        if (["Hoàn Tất", "Hoàn tất", "hoàn tất"].some((item) => item === current?.slice(0, 8))) {
            return current.replaceAll("Hoàn Tất", "").replaceAll("Hoàn tất", "").replaceAll("hoàn tất", "").replaceAll("(", "").replaceAll(")", "");
        } else {
            return (current + "/" + total).replaceAll("Tập", "").replaceAll("tập", "").replaceAll("tâp", "").replaceAll("Đang cập nhật", "??");
        }
    }
};

export const createQueryString = (searchParams: any, name: string, value: string) => {
    const params = new URLSearchParams(searchParams as any);
    params.set(name, value);

    return params.toString();
};

export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};