import { RefreshIcon } from "../../../../public/static/svg";
import Comment from "./comment";
interface Prop {
    id: string;
}
const CommentList = (props: Prop) => {
    const { id } = props;

    return (
        <div className="flex flex-col p-3 gap-3  bg-cardBackground rounded text-default">
            <div className="flex justify-between w-full">
                <h3 className="font-semibold mt-[5px]">Bình luận</h3>
                <RefreshIcon className="cursor-pointer" fill={"#ccc"} />
            </div>
            <button className="MovieWatchBtn opacity-90 hover:opacity-100 bg-[#ffce4f] w-fit m-auto p-2 text-[#000] rounded    text-sm font-semibold">
                Đăng nhập để bình luận
            </button>
            <div className="flex flex-col gap-1 items-center">
                <Comment />
                <Comment />
                <div className="border-l-[1px] border-[#000]   flex flex-col gap-[5px] w-[calc(100%-35px)] pl-[15px] ml-[35px]">
                    <Comment />
                    <Comment />
                    <div className="w-full flex justify-center">
                        <span className="cursor-pointer font-semibold text-sm hover:text-white/80">Tải thêm</span>
                    </div>
                </div>
                <Comment />
            </div>
            <button className="MovieWatchBtn bg-[#ffce4f] opacity-90 hover:opacity-100 w-full m-auto p-2 text-[#000] rounded    text-sm font-semibold">
                Tải thêm bình luận
            </button>
        </div>
    );
};

export default CommentList;
