import { ReportIcon } from "../../../../public/static/svg";

const MovieNoti = () => {
    return (
        <div className=" sm:rounded text-xs sm:text-sm bg-mainColor p-3 text-des">
            Nếu video gặp lỗi <b>Không thể tìm thấy địa chỉ IP</b> thì bạn có thể thử bật các ứng dụng như <b>1.1.1.1</b> hoặc <b>VPN</b> nhé.
            <br /> Nếu vẫn không được, bạn có thế bấm vào icon <ReportIcon className="size-4 inline" fill="currentColor" /> để báo lỗi cho mình biết
            nhé.
        </div>
    );
};

export default MovieNoti;
