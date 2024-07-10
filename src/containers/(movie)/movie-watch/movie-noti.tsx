import { ReportIcon } from "../../../../public/static/svg";

const MovieNoti = () => {
    return (
        <div className=" sm:rounded text-xs sm:text-sm bg-mainColor p-3 text-des">
            <p>
                <b>• Lỗi không tìm thấy địa chỉ IP: </b> Thử bật hoặc tắt các ứng dụng như <b>1.1.1.1</b> hoặc <b>VPN</b> và reload lại trang.
            </p>
            <p>
                <b>• Lỗi màn hình đen: </b> Thử xem video trong tab ẩn danh hoặc Hoặc chuyển sang trình duyệt <b>Chrome</b>.
            </p>
            • Nếu vẫn không được, bạn có thế bấm vào{" "}
            <b>
                {" "}
                icon <ReportIcon className="size-4 inline" fill="currentColor" />
            </b>{" "}
            để báo lỗi cho mình biết nhé.
        </div>
    );
};

export default MovieNoti;
