import { ReportIcon } from "../../../../public/static/svg";

const MovieNoti = () => {
    return (
        <div className=" sm:rounded text-xs sm:text-sm bg-mainColor p-3 text-des">
            <p>
                • Nếu video gặp lỗi <b>Không thể tìm thấy địa chỉ IP</b> thì bạn có thể thử bật các ứng dụng như <b>1.1.1.1</b> hoặc <b>VPN</b>
            </p>
            <p>
                • Nếu video bị lỗi <b>hiển thị màn hình đen</b> thì bạn có thể thử xem trong <b>tab ẩn danh</b>
            </p>
            • Nếu vẫn không được, bạn có thế bấm vào icon <ReportIcon className="size-4 inline" fill="currentColor" /> để báo lỗi cho mình biết nhé.
        </div>
    );
};

export default MovieNoti;
